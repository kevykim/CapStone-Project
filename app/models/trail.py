from tkinter import CASCADE
from .db import db



class Trail(db.Model):
    __tablename__ = 'trails'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    country = db.Column(db.String(100), nullable=False)
    state = db.Column(db.String(100), nullable=False)
    mountain = db.Column(db.String(100), nullable=False)
    resort = db.Column(db.String(100), nullable=False)
    skill = db.Column(db.String(100), nullable=False)
    description = db.Column(db.String(1000), nullable=False)
    length = db.Column(db.Float, nullable=False)
    elevation = db.Column(db.Integer, nullable=False)
    routeType = db.Column(db.String(100), nullable=False)
    previewImg = db.Column(db.String(255), nullable=False)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

    # Relationships
    user = db.relationship('User', back_populates='trails')
    review = db.relationship('Review', back_populates='trails', cascade = 'all,delete')

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'country': self.country,
            'state': self.state,
            'mountain': self.mountain,
            'resort': self.resort,
            'skill': self.skill,
            'description': self.description,
            'length': self.length,
            'elevation': self.elevation,
            'routeType': self.routeType,
            'previewImg': self.previewImg,
            'userId': self.userId
        }