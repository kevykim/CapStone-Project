from email.policy import default
from .db import db
from datetime import date

class Review(db.Model):
    __tablename__ = 'reviews'

    id = db.Column(db.Integer, primary_key=True)
    trailId = db.Column(db.Integer, db.ForeignKey('trails.id'), nullable=False)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    review = db.Column(db.String(500), nullable=False)
    stars = db.Column(db.Integer, nullable=False)
    reviewImg = db.Column(db.String(255))
    createdAt = db.Column(db.String(255), nullable=False, default=date.today())
    updatedAt = db.Column(db.String(255), nullable=False, default=date.today())

    # Relationships
    users = db.relationship('User', back_populates='reviews')
    trails = db.relationship('Trail', back_populates='reviews')

    def to_dict(self):
        return {
            'id': self.id,
            'trailId': self.trailId,
            'userId': self.userId,
            'review': self.review,
            'stars': self.stars,
            'reviewImg': self.reviewImg,
            'createdAt': self.createdAt,
            'updatedAt': self.createdAt,
            'firstname' : self.users.firstName if self.users else None,
            'lastname' : self.users.lastName if self.users else None,
            'trailname' : self.trails.name if self.trails else None,
            'traildifficulty': self.trails.difficulty if self.trails else None,
            'profileImg': self.users.profileImg if self.users else None
        }

        