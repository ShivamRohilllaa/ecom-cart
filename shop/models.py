from django.db import models


# Create your models here.
class Product(models.Model):
    product_id = models.AutoField
    product_name = models.CharField(max_length=30)
    desc = models.CharField(max_length=300)
    category = models.CharField(max_length=50, default="")
    sub_category = models.CharField(max_length=50, default="")
    price = models.IntegerField(default="0")
    image = models.ImageField(upload_to="shop/images", default="")
    pub_date = models.DateField()

    def __str__(self):
        return self.product_name


class about(models.Model):
    company_id = models.AutoField
    comp_profile = models.CharField(max_length=500)
    comp_name = models.CharField(max_length=50)
    comp_partners = models.CharField(max_length=100)
    comp_emp = models.CharField(max_length=50)
    desc = models.CharField(max_length=300)

    def __str__(self):
        return self.comp_name



class tracker(models.Model):
    tracker_id = models.AutoField
    tracker_name = models.CharField(max_length=100)


class search(models.Model):
    search_id = models.AutoField
    search_name = models.CharField(max_length=100)


class Contact(models.Model):
    contact_id = models.AutoField(primary_key = True)
    name = models.CharField(max_length=50)
    lname = models.CharField(max_length=50, default="")
    phone = models.CharField(max_length=20, default="" )
    email = models.CharField(max_length=50, default="")
    message = models.CharField(max_length=500, default="")

    def __str__(self):
        return self.name


class productView(models.Model):
    productView_id = models.AutoField
    productView_name = models.CharField(max_length=50)
    productView_no = models.BinaryField(max_length=20)


class checkout(models.Model):
    checkout_id = models.AutoField
    checkout_name = models.CharField(max_length=50)
    checkout_no = models.BinaryField(max_length=20)
    contact_address = models.CharField(max_length=200)


class Orders(models.Model):
    order_id = models.AutoField(primary_key = True)
    items_json = models.CharField(max_length=5000)
    name = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    address = models.CharField(max_length=500)
    city = models.CharField(max_length=50)
    state = models.CharField(max_length=50)
    zip_code = models.CharField(max_length=50)
    phone = models.CharField(max_length=20)

    def __str__(self):
        return self.name

class OrderUpdate(models.Model):
    update_id = models.AutoField(primary_key=True)
    order_id = models.IntegerField(default="")
    update_desc = models.CharField(max_length=5000)
    timestamp = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.update_desc[0:7] + "..."




