from django.http import HttpResponse
from django.shortcuts import render

from . import util


def index(request):
    return render(request, "encyclopedia/index.html", {
        "entries": util.list_entries()
    })

def greet(request, path):
    return HttpResponse(f"Hello, {path.capitalize()}. You're at the encyclopedia index.")
