from django.contrib import admin
from .models import Product


class AdminFields(admin.ModelAdmin):
    def __init__(self, model, admin_site):
        exclude_fields_list = ["elimination_date"]
        exclude_fields_edit = ["id", "creation_date", "elimination_date", "creation_date", "updated_date"]

        self.list_display = [
            field.name for field in model._meta.fields if field.name not in exclude_fields_list]
        self.fields = [
            field.name for field in model._meta.fields if field.name not in exclude_fields_edit]

        super(AdminFields, self).__init__(model, admin_site)


admin_models = [Product]
admin.site.register(admin_models, AdminFields)
