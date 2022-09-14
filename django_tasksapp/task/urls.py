from django.urls import path
from . import views

urlpatterns = [
    path('task', views.task),
    path('task/<int:id>', views.edit_task),
]
