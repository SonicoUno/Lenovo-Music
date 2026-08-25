'use strict';

/* =========================================================
   MUSIC DATA
   ========================================================= */

const musicData = [
  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Kaleidoscope World",
    album: "Inuman Sessions Vol.1",
    year: 2025,
    artist: "Inuman Sessions Vol.1",
    musicPath: "./assets/music/17.Inuman Sessions Vol.1 - Kaleidoscope World.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Buloy",
    album: "Inuman Sessions Vol.1",
    year: 2025,
    artist: "Inuman Sessions Vol.1",
    musicPath: "./assets/music/2.Inuman Sessions Vol.1 - Buloy.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Inuman Na",
    album: "Inuman Sessions Vol.1",
    year: 2025,
    artist: "Inuman Sessions Vol.1",
    musicPath: "./assets/music/9.Inuman Sessions Vol.1 - Inuman Na.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Slipping Through My Fingers",
    album: "Single",
    year: 2025,
    artist: "ABBA",
    musicPath: "./assets/music/ABBA - Slipping Through My Fingers ( Lyrics ).mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "The Winner Takes It All",
    album: "Single",
    year: 2025,
    artist: "ABBA",
    musicPath: "./assets/music/ABBA - The Winner Takes It All (Lyrics).mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Highway to Hell",
    album: "Single",
    year: 2025,
    artist: "AC/DC",
    musicPath: "./assets/music/AC_DC - Highway to Hell (lyrics).mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Agent Orange",
    album: "Single",
    year: 2025,
    artist: "Agent Orange",
    musicPath: "./assets/music/Agent Orange.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Come What May",
    album: "Single",
    year: 2025,
    artist: "Air Supply",
    musicPath: "./assets/music/Air Supply - Come What May (Lyrics).mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Making Love Out Of Nothing At All",
    album: "Single",
    year: 2025,
    artist: "Air Supply",
    musicPath: "./assets/music/Air Supply - Making Love Out Of Nothing At All (Official HD Video).mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Paranoid",
    album: "Single",
    year: 2025,
    artist: "Black Sabbath",
    musicPath: "./assets/music/BLACK SABBATH - _Paranoid_ (Official Video).mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Bakit Part 2",
    album: "Single",
    year: 2025,
    artist: "Mayonnaise",
    musicPath: "./assets/music/Bakit Part 2 - Mayonnaise.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Truth",
    album: "Single",
    year: 2025,
    artist: "Bamboo",
    musicPath: "./assets/music/Bamboo - Truth (Official Lyric Video).mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Nang Dumating Ka",
    album: "Single",
    year: 2025,
    artist: "Bandang Lapis",
    musicPath: "./assets/music/Bandang Lapis performs “Nang Dumating Ka”.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Basket Case",
    album: "Single",
    year: 2025,
    artist: "Green Day",
    musicPath: "./assets/music/Basket Case - Green Day.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Beautiful Girls",
    album: "Single",
    year: 2025,
    artist: "Beautiful Girls",
    musicPath: "./assets/music/Beautiful Girls.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Leaves",
    album: "Single",
    year: 2025,
    artist: "Ben & Ben",
    musicPath: "./assets/music/Ben & Ben - Leaves.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Billie Jean",
    album: "Single",
    year: 2025,
    artist: "Michael Jackson",
    musicPath: "./assets/music/Billie Jean - Michael Jackson (Lyrics).mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Piano Man",
    album: "Single",
    year: 2025,
    artist: "Billy Joel",
    musicPath: "./assets/music/Billy Joel - Piano Man (Official HD Video).mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Vienna",
    album: "Single",
    year: 2025,
    artist: "Billy Joel",
    musicPath: "./assets/music/Billy Joel - Vienna (Lyrics) - (320 Kbps).mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Is This Love",
    album: "Single",
    year: 2025,
    artist: "Bob Marley",
    musicPath: "./assets/music/Bob Marley - Is This Love (Official Music Video).mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "No Woman No Cry",
    album: "Single",
    year: 2025,
    artist: "Bob Marley",
    musicPath: "./assets/music/Bob Marley - No Woman No Cry (Lyrics).mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Buffalo Soldier",
    album: "Single",
    year: 2025,
    artist: "Bob Marley",
    musicPath: "./assets/music/Bob Marley -Buffalo Soldier.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Boom",
    album: "Single",
    year: 2025,
    artist: "Tiesto",
    musicPath: "./assets/music/Boom-Tiesto.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Thunder",
    album: "Single",
    year: 2025,
    artist: "Boys Like Girls",
    musicPath: "./assets/music/Boys Like Girls - Thunder (Lyrics).mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Aubrey",
    album: "Single",
    year: 2025,
    artist: "Bread",
    musicPath: "./assets/music/Bread - Aubrey.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Everything I Own",
    album: "Single",
    year: 2025,
    artist: "Bread",
    musicPath: "./assets/music/Bread - Everything I Own (Lyrics).mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "If",
    album: "Single",
    year: 2025,
    artist: "Bread",
    musicPath: "./assets/music/Bread - If.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Piano In The Dark",
    album: "Single",
    year: 2025,
    artist: "Brenda Russell",
    musicPath: "./assets/music/Brenda Russell - Piano In The Dark.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Lintik",
    album: "Single",
    year: 2025,
    artist: "Brownman Revival",
    musicPath: "./assets/music/Brownman Revival - Lintik.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Buko",
    album: "Single",
    year: 2025,
    artist: "Jireh Lim",
    musicPath: "./assets/music/Buko-Jireh Lim.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Buko",
    album: "Single",
    year: 2025,
    artist: "Jireh Lim",
    musicPath: "./assets/music/BukoJireh Lim.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Buster",
    album: "Single",
    year: 2025,
    artist: "Satori",
    musicPath: "./assets/music/Buster-Satori.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Closing Time",
    album: "Single",
    year: 2025,
    artist: "Semisonic",
    musicPath: "./assets/music/Closing Time.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "The Scientist",
    album: "Single",
    year: 2025,
    artist: "Coldplay",
    musicPath: "./assets/music/Coldplay - The Scientist (Official 4K Video).mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Cool Off",
    album: "Single",
    year: 2025,
    artist: "Cool Off",
    musicPath: "./assets/music/Cool Off.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Higher",
    album: "Single",
    year: 2025,
    artist: "Creed",
    musicPath: "./assets/music/Creed - Higher (Lyrics).mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "My Sacrifice",
    album: "Single",
    year: 2025,
    artist: "Creed",
    musicPath: "./assets/music/Creed - My Sacrifice (Official Audio).mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Home",
    album: "Single",
    year: 2025,
    artist: "Daughtry",
    musicPath: "./assets/music/Daughtry - Home (Lyrics).mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Over You",
    album: "Single",
    year: 2025,
    artist: "Daughtry",
    musicPath: "./assets/music/Daughtry - Over You (Lyrics).mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Saksi Ang Langit",
    album: "Single",
    year: 2025,
    artist: "December Avenue",
    musicPath: "./assets/music/December Avenue - Saksi Ang Langit.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Bilog na Naman ang Buwan",
    album: "Single",
    year: 2025,
    artist: "Depression",
    musicPath: "./assets/music/Depression - Bilog na Naman ang Buwan (Lyrics).mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Down with the Sickness",
    album: "Single",
    year: 2025,
    artist: "Disturbed",
    musicPath: "./assets/music/Disturbed - Down with the Sickness [Official Audio].mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "American Pie",
    album: "Single",
    year: 2025,
    artist: "Don McLean",
    musicPath: "./assets/music/Don McLean - American Pie (Lyric Video).mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Ang Huling El Bimbo",
    album: "Single",
    year: 2025,
    artist: "Eraserheads",
    musicPath: "./assets/music/Eraserheads - Ang Huling El Bimbo.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Pare Ko",
    album: "Single",
    year: 2025,
    artist: "Eraserheads",
    musicPath: "./assets/music/Eraserheads - Pare Ko.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "With A Smile",
    album: "Single",
    year: 2025,
    artist: "Eraserheads",
    musicPath: "./assets/music/Eraserheads - With A Smile.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Bring Me To Life",
    album: "Single",
    year: 2025,
    artist: "Evanescence",
    musicPath: "./assets/music/Evanescence - Bring Me To Life.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "679",
    album: "Single",
    year: 2025,
    artist: "Fetty Wap & Monty",
    musicPath: "./assets/music/Fetty Wap & Monty 679.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "I Cry",
    album: "Single",
    year: 2025,
    artist: "Flo Rida",
    musicPath: "./assets/music/Flo Rida - I Cry _ Lyrics.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Inner Circle",
    album: "Single",
    year: 2025,
    artist: "Games people play",
    musicPath: "./assets/music/Games people play - Inner Circle (lyric video) HD.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Simpleng Tao",
    album: "Single",
    year: 2025,
    artist: "Gloc-9",
    musicPath: "./assets/music/Gloc-9 - Simpleng Tao (Lyrics).mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Norem",
    album: "Single",
    year: 2025,
    artist: "Gloc-9 ft. J.Kris, Abaddon, Shanti Dope",
    musicPath: "./assets/music/Gloc-9 ft. J.Kris, Abaddon, Shanti Dope - Norem (Official Music Video).mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Goo Goo Dolls",
    album: "Single",
    year: 2025,
    artist: "Goo Goo Dolls",
    musicPath: "./assets/music/Goo Goo Dolls.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "21 Guns",
    album: "Single",
    year: 2025,
    artist: "Green Day",
    musicPath: "./assets/music/Green Day - 21 Guns (Lyrics).mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Last Night on Earth",
    album: "Single",
    year: 2025,
    artist: "Green Day",
    musicPath: "./assets/music/Green Day - Last Night on Earth.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Wake Me Up When September Ends",
    album: "Single",
    year: 2025,
    artist: "Green Day",
    musicPath: "./assets/music/Green Day - Wake Me Up When September Ends (Official Audio).mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "November Rain",
    album: "Single",
    year: 2025,
    artist: "Guns N' Roses",
    musicPath: "./assets/music/Guns N' Roses - November Rain.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "The Day You Said Goodnight",
    album: "Single",
    year: 2025,
    artist: "Hale",
    musicPath: "./assets/music/Hale - The Day You Said Goodnight.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "HeatWave",
    album: "Single",
    year: 2025,
    artist: "Lime",
    musicPath: "./assets/music/HeatWave-Lime.mp3",
  },

   {
     backgroundImage: "./assets/images/poster-1.jpg",
     posterUrl: "./assets/images/poster-1.jpg",
     title: "I Miss You",
     album: "Single",
     year: 2025,
     artist: "blink-182",
     musicPath: "./assets/music/I Miss You - blink-182 _ Mayonnaise x I Belong To The Zoo.mp3",
   },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "IF I AIN'T GOT YOU",
    album: "Single",
    year: 2025,
    artist: "ROLIN NABABAN",
    musicPath: "./assets/music/IF I AIN'T GOT YOU - ROLIN NABABAN.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "If",
    album: "Single",
    year: 2025,
    artist: "RiverSoul",
    musicPath: "./assets/music/If - RiverSoul.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "In The End",
    album: "Single",
    year: 2025,
    artist: "Linkin Park",
    musicPath: "./assets/music/In The End [Official HD Music Video] - Linkin Park.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Sweat (A La La Long)",
    album: "Single",
    year: 2025,
    artist: "Inner Circle",
    musicPath: "./assets/music/Inner Circle - Sweat (A La La Long).mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Pagsuko",
    album: "Single",
    year: 2025,
    artist: "Jireh Lim",
    musicPath: "./assets/music/Jireh Lim - Pagsuko.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Slipping Through My Fingers",
    album: "Single",
    year: 2025,
    artist: "Jude York",
    musicPath: "./assets/music/Jude York - Slipping Through My Fingers (Live at the TikTok Awards).mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Kabute",
    album: "Single",
    year: 2025,
    artist: "Kabute",
    musicPath: "./assets/music/Kabute (Live at The Cozy Cove).mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Kalapastangan",
    album: "Single",
    year: 2025,
    artist: "fitterkarma",
    musicPath: "./assets/music/Kalapastangan - fitterkarma (Lyrics).mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "First Day High",
    album: "Single",
    year: 2025,
    artist: "Kamikazee",
    musicPath: "./assets/music/Kamikazee - First Day High.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Martyr Nyebera",
    album: "Single",
    year: 2025,
    artist: "Kamikazee",
    musicPath: "./assets/music/Kamikazee - Martyr Nyebera _ Tower Sessions S01E13 (Part 1 of 3).mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Narda",
    album: "Single",
    year: 2025,
    artist: "Kamikazee",
    musicPath: "./assets/music/Kamikazee - Narda.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Chinelas",
    album: "Single",
    year: 2025,
    artist: "Kamikazee",
    musicPath: "./assets/music/Kamikazee Chinelas (320 Kbps).mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Huling Sayaw",
    album: "Single",
    year: 2025,
    artist: "Kamikazee feat. Barbie Almalbis",
    musicPath: "./assets/music/Kamikazee feat. Barbie Almalbis - Huling Sayaw _ Tower Sessions.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Halik",
    album: "Single",
    year: 2025,
    artist: "Kamikazee",
    musicPath: "./assets/music/Kamikazee- Halik.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Somewhere Only We Know",
    album: "Single",
    year: 2025,
    artist: "Keane",
    musicPath: "./assets/music/Keane - Somewhere Only We Know (Official Music Video).mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Cool Down",
    album: "Single",
    year: 2025,
    artist: "Kolohe Kai",
    musicPath: "./assets/music/Kolohe Kai - Cool Down (Lyrics).mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Ehu Girl",
    album: "Single",
    year: 2025,
    artist: "Kolohe Kai",
    musicPath: "./assets/music/Kolohe Kai - Ehu Girl (Lyrics).mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "batman",
    album: "Single",
    year: 2025,
    artist: "LPB Poody",
    musicPath: "./assets/music/LPB Poody, batman.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Lakas Tama",
    album: "Single",
    year: 2025,
    artist: "Mike Kosa Ft. Ayeeman",
    musicPath: "./assets/music/Lakas Tama - Mike Kosa Ft. Ayeeman (Lyrics).mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Let Down",
    album: "Single",
    year: 2025,
    artist: "Radiohead",
    musicPath: "./assets/music/Let Down - Radiohead.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Rollin",
    album: "Single",
    year: 2025,
    artist: "Limp Bizkit",
    musicPath: "./assets/music/Limp Bizkit - Rollin.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Raining in Manila",
    album: "Single",
    year: 2025,
    artist: "Lola Amour",
    musicPath: "./assets/music/Lola Amour - Raining in Manila (Official Lyric Video).mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "The Night We Met",
    album: "Single",
    year: 2025,
    artist: "Lord Huron",
    musicPath: "./assets/music/Lord Huron - The Night We Met (Lyrics).mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Love Grows",
    album: "Single",
    year: 2025,
    artist: "Edison Lighthouse",
    musicPath: "./assets/music/Love Grows - Edison Lighthouse (Lyrics) _ Where my rosemary goes.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Teenagers",
    album: "Single",
    year: 2025,
    artist: "MCR",
    musicPath: "./assets/music/MCR - Teenagers.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "I Don't Love You",
    album: "Single",
    year: 2025,
    artist: "MCR",
    musicPath: "./assets/music/MCR- I Don't Love You.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Materyal",
    album: "Single",
    year: 2025,
    artist: "Shanti Dope",
    musicPath: "./assets/music/Materyal - Shanti Dope.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Enter Sandman",
    album: "Single",
    year: 2025,
    artist: "Metallica",
    musicPath: "./assets/music/Metallica - Enter Sandman Live Moscow 1991 HD.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "The Way You Make Me Feel",
    album: "Single",
    year: 2025,
    artist: "Michael Jackson",
    musicPath: "./assets/music/Michael Jackson - The Way You Make Me Feel (Official Video).mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Momay",
    album: "Single",
    year: 2025,
    artist: "Juan Thugs",
    musicPath: "./assets/music/Momay - Juan Thugs (lyrics).mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Moment Of Truth",
    album: "Single",
    year: 2025,
    artist: "FM Static",
    musicPath: "./assets/music/Moment Of Truth - FM Static (Lyrics) 🎵.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Multo",
    album: "Single",
    year: 2025,
    artist: "Multo",
    musicPath: "./assets/music/Multo (Live at The Cozy Cove).mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Nadarang",
    album: "Single",
    year: 2025,
    artist: "Agsunta Ft.Jroa",
    musicPath: "./assets/music/Nadarang - Agsunta Ft.Jroa.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "I'll Never Go",
    album: "Single",
    year: 2025,
    artist: "Nexxus",
    musicPath: "./assets/music/Nexxus I'll Never Go.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Smells Like Teen Spirit",
    album: "Single",
    year: 2025,
    artist: "Nirvana",
    musicPath: "./assets/music/Nirvana - Smells Like Teen Spirit (Official Music Video).mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Nobela",
    album: "Single",
    year: 2025,
    artist: "Agsunta",
    musicPath: "./assets/music/Nobela-agsunta.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Get Low",
    album: "Single",
    year: 2025,
    artist: "O Side Mafia",
    musicPath: "./assets/music/O Side Mafia - Get Low (Lyrics).mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Heaven Knows",
    album: "Single",
    year: 2025,
    artist: "O&L",
    musicPath: "./assets/music/O&L - Heaven Knows.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Champagne Supernova",
    album: "Single",
    year: 2025,
    artist: "Oasis",
    musicPath: "./assets/music/Oasis - Champagne Supernova.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Don't Look Back In Anger",
    album: "Single",
    year: 2025,
    artist: "Oasis",
    musicPath: "./assets/music/Oasis - Don’t Look Back In Anger.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Stand By Me",
    album: "Single",
    year: 2025,
    artist: "Oasis",
    musicPath: "./assets/music/Oasis - Stand By Me.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Wonderwall",
    album: "Single",
    year: 2025,
    artist: "Oasis",
    musicPath: "./assets/music/Oasis - Wonderwall.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Ocean Deep",
    album: "Single",
    year: 2025,
    artist: "Cliff Richard",
    musicPath: "./assets/music/Ocean Deep - Cliff Richard (Lyrics) 🎵.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "One Last Breath",
    album: "Single",
    year: 2025,
    artist: "Creed",
    musicPath: "./assets/music/One Last Breath (Lyrics) - Creed.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Fireflies",
    album: "Single",
    year: 2025,
    artist: "Owl City",
    musicPath: "./assets/music/Owl City - Fireflies (Lyrics).mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Paraan",
    album: "Single",
    year: 2025,
    artist: "Mayonnaise",
    musicPath: "./assets/music/Paraan- Mayonnaise.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Lutong Bahay",
    album: "Single",
    year: 2025,
    artist: "Parokya Ni Edgar",
    musicPath: "./assets/music/Parokya ni Edgar - Lutong Bahay.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Perfect",
    album: "Single",
    year: 2025,
    artist: "Simple Plan",
    musicPath: "./assets/music/Perfect - Simple Plan (Lyrics) 🎵.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Purple Rain",
    album: "Single",
    year: 2025,
    artist: "Prince",
    musicPath: "./assets/music/Prince - Purple Rain (Lyrics).mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Pwede Ba",
    album: "Live at The Cozy Cove",
    year: 2025,
    artist: "Soapdish",
    musicPath: "./assets/music/Pwede Ba (Live at The Cozy Cove) - Soapdish [UyVXS6iLRI0].mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "I Want To Break Free",
    album: "Single",
    year: 2025,
    artist: "Queen",
    musicPath: "./assets/music/Queen - I Want To Break Free (Official Video).mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "We Will Rock You",
    album: "Single",
    year: 2025,
    artist: "Queen",
    musicPath: "./assets/music/Queen - We Will Rock You (Official Video).mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Californication",
    album: "Single",
    year: 2025,
    artist: "Red Hot Chili Peppers",
    musicPath: "./assets/music/Red Hot Chili Peppers - Californication (Official Music Video) [HD UPGRADE].mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "You'll Be Safe Here",
    album: "Single",
    year: 2025,
    artist: "Rico Blanco",
    musicPath: "./assets/music/Rico Blanco - You’ll Be Safe Here (Official Lyric Video).mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "214",
    album: "Single",
    year: 2025,
    artist: "Rivermaya",
    musicPath: "./assets/music/Rivermaya - 214 [Lyric Video].mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Ikaw Sana",
    album: "Single",
    year: 2025,
    artist: "Rob Deniel",
    musicPath: "./assets/music/Rob Deniel Ikaw sana.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Have You Ever Seen The Rain",
    album: "Single",
    year: 2025,
    artist: "Rod Stewart",
    musicPath: "./assets/music/Rod Stewart - Have You Ever Seen The Rain (Lyrics).mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "SBG",
    album: "Single",
    year: 2025,
    artist: "SBG",
    musicPath: "./assets/music/SBG.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Sa Susunod Na Habang Buhay",
    album: "Single",
    year: 2025,
    artist: "Sa Susunod Na Habang Buhay",
    musicPath: "./assets/music/Sa Susunod Na Habang Buhay.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "It Wasn't Me",
    album: "Single",
    year: 2025,
    artist: "Shaggy feat. RikRok",
    musicPath: "./assets/music/Shaggy (feat. RikRok) - It Wasn't Me (Lyrics).mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Angel",
    album: "Single",
    year: 2025,
    artist: "Shaggy",
    musicPath: "./assets/music/Shaggy - Angel ft. Rayvon.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Nadarang",
    album: "Single",
    year: 2025,
    artist: "Shanti Dope",
    musicPath: "./assets/music/Shanti Dope - Nadarang (Lyrics).mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Shantidope",
    album: "Single",
    year: 2025,
    artist: "Shanti Dope x Gloc-9",
    musicPath: "./assets/music/Shanti Dope x Gloc-9 - Shantidope (Official Lyric Video).mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Kabataan Para Sa Kinabukasan",
    album: "Single",
    year: 2025,
    artist: "Shotgun Combo",
    musicPath: "./assets/music/Shotgun Combo - Kabataan Para Sa Kinabukasan (Francis M Cover) (Lyrics).mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Jet Lag",
    album: "Single",
    year: 2025,
    artist: "Simple Plan ft. Marie-Mai",
    musicPath: "./assets/music/Simple Plan - Jet Lag ft. Marie-Mai (Official Video).mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Welcome To My Life",
    album: "Single",
    year: 2025,
    artist: "Simple Plan",
    musicPath: "./assets/music/Simple Plan - Welcome To My Life (Official Video).mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Kiss Me",
    album: "Single",
    year: 2025,
    artist: "Sixpence None the Richer",
    musicPath: "./assets/music/Sixpence None the Richer - Kiss Me.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Pwede Ba",
    album: "Single",
    year: 2025,
    artist: "Soapdish",
    musicPath: "./assets/music/Soapdish - Pwede Ba [9s8MtpdRRmQ].mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Stigmatized",
    album: "Single",
    year: 2025,
    artist: "The Calling",
    musicPath: "./assets/music/Stigmatized - The Calling.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Stop Crying Your Heart Out",
    album: "Single",
    year: 2025,
    artist: "Oasis",
    musicPath: "./assets/music/Stop Crying Your Heart Out.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Santeria",
    album: "Single",
    year: 2025,
    artist: "Sublime",
    musicPath: "./assets/music/Sublime - Santeria __ Lyrics.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Sweet Child O Mine",
    album: "Single",
    year: 2025,
    artist: "Guns N' Roses",
    musicPath: "./assets/music/Sweet Child O Mine.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "711",
    album: "Single",
    year: 2025,
    artist: "TONEEJAY",
    musicPath: "./assets/music/TONEEJAY - 711 (Official Lyric Video).mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Tahanan",
    album: "Live at The Cozy Cove",
    year: 2025,
    artist: "Tahanan",
    musicPath: "./assets/music/Tahanan (Live at The Cozy Cove).mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Tao Lang",
    album: "Live at The Cozy Cove",
    year: 2025,
    artist: "Loonie, Dionela",
    musicPath: "./assets/music/Tao Lang (Live at The Cozy Cove) - Loonie, Dionela.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Number One",
    album: "Single",
    year: 2025,
    artist: "Tendo ft. Vito",
    musicPath: "./assets/music/Tendo - Number One (slowed + reverb) ft. Vito (Lyrics) _She's my number one_ [UJMzv6K7WCc].mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Tensionado",
    album: "Single",
    year: 2025,
    artist: "Soapdish",
    musicPath: "./assets/music/Tensionado- Soapdish.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "About You",
    album: "Single",
    year: 2025,
    artist: "The 1975",
    musicPath: "./assets/music/The 1975 - About You.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Ale",
    album: "Single",
    year: 2025,
    artist: "The Bloomfields",
    musicPath: "./assets/music/The Bloomfields - Ale (Lyrics) .mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Zombie",
    album: "Single",
    year: 2025,
    artist: "The Cranberries",
    musicPath: "./assets/music/The Cranberries - Zombie.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Look After You",
    album: "Single",
    year: 2025,
    artist: "The Fray",
    musicPath: "./assets/music/The Fray - Look After You.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "The Man Who Can't Be Moved",
    album: "Single",
    year: 2025,
    artist: "The Script",
    musicPath: "./assets/music/The Script - The Man Who Can't Be Moved.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Please, Please, Please Let Me Get What I Want",
    album: "Single",
    year: 2025,
    artist: "The Smiths",
    musicPath: "./assets/music/The Smiths - Please, Please, Please Let Me Get What I Want (Official Lyric Video).mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "I Love You So",
    album: "Single",
    year: 2025,
    artist: "The Walters",
    musicPath: "./assets/music/The Walters -- I Love You So.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Multo Sa Paningin",
    album: "Single",
    year: 2025,
    artist: "The Youth",
    musicPath: "./assets/music/The Youth - Multo Sa Paningin - (Official Lyric Video).mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Tsinelas",
    album: "Single",
    year: 2025,
    artist: "Enchi band",
    musicPath: "./assets/music/Tsinelas by Enchi band.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Red Red Wine",
    album: "Single",
    year: 2025,
    artist: "UB40",
    musicPath: "./assets/music/UB40 - Red Red Wine (Lyrics).mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Welcome To The Jungle",
    album: "Single",
    year: 2025,
    artist: "Guns N' Roses",
    musicPath: "./assets/music/Welcome To The Jungle.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Teenage Dirtbag",
    album: "Single",
    year: 2025,
    artist: "Wheatus",
    musicPath: "./assets/music/Wheatus - Teenage Dirtbag.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Greatest Love Of All",
    album: "Single",
    year: 2025,
    artist: "Whitney Houston",
    musicPath: "./assets/music/Whitney Greatest Love Of All.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Halik Ni Hudas",
    album: "Single",
    year: 2025,
    artist: "Wolfgang",
    musicPath: "./assets/music/Wolfgang - Halik Ni Hudas (Official Lyric Video).mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "YOUR UNIVERSE",
    album: "Single",
    year: 2025,
    artist: "Rico Blanco",
    musicPath: "./assets/music/YOUR UNIVERSE _ RICO BLANCO.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Tsinelas",
    album: "Single",
    year: 2025,
    artist: "Yano",
    musicPath: "./assets/music/Yano - tsinelas.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Yellow",
    album: "Single",
    year: 2025,
    artist: "Mayonaise",
    musicPath: "./assets/music/Yellow - Mayonaise.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Sayang",
    album: "Single",
    year: 2025,
    artist: "Parokya Ni Edgar",
    musicPath: "./assets/music/[04] Parokya Ni Edgar - Sayang.mp3",
  },

  {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "3 Stars and a Sun",
    album: "Single",
    year: 2025,
    artist: "3 Stars and a Sun",
    musicPath: "./assets/music/[15] 3 stars and a sun.mp3",
  },
    {
  backgroundImage: "./assets/images/poster-1.jpg",
  posterUrl: "./assets/images/poster-1.jpg",
  title: "Cintamu Sepahit Topi Miring",
  album: "Single",
  year: 2025,
  artist: "Jogja Hip Hop Foundation",
  musicPath: "./assets/music/Cintamu Sepahit Topi Miring - Jogja Hip Hop Foundation _ Sengkuni lede lede _ Lirik Lagu.mp3",
},

