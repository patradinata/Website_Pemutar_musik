"use strict";

// all music
const musicData = [
  {
    backgroundImage: "poster-1.jpg",
    posterUrl: "poster-1.jpg",
    title: "Kau Tipu Aku",
    album: "Kembali Pulang",
    year: 2008,
    artist: "Kangen Band",
    musicPath: "Kau Tipu Aku.mp3",
  },
  {
    backgroundImage: "poster-2.jpg",
    posterUrl: "poster-2.jpg",
    title: "Kehilanganmu berat bagiku",
    album: "Pujaan Hati",
    year: 2008,
    artist: "Kangen Band",
    musicPath: "kangen-band.mp3",
  },
  {
    backgroundImage: "poster-3.jpg",
    posterUrl: "poster-3.jpg",
    title: "Anak Lanang",
    album: "No Spirit",
    year: 2022,
    artist: "Ndarboy Genk",
    musicPath: "anak-lanang.mp3",
  },
  {
    backgroundImage: "poster-4.jpg",
    posterUrl: "poster-4.jpg",
    title: "Harapan Hidup Di Rantau",
    album: "Harapan hidup di rantau",
    year: 2024,
    artist: "Mala Agatha",
    musicPath: "music-7.mp3",
  },
  {
    backgroundImage: "poster-5.jpg",
    posterUrl: "poster-5.jpg",
    title: "Bidadari Sarugo",
    album: "Shany",
    year: 2024,
    artist: "Shany, Opick",
    musicPath: "music-6.mp3",
  },
  {
    backgroundImage: "poster-2.jpg",
    posterUrl: "poster-2.jpg",
    title: "Mencoba untuk setia",
    album: "Mencoba untuk setia",
    year: 2024,
    artist: "Adista",
    musicPath: "matahari.mp3",
  },
  {
    backgroundImage: "masdho.jpg",
    posterUrl: "masdho.jpg",
    title: "Nganggur",
    album: "Masdho",
    year: 2023,
    artist: "Masdho",
    musicPath: "nganggur.mp3",
  },
  {
    backgroundImage: "poster-2.jpg",
    posterUrl: "poster-2.jpg",
    title: "Ku Puja Puja",
    album: "Ku Puja Puja",
    year: 2022,
    artist: "Ipank",
    musicPath: "Ipank - Ku Puja Puja.mp3",
  },

  {
    backgroundImage: "poster-3.jpg",
    posterUrl: "poster-3.jpg",
    title: "Ramadhan tajalla",
    album: "Ramadhan tajalla",
    year: 2022,
    artist: "Nasyid Kahlil Fajrussalam",
    musicPath: "Ramadhan Tajalla.mp3",
  },
  {
    backgroundImage: "poster-4.jpg",
    posterUrl: "poster-4.jpg",
    title: "Cintaku Kau terlantarkan",
    album: "Cintaku Kau terlantarkan",
    year: 2022,
    artist: "Adista",
    musicPath: "Adista-Cintaku kau terlantarkan.mp3",
  },
  {
    backgroundImage: "poster-5.jpg",
    posterUrl: "poster-5.jpg",
    title: "Dj senja yang datang diujung langit",
    album: "Dj senja yang datang diujung langit",
    year: 2023,
    artist: "Putri Ariani",
    musicPath: "dj-senja.mp3",
  },

  {
    backgroundImage: "poster-4.jpg",
    posterUrl: "poster-4.jpg",
    title: "Tresno Liyane",
    album: "Tresno Liyane",
    year: 2022,
    artist: "NorthSle",
    musicPath: "tresno-liyane.mp3",
  },
  {
    backgroundImage: "poster-3.jpg",
    posterUrl: "poster-3.jpg",
    title: "kebesaranmu",
    album: "kebesaranmu",
    year: 2022,
    artist: "ST-12",
    musicPath: "kebesaranmu.mp3",
  },
  {
    backgroundImage: "rama.jpg",
    posterUrl: "rama.jpg",
    title: "darah-juang",
    album: "darah-juang",
    year: 2022,
    artist: "Mahasiswa",
    musicPath: "darah-juang.mp3",
  },
];

