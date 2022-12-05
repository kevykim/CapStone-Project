from tkinter import CASCADE
from .db import db
from datetime import date



class Trail(db.Model):
    __tablename__ = 'trails'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(40), nullable=False)
    city = db.Column(db.String(75), nullable=False)
    country = db.Column(db.String(100), nullable=False)
    state = db.Column(db.String(100), nullable=False)
    resort = db.Column(db.String(100), nullable=False)
    difficulty = db.Column(db.String(100), nullable=False)
    description = db.Column(db.String(500), nullable=False)
    length = db.Column(db.Float, nullable=False)
    elevation = db.Column(db.Integer, nullable=False)
    routeType = db.Column(db.String(100), nullable=False)
    previewImg = db.Column(db.String(255), nullable=False)
    createdAt = db.Column(db.String(255), nullable=False, default=date.today())
    updatedAt = db.Column(db.String(255), nullable=False, default=date.today())
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

    # Relationships
    users = db.relationship('User', back_populates='trails')
    reviews = db.relationship('Review', back_populates='trails', cascade = 'all,delete')

    def avg_star(self):
        # print(len(self.reviews))
        if len(self.reviews) != 0:
            average = sum(review.stars for review in self.reviews) / len(self.reviews)
            return round(average, 1) 
        else:
            return 0.0

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'city': self.city,
            'country': self.country,
            'state': self.state,
            'resort': self.resort,
            'difficulty': self.difficulty,
            'description': self.description,
            'length': self.length,
            'elevation': self.elevation,
            'routeType': self.routeType,
            'previewImg': self.previewImg,
            'createdAt': self.createdAt,
            'updatedAt': self.updatedAt,
            'userId': self.userId,
            'firstname' : self.users.firstName if self.users else None,
            'lastname' : self.users.lastName if self.users else None,
            'reviews' : [review.to_dict() for review in self.reviews],
            'averagestar': self.avg_star()
        }