{
  backgroundImage: "./assets/images/poster-1.jpg",
  posterUrl: "./assets/images/poster-1.jpg",
  title: "Song To My Friend",
  album: "Single",
  year: 2025,
  artist: "Defamilita",
  musicPath: "./assets/music/Defamilita - Song To My Friend Remastered (Official Music Video).mp3",
},

{
  backgroundImage: "./assets/images/poster-1.jpg",
  posterUrl: "./assets/images/poster-1.jpg",
  title: "LASIK",
  album: "Single",
  year: 2025,
  artist: "HEY JUNE!",
  musicPath: "./assets/music/HEY JUNE! - LASIK (Narrative Music Video).mp3",
},

{
  backgroundImage: "./assets/images/poster-1.jpg",
  posterUrl: "./assets/images/poster-1.jpg",
  title: "Can't Fight This Feeling",
  album: "Single",
  year: 2025,
  artist: "REO Speedwagon",
  musicPath: "./assets/music/REO Speedwagon - Can't Fight This Feeling (Official HD Video).mp3",
},

{
  backgroundImage: "./assets/images/poster-1.jpg",
  posterUrl: "./assets/images/poster-1.jpg",
  title: "In My Dreams",
  album: "Single",
  year: 2025,
  artist: "REO Speedwagon",
  musicPath: "./assets/music/REO Speedwagon - In My Dreams (Lyrics).mp3",
},