/**
 * add eventListnere on all elements that are passed
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
};

// playlist musik
const playlist = document.querySelector("[data-music-list]");

for (let i = 0, len = musicData.length; i < len; i++) {
  playlist.innerHTML += `
  <li>
    <button class="music-item ${i === 0 ? "playing" : ""}" data-playlist-toggler data-playlist-item="${i}">
      <img src="${musicData[i].posterUrl}" width="800" height="800" alt="${musicData[i].title} Album Poster"
        class="img-cover">

      <div class="item-icon">
        <span class="material-symbols-rounded">equalizer</span>
      </div>
    </button>
  </li>
  `;
}

// Toggle class active untuk sidebar

const playlistSideModal = document.querySelector("[data-playlist]");
const playlistTogglers = document.querySelectorAll("[data-playlist-toggler]");
const overlay = document.querySelector("[data-overlay]");

const togglePlaylist = function () {
  playlistSideModal.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("modalActive");
};

addEventOnElements(playlistTogglers, "click", togglePlaylist);

/**
 * PlayList Item
 *
 * hapus status aktif dari musik yang terakhir diputar
 * dan tambahkan status aktif pada musik yang diklik
 */
const playlistItems = document.querySelectorAll("[data-playlist-item]");
let currentMusic = 0;
let lastPlayedMusic = 0;
const changePlaylistItem = function () {
  playlistItems[lastPlayedMusic].classList.remove("playing");
  playlistItems[currentMusic].classList.add("playing");
};

addEventOnElements(playlistItems, "click", function () {
  lastPlayedMusic = currentMusic;
  currentMusic = Number(this.dataset.playlistItem);
  changePlaylistItem();
});

// Player
const playerBanner = document.querySelector("[data-player-banner]");
const playerTitle = document.querySelector("[data-title]");
const playerAlbum = document.querySelector("[data-album]");
const playerYear = document.querySelector("[data-year]");
const playerArtist = document.querySelector("[data-artist]");

const audioSource = new Audio(musicData[currentMusic].musicPath);

const changePlayerInfo = function () {
  playerBanner.src = musicData[currentMusic].posterUrl;
  playerBanner.setAttribute("alt", `${musicData[currentMusic].title} Album Poster`);
  document.body.style.backgroundImage = `url(${musicData[currentMusic].backgroundImage})`;
  playerTitle.textContent = musicData[currentMusic].title;
  playerAlbum.textContent = musicData[currentMusic].album;
  playerYear.textContent = musicData[currentMusic].year;
  playerArtist.textContent = musicData[currentMusic].artist;

  audioSource.src = musicData[currentMusic].musicPath;

  audioSource.addEventListener("loadeddata", updateDuration);
  playMusic();
};

addEventOnElements(playlistItems, "click", changePlayerInfo);

// updateDurasi
const playerDuration = document.querySelector("[data-duration]");
const playerSeekRange = document.querySelector("[data-seek]");

// melewatkan detik dan memanfaatkan format kode waktu
const getTimecode = function (duration) {
  const minutes = Math.floor(duration / 60);
  const seconds = Math.ceil(duration - minutes * 60);
  const timecode = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  return timecode;
};

const updateDuration = function () {
  playerSeekRange.max = Math.ceil(audioSource.duration);
  playerDuration.textContent = getTimecode(Number(playerSeekRange.max));
};

audioSource.addEventListener("loadeddata", updateDuration);

// Play dan pause musik
const playBtn = document.querySelector("[data-play-btn]");

let playInterval;

const playMusic = function () {
  if (audioSource.paused) {
    audioSource.play();
    playBtn.classList.add("active");
    playInterval = setInterval(updateRunningTime, 500);
  } else {
    audioSource.pause();
    playBtn.classList.remove("active");
    clearInterval(playInterval);
  }
};

playBtn.addEventListener("click", playMusic);

/** update running time while playing music */

const playerRunningTime = document.querySelector("[data-running-time");

const updateRunningTime = function () {
  playerSeekRange.value = audioSource.currentTime;
  playerRunningTime.textContent = getTimecode(audioSource.currentTime);

  updateRangeFill();
  isMusicEnd();
};

