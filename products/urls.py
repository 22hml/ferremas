from django.urls import path
from products import api_views
from . import views

app_name = 'products'

urlpatterns = [
    # API
    path('api/get_all_products/', api_views.get_all_products),
    path('api/create_product/', api_views.create_product),
    path('api/delete_product/<str:product_id>/', api_views.delete_product, name='delete_product'),
]