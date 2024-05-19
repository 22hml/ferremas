from django.contrib import admin

class UtilsAdmin(admin.ModelAdmin):
    def __init__(self, model, admin_site):
        exclude_fields_list = ["password", "creation_date"]
        exclude_fields_edit = ["id", "password", "creation_date", "elimination_date", "updated_date"]

        self.list_display = [
            field.name for field in model._meta.fields if field.name not in exclude_fields_list]
        self.fields = [
            field.name for field in model._meta.fields if field.name not in exclude_fields_edit]

        super(UtilsAdmin, self).__init__(model, admin_site)


# Define and register all models
admin_models = []
admin.site.register(admin_models, UtilsAdmin)
