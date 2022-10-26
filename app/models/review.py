from .db import db



class Review(db.Model):
    __tablename__ = 'reviews'

    id = db.Column(db.Integer, primary_key=True)
    trailId = db.Column(db.Integer, db.ForeignKey('trails.id'), nullable=False)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    review = db.Column(db.String(1000), nullable=False)
    stars = db.Column(db.Integer, nullable=False)
    reviewImg = db.Column(db.String(255))

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
            'reviewImg': self.reviewImg
        }