from django.urls import path
from customuser import api_views
from . import views
from customuser.models import CustomTokenRefreshView

app_name = 'customuser'

urlpatterns = [
    # API
    path('api/register/', api_views.register_user_and_generate_token),
    path('api/token/refresh/', CustomTokenRefreshView.as_view(), name='custom_token_refresh'),
]