from app.models import trail
from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from datetime import date


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(15), nullable=False, unique=True)
    firstName = db.Column(db.String(15), nullable=False)
    lastName = db.Column(db.String(15), nullable=False)
    hashed_password = db.Column(db.String(1000), nullable=False)
    email = db.Column(db.String(50), nullable=False, unique=True)
    profileImg = db.Column(db.String(255))
    createdAt = db.Column(db.String(255), nullable=False, default=date.today())
    updatedAt = db.Column(db.String(255), nullable=False, default=date.today())

    # Relationships
    trails = db.relationship('Trail', back_populates='users')
    reviews = db.relationship('Review', back_populates='users')

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)


    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'firstName': self.firstName,
            'lastName': self.lastName,
            'email': self.email,
            'createdAt': self.createdAt,
            'updatedAt': self.updatedAt,
            'profileImg': self.profileImg
        }
