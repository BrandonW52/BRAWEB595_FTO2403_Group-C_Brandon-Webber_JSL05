// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
  {
    title: "Hooked on a Feeling",
    artist: "Blue Swede",
    genre: "Pop",
  },
  {
    title: "Moonage Daydream",
    artist: "David Bowie",
    genre: "Rock",
  },
  {
    title: "I Want You Back",
    artist: "The Jackson 5",
    genre: "Pop",
  },
  {
    title: "Spirit in the Sky",
    artist: "Norman Greenbaum",
    genre: "Rock",
  },
  {
    title: "Cherry Bomb",
    artist: "The Runaways",
    genre: "Rock",
  },
  {
    title: "Escape (The Piña Colada Song)",
    artist: "Rupert Holmes",
    genre: "Pop",
  },
  {
    title: "O-O-H Child",
    artist: "The Five Stairsteps",
    genre: "R&B",
  },
  {
    title: "Ain't No Mountain High Enough",
    artist: "Marvin Gaye & Tammi Terrell",
    genre: "R&B",
  },
  {
    title: "Come and Get Your Love",
    artist: "Redbone",
    genre: "Rock",
  },
  {
    title: "I'm Not in Love",
    artist: "10cc",
    genre: "Pop",
  },
  {
    title: "Fooled Around and Fell in Love",
    artist: "Elvin Bishop",
    genre: "Rock",
  },
];

// Object containing each Guardian's preferred genre
const guardians = {
  "Star-Lord": "Rock",
  Gamora: "Pop",
  Drax: "R&B",
  Rocket: "Rock",
  Groot: "Pop",
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
  for (let name in guardians) {
    let container = document.createElement("div");
    container.classList.add("playlist");
    document.getElementById("playlists").appendChild(container);

    let header = document.createElement("h1");
    header.innerHTML = `${name}`;
    container.appendChild(header);

    songs.map((song) => {
      if (song.genre === guardians[name]) {
        liked = document.createElement("p");
        liked.classList.add("song");

        span = document.createElement("span");
        span.classList.add("song-title");
        span.innerHTML = `${song.title}`;

        liked.appendChild(span);

        liked.innerHTML += ` by ${song.artist}`;

        container.appendChild(liked);
      }
    });
  }
}

// Call generatePlaylist and display the playlists for each Guardian
generatePlaylist(guardians, songs);
