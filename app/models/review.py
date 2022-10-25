from .db import db



class Reviews(db.Model):
    __tablename__ = 'reviews'

    id = db.Column(db.Integer, primary_key=True)
    trailId = db.Column(db.Integer, nullable=False)
    userId = db.Column(db.Integer, nullable=False)
    review = db.Column(db.String(1000), nullable=False)
    stars = db.Column(db.Integer, nullable=False)
    reviewImg = db.Column(db.String(255), nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'trailId': self.trailId,
            'userId': self.userId,
            'review': self.review,
            'stars': self.stars,
            'reviewImg': self.reviewImg
        }