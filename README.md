# 7onsho Museum — Multi-page version

## Pages
- `index.html`: intro, childhood portrait, podcast, room directory
- `room-1.html` to `room-4.html`: each room has its own page, two portrait photos, editable story text, soundtrack, and previous/next navigation
- `room-5.html`: a separate final room with floating hearts, a large image, two more portrait photos, story text, room song, and three mixable ambient sounds

## Run
Open the folder in VS Code and launch `index.html` with Live Server.

## Add your media

Images go in `assets/images/`:
- `childhood.jpg`
- `podcast-poster.jpg` (optional)
- `room1-1.jpg`, `room1-2.jpg` through `room4-1.jpg`, `room4-2.jpg`
- `final-main.jpg`
- `room5-1.jpg`, `room5-2.jpg`

Video: `assets/video/podcast.mp4`

Audio: `assets/audio/room-1.mp3` through `room-5.mp3`, plus `ambient-1.mp3`, `ambient-2.mp3`, `ambient-3.mp3`.

All images are placeholders until you add your own. There are no stock photos or background images. To edit a room's words, open its own `room-N.html` file. All styles are in `css/style.css`. Music is started with a play button because browsers block autoplay audio in many cases.
