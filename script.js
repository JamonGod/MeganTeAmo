// --- BASE DE DATOS DE CANCIONES (Estructura para 4 temas) ---
const trackDatabase = [
    {
        id: 1,
        title: "Something About You",
        artist: "Eyedress & Dent May",
        cover: "img/1.jpg",
        audioPath: "audio/cancion1.mp3",
        videoPath: "videos/SomethingAboutYou.mp4",
        lyrics: [
            { time: 0.74, text: "In the car, cruising around with you" },
            { time: 4.53, text: "And my baby, you know that I got you" },
            { time: 7.72, text: "Hit the road, I'm taking off with you" },
            { time: 11.69, text: "Not in a hurry, there's something about you, oh" },
            
            { time: 16.03, text: "Leave the car at the valet (cash only)" },
            { time: 22.37, text: "Check me in, pop the champagne (Dom Perignon)" },
            { time: 29.08, text: "Pour me a glass, she's got good taste (so good)" },
            { time: 36.51, text: "Take off our clothes by the fire place (sexy, yeah)" },
            
            { time: 43.57, text: "She looks just like a dream" },
            { time: 48.55, text: "The prettiest girl I've ever seen" },
            { time: 52.57, text: "From the cover of a magazine" },
            
            { time: 57.76, text: "In the car, cruising around with you" },
            { time: 61.87, text: "And my baby, you know that I got you" },
            { time: 65.03, text: "Hit the road, I'm taking off with you" },
            { time: 68.94, text: "Not in a hurry, there's something about you, oh" },
            
            { time: 73.34, text: "We stayed up all night and slept till noon" },
            { time: 78.90, text: "It's so nice to wake up next to you" },
            { time: 86.56, text: "Let's start the day with breakfast in bed" },
            { time: 94.70, text: "Think I'm gonna love you till I'm dead" },
            { time: 101.20, text: "I can't wait to buy you things" },
            { time: 105.86, text: "A brand new diamond ring" },
            { time: 109.10, text: "This is more than just a fling" },
            
            { time: 113.93, text: "In the car, cruising around with you" },
            { time: 119.54, text: "And my baby, you know that I got you" },
            { time: 122.85, text: "Hit the road, I'm taking off with you" },
            { time: 126.64, text: "Not in a hurry, there's something about you, oh" },
            
            { time: 130.84, text: "There's something about you, girl" },
            { time: 134.09, text: "There's something about you, oh" },
            { time: 137.80, text: "Something about you" },
            { time: 141.29, text: "Something about" }
        ]
    },
    {
        id: 2,
        title: "Join Me In Death",
        artist: "HIM",
        cover: "img/2.jpg",
        audioPath: "audio/cancion2.mp3",
        videoPath: "videos/JoinMeInDeath.mp4",
        lyrics: [
            { time: 5.24, text: "Baby join me in death" },
            { time: 13.46, text: "Baby join me in death" },
            { time: 21.84, text: "Baby join me in death" },
            
            { time: 29.62, text: "We are so young" },
            { time: 32.37, text: "Our lives have just begun" },
            { time: 36.80, text: "But already we're considering" },
            { time: 41.29, text: "Escape from this world" },
            
            { time: 45.65, text: "And we've waited for so long" },
            { time: 49.85, text: "For this moment to come" },
            { time: 53.55, text: "We're so anxious to be together" },
            { time: 57.77, text: "Together in death" },
            
            { time: 63.65, text: "Won't you die tonight for love?" },
            { time: 68.18, text: "Baby join me in death" },
            { time: 72.23, text: "Won't you die?" },
            { time: 74.29, text: "Baby join me in death" },
            { time: 81.31, text: "Won't die tonight for love?" },
            { time: 85.43, text: "Baby join me in death" },
            
            { time: 92.96, text: "This world is a cruel place" },
            { time: 95.85, text: "And we're here only to lose" },
            { time: 100.07, text: "So, before live tears us apart let" },
            { time: 104.41, text: "Death bless me with you" },
            
            { time: 108.14, text: "Woah-oh" },
            
            { time: 110.21, text: "Won't you die tonight for love?" },
            { time: 114.59, text: "Baby join me in death" },
            { time: 118.98, text: "Won't you die?" },
            { time: 123.07, text: "Baby join me in death" },
            { time: 127.41, text: "Won't die tonight for love?" },
            { time: 131.62, text: "Baby join me in death" },
            
            { time: 146.14, text: "This life ain't worth living" },
            { time: 155.81, text: "This life ain't worth living" },
            { time: 161.47, text: "(Join me, join me, join me)" },
            { time: 165.73, text: "This life ain't worth living" },
            { time: 168.22, text: "(Join me, join me, join me)" },
            { time: 173.44, text: "This life ain't worth living" },
            
            { time: 177.68, text: "Won't you die tonight for love?" },
            { time: 182.16, text: "Baby join me in death" },
            { time: 186.64, text: "Won't you die?" },
            { time: 190.63, text: "Baby join me in death" },
            { time: 195.08, text: "Won't you die tonight for love?" },
            { time: 198.98, text: "Baby join me in death" },
            
            { time: 203.96, text: "Baby join me in death" }
        ]
    },
    {
        id: 3,
        title: "Say Yes To Heaven",
        artist: "Lana Del Rey",
        cover: "img/3.jpg",
        audioPath: "audio/cancion3.mp3",
        videoPath: "videos/SayYesToHeaven.mp4",
        lyrics: [
            { time: 19.38, text: "If you dance, I'll dance" },
            { time: 24.40, text: "And if you don't, I'll dance anyway" },
            { time: 29.16, text: "Give peace a chance" },
            { time: 33.65, text: "Let the fear you have fall away" },
            
            { time: 38.63, text: "I've got my eye on you" },
            { time: 43.43, text: "I've got my eye on you" },
            
            { time: 48.85, text: "Say yes to heaven" },
            { time: 53.06, text: "Say yes to me" },
            { time: 57.79, text: "Say yes to heaven" },
            { time: 62.67, text: "Say yes to me" },
            
            { time: 67.87, text: "If you go, I'll stay" },
            { time: 72.49, text: "You come back, I'll be right here" },
            { time: 77.40, text: "Like a barge at sea" },
            { time: 81.38, text: "In the storm, I stay clear" },
            
            { time: 86.24, text: "'Cause I've got my mind on you" },
            { time: 91.34, text: "I've got my mind on you" },
            
            { time: 96.25, text: "Say yes to heaven" },
            { time: 100.87, text: "Say yes to me" },
            { time: 105.99, text: "Say yes to heaven" },
            { time: 110.46, text: "Say yes to me" },
            
            { time: 125.14, text: "If you dance, I'll dance" },
            { time: 139.52, text: "I'll put my red dress on again" },
            { time: 144.43, text: "And if you fight, I'll fight" },
            { time: 148.47, text: "It doesn't matter, now it's all gone" },
            
            { time: 153.83, text: "I've got my mind on you" },
            { time: 158.21, text: "I've got my mind on you" },
            
            { time: 163.46, text: "Say yes to heaven" },
            { time: 168.13, text: "Say yes to me" },
            { time: 172.90, text: "Say yes to heaven" },
            { time: 177.80, text: "Say yes to me" },
            
            { time: 182.93, text: "I've got my eye on you" },
            { time: 187.25, text: "I've got my eye on you, mmm" },
            { time: 192.19, text: "I've got my eye on you" },
            { time: 196.74, text: "I've got my eye on you" }
        ]
    },
    {
        id: 4,
        title: "fall in love with you",
        artist: "Montell Fish",
        cover: "img/4.jpg",
        audioPath: "audio/cancion4.mp3",
        videoPath: "videos/fallinlove.mp4",
        lyrics: [
            { time: 2.36, text: "Fall in love with you, you" },
            { time: 11.45, text: "My love" },
            { time: 14.64, text: "Fall in love with you, you" },
            { time: 23.56, text: "My love" },
            { time: 26.77, text: "Fall in love with you, you" },
            { time: 35.13, text: "My—" },
            
            { time: 37.64, text: "Maybe it couldn't work out" },
            { time: 46.73, text: "In the end" },
            { time: 50.15, text: "Maybe this what I deserve now" },
            { time: 58.95, text: "Better off as friends" },
            { time: 62.85, text: "And I know" },
            { time: 64.75, text: "I'm not perfect with love" },
            { time: 74.33, text: "But maybe" },
            { time: 76.85, text: "I could be worth your love" },
            
            { time: 86.42, text: "Fall in love with you, you" },
            { time: 95.46, text: "My love" },
            { time: 98.79, text: "Fall in love with you, you" },
            { time: 107.23, text: "My love" },
            { time: 110.90, text: "Fall in love with you, you" },
            { time: 119.58, text: "My love" },
            { time: 123.01, text: "Fall in love with you, you (Teamo mucho)" }
        ]
    }
];

