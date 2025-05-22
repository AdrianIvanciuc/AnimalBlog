from django.db import models

class Post(models.Model):
    title = models.CharField(max_length=32)
    text = models.TextField(max_length=512)
    image = models.ImageField(upload_to='static/')
    author = models.TextField(max_length=32)
    more_details_for_the_dedicated_page = models.TextField(max_length=1024, default=' ')

class Review(models.Model):
    email = models.EmailField()
    rating = models.IntegerField(choices=[(i, i) for i in range(1, 6)])
    comment = models.TextField()
    date = models.DateTimeField(auto_now_add=True)
    def update_review(self, email, rating, comment):
        self.email = email
        self.rating = rating
        self.comment = comment
        self.save()
    def delete_review(self):
        self.delete()