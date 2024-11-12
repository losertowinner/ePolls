from rest_framework import viewsets, status, permissions
from rest_framework.decorators import action
from rest_framework.response import Response

from .models import User
from .serializers import UserSerializer, CurrentUserSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]

    @action(detail=False, methods=["get"], url_path="current-user", name="Current User")
    def current_user(self, request):
        """Get the currently logged on user."""
        return Response(
            CurrentUserSerializer(request.user).data,
            status=status.HTTP_200_OK,
        )
