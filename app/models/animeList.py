from .db import db

class AnimeList(db.Model):
    __tablename__ = 'table_anime'
    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'))
    animeId = db.Column(db.Integer, db.ForeignKey('anime.id'))
    status = db.Column(db.String(20), nullable=False)
    rating = db.Column(db.Integer, nullable=False)

    user = db.relationship('User', back_populates='table_anime')
    anime = db.relationship('Anime', back_populates='table_anime')

    def to_dict(self):
        return {
            'status': self.status,
            'rating': self.rating,
            'anime': self.anime.to_dict()
        }
    