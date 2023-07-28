from rest_framework.views import APIView
from rest_framework.response import Response
from .models import UserDetails

class HomeView(APIView):
  def get(self, request):
    return Response("Working fine..")

class LoginView(APIView):
  def post(self, request):
    username = request.data.get("username")
    if UserDetails.objects.filter(username=username).exits():
      return Response({"success": "User exists in the database"})
    