{
  backgroundImage: "./assets/images/poster-1.jpg",
  posterUrl: "./assets/images/poster-1.jpg",
  title: "Keep On Loving You",
  album: "Single",
  year: 2025,
  artist: "REO Speedwagon",
  musicPath: "./assets/music/REO Speedwagon - Keep On Loving You (Lyrics).mp3",
},

{
  backgroundImage: "./assets/images/poster-1.jpg",
  posterUrl: "./assets/images/poster-1.jpg",
  title: "WE DON'T CARE",
  album: "Single",
  year: 2025,
  artist: "XMAN NDUGAL",
  musicPath: "./assets/music/XMAN NDUGAL - WE DON'T CARE (Official Lyric Video).mp3",
},
];


'use strict';

/* =========================================================
   MUSIC PLAYER
   COMPLETE CONTROLLER
   SIDEBAR FIXED

   IMPORTANT:
   - Keep your existing musicData array above this code.
   - Do NOT keep the old controller below it.
   ========================================================= */


/* =========================================================
   HELPERS
   ========================================================= */

const $ = (selector) =>
  document.querySelector(selector);

const $$ = (selector) =>
  document.querySelectorAll(selector);


function escapeHTML(value) {

  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');

}


function getTimecode(seconds) {

  if (!Number.isFinite(seconds)) {
    return '0:00';
  }

  const minutes =
    Math.floor(seconds / 60);

  const remaining =
    Math.floor(seconds % 60);

  return `${minutes}:${remaining < 10 ? '0' : ''}${remaining}`;

}


