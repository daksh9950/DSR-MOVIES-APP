<<<<<<< HEAD


# 🎬 Dsr Movie App

A modern React.js web app that fetches and displays trending movies and TV shows using the TMDb API.

## 🔧 Features
- Browse trending Movies and TV shows
- Filter by category
- View poster, title, and overview
- Responsive UI with Tailwind CSS

## 🛠️ Tech Stack
- React.js
- Axios
- Tailwind CSS
- TMDb API

## 📦 Installation

```bash
git clone https://github.com/yourusername/movie-app.git
cd movie-app
npm install
npm start

=======
# DSR-MOVIES-APP
>>>>>>> 8d3ba0b441d549bf3583f06fa9b18dfeafe58c07

src/
│
├── components/
│ ├── Home.jsx
│ ├── TEmplate/
│ │ ├── Trending.jsx
│ │ ├── Popular.jsx
│ │ ├── Movies.jsx
│ │ ├── Tvshows.jsx
│ │ ├── People.jsx
│ │ ├── Moviedetails.jsx
│ │ ├── Tvdetails.jsx
│ │ ├── Persondetails.jsx
│ │ └── Trailer.jsx
│
├── redux/
│ ├── store.js
│ ├── movieSlice.js
│ ├── tvSlice.js
│ └── personSlice.js
│
├── App.jsx
└── index.js

csharp
Copy
Edit

## 🧠 State Management (Redux)

Each media type (movie, tv, person) has its own slice, with basic actions:

```js
// Example from movieSlice.js
loadmovie: (state, action) => {
  state.info = action.payload;
},
removemovie: (state) => {
  state.info = null;
}
Access in components like this:

js
Copy
Edit
const movieInfo = useSelector((state) => state.movie.info);
📺 Trailer Playback
Trailer video is loaded using ReactPlayer and the YouTube video key from the API:

js
Copy
Edit
<ReactPlayer url={`https://www.youtube.com/watch?v=${ytvideo.key}`} />
Ensure the video data is correctly dispatched and available in Redux state before rendering.

🛠 Technologies Used
React

Redux Toolkit

React Router DOM

React Player

Tailwind CSS

🚧 Known Issues
⛔ Trailer not rendering? Ensure .videos key exists and ytvideo.key is valid.