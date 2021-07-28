from flask import Blueprint, request
from app.models import Anime, db

anime_routes = Blueprint('anime', __name__)
url = 'https://graphql.anilist.co'

@anime_routes.route('/season=<string:season>')
def anime_by_season(season):
    query = '''
        query ($season: MediaSeason, $seasonYear: Int) {
            Page {
                # Define which variables will be used in the query (id)
                media (season: $season, seasonYear: $seasonYear, type: ANIME) { # Insert our variables into the query arguments (id) (type: ANIME is hard-coded in the query)
                id
                trailer {
                    id
                    site
                }
                bannerImage
                status
                description
                coverImage {
                    extraLarge
                    large
                    medium
                    color
                }
                characters {
                    nodes {
                        name {
                            full
                        }
                    image {
                        large
                        medium
                        }
                    }
                }
                season
                seasonYear
                episodes
                genres
                popularity
                averageScore
                rankings {
                    id
                    rank
                }
                startDate {
                    year
                    month
                    day
                }
                studios {
                    nodes {
                    name
                    }
                }
                title {
                    romaji
                    native
                    }
                }
            }
        }
        '''

    variables = {
    "season": f"{season}",
    "seasonYear": 2021
    }

    url = 'https://graphql.anilist.co'
    
    response = requests.post(url, json={'query': query, 'variables': variables})
    print(response)
    return response