// --- ESTADO GLOBAL DE LA APLICACIÓN ---
let currentTrackIndex = 0;
let isPlaying = false;
let isShuffle = false;
let isRepeat = false;

// --- ELEMENTOS DEL DOM ---
const playlistPage = document.getElementById('playlistPage');
const playerPage = document.getElementById('playerPage');
const playlistTracksContainer = document.getElementById('playlistTracks');
const bgVideo = document.getElementById('bgVideo');
const mainAudio = document.getElementById('mainAudio');

// Elementos del reproductor
const btnBackToHome = document.getElementById('btnBackToHome');
const btnPlayPause = document.getElementById('btnPlayPause');
const btnPrev = document.getElementById('btnPrev');
const btnNext = document.getElementById('btnNext');
const btnShuffle = document.getElementById('btnShuffle');
const btnRepeat = document.getElementById('btnRepeat');

const playerAlbumArt = document.getElementById('playerAlbumArt');
const playerTrackTitle = document.getElementById('playerTrackTitle');
const playerTrackArtist = document.getElementById('playerTrackArtist');
const lyricsView = document.getElementById('lyricsView');

const progressBar = document.getElementById('progressBar');
const progressContainer = document.getElementById('progressContainer');
const timeCurrent = document.getElementById('timeCurrent');
const timeTotal = document.getElementById('timeTotal');