/* =========================================================
   STORAGE
   ========================================================= */

function loadStorage(
  key,
  fallback
) {

  try {

    const stored =
      localStorage.getItem(key);

    if (!stored) {
      return fallback;
    }

    const parsed =
      JSON.parse(stored);

    return Array.isArray(parsed)
      ? parsed
      : fallback;

  } catch (error) {

    console.warn(
      `Unable to read ${key}:`,
      error
    );

    return fallback;

  }

}


function saveStorage(
  key,
  value
) {

  try {

    localStorage.setItem(
      key,
      JSON.stringify(value)
    );

  } catch (error) {

    console.warn(
      `Unable to save ${key}:`,
      error
    );

  }

}


/* =========================================================
   ELEMENTS
   ========================================================= */

const app =
  $('.app');

const sidebar =
  $('.sidebar');

const mobileMenu =
  $('[data-mobile-menu]');

const overlay =
  $('[data-overlay]');

const sidebarLibraryLinks =
  $$('[data-sidebar-library]');

const navItems =
  $$('.nav-item');


/* HOME */

const quickList =
  $('[data-quick-list]');

const recentlyPlayedList =
  $('[data-recently-played]');

const topMixesList =
  $('[data-top-mixes]');

const showRecentBtn =
  $('[data-show-recent]');

const showMixesBtn =
  $('[data-show-mixes]');


/* LIBRARY */

const playlistPanel =
  $('[data-playlist]');

const playlist =
  $('[data-library-list]');

const playlistClose =
  $('[data-playlist-close]');

const playlistSearch =
  $('[data-music-search]');

const libraryTitle =
  $('[data-library-title]');

const libraryTabs =
  $$('[data-library-tab]');

const sortButtons =
  $$('[data-sort]');


/* PLAYER */

const playerBanner =
  $('[data-player-banner]');

const playerTitle =
  $('[data-title]');

const playerArtist =
  $('[data-artist]');

const playerDuration =
  $('[data-duration]');

const playerRunningTime =
  $('[data-running-time]');

const playerSeekRange =
  $('[data-seek]');

const playerVolumeRange =
  $('[data-volume]');

const playerVolumeButton =
  $('[data-volume-btn]');

const playButton =
  $('[data-play-btn]');

const skipNextButton =
  $('[data-skip-next]');

const skipPreviousButton =
  $('[data-skip-prev]');

const shuffleButton =
  $('[data-shuffle]');

const repeatButton =
  $('[data-repeat]');


/* NOW PLAYING */

const nowPlayingPanel =
  $('.now-playing');

const nowPlayingArt =
  $('.now-playing-art');

const nowPlayingImage =
  $('[data-now-playing-image]');

const nowPlayingTitle =
  $('[data-now-playing-title]');

const nowPlayingArtist =
  $('[data-now-playing-artist]');


/* =========================================================
   AUDIO
   ========================================================= */

const audio =
  new Audio();

audio.preload =
  'metadata';

audio.volume =
  1;


/* =========================================================
   STATE
   ========================================================= */

let currentMusic =
  0;

let isPlaying =
  false;

let isShuffled =
  false;

let isRepeating =
  false;

let currentLibraryTab =
  'all';

let currentSort =
  'default';

let showAllRecent =
  false;

let showAllMixes =
  false;

let timer =
  null;

let lastVolume =
  1;


/* =========================================================
   STORAGE STATE
   ========================================================= */

let recentSongs =
  loadStorage(
    'music_recent',
    []
  );

let favoriteSongs =
  loadStorage(
    'music_favorites',
    []
  );


/* =========================================================
   HELPERS
   ========================================================= */

function getMusic(index) {
  return musicData[index];
}


function getMusicIndex(music) {
  return musicData.indexOf(music);
}


function isFavorite(index) {
  return favoriteSongs.includes(index);
}


function isMobile() {
  return window.innerWidth <= 800;
}


/* =========================================================
   RANGE
   ========================================================= */

function updateRangeFill(range) {

  if (!range) {
    return;
  }

  const fill =
    range.parentElement?.querySelector(
      '[data-range-fill]'
    );

  if (!fill) {
    return;
  }

  const max =
    Number(range.max);

  const value =
    Number(range.value);

  if (
    !Number.isFinite(max) ||
    max <= 0
  ) {

    fill.style.width =
      '0%';

    return;

  }

  const percentage =
    Math.max(
      0,
      Math.min(
        100,
        (value / max) * 100
      )
    );

  fill.style.width =
    `${percentage}%`;

}


