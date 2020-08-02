from django.contrib import admin

# Register your models here.
from.models import Product
from.models import search
from.models import checkout
from.models import Contact
from.models import about
from.models import tracker
from.models import Orders, OrderUpdate

admin.site.register(Product)
admin.site.register(search)
admin.site.register(checkout)
admin.site.register(Contact)
admin.site.register(about)
admin.site.register(tracker)
admin.site.register(Orders)
admin.site.register(OrderUpdate)

