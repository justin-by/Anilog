import os


class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    # SQLAlchemy 1.4 no longer supports url strings that start with 'postgres'
    # (only 'postgresql') but heroku's postgres add-on automatically sets the
    # url in the hidden config vars to start with postgres.
    # so the connection uri must be updated here
    SQLALCHEMY_DATABASE_URI = "postgres://ubo4jts6asn503:pbd17cafcdf9f25e1c3c4af6cc2cd6a47907bc0b6a6d7423737069c8674af6b44@c67okggoj39697.cluster-czrs8kj4isg7.us-east-1.rds.amazonaws.com:5432/dbmf1qmbkhekdp"
    SQLALCHEMY_ECHO = True
