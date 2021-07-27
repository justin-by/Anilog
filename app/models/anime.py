from .db import db

class Anime(db.Model):
    __tablename__ = 'anime'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String, nullable=False)
    japTitle = db.Column(db.String, nullable=False)
    status = db.Column(db.String, nullable=False)
    desc = db.Column(db.String, nullable=False)
    trailer = db.Column(db.String, nullable=False)
    mediumPic = db.Column(db.String, nullable=False)
    largePic = db.Column(db.String, nullable=False)
    extraLargePic = db.Column(db.String, nullable=False)
    bannerPic = db.Column(db.String, nullable=False)
    season = db.Column(db.String, nullable=False)
    year = db.Column(db.Integer, nullable=False)
    episodes = db.Column(db.Integer, nullable=False)
    popularity = db.Column(db.Integer, nullable=False)
    ranking = db.Column(db.Integer, nullable=False)

    table_anime = db.relationship('table_anime', secondary='table_anime', back_populates='anime')
    reviews = db.relationship('Review', back_populates='anime')
    characters = db.relationship('Character', back_populates='anime')