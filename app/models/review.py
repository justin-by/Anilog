from .db import db

class Review(db.Model):
    __tablename__ = 'reviews'

    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.String(80), nullable=False)
    rating = db.Column(db.Integer, nullable=False)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    animeId = db.Column(db.Integer, db.ForeignKey('anime.id'), nullable=False)

    user = db.relationship('User', back_populates='review')
    anime = db.relationship('Anime', back_populates='review')

    def to_dict(self):
        return {
            'id': self.id,
            'content': self.content,
            'rating': self.rating,
            'userId': self.userId,
            'username': self.user.username,
            'animeId': self.animeId
        }