const sliderVolume = document.getElementById('sliderVolume');
const sliderSpeed = document.getElementById('sliderSpeed');
const displaySpeed = document.getElementById('displaySpeed');

// --- NAVEGACIÓN Y MANEJO DE PÁGINAS (SPA) ---
function changeView(viewName) {
    if (viewName === 'home') {
        playerPage.classList.remove('active');
        playlistPage.classList.add('active');
        // Resetear video al volver al home si no se está reproduciendo música
        if (!isPlaying) {
            bgVideo.pause();
            bgVideo.src = "";
        }
    } else if (viewName === 'player') {
        playlistPage.classList.remove('active');
        playerPage.classList.add('active');
    }
}

// --- RENDERIZADO DE LA PLAYLIST ---
function buildPlaylistUI() {
    playlistTracksContainer.innerHTML = '';
    
    trackDatabase.forEach((track, index) => {
        const li = document.createElement('li');
        li.classList.add('track-item');
        li.innerHTML = `
            <img src="${track.cover}" alt="${track.title}">
            <div class="track-meta">
                <h3>${track.title}</h3>
                <p>${track.artist}</p>
            </div>
        `;

        // Interacción HOVER: Carga suave del video de fondo
        li.addEventListener('mouseenter', () => {
            if (track.videoPath && !isPlaying) {
                bgVideo.src = track.videoPath;
                bgVideo.load();
                bgVideo.play().catch(err => console.log("Video encallado por políticas del navegador"));
            }
        });

        li.addEventListener('mouseleave', () => {
            if (!isPlaying) {
                bgVideo.pause();
                bgVideo.src = "";
            }
        });

        // Interacción CLICK: Cargar canción y saltar al reproductor
        li.addEventListener('click', () => {
            currentTrackIndex = index;
            loadTrack(trackDatabase[currentTrackIndex]);
            startPlayback();
            changeView('player');
        });

        playlistTracksContainer.appendChild(li);
    });
}

