class Jukebox {
    constructor() {
      this.albums = [];
    }
  
    addAlbum(album) {
      this.albums.push(album);
    }
  
    favoriteAlbum() {
      let max = -1,
        fav;
      for (let i = 0; i < this.albums.length; i++) {
        if (this.albums[i].played > max) {
          max = this.albums[i].played;
          fav = this.albums[i];
        }
      }
      return fav.display();
    }
  }
  
  class Album {
    static idCounter = 0;
  
    constructor(artist, title) {
      this.id = ++Album.idCounter;
      this.artist = artist;
      this.title = title;
      this.played = 0;
    }
  
    play() {
      this.played += 1;
    }
  
    display() {
      return `${this.artist} : ${this.title}. <p>The album has been played ${this.played} times.</p>`;
    }
  }
  
  const jbox = new Jukebox();
  
  const albums = [
    new Album("Operation Ivy", "Energy"),
    new Album("Blink 182", "Dude Ranch"),
    new Album("New Found Glory", "Sticks and Stones"),
  ];
  
  albums.forEach(function (album) {
    jbox.addAlbum(album);
  });
  
  window.onload = function () {
    const selectAlbum = document.getElementById("albumDropdown");
    const playBtn = document.getElementById("playBtn");
    const favAlbumBtn = document.getElementById("favAlbumBtn");
    const albumDisplay = document.getElementById("albumDisplay");
  
    albums.forEach(function (album) {
      const option = document.createElement("option");
      option.text = `${album.artist} : ${album.title}`;
      option.value = album.id;
      selectAlbum.add(option);
    });
  
    playBtn.addEventListener("click", function () {
      const selectedAlbumId = selectAlbum.value;
      const album = albums.find(a => a.id == selectedAlbumId);
      if (album) {
        album.play();
        albumDisplay.innerHTML = `<p>You are now playing ${album.display()}</p>`;
      }
    });
  
    favAlbumBtn.addEventListener("click", function () {
      albumDisplay.innerHTML = `<p>Your favorite album is: ${jbox.favoriteAlbum()}</p>`;
    });
  };