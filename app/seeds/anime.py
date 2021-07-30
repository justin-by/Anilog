import json
from app.models import db, Anime

myjsonfile=open('app/seeds/animeseed.json', 'r')
jsondata=myjsonfile.read()

animejson=json.loads(jsondata)



def seed_anime():

    def check_trailer(anime):
        if anime["trailer"]==None:
            return None
        else:
            return f'youtube.com/watch?v={anime["trailer"]["id"]}'

    animes = animejson["data"]["Page"]["media"]
    for anime in animes:
        anime = Anime(id=anime["id"], title=anime["title"]["romaji"], japTitle=anime["title"]["native"], status=anime["status"], 
            desc=anime["description"], trailer=check_trailer(anime),
            mediumPic=anime["coverImage"]["medium"], largePic=anime["coverImage"]["large"] if anime["coverImage"]["large"] else None, extraLargePic=anime["coverImage"]["extraLarge"],
            averageColor=anime["coverImage"]["color"], bannerPic=anime["bannerImage"], season=anime["season"], year=anime["seasonYear"],
            episodes=anime["episodes"], popularity=anime["popularity"], ranking=anime["rankings"][0]["rank"] if anime["rankings"] else None)
        db.session.add(anime)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_anime():
    db.session.execute('TRUNCATE anime RESTART IDENTITY CASCADE;')
    db.session.commit()
