# Anilog

![Anilog logo](https://i.imgur.com/YTjOfAs.jpg)

Anilog is a anime platform website that allows users to discover and interact with anime.
This site presents two main features: 
- Viewing and filtering anime
- Organizing anime onto a user's personal list

Live Site: https://aqueous-garden-01113-f8133b32b5aa.herokuapp.com/

<br>

## Viewing and Filtering Anime

The browse page sorts anime by the year 2021 by default and allows any user to make any modifications in the filter. Users can search for anime by any combination of the anime's title, genre, year, and season. 

<br>

![Anilog gif browse page](https://i.imgur.com/lX7xmAE.gif)

## Organizing anime onto a user's personal list

The Anime List page is only accessible and visible by users that are signed in. When a user has logged in, the "My Log" option will be available in the navigation bar. Clicking on this option will bring users to their personal and private anime list where shows can be sorted under the categories:
- Watched
- Watching
- Plan to Watch

<br>

![Anilog gif list page](https://i.imgur.com/HeK4pl6.gif)

<br>

### Challenges and Future Plans

Dealing with a third-party API for the very first time was a challenging but fun task. I had to discover a way to handle the JSON response I was receiving and translate it into workable data in my backend. As I've had to make switches from the backend and frontend, I was able to fully understand the responsibilities and functionality that each part holds. Another big challenge was allowing the user to filter anime based on the four categories. I had to figure out a way to detect whether a user has only selected one, two, three, or all options to filter by. I solved this by simple setting up many conditionals that would cover all possibile combinations of active filters.

Things that I plan to implement in the future:
- Styling
  - Revamping splash page
  - Animations on anime card load
  - Animations on modals
- Display more data on Anime page
- Individual character pages
- Pagination / Infinite scrolling
- View random anime feature



