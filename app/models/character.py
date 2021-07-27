from .db import db

class Character(db.Model):
    __tablename__ = 'characters'

    id = db.Column(db.Integer, primary_key=True)
    fullName = db.Column(db.String, nullable=False)
    mediumPic = db.Column(db.String)
    largePic = db.Column(db.String)
    animeId = db.Column(db.Integer, db.ForeignKey('anime.id'), nullable=False)

    anime = db.relationship('Anime', back_populates='character')