# Generated by Django 5.0.6 on 2024-05-18 23:38

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='CustomUser',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('username', models.CharField(max_length=250, unique=True, verbose_name='Nombre usuario')),
                ('name', models.CharField(blank=True, max_length=500, verbose_name='Nombre')),
                ('rut', models.CharField(blank=True, max_length=250, null=True, unique=True)),
                ('email', models.EmailField(blank=True, max_length=255, null=True, verbose_name='Email')),
                ('phone', models.CharField(blank=True, max_length=30, null=True)),
                ('is_active', models.BooleanField(default=True)),
                ('is_staff', models.BooleanField(default=False)),
                ('general_status', models.IntegerField(choices=[(0, 'Eliminado'), (1, 'Habilitado'), (2, 'Deshabilitado')], default=1, verbose_name='Estado')),
                ('creation_date', models.DateTimeField(auto_now_add=True)),
                ('elimination_date', models.DateTimeField(blank=True, null=True)),
            ],
            options={
                'verbose_name': 'Usuario',
                'verbose_name_plural': 'Usuarios',
            },
        ),
    ]