function updateAllRangeFills() {

  $$('[data-range]')
    .forEach(
      updateRangeFill
    );

}


/* =========================================================
   FAVORITES
   ========================================================= */

function toggleFavorite(index) {

  if (
    !Number.isInteger(index) ||
    !musicData[index]
  ) {
    return;
  }

  if (
    favoriteSongs.includes(index)
  ) {

    favoriteSongs =
      favoriteSongs.filter(
        item =>
          item !== index
      );

  } else {

    favoriteSongs.push(index);

  }

  saveStorage(
    'music_favorites',
    favoriteSongs
  );

  updateFavoriteButtons();

  renderHome();

  refreshLibrary();

}


function updateFavoriteButtons() {

  $$('[data-favorite]')
    .forEach(
      button => {

        let index =
          Number(
            button.dataset.favorite
          );

        if (
          !Number.isInteger(index) ||
          index < 0 ||
          index >= musicData.length
        ) {

          index =
            currentMusic;

        }

        const active =
          isFavorite(index);

        button.dataset.favorite =
          String(index);

        button.classList.toggle(
          'active',
          active
        );

        const icon =
          button.querySelector(
            '.material-symbols-rounded'
          );

        if (icon) {

          icon.textContent =
            active
              ? 'favorite'
              : 'favorite_border';

        }

        button.setAttribute(
          'aria-label',
          active
            ? 'Remove from favorites'
            : 'Add to favorites'
        );

      }
    );

}


function createFavoriteButton(index) {

  const button =
    document.createElement(
      'button'
    );

  button.type =
    'button';

  button.className =
    'btn-icon favorite-btn';

  button.dataset.favorite =
    String(index);

  button.innerHTML = `
    <span class="material-symbols-rounded">
      ${
        isFavorite(index)
          ? 'favorite'
          : 'favorite_border'
      }
    </span>
  `;

  button.addEventListener(
    'click',
    event => {

      event.preventDefault();
      event.stopPropagation();

      toggleFavorite(index);

    }
  );

  return button;

}


/* =========================================================
   RECENTLY PLAYED
   ========================================================= */

function addToRecentlyPlayed(index) {

  recentSongs =
    recentSongs.filter(
      item =>
        item !== index
    );

  recentSongs.unshift(index);

  recentSongs =
    recentSongs.slice(
      0,
      50
    );

  saveStorage(
    'music_recent',
    recentSongs
  );

}


function getRecentMusic() {

  return recentSongs
    .map(
      index =>
        musicData[index]
    )
    .filter(Boolean);

}


/* =========================================================
   MUSIC CARD
   ========================================================= */

function createMusicCard(music) {

  const index =
    getMusicIndex(music);

  const article =
    document.createElement(
      'article'
    );

  article.className =
    'music-card';

  article.dataset.musicIndex =
    String(index);

  article.innerHTML = `
    <div class="music-card-image">

      <img
        src="${escapeHTML(music.posterUrl)}"
        alt="${escapeHTML(music.title)}"
        loading="lazy"
      >

      <button
        type="button"
        class="card-play"
        data-card-play
        aria-label="Play ${escapeHTML(music.title)}"
      >

        <span class="material-symbols-rounded">
          play_arrow
        </span>

      </button>

    </div>

    <div class="music-card-info">

      <div class="music-card-text">

        <h3>
          ${escapeHTML(music.title)}
        </h3>

        <p>
          ${escapeHTML(music.artist)}
        </p>

      </div>

    </div>
  `;

  const info =
    article.querySelector(
      '.music-card-info'
    );

  if (info) {

    info.appendChild(
      createFavoriteButton(
        index
      )
    );

  }

  const cardPlay =
    article.querySelector(
      '[data-card-play]'
    );

  cardPlay?.addEventListener(
    'click',
    event => {

      event.preventDefault();
      event.stopPropagation();

      loadMusic(
        index,
        true
      );

    }
  );

  article.addEventListener(
    'click',
    event => {

      if (
        event.target.closest(
          '[data-favorite]'
        )
      ) {
        return;
      }

      if (
        event.target.closest(
          '[data-card-play]'
        )
      ) {
        return;
      }

      loadMusic(
        index,
        true
      );

    }
  );

  return article;

}


/* =========================================================
   CARD LIST
   ========================================================= */

function renderCardList(
  container,
  list
) {

  if (!container) {
    return;
  }

  container.innerHTML =
    '';

  if (
    !Array.isArray(list) ||
    list.length === 0
  ) {

    container.innerHTML = `
      <div class="empty-playlist">

        <span class="material-symbols-rounded">
          music_off
        </span>

        <p>
          No songs found
        </p>

      </div>
    `;

    return;

  }

  const fragment =
    document.createDocumentFragment();

  list.forEach(
    music => {

      fragment.appendChild(
        createMusicCard(music)
      );

    }
  );

  container.appendChild(
    fragment
  );

  updateFavoriteButtons();

  updatePlayingCards();

}


/* =========================================================
   PLAYING CARDS
   ========================================================= */

function updatePlayingCards() {

  $$('.music-card')
    .forEach(
      card => {

        const index =
          Number(
            card.dataset.musicIndex
          );

        const active =
          isPlaying &&
          index === currentMusic;

        card.classList.toggle(
          'is-playing',
          active
        );

        const icon =
          card.querySelector(
            '[data-card-play] .material-symbols-rounded'
          );

        if (icon) {

          icon.textContent =
            active
              ? 'pause'
              : 'play_arrow';

        }

      }
    );

}


/* =========================================================
   QUICK PLAYLISTS
   ========================================================= */

function renderQuickPlaylists() {

  if (!quickList) {
    return;
  }

  quickList.innerHTML =
    '';

  const items = [

    {
      title: 'All Songs',
      icon: 'library_music',
      tab: 'all'
    },

    {
      title: 'Recently Played',
      icon: 'history',
      tab: 'recent'
    },

    {
      title: 'Favorites',
      icon: 'favorite',
      tab: 'favorites'
    },

    {
      title: 'Artists',
      icon: 'person',
      tab: 'artists'
    }

  ];

  items.forEach(
    item => {

      const button =
        document.createElement(
          'button'
        );

      button.type =
        'button';

      button.className =
        'quick-card';

      button.innerHTML = `
        <span class="material-symbols-rounded">
          ${item.icon}
        </span>

        <span>
          ${item.title}
        </span>

        <span class="quick-play">

          <span class="material-symbols-rounded">
            play_arrow
          </span>

        </span>
      `;

      button.addEventListener(
        'click',
        () => {

          openLibrary(
            item.tab
          );

        }
      );

      quickList.appendChild(
        button
      );

    }
  );

}


/* =========================================================
   HOME RECENT
   ========================================================= */

function renderRecentlyPlayed() {

  if (!recentlyPlayedList) {
    return;
  }

  let songs =
    getRecentMusic();

  if (!songs.length) {

    songs =
      musicData.slice(
        0,
        6
      );

  }

  if (!showAllRecent) {

    songs =
      songs.slice(
        0,
        6
      );

  }

  renderCardList(
    recentlyPlayedList,
    songs
  );

}


/* =========================================================
   HOME MIXES
   ========================================================= */

function renderTopMixes() {

  if (!topMixesList) {
    return;
  }

  const mixes = [];

  const artists =
    new Set();

  for (
    const music of musicData
  ) {

    if (
      !artists.has(
        music.artist
      )
    ) {

      mixes.push(
        music
      );

      artists.add(
        music.artist
      );

    }

    if (
      mixes.length >= 10
    ) {
      break;
    }

  }

  const visible =
    showAllMixes
      ? mixes
      : mixes.slice(
          0,
          6
        );

  renderCardList(
    topMixesList,
    visible
  );

}


/* =========================================================
   HOME
   ========================================================= */

function renderHome() {

  renderQuickPlaylists();

  renderRecentlyPlayed();

  renderTopMixes();

}


/* =========================================================
   LIBRARY DATA
   ========================================================= */

function getLibrarySongs() {

  switch (
    currentLibraryTab
  ) {

    case 'recent':

      return getRecentMusic();


    case 'favorites':

      return favoriteSongs
        .map(
          index =>
            musicData[index]
        )
        .filter(Boolean);


    case 'artists':

      return [
        ...musicData
      ].sort(
        (a, b) =>

          a.artist.localeCompare(
            b.artist
          ) ||

          a.title.localeCompare(
            b.title
          )
      );


    case 'albums':

      return [
        ...musicData
      ].sort(
        (a, b) =>

          a.album.localeCompare(
            b.album
          ) ||

          a.artist.localeCompare(
            b.artist
          ) ||

          a.title.localeCompare(
            b.title
          )
      );


    case 'all':

    default:

      return [
        ...musicData
      ];

  }

}


/* =========================================================
   SEARCH
   ========================================================= */

function applySearch(list) {

  if (!playlistSearch) {
    return list;
  }

  const query =
    playlistSearch.value
      .trim()
      .toLowerCase();

  if (!query) {
    return list;
  }

  return list.filter(
    music =>

      music.title
        .toLowerCase()
        .includes(query) ||

      music.artist
        .toLowerCase()
        .includes(query) ||

      music.album
        .toLowerCase()
        .includes(query)

  );

}


