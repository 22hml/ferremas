from django.db import models
from utils.models import CustomModel
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import authenticate

class CustomUserManager(BaseUserManager):
    ''' Manager usuario custom '''

    DELETED = 0
    ENABLED = 1
    DISABLED = 2
    Statuses = (
        (DELETED, 'Eliminado'),
        (ENABLED, 'Habilitado'),
        (DISABLED, 'Deshabilitado'),
    )

    def create_user(self, email=None, password=None, username=None, rut=None, name=None, phone=None):
        """
        Creates and saves a User with the given email and password.
        """
        if not username:
            raise ValueError('Usuarios deben tener un username')

        user = self.model(
            email=self.normalize_email(email),
            username=username,
            name=name,
            phone=phone,
            rut=rut
        )
        user.is_staff = True
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, username, name, password):
        user = self.create_user(
            username=username,
            name=name,
            password=password,
        )
        user.is_staff = True
        user.save(using=self._db)
        return user

    def get_queryset(self):
        return super(CustomUserManager, self).get_queryset().\
            exclude(general_status=self.DELETED)

class CustomUser(AbstractBaseUser):
    ''' Usuario del sistema '''

    DELETED = 0
    ENABLED = 1
    DISABLED = 2
    Statuses = (
        (DELETED, 'Eliminado'),
        (ENABLED, 'Habilitado'),
        (DISABLED, 'Deshabilitado'),
    )

    username = models.CharField('Nombre usuario', max_length=250, unique=True)
    name = models.CharField('Nombre', max_length=500, blank=True)
    rut = models.CharField(max_length=250, null=True, blank=True, unique=True)
    email = models.EmailField(verbose_name='Email', max_length=255, null=True, blank=True)
    phone = models.CharField(max_length=30, blank=True, null=True)

    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    general_status = models.IntegerField('Estado', choices=Statuses, default=ENABLED)
    creation_date = models.DateTimeField(auto_now_add=True)
    elimination_date = models.DateTimeField(blank=True, null=True)

    objects = CustomUserManager()  # Clean manager
    all_objects = models.Manager()

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['name']

    class Meta:
        verbose_name = "Usuario"
        verbose_name_plural = "Usuarios"

    def __str__(self):
        return '%s' % (self.name)

    def has_module_perms(self, applabel):
        return True

    def has_perm(self, applabel):
        return True

    def delete(self, force=False):
        self.general_status = self.DELETED
        self.elimination_date = datetime.now()
        self.save()
        if force:
            return super(User, self).delete()
        else:
            self.elimination_date = datetime.now()
            self.is_active = False
            self.status = self.DELETED

            extra_delete_data = '[Eliminado].' + str(self.elimination_date) + "."

            """ if self.email and "[Eliminado]" not in self.email:
                self.email = extra_delete_data + self.email """

            if self.username and "[Eliminado]" not in self.username:
                self.username = extra_delete_data + self.username

            """ if self.rut and "[Eliminado]" not in self.rut:
                self.rut = extra_delete_data + self.rut """

            self.save()

class CustomTokenRefreshView(APIView):
    def post(self, request, *args, **kwargs):
        try:
            username = request.data.get('username')
            password = request.data.get('password')

            user = authenticate(username=username, password=password)

            if user is not None:
                refresh = RefreshToken.for_user(user)
                return Response({
                    'refresh': str(refresh),
                    'access': str(refresh.access_token),
                })
            else:
                return Response({'error': 'Credenciales inválidas'}, status=status.HTTP_401_UNAUTHORIZED)
        
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_401_UNAUTHORIZED)