// --- CONTROL DE REPRODUCCIÓN (CORE) ---
function loadTrack(track) {
    if (!track) return;
    
    playerAlbumArt.src = track.cover;
    playerTrackTitle.textContent = track.title;
    playerTrackArtist.textContent = track.artist;
    mainAudio.src = track.audioPath;
    
    // Configurar video de fondo definitivo para la canción
    if (track.videoPath) {
        bgVideo.src = track.videoPath;
        bgVideo.load();
        bgVideo.play().catch(err => console.log("Navegador bloqueó autoplay de video"));
    }

    setupLyrics(track.lyrics);
    mainAudio.load();
}

function startPlayback() {
    isPlaying = true;
    mainAudio.play().catch(err => console.log("Error al reproducir audio"));
    btnPlayPause.innerHTML = '<i class="fas fa-pause"></i>';
}

function pausePlayback() {
    isPlaying = false;
    mainAudio.pause();
    btnPlayPause.innerHTML = '<i class="fas fa-play"></i>';
}

// --- MOTOR DE LETRAS SINCRONIZADAS ---
function setupLyrics(lyricsArray) {
    lyricsView.innerHTML = '';
    if (!lyricsArray || lyricsArray.length === 0) {
        lyricsView.innerHTML = '<p class="lyric-row">Instrumental</p>';
        return;
    }

    lyricsArray.forEach(line => {
        const span = document.createElement('span');
        span.classList.add('lyric-row');
        span.setAttribute('data-time', line.time);
        span.textContent = line.text;
        lyricsView.appendChild(span);
    });
}

// --- ASIGNACIÓN DE EVENTOS DE CONTROL ---
// --- UTILIDADES DE TIEMPO ---
// Convierte los segundos a formato 0:00
function formatTime(seconds) {
    if (isNaN(seconds)) return "0:00";
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    return `${min}:${sec < 10 ? '0' + sec : sec}`;
}

// --- CONTROLES DE PISTA (SIGUIENTE / ANTERIOR) ---
function playNext() {
    if (isShuffle) {
        // Modo aleatorio: escoge una canción al azar que no sea la actual
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * trackDatabase.length);
        } while (randomIndex === currentTrackIndex && trackDatabase.length > 1);
        currentTrackIndex = randomIndex;
    } else {
        // Modo normal: avanza 1, si llega al final, vuelve a la primera (0)
        currentTrackIndex = (currentTrackIndex + 1) % trackDatabase.length;
    }
    loadTrack(trackDatabase[currentTrackIndex]);
    startPlayback();
}

function playPrev() {
    if (isShuffle) {
        playNext(); 
    } else {
        // Retrocede 1, si es la primera, salta a la última
        currentTrackIndex = (currentTrackIndex - 1 + trackDatabase.length) % trackDatabase.length;
        loadTrack(trackDatabase[currentTrackIndex]);
        startPlayback();
    }
}

