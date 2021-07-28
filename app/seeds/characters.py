import json
from app.models import db, Character

myjsonfile=open('app/seeds/characterseed.json', 'r')
jsondata=myjsonfile.read()

characterjson=json.loads(jsondata)


def seed_characters():

    shows = characterjson["data"]["Page"]["media"]

    for show in shows:
        for chara in show["characters"]["nodes"]:
            character = Character(fullName=chara["name"]["full"],
                mediumPic=chara["image"]["medium"],
                largePic=chara["image"]["large"],
                animeId=show["id"])
            db.session.add(character)
            db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_characters():
    db.session.execute('TRUNCATE characters RESTART IDENTITY CASCADE;')
    db.session.commit()