/* =========================================================
   SORT
   ========================================================= */

function applySort(list) {

  const result =
    [...list];

  switch (
    currentSort
  ) {

    case 'title-asc':

      result.sort(
        (a, b) =>
          a.title.localeCompare(
            b.title
          )
      );

      break;


    case 'title-desc':

      result.sort(
        (a, b) =>
          b.title.localeCompare(
            a.title
          )
      );

      break;


    case 'artist-asc':

      result.sort(
        (a, b) =>

          a.artist.localeCompare(
            b.artist
          ) ||

          a.title.localeCompare(
            b.title
          )
      );

      break;


    case 'artist-desc':

      result.sort(
        (a, b) =>

          b.artist.localeCompare(
            a.artist
          ) ||

          a.title.localeCompare(
            b.title
          )
      );

      break;


    case 'album-asc':

      result.sort(
        (a, b) =>

          a.album.localeCompare(
            b.album
          ) ||

          a.title.localeCompare(
            b.title
          )
      );

      break;

  }

  return result;

}


/* =========================================================
   LIBRARY RENDER
   ========================================================= */

function renderLibraryList(list) {

  if (!playlist) {
    return;
  }

  playlist.innerHTML =
    '';

  if (
    !Array.isArray(list) ||
    list.length === 0
  ) {

    playlist.innerHTML = `
      <li class="empty-playlist">

        <span class="material-symbols-rounded">
          music_off
        </span>

        <p>
          No songs found
        </p>

      </li>
    `;

    return;

  }

  const fragment =
    document.createDocumentFragment();

  list.forEach(
    music => {

      const index =
        getMusicIndex(
          music
        );

      const li =
        document.createElement(
          'li'
        );

      const button =
        document.createElement(
          'button'
        );

      button.type =
        'button';

      button.className =
        'music-item';

      button.dataset.playlistItem =
        String(index);

      const active =
        index === currentMusic &&
        isPlaying;

      button.classList.toggle(
        'playing',
        active
      );

      button.innerHTML = `
        <img
          src="${escapeHTML(music.posterUrl)}"
          alt="${escapeHTML(music.title)}"
          loading="lazy"
        >

        <div class="item-info">

          <strong class="item-title">
            ${escapeHTML(music.title)}
          </strong>

          <span class="item-artist">
            ${escapeHTML(music.artist)}
          </span>

        </div>

        <div class="item-icon">

          <span class="material-symbols-rounded">
            ${
              active
                ? 'equalizer'
                : 'play_arrow'
            }
          </span>

        </div>
      `;

      button.addEventListener(
        'click',
        () => {

          loadMusic(
            index,
            true
          );

          closeLibrary();

        }
      );

      li.appendChild(
        button
      );

      fragment.appendChild(
        li
      );

    }
  );

  playlist.appendChild(
    fragment
  );

}


/* =========================================================
   LIBRARY TITLE
   ========================================================= */

function updateLibraryTitle() {

  if (!libraryTitle) {
    return;
  }

  const titles = {

    all:
      'All Songs',

    recent:
      'Recently Played',

    favorites:
      'Favorites',

    artists:
      'Artists',

    albums:
      'Albums'

  };

  libraryTitle.textContent =
    titles[currentLibraryTab]
    || 'All Songs';

}


/* =========================================================
   LIBRARY REFRESH
   ========================================================= */

function refreshLibrary() {

  let songs =
    getLibrarySongs();

  songs =
    applySearch(
      songs
    );

  songs =
    applySort(
      songs
    );

  renderLibraryList(
    songs
  );

  updateLibraryTitle();

  updateFavoriteButtons();

  updateLibraryActiveState();

}


/* =========================================================
   OPEN LIBRARY
   IMPORTANT FIX:
   DOES NOT OPEN SIDEBAR
   DOES NOT REMOVE sidebar-collapsed
   ========================================================= */

function openLibrary(
  tab = 'all'
) {

  const validTabs = [
    'all',
    'recent',
    'favorites',
    'artists',
    'albums'
  ];

  currentLibraryTab =
    validTabs.includes(tab)
      ? tab
      : 'all';


  /*
   * On mobile, close the sidebar.
   *
   * On desktop, DO NOT change the
   * sidebar collapsed/expanded state.
   */

  if (isMobile()) {

    closeMobileSidebar(
      false
    );

  }


  /*
   * Open library panel.
   */

  playlistPanel?.classList.add(
    'active'
  );


  /*
   * Overlay is only needed for
   * the library panel.
   */

  overlay?.classList.add(
    'active'
  );


  document.body.classList.add(
    'modalActive'
  );


  /*
   * Highlight active tab.
   */

  libraryTabs.forEach(
    button => {

      button.classList.toggle(
        'active',
        button.dataset.libraryTab ===
          currentLibraryTab
      );

    }
  );


  refreshLibrary();

}


/* =========================================================
   CLOSE LIBRARY
   ========================================================= */

function closeLibrary() {

  playlistPanel?.classList.remove(
    'active'
  );

  document.body.classList.remove(
    'modalActive'
  );


  /*
   * Do not touch sidebar state.
   */

  if (
    !sidebar?.classList.contains(
      'active'
    )
  ) {

    overlay?.classList.remove(
      'active'
    );

  }

}


/* =========================================================
   LIBRARY TABS
   ========================================================= */

libraryTabs.forEach(
  button => {

    button.addEventListener(
      'click',
      event => {

        event.preventDefault();

        openLibrary(
          button.dataset.libraryTab
          || 'all'
        );

      }
    );

  }
);


/* =========================================================
   SIDEBAR LIBRARY BUTTONS
   ========================================================= */

sidebarLibraryLinks.forEach(
  button => {

    button.addEventListener(
      'click',
      event => {

        event.preventDefault();
        event.stopPropagation();

        /*
         * Save the requested library tab.
         */

        const tab =
          button.dataset.sidebarLibrary
          || 'all';


        /*
         * MOBILE:
         * close sidebar first.
         *
         * DESKTOP:
         * leave sidebar exactly as it is.
         */

        if (isMobile()) {

          closeMobileSidebar(
            false
          );

        }


        /*
         * Open the library.
         *
         * This does NOT expand
         * a collapsed desktop sidebar.
         */

        openLibrary(
          tab
        );

      }
    );

  }
);


/* =========================================================
   TOP NAVIGATION
   ========================================================= */

navItems.forEach(
  nav => {

    nav.addEventListener(
      'click',
      event => {

        event.preventDefault();

        const destination =
          nav.dataset.nav;


        navItems.forEach(
          item => {

            item.classList.remove(
              'active'
            );

          }
        );

        nav.classList.add(
          'active'
        );


        if (
          destination === 'home'
        ) {

          closeLibrary();

          if (isMobile()) {

            closeMobileSidebar();

          }


          $('.home')?.scrollTo({
            top: 0,
            behavior: 'smooth'
          });

          return;

        }


        if (
          destination === 'library'
        ) {

          openLibrary(
            'all'
          );

          return;

        }


        if (
          destination === 'search'
        ) {

          openLibrary(
            'all'
          );

          setTimeout(
            () => {

              playlistSearch?.focus();

            },
            150
          );

        }

      }
    );

  }
);


/* =========================================================
   SEARCH
   ========================================================= */

playlistSearch?.addEventListener(
  'input',
  refreshLibrary
);


/* =========================================================
   SORT
   ========================================================= */

sortButtons.forEach(
  button => {

    button.addEventListener(
      'click',
      event => {

        event.preventDefault();

        sortButtons.forEach(
          item => {

            item.classList.remove(
              'active'
            );

          }
        );

        button.classList.add(
          'active'
        );

        currentSort =
          button.dataset.sort
          || 'default';

        refreshLibrary();

      }
    );

  }
);


/* =========================================================
   CLOSE LIBRARY
   ========================================================= */

playlistClose?.addEventListener(
  'click',
  closeLibrary
);


/* =========================================================
   SHOW ALL RECENT
   ========================================================= */

showRecentBtn?.addEventListener(
  'click',
  event => {

    event.preventDefault();

    showAllRecent =
      !showAllRecent;

    showRecentBtn.textContent =
      showAllRecent
        ? 'Show less'
        : 'Show all';

    renderRecentlyPlayed();

  }
);


/* =========================================================
   SHOW ALL MIXES
   ========================================================= */

showMixesBtn?.addEventListener(
  'click',
  event => {

    event.preventDefault();

    showAllMixes =
      !showAllMixes;

    showMixesBtn.textContent =
      showAllMixes
        ? 'Show less'
        : 'Show all';

    renderTopMixes();

  }
);


/* =========================================================
   SIDEBAR
   ========================================================= */

/*
 * DESKTOP:
 * hamburger collapses/expands sidebar.
 */