// --- ACTUALIZACIÓN EN TIEMPO REAL (EL MOTOR PRINCIPAL) ---
// Este evento se dispara varias veces por segundo mientras suena la música
mainAudio.addEventListener('timeupdate', () => {
    const currentTime = mainAudio.currentTime;
    const duration = mainAudio.duration;

    // 1. Actualizar la barra de progreso y los relojes
    if (duration) {
        const progressPercent = (currentTime / duration) * 100;
        progressBar.style.width = `${progressPercent}%`;
        timeCurrent.textContent = formatTime(currentTime);
    }

    // 2. Motor de Letras (Sincronización y Auto-Scroll)
    const lyricRows = document.querySelectorAll('.lyric-row');
    let activeRow = null;

    lyricRows.forEach((row, index) => {
        const rowTime = parseFloat(row.getAttribute('data-time'));
        
        // Calculamos cuándo termina esta línea (cuando empieza la siguiente)
        let nextRowTime = Infinity;
        if (index + 1 < lyricRows.length) {
            nextRowTime = parseFloat(lyricRows[index + 1].getAttribute('data-time'));
        }

        // Si el tiempo actual del audio está entre esta línea y la siguiente:
        if (currentTime >= rowTime && currentTime < nextRowTime) {
            row.classList.add('active-lyric'); // La ilumina (CSS)
            activeRow = row;
        } else {
            row.classList.remove('active-lyric'); // Apaga las demás
        }
    });

    // 3. Auto-scroll: Mantiene la letra iluminada en el centro de la caja
    if (activeRow) {
        const containerRect = lyricsView.getBoundingClientRect();
        const rowRect = activeRow.getBoundingClientRect();

        // Si la línea se está saliendo de la vista por arriba o por abajo
        if (rowRect.top < containerRect.top || rowRect.bottom > containerRect.bottom) {
            activeRow.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
});

// Cuando la canción carga sus datos, actualizamos el tiempo total (ej. 3:45)
mainAudio.addEventListener('loadedmetadata', () => {
    timeTotal.textContent = formatTime(mainAudio.duration);
});

// Cuando la canción termina sola
mainAudio.addEventListener('ended', () => {
    if (!isRepeat) {
        playNext(); // Pasa a la siguiente si no está en repetición
    }
    // Si isRepeat es true, el audio.loop se encarga de repetirla
});

// Adelantar/Atrasar haciendo clic en la barra de progreso
progressContainer.addEventListener('click', (e) => {
    const width = progressContainer.clientWidth;
    const clickX = e.offsetX;
    const duration = mainAudio.duration;
    if (duration) {
        mainAudio.currentTime = (clickX / width) * duration;
    }
});

// --- ASIGNACIÓN DE EVENTOS A LOS BOTONES ---

btnPlayPause.addEventListener('click', () => {
    if (isPlaying) pausePlayback();
    else startPlayback();
});

btnNext.addEventListener('click', playNext);
btnPrev.addEventListener('click', playPrev);

btnShuffle.addEventListener('click', () => {
    isShuffle = !isShuffle;
    btnShuffle.classList.toggle('active-mode', isShuffle); // Prende/Apaga en CSS (Verde Neón)
});

btnRepeat.addEventListener('click', () => {
    isRepeat = !isRepeat;
    btnRepeat.classList.toggle('active-mode', isRepeat);
    mainAudio.loop = isRepeat; // Le dice al reproductor nativo que repita
});

btnBackToHome.addEventListener('click', () => changeView('home'));

// Sliders de Volumen y Velocidad
sliderVolume.addEventListener('input', (e) => {
    mainAudio.volume = e.target.value;
});

sliderSpeed.addEventListener('input', (e) => {
    mainAudio.playbackRate = parseFloat(e.target.value);
    displaySpeed.textContent = `${mainAudio.playbackRate.toFixed(2)}x`;
});

// --- INICIALIZACIÓN ---
function init() {
    buildPlaylistUI();
    // Ajustes por defecto al arrancar
    mainAudio.volume = sliderVolume.value;
    mainAudio.playbackRate = parseFloat(sliderSpeed.value);
    displaySpeed.textContent = `${mainAudio.playbackRate.toFixed(2)}x`;
}

// Arranca todo cuando la página carga
window.addEventListener('DOMContentLoaded', init);