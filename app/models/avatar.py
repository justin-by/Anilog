from .db import db

class Avatar(db.Model):
    __tablename__ = 'avatars'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    url = db.Column(db.String)


    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.userId,
            'url': self.url
        }