function collapseDesktopSidebar() {

  if (!app) {
    return;
  }

  app.classList.add(
    'sidebar-collapsed'
  );

  mobileMenu?.setAttribute(
    'aria-label',
    'Expand sidebar'
  );

}


function expandDesktopSidebar() {

  if (!app) {
    return;
  }

  app.classList.remove(
    'sidebar-collapsed'
  );

  mobileMenu?.setAttribute(
    'aria-label',
    'Collapse sidebar'
  );

}


function toggleDesktopSidebar() {

  if (!app) {
    return;
  }

  if (
    app.classList.contains(
      'sidebar-collapsed'
    )
  ) {

    expandDesktopSidebar();

  } else {

    collapseDesktopSidebar();

  }

}


/*
 * MOBILE:
 * hamburger opens/closes sidebar.
 */

function openMobileSidebar() {

  if (!sidebar) {
    return;
  }

  /*
   * Close library.
   */

  playlistPanel?.classList.remove(
    'active'
  );

  document.body.classList.remove(
    'modalActive'
  );


  /*
   * Open sidebar.
   */

  sidebar.classList.add(
    'active'
  );


  /*
   * Overlay.
   */

  overlay?.classList.add(
    'active'
  );


  /*
   * Lock body.
   */

  document.body.classList.add(
    'sidebar-open'
  );


  mobileMenu?.setAttribute(
    'aria-label',
    'Close menu'
  );

}


function closeMobileSidebar(
  removeOverlay = true
) {

  sidebar?.classList.remove(
    'active'
  );

  document.body.classList.remove(
    'sidebar-open'
  );


  mobileMenu?.setAttribute(
    'aria-label',
    isMobile()
      ? 'Open menu'
      : (
          app?.classList.contains(
            'sidebar-collapsed'
          )
            ? 'Expand sidebar'
            : 'Collapse sidebar'
        )
  );


  if (
    removeOverlay &&
    !playlistPanel?.classList.contains(
      'active'
    )
  ) {

    overlay?.classList.remove(
      'active'
    );

  }

}


function toggleSidebar() {

  if (isMobile()) {

    if (
      sidebar?.classList.contains(
        'active'
      )
    ) {

      closeMobileSidebar();

    } else {

      openMobileSidebar();

    }

    return;

  }


  /*
   * DESKTOP
   */

  toggleDesktopSidebar();

}


/* =========================================================
   HAMBURGER
   ONLY ONE EVENT LISTENER
   ========================================================= */

mobileMenu?.addEventListener(
  'click',
  event => {

    event.preventDefault();
    event.stopPropagation();

    toggleSidebar();

  }
);


/* =========================================================
   OVERLAY
   ========================================================= */

overlay?.addEventListener(
  'click',
  event => {

    event.preventDefault();
    event.stopPropagation();

    closeLibrary();

    closeMobileSidebar();

  }
);


/* =========================================================
   ESCAPE
   ========================================================= */

document.addEventListener(
  'keydown',
  event => {

    if (
      event.key !== 'Escape'
    ) {
      return;
    }

    closeLibrary();

    closeMobileSidebar();

  }
);


/* =========================================================
   RESIZE
   ========================================================= */

window.addEventListener(
  'resize',
  () => {

    if (isMobile()) {

      /*
       * Mobile does not use desktop
       * grid collapse.
       */

      app?.classList.remove(
        'sidebar-collapsed'
      );


      const open =
        sidebar?.classList.contains(
          'active'
        );

      mobileMenu?.setAttribute(
        'aria-label',
        open
          ? 'Close menu'
          : 'Open menu'
      );

    } else {

      /*
       * Leaving mobile mode.
       */

      sidebar?.classList.remove(
        'active'
      );

      document.body.classList.remove(
        'sidebar-open'
      );


      /*
       * Do NOT change
       * sidebar-collapsed here.
       */

      const collapsed =
        app?.classList.contains(
          'sidebar-collapsed'
        );

      mobileMenu?.setAttribute(
        'aria-label',
        collapsed
          ? 'Expand sidebar'
          : 'Collapse sidebar'
      );


      if (
        !playlistPanel?.classList.contains(
          'active'
        )
      ) {

        overlay?.classList.remove(
          'active'
        );

      }

    }

  }
);


/* =========================================================
   NOW PLAYING
   ========================================================= */

function updateNowPlaying(
  music
) {

  if (!music) {
    return;
  }

  if (nowPlayingImage) {

    nowPlayingImage.src =
      music.posterUrl;

    nowPlayingImage.alt =
      `${music.title} Album Poster`;

  }

  if (nowPlayingTitle) {

    nowPlayingTitle.textContent =
      music.title;

  }

  if (nowPlayingArtist) {

    nowPlayingArtist.textContent =
      music.artist;

  }

}


/* =========================================================
   VINYL SPIN
   ========================================================= */

function updateSpinState() {

  nowPlayingPanel?.classList.toggle(
    'is-playing',
    isPlaying
  );

  nowPlayingArt?.classList.toggle(
    'is-playing',
    isPlaying
  );

  updatePlayingCards();

}


/* =========================================================
   LOAD MUSIC
   ========================================================= */

function loadMusic(
  index,
  autoPlay = true
) {

  if (
    !Number.isInteger(index) ||
    index < 0 ||
    index >= musicData.length
  ) {
    return;
  }

  currentMusic =
    index;

  const music =
    getMusic(
      currentMusic
    );


  audio.pause();

  audio.currentTime =
    0;

  clearInterval(
    timer
  );

  timer =
    null;


  /* PLAYER */

  if (playerBanner) {

    playerBanner.src =
      music.posterUrl;

    playerBanner.alt =
      `${music.title} Album Poster`;

  }

  if (playerTitle) {

    playerTitle.textContent =
      music.title;

  }

  if (playerArtist) {

    playerArtist.textContent =
      music.artist;

  }


  /* NOW PLAYING */

  updateNowPlaying(
    music
  );


  /* BACKGROUND */

  document.body.style.setProperty(
    '--music-background',
    `url("${music.backgroundImage}")`
  );


  /* AUDIO */

  audio.src =
    music.musicPath;

  audio.load();


  /* PROGRESS */

  if (playerSeekRange) {

    playerSeekRange.value =
      0;

    playerSeekRange.max =
      0;

  }

  if (playerRunningTime) {

    playerRunningTime.textContent =
      '0:00';

  }

  if (playerDuration) {

    playerDuration.textContent =
      '0:00';

  }

  updateRangeFill(
    playerSeekRange
  );


  /* HISTORY */

  addToRecentlyPlayed(
    index
  );


  updateFavoriteButtons();

  updateLibraryActiveState();


  if (!autoPlay) {

    setPlayingState(
      false
    );

    return;

  }


  const promise =
    audio.play();

  if (promise) {

    promise.catch(
      error => {

        console.warn(
          'Playback failed:',
          error
        );

        setPlayingState(
          false
        );

      }
    );

  }

}


/* =========================================================
   PLAY STATE
   ========================================================= */

function setPlayingState(
  playing
) {

  isPlaying =
    Boolean(
      playing
    );

  playButton?.classList.toggle(
    'active',
    isPlaying
  );

  playButton?.setAttribute(
    'aria-label',
    isPlaying
      ? 'Pause'
      : 'Play'
  );


  clearInterval(
    timer
  );


  if (isPlaying) {

    timer =
      setInterval(
        updateRunningTime,
        250
      );

  } else {

    timer =
      null;

  }


  updateSpinState();

  updateLibraryActiveState();

}


/* =========================================================
   PLAY / PAUSE
   ========================================================= */

function togglePlay() {

  if (!audio.src) {

    loadMusic(
      currentMusic,
      true
    );

    return;

  }

  if (audio.paused) {

    audio.play()
      .catch(
        error => {

          console.warn(
            'Playback failed:',
            error
          );

        }
      );

  } else {

    audio.pause();

  }

}


playButton?.addEventListener(
  'click',
  togglePlay
);


/* =========================================================
   AUDIO EVENTS
   ========================================================= */

audio.addEventListener(
  'play',
  () => {

    setPlayingState(
      true
    );

  }
);


audio.addEventListener(
  'pause',
  () => {

    setPlayingState(
      false
    );

  }
);


audio.addEventListener(
  'loadedmetadata',
  () => {

    if (
      Number.isFinite(
        audio.duration
      )
    ) {

      if (playerSeekRange) {

        playerSeekRange.max =
          Math.ceil(
            audio.duration
          );

      }

      if (playerDuration) {

        playerDuration.textContent =
          getTimecode(
            audio.duration
          );

      }

    }

    updateRangeFill(
      playerSeekRange
    );

  }
);


audio.addEventListener(
  'timeupdate',
  updateRunningTime
);


audio.addEventListener(
  'ended',
  () => {

    if (isRepeating) {

      audio.currentTime =
        0;

      audio.play();

      return;

    }

    playNext();

  }
);


audio.addEventListener(
  'error',
  () => {

    console.error(
      'Unable to load audio:',
      musicData[currentMusic]?.musicPath
    );

    setPlayingState(
      false
    );

  }
);


