from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .models import Task
from .serializers import TaskSerializer

# Create your views here.
@api_view(['GET', 'POST'])
def task(request):
    try:
        if request.method == 'GET':
            tasks = Task.objects.all()
            serializer = TaskSerializer(tasks, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        elif request.method == 'POST':
            serializer = TaskSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_200_OK)
            else:
                return Response({'error': 'send valid data'})
    except Exception as err:
        print(err)
        return Response({'error': 'internal server error'})

@api_view(['GET', 'PUT', 'DELETE'])
def edit_task(request,id):
    try:
        task = Task.objects.get(id=id)
        if request.method == 'PUT':
            serializer = TaskSerializer(task, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            else:
                return Response({'error': 'send valid data'})
        elif request.method == 'DELETE':
            task.delete()
        serializer = TaskSerializer(task)
        return Response(serializer.data, status=status.HTTP_200_OK)
    except Exeption as err:
        print(err)
        return Response({'error': 'internal server error'})
