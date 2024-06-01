from django.db import models
from django.utils import timezone


class CleanManager(models.Manager):
    ''' Manager that excludes deleted objects '''

    DELETED = 0
    ENABLED = 1
    DISABLED = 2
    Statuses = (
        (DELETED, 'Eliminado'),
        (ENABLED, 'Habilitado'),
        (DISABLED, 'Deshabilitado'),
    )

    def get_queryset(self):
        return super(CleanManager, self).get_queryset().filter(general_status=CustomModel.ENABLED)


class CustomModel(models.Model):
    ''' Modelo base para marcar como eliminado siempre por defecto  '''

    DELETED = 0
    ENABLED = 1
    DISABLED = 2
    Statuses = (
        (DELETED, 'Eliminado'),
        (ENABLED, 'Habilitado'),
        (DISABLED, 'Deshabilitado'),
    )

    general_status = models.IntegerField('Estado', choices=Statuses, default=ENABLED)
    creation_date = models.DateTimeField(auto_now_add=True)
    updated_date = models.DateTimeField(auto_now_add=True, null=True, blank=True)
    elimination_date = models.DateTimeField(blank=True, null=True)


    all_objects = models.Manager()  # Default manager.
    objects = CleanManager()  # Clean manager

    class Meta:
        verbose_name = "Custom Base Model"
        verbose_name_plural = "Custom Base Model"
        abstract = True

    def __str__(self):
        return str(self.id)

    def delete(self, force=False):
        if force:
            return super(CustomModel, self).delete()
        else:
            self.elimination_date = timezone.now()
            self.general_status = self.DELETED
            self.save()

    def save(self, *args, **kwargs):
        """Sobreescritura del método save para almacenar la última fecha de edición"""
        self.updated_date = timezone.now()
        super(CustomModel, self).save(*args, **kwargs)