/* =========================================================
   TIME
   ========================================================= */

function updateRunningTime() {

  if (
    !Number.isFinite(
      audio.duration
    )
  ) {
    return;
  }

  if (playerSeekRange) {

    playerSeekRange.value =
      audio.currentTime;

  }

  if (playerRunningTime) {

    playerRunningTime.textContent =
      getTimecode(
        audio.currentTime
      );

  }

  updateRangeFill(
    playerSeekRange
  );

}


/* =========================================================
   SEEK
   ========================================================= */

playerSeekRange?.addEventListener(
  'input',
  function() {

    const value =
      Number(
        this.value
      );

    if (
      Number.isFinite(
        audio.duration
      )
    ) {

      audio.currentTime =
        Math.max(
          0,
          Math.min(
            audio.duration,
            value
          )
        );

    }

    if (playerRunningTime) {

      playerRunningTime.textContent =
        getTimecode(
          value
        );

    }

    updateRangeFill(
      this
    );

  }
);


/* =========================================================
   NEXT
   ========================================================= */

function getRandomMusic() {

  if (
    musicData.length <= 1
  ) {

    return currentMusic;

  }

  let random;

  do {

    random =
      Math.floor(
        Math.random() *
        musicData.length
      );

  } while (
    random === currentMusic
  );

  return random;

}


function playNext() {

  const next =
    isShuffled
      ? getRandomMusic()
      : (
          currentMusic >=
          musicData.length - 1
            ? 0
            : currentMusic + 1
        );

  loadMusic(
    next,
    true
  );

}


skipNextButton?.addEventListener(
  'click',
  playNext
);


/* =========================================================
   PREVIOUS
   ========================================================= */

function playPrevious() {

  const previous =
    isShuffled
      ? getRandomMusic()
      : (
          currentMusic <= 0
            ? musicData.length - 1
            : currentMusic - 1
        );

  loadMusic(
    previous,
    true
  );

}


skipPreviousButton?.addEventListener(
  'click',
  playPrevious
);


/* =========================================================
   SHUFFLE
   ========================================================= */

shuffleButton?.addEventListener(
  'click',
  () => {

    isShuffled =
      !isShuffled;

    shuffleButton.classList.toggle(
      'active',
      isShuffled
    );

    shuffleButton.setAttribute(
      'aria-label',
      isShuffled
        ? 'Disable shuffle'
        : 'Enable shuffle'
    );

  }
);


/* =========================================================
   REPEAT
   ========================================================= */

repeatButton?.addEventListener(
  'click',
  () => {

    isRepeating =
      !isRepeating;

    audio.loop =
      isRepeating;

    repeatButton.classList.toggle(
      'active',
      isRepeating
    );

    repeatButton.setAttribute(
      'aria-label',
      isRepeating
        ? 'Disable repeat'
        : 'Enable repeat'
    );

  }
);


/* =========================================================
   VOLUME
   ========================================================= */

function updateVolumeIcon() {

  if (!playerVolumeButton) {
    return;
  }

  const icon =
    playerVolumeButton.querySelector(
      '.material-symbols-rounded'
    );

  if (!icon) {
    return;
  }

  if (audio.muted) {

    icon.textContent =
      'volume_off';

    return;

  }

  if (
    audio.volume <= 0.01
  ) {

    icon.textContent =
      'volume_mute';

  } else if (
    audio.volume <= 0.5
  ) {

    icon.textContent =
      'volume_down';

  } else {

    icon.textContent =
      'volume_up';

  }

}


playerVolumeRange?.addEventListener(
  'input',
  function() {

    const volume =
      Math.max(
        0,
        Math.min(
          1,
          Number(
            this.value
          )
        )
      );

    audio.volume =
      volume;

    if (
      volume > 0
    ) {

      lastVolume =
        volume;

      audio.muted =
        false;

    } else {

      audio.muted =
        true;

    }

    updateVolumeIcon();

    updateRangeFill(
      this
    );

  }
);


/* =========================================================
   MUTE
   ========================================================= */

playerVolumeButton?.addEventListener(
  'click',
  () => {

    if (
      audio.muted ||
      audio.volume === 0
    ) {

      audio.muted =
        false;

      audio.volume =
        lastVolume || 1;

      if (playerVolumeRange) {

        playerVolumeRange.value =
          String(
            audio.volume
          );

        updateRangeFill(
          playerVolumeRange
        );

      }

    } else {

      lastVolume =
        audio.volume;

      audio.muted =
        true;

    }

    updateVolumeIcon();

  }
);


/* =========================================================
   PLAYER FAVORITES
   ========================================================= */

$$(
  '.current-song [data-favorite], .now-playing-info [data-favorite]'
)
.forEach(
  button => {

    button.addEventListener(
      'click',
      event => {

        event.preventDefault();
        event.stopPropagation();

        toggleFavorite(
          currentMusic
        );

      }
    );

  }
);


/* =========================================================
   LIBRARY ACTIVE STATE
   ========================================================= */

function updateLibraryActiveState() {

  $$('[data-playlist-item]')
    .forEach(
      item => {

        const index =
          Number(
            item.dataset.playlistItem
          );

        const active =
          index === currentMusic &&
          isPlaying;

        item.classList.toggle(
          'playing',
          active
        );

        const icon =
          item.querySelector(
            '.material-symbols-rounded'
          );

        if (icon) {

          icon.textContent =
            active
              ? 'equalizer'
              : 'play_arrow';

        }

      }
    );

}


/* =========================================================
   KEYBOARD
   ========================================================= */

document.addEventListener(
  'keydown',
  event => {

    if (
      event.target instanceof HTMLInputElement ||
      event.target instanceof HTMLTextAreaElement ||
      event.target.isContentEditable
    ) {
      return;
    }

    switch (
      event.code
    ) {

      case 'Space':

        event.preventDefault();

        togglePlay();

        break;


      case 'ArrowRight':

        if (
          Number.isFinite(
            audio.duration
          )
        ) {

          audio.currentTime =
            Math.min(
              audio.duration,
              audio.currentTime + 5
            );

        }

        break;


      case 'ArrowLeft':

        if (
          Number.isFinite(
            audio.duration
          )
        ) {

          audio.currentTime =
            Math.max(
              0,
              audio.currentTime - 5
            );

        }

        break;


      case 'ArrowUp':

        event.preventDefault();

        if (playerVolumeRange) {

          playerVolumeRange.value =
            String(
              Math.min(
                1,
                Number(
                  playerVolumeRange.value
                ) + 0.05
              )
            );

          playerVolumeRange.dispatchEvent(
            new Event('input')
          );

        }

        break;


      case 'ArrowDown':

        event.preventDefault();

        if (playerVolumeRange) {

          playerVolumeRange.value =
            String(
              Math.max(
                0,
                Number(
                  playerVolumeRange.value
                ) - 0.05
              )
            );

          playerVolumeRange.dispatchEvent(
            new Event('input')
          );

        }

        break;


      case 'KeyM':

        playerVolumeButton?.click();

        break;


      case 'KeyN':

        playNext();

        break;


      case 'KeyP':

        playPrevious();

        break;


      case 'Escape':

        closeLibrary();

        closeMobileSidebar();

        break;

    }

  }
);


/* =========================================================
   INITIALIZATION
   ========================================================= */

function initialize() {

  if (
    !Array.isArray(musicData) ||
    musicData.length === 0
  ) {

    console.error(
      'Music Player: musicData is empty.'
    );

    return;

  }


  renderHome();


  loadMusic(
    0,
    false
  );


  if (playerVolumeRange) {

    playerVolumeRange.value =
      '1';

  }

  audio.volume =
    1;

  audio.muted =
    false;

  lastVolume =
    1;


  currentLibraryTab =
    'all';

  currentSort =
    'default';


  libraryTabs.forEach(
    button => {

      button.classList.toggle(
        'active',
        button.dataset.libraryTab ===
          'all'
      );

    }
  );


  sortButtons.forEach(
    button => {

      button.classList.toggle(
        'active',
        button.dataset.sort ===
          'default'
      );

    }
  );


  /*
   * Render ALL songs.
   */

  refreshLibrary();


  /*
   * Clean initial sidebar state.
   */

  sidebar?.classList.remove(
    'active'
  );

  overlay?.classList.remove(
    'active'
  );

  document.body.classList.remove(
    'sidebar-open'
  );

  document.body.classList.remove(
    'modalActive'
  );


  /*
   * IMPORTANT:
   * Do not force sidebar open or closed.
   * Preserve whatever state the user has.
   */

  mobileMenu?.setAttribute(
    'aria-label',
    isMobile()
      ? 'Open menu'
      : (
          app?.classList.contains(
            'sidebar-collapsed'
          )
            ? 'Expand sidebar'
            : 'Collapse sidebar'
        )
  );


  updateFavoriteButtons();

  updateLibraryActiveState();

  updateVolumeIcon();

  updateSpinState();

  updateAllRangeFills();


  console.log(
    `Music Player loaded: ${musicData.length} songs`
  );

}


initialize();
