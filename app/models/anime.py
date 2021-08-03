from .db import db

class Anime(db.Model):
    __tablename__ = 'anime'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String)
    japTitle = db.Column(db.String)
    status = db.Column(db.String)
    desc = db.Column(db.String)
    trailer = db.Column(db.String)
    mediumPic = db.Column(db.String)
    largePic = db.Column(db.String)
    extraLargePic = db.Column(db.String)
    averageColor = db.Column(db.String)
    bannerPic = db.Column(db.String)
    season = db.Column(db.String)
    year = db.Column(db.Integer)
    episodes = db.Column(db.Integer)
    popularity = db.Column(db.Integer)
    ranking = db.Column(db.Integer)

    review = db.relationship('Review', back_populates='anime')
    character = db.relationship('Character', back_populates='anime')
    table_anime = db.relationship('AnimeList', back_populates='anime')

    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'japTitle': self.japTitle,
            'status': self.status,
            'desc': self.desc,
            'trailer': self.trailer,
            'mediumPic': self.mediumPic,
            'largePic': self.largePic,
            'extraLargePic': self.extraLargePic,
            'averageColor': self.averageColor,
            'bannerPic': self.bannerPic,
            'season': self.season,
            'year': self.year,
            'episodes': self.episodes,
            'popularity': self.popularity,
            'ranking': self.ranking
        }