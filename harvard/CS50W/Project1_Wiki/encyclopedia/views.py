from django.http import HttpResponse
from django.shortcuts import render
import util as util

from . import util


def index(request):
    return render(request, "encyclopedia/index.html", {
        "entries": util.list_entries()
    })

# def greet(request, path):
#     return HttpResponse(f"Hello, {path.capitalize()}. You're at the encyclopedia index.")

def greet(request, path):
    context = {
        'title': path
    }

    if path in util.list_entries():

    return render(request, "index.html", context)