/**
 * RANGE FILL WIDTH
 *
 * change 'rangeFill' width, while changing range value
 */

const ranges = document.querySelectorAll("[data-range]");
const rangeFill = document.querySelector("[data-range-fill]");

const updateRangeFill = function () {
  let element = this || ranges[0];

  const rangeValue = (element.value / element.max) * 100;
  element.nextElementSibling.style.width = `${rangeValue}%`;
};

addEventOnElements(ranges, "input", updateRangeFill);

// seek musik
const seek = function () {
  audioSource.currentTime = playerSeekRange.value;
  playerRunningTime.textContent = getTimecode(playerSeekRange.value);
};

playerSeekRange.addEventListener("input", seek);

// End musik
const isMusicEnd = function () {
  if (audioSource.ended) {
    playBtn.classList.remove("active");
    audioSource.currentTime = 0;
    playerSeekRange.value = audioSource.currentTime;
    playerRunningTime.textContent = getTimecode(audioSource.currentTime);
    updateRangeFill();
  }
};

// skip next musik
const playerSkipNextBtn = document.querySelector("[data-skip-next]");

const skipNext = function () {
  lastPlayedMusic = currentMusic;
  if (isShuffled) {
    shuffleMusic();
  } else {
    currentMusic >= musicData.length - 1 ? (currentMusic = 0) : currentMusic++;
  }

  changePlayerInfo();
  changePlaylistItem();
};

playerSkipNextBtn.addEventListener("click", skipNext);

// skip to previous music

const playerSkipPrevBtn = document.querySelector("[data-skip-prev]");

const skipPrev = function () {
  lastPlayedMusic = currentMusic;

  if (isShuffled) {
    shuffleMusic();
  } else {
    currentMusic <= 0 ? (currentMusic = musicData.length - 1) : currentMusic--;
  }

  changePlayerInfo();
  changePlaylistItem();
};

playerSkipPrevBtn.addEventListener("click", skipPrev);

// Shuffle Musik
const getRandomMusic = () => Math.floor(Math.random() * musicData.length);
const shuffleMusic = () => (currentMusic = getRandomMusic());

const playerShuffleBtn = document.querySelector("[data-shuffle]");
let isShuffled = false;
const shuffle = function () {
  playerShuffleBtn.classList.toggle("active");

  isShuffled = isShuffled ? false : true;
};

playerShuffleBtn.addEventListener("click", shuffle);

// refeat music
const playerRefeatBtn = document.querySelector("[data-repeat]");

const repeat = function () {
  if (!audioSource.loop) {
    audioSource.loop = true;
    this.classList.add("active");
  } else {
    audioSource.loop = false;
    this.classList.remove("active");
  }
};

playerRefeatBtn.addEventListener("click", repeat);

// music volume
const playerVolumeRange = document.querySelector("[data-volume]");
const playerVolumeBtn = document.querySelector("[data-volume-btn]");

const changeVolume = function () {
  audioSource.volume = playerVolumeRange.value;
  audioSource.muted = false;

  if (audioSource.volume <= 0.1) {
    playerVolumeBtn.children[0].textContent = "volume_mute";
  } else if (audioSource.volume <= 0.5) {
    playerVolumeBtn.children[0].textContent = "volume_down";
  } else {
    playerVolumeBtn.children[0].textContent = "volume_up";
  }
};

playerVolumeRange.addEventListener("input", changeVolume);

// MUTE MUSIC
const muteVolume = function () {
  if (!audioSource.muted) {
    audioSource.muted = true;
    playerVolumeBtn.children[0].textContent = "volume_off";
  } else {
    changeVolume();
  }
};

playerVolumeBtn.addEventListener("click", muteVolume);

function apply(operation, ...args) {
  // kita bisa menambahkan kode lain sebelum operation dijalankan.

  return operation(...args);
}

function sum(a, b, c) {
  return a + b + c;
}

function discount(disc, value) {
  return value - (disc / 100) * value;
}

const productPrice = apply(sum, 100, 100, 200);
const withDiscount = apply(discount, 25, productPrice);

console.log("Product price:", productPrice); // Output: Product price: 400
console.log("With discount 25%:", withDiscount); // Output: With discount 25%: 300
