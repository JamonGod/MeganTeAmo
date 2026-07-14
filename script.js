// --- BASE DE DATOS ESTRUCTURADA POR ÁLBUMES (17 Canciones en total) ---
const albumsDatabase = [
    {
        id: "album-1",
        title: "Noir",
        quote: "Te amare hoy mañana y siempre.",
        cover: "img/3.jpg", 
        tracks: [
            {
                id: 1,
                title: "Say Yes To Heaven",
                artist: "Lana Del Rey",
                cover: "img/3.jpg",
                audioPath: "audio/album1/SayYesToHeaven.mp3",
                videoPath: "videos/album1/SayYesToHeaven.mp4",
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
                id: 2,
                title: "Born To Die",
                artist: "Lana Del Rey",
                cover: "img/3.jpg",
                audioPath: "audio/album1/BornToDie.mp3",
                videoPath: "videos/album1/BornToDie.mp4",
                lyrics: [
					{ time: 14.48, text: "Why? (Uh-huh)" },
					{ time: 16.94, text: "Who? Me? (Louder)" },
					{ time: 20.05, text: "Why? (Uh-huh)" },
					{ time: 23.38, text: "Feet, don't fail me now" },
					{ time: 29.18, text: "Take me to the finish line" },
					{ time: 33.17, text: "Oh, my heart, it breaks every step that I take" },
					{ time: 38.24, text: "But I'm hoping that the gates" },
					{ time: 41.19, text: "They'll tell me that you're mine" },
					{ time: 45.83, text: "Walking through the city streets" },
					{ time: 51.57, text: "Is it by mistake or design?" },
					{ time: 55.70, text: "I feel so alone on a Friday night" },
					{ time: 60.79, text: "Can you make it feel like home" },
					{ time: 63.64, text: "If I tell you you're mine?" },
					{ time: 66.75, text: "It's like I told you, honey (louder)" },
					{ time: 69.05, text: "Don't make me sad, don't make me cry" },
					{ time: 74.52, text: "Sometimes love is not enough and the road gets tough, I don't know why" },
					{ time: 80.39, text: "Keep making me laugh, let's go get high" },
					{ time: 85.43, text: "The road is long, we carry on, try to have fun in the meantime" },
					{ time: 91.38, text: "Come and take a walk on the wild side" },
					{ time: 93.93, text: "Let me kiss you hard in the pouring rain" },
					{ time: 97.68, text: "You like your girls insane" },
					{ time: 101.30, text: "(Louder) choose your last words, this is the last time" },
					{ time: 108.67, text: "'Cause you and I" },
					{ time: 111.60, text: "We were born to die" },
					{ time: 116.18, text: "Lost, but now I am found" },
					{ time: 121.26, text: "I can see that once I was blind" },
					{ time: 125.70, text: "I was so confused as a little child" },
					{ time: 130.38, text: "Tried to take what I could get" },
					{ time: 133.27, text: "Scared that I couldn't find" },
					{ time: 136.63, text: "All the answers, honey (louder)" },
					{ time: 138.80, text: "Don't make me sad, don't make me cry" },
					{ time: 144.31, text: "Sometimes love is not enough and the road gets tough, I don't know why" },
					{ time: 149.87, text: "Keep making me laugh, let's go get high" },
					{ time: 155.22, text: "The road is long, we carry on, try to have fun in the meantime" },
					{ time: 161.10, text: "Come and take a walk on the wild side" },
					{ time: 163.93, text: "Let me kiss you hard in the pouring rain" },
					{ time: 167.37, text: "You like your girls insane" },
					{ time: 171.61, text: "(Louder) choose your last words, this is the last time" },
					{ time: 178.65, text: "'Cause you and I" },
					{ time: 181.02, text: "We were born to die" },
					{ time: 184.96, text: "(We were born to die, we were born to die, we were born to die)" },
					{ time: 187.93, text: "We were born to die" },
					{ time: 189.58, text: "(We were born to die, we were born to die, we were born to die)" },
					{ time: 191.63, text: "We were born to die" },
					{ time: 197.33, text: "Come and take a walk on the wild side" },
					{ time: 200.09, text: "Let me kiss you hard in the pouring rain" },
					{ time: 203.72, text: "You like your girls insane" },
					{ time: 207.90, text: "So don't make me sad, don't make me cry" },
					{ time: 214.11, text: "Sometimes love is not enough and the road gets tough, I don't know why" },
					{ time: 219.75, text: "Keep making me laugh, let's go get high" },
					{ time: 225.07, text: "The road is long, we carry on, try to have fun in the meantime" },
					{ time: 230.51, text: "Come and take a walk on the wild side" },
					{ time: 233.71, text: "Let me kiss you hard in the pouring rain" },
					{ time: 237.30, text: "You like your girls insane" },
					{ time: 240.35, text: "(Louder) choose your last words, this is the last time" },
					{ time: 248.43, text: "'Cause you and I" },
					{ time: 250.76, text: "We were born to die" },
					{ time: 254.13, text: "(We were born to die, we were born, we were born to die)" },
					{ time: 256.17, text: "We were born to die (uh-huh, alright)" },
					{ time: 259.46, text: "(We were born to die, we were born, we were born to die) (uh-huh, alright)" },
					{ time: 262.68, text: "(We were born to die, we were born, we were born to die) (louder)" },
					{ time: 266.90, text: "(We were born to die, we were born to die)" },
					{ time: 270.75, text: "(We were born to die, we were born to die) (louder)" },
					{ time: 275.49, text: "(Uh-huh)" },
					{ time: 284.18, text: "(Alright)" }
                ]
            },
            {
                id: 3,
                title: "Sad Girl",
                artist: "Lana Del Rey",
                cover: "img/3.jpg",
                audioPath: "audio/album1/SadGirl.mp3",
                videoPath: "videos/album1/SadGirl.mp4",
                lyrics: [
					{ time: 16.56, text: "Being a mistress on the side" },
					{ time: 24.06, text: "It might not appeal to fools like you" },
					{ time: 32.05, text: "Creeping around on the side" },
					{ time: 40.05, text: "Might not be something you would do" },
					{ time: 47.00, text: "But you haven't seen my man (man)" },
					{ time: 51.69, text: "You haven't seen my man (man, man)" },
					{ time: 55.84, text: "You haven't seen my man (man)" },
					{ time: 59.00, text: "You haven't seen him" },
					{ time: 63.01, text: "He's got the fire" },
					{ time: 67.31, text: "And he walks with it" },
					{ time: 71.04, text: "He's got the fire" },
					{ time: 75.41, text: "And he talks with it" },
					{ time: 78.61, text: "His Bonnie on the side, Bonnie on the side" },
					{ time: 83.16, text: "Makes me a sad, sad girl" },
					{ time: 86.60, text: "His money on the side, money on the side" },
					{ time: 91.38, text: "Makes me a sad, sad girl" },
					{ time: 94.62, text: "I'm a sad girl, I'm a sad girl" },
					{ time: 98.87, text: "I'm a sad girl" },
					{ time: 102.57, text: "I'm a sad girl, I'm a bad girl" },
					{ time: 106.89, text: "I'm a bad girl" },
					{ time: 113.08, text: "Being a bad bitch on the side" },
					{ time: 120.12, text: "Might not appeal to fools like you" },
					{ time: 129.01, text: "Creeping around while he gets high" },
					{ time: 136.06, text: "It might not be something you would do" },
					{ time: 141.83, text: "But you haven't seen my man (man)" },
					{ time: 147.36, text: "You haven't seen my man (man, man)" },
					{ time: 151.60, text: "You haven't seen my man (man)" },
					{ time: 155.26, text: "You haven't seen him" },
					{ time: 159.05, text: "He's got the fire" },
					{ time: 163.65, text: "And he walks with it" },
					{ time: 167.28, text: "He's got the fire" },
					{ time: 171.46, text: "And he talks with it" },
					{ time: 174.91, text: "His Bonnie on the side, Bonnie on the side" },
					{ time: 179.16, text: "Makes me a sad, sad girl" },
					{ time: 182.74, text: "His money on the side, money on the side" },
					{ time: 187.11, text: "Makes me a sad, sad girl" },
					{ time: 190.60, text: "I'm a sad girl, I'm a sad girl" },
					{ time: 194.71, text: "I'm a sad girl" },
					{ time: 198.13, text: "I'm a sad girl, I'm a bad girl" },
					{ time: 202.62, text: "I'm a bad girl" },
					{ time: 208.32, text: "Watch what you say to me" },
					{ time: 214.20, text: "Careful who you're talking to" },
					{ time: 217.78, text: "Watch what you say to me" },
					{ time: 221.87, text: "Careful who you're talking to" },
					{ time: 226.25, text: "I'm on fire, baby" },
					{ time: 233.74, text: "I'm on fire" },
					{ time: 238.93, text: "He's got the fire" },
					{ time: 243.65, text: "And he walks with it" },
					{ time: 247.03, text: "He's got the fire" },
					{ time: 251.42, text: "And he talks with it" },
					{ time: 254.93, text: "His Bonnie on the side, Bonnie on the side" },
					{ time: 259.11, text: "Makes me a sad, sad girl" },
					{ time: 262.63, text: "His money on the side, money on the side" },
					{ time: 267.01, text: "Makes me a sad, sad girl" },
					{ time: 270.46, text: "I'm a sad girl, I'm a sad girl" },
					{ time: 274.56, text: "I'm a sad girl" },
					{ time: 278.44, text: "I'm a sad girl, I'm a bad girl" },
					{ time: 282.61, text: "I'm a bad girl" },
					{ time: 286.31, text: "I'm a sad girl, I'm a sad girl" },
					{ time: 290.64, text: "I'm a sad girl" },
					{ time: 294.43, text: "I'm a sad girl, I'm a bad girl" },
					{ time: 298.67, text: "I'm a bad girl" }
                ]
            },
            {
                id: 4,
                title: "Pretty When You Cry",
                artist: "Lana Del Rey",
                cover: "img/3.jpg",
                audioPath: "audio/album1/PrettyWhenYouCry.mp3",
                videoPath: "videos/album1/PrettyWhenYouCry.mp4",
                lyrics: [
					{ time: 17.45, text: "All the pretty stars" },
					{ time: 21.16, text: "Shine for you, my love" },
					{ time: 25.97, text: "Am I that girl" },
					{ time: 30.54, text: "That you dream of?" },
					{ time: 35.12, text: "All those little times" },
					{ time: 38.53, text: "You said that I'm your girl" },
					{ time: 43.86, text: "You make me feel" },
					{ time: 48.07, text: "Like your whole world" },
					{ time: 52.65, text: "I'll wait for you, babe" },
					{ time: 57.43, text: "That's all I do, babe" },
					{ time: 62.69, text: "Don't come through, babe" },
					{ time: 66.72, text: "You never do" },
					{ time: 68.97, text: "Because I'm pretty when I cry" },
					{ time: 73.71, text: "I'm pretty when I cry" },
					{ time: 77.86, text: "I'm pretty when I cry" },
					{ time: 82.01, text: "I'm pretty when I cry" },
					{ time: 87.59, text: "All those special times" },
					{ time: 91.33, text: "I spent with you, my love" },
					{ time: 96.46, text: "They don't mean shit" },
					{ time: 99.86, text: "Compared to all your drugs" },
					{ time: 105.35, text: "But I don't really mind" },
					{ time: 108.77, text: "I've got much more than that" },
					{ time: 113.46, text: "Like my memories" },
					{ time: 118.13, text: "I don't need that" },
					{ time: 123.29, text: "I wait for you, babe" },
					{ time: 128.28, text: "You don't come through, babe" },
					{ time: 132.82, text: "You never do, babe" },
					{ time: 136.60, text: "That's just what you do" },
					{ time: 138.82, text: "Because I'm pretty when I cry" },
					{ time: 143.51, text: "I'm pretty when I cry" },
					{ time: 148.03, text: "I'm pretty when I cry" },
					{ time: 152.24, text: "I'm pretty when I cry" },
					{ time: 158.27, text: "Don't say you need me when" },
					{ time: 163.09, text: "You leave and you leave again" },
					{ time: 167.19, text: "I'm stronger than all my men" },
					{ time: 171.68, text: "Except for you" },
					{ time: 176.03, text: "Don't say you need me if" },
					{ time: 180.48, text: "You know that you're leaving, I can't do it" },
					{ time: 187.29, text: "I can't do it, but you do it well" },
					{ time: 191.83, text: "'Cause I'm pretty when I cry" },
					{ time: 196.27, text: "I'm pretty when I cry" },
					{ time: 200.67, text: "I'm pretty when I cry" },
					{ time: 205.07, text: "I'm pretty when I cry" },
					{ time: 209.76, text: "I'm pretty when I cry" },
					{ time: 213.87, text: "I'm pretty when I cry" },
					{ time: 218.44, text: "I'm pretty when I cry" },
					{ time: 222.71, text: "I'm pretty when I cry" }
                ]
            },
            {
                id: 5,
                title: "Ultraviolence",
                artist: "Lana Del Rey",
                cover: "img/3.jpg",
                audioPath: "audio/album1/Ultraviolence.mp3",
                videoPath: "videos/album1/Ultraviolence.mp4",
                lyrics: [
					{ time: 18.44, text: "He used to call me DN" },
					{ time: 23.88, text: "That stood for Deadly Nightshade" },
					{ time: 27.88, text: "'Cause I was filled with poison" },
					{ time: 32.59, text: "But blessed with beauty and rage" },
					{ time: 37.12, text: "Jim told me that" },
					{ time: 41.81, text: "He hit me and it felt like a kiss" },
					{ time: 45.92, text: "Jim brought me back" },
					{ time: 50.40, text: "Reminded me of when we were kids" },
					{ time: 53.75, text: "With his ultraviolence" },
					{ time: 58.34, text: "Ultraviolence" },
					{ time: 62.88, text: "Ultraviolence" },
					{ time: 67.11, text: "Ultraviolence" },
					{ time: 71.32, text: "I can hear sirens, sirens" },
					{ time: 76.52, text: "He hit me and it felt like a kiss" },
					{ time: 80.03, text: "I can hear violins, violins" },
					{ time: 84.72, text: "Give me all of that ultraviolence" },
					{ time: 89.46, text: "He used to call me Poison" },
					{ time: 93.63, text: "Like I was Poison Ivy" },
					{ time: 97.66, text: "I could have died right there" },
					{ time: 102.59, text: "'Cause he was right beside me" },
					{ time: 107.04, text: "Jim raised me up" },
					{ time: 111.26, text: "He hurt me, but it felt like true love" },
					{ time: 115.54, text: "Jim taught me that" },
					{ time: 120.23, text: "Loving him was never enough" },
					{ time: 123.75, text: "With his ultraviolence" },
					{ time: 128.22, text: "Ultraviolence" },
					{ time: 132.31, text: "Ultraviolence" },
					{ time: 136.62, text: "Ultraviolence" },
					{ time: 141.08, text: "I can hear sirens, sirens" },
					{ time: 146.09, text: "He hit me and it felt like a kiss" },
					{ time: 149.97, text: "I can hear violins, violins" },
					{ time: 154.41, text: "Give me all of that ultraviolence" },
					{ time: 158.77, text: "We could go back to New York" },
					{ time: 164.03, text: "Loving you was really hard" },
					{ time: 167.25, text: "We could go back to Woodstock" },
					{ time: 172.14, text: "Where they don't know who we are" },
					{ time: 176.09, text: "Heaven is on Earth" },
					{ time: 180.44, text: "I would do anything for you, baby" },
					{ time: 184.91, text: "Blessed is this union" },
					{ time: 189.06, text: "Crying tears of gold like lemonade" },
					{ time: 193.43, text: "I love you the first time" },
					{ time: 195.75, text: "I love you the last time" },
					{ time: 197.83, text: "Yo soy la princesa" },
					{ time: 199.96, text: "¿Comprende mis white lines?" },
					{ time: 202.36, text: "'Cause I'm your jazz singer" },
					{ time: 204.67, text: "And you're my cult leader" },
					{ time: 206.67, text: "I love you forever" },
					{ time: 208.75, text: "I love you forever" },
					{ time: 210.87, text: "With his ultraviolence (lay me down tonight)" },
					{ time: 215.66, text: "Ultraviolence (in my linen and curls)" },
					{ time: 219.91, text: "Ultraviolence (lay me down tonight)" },
					{ time: 224.25, text: "Ultraviolence (Riviera Girls)" },
					{ time: 228.38, text: "I can hear sirens, sirens" },
					{ time: 233.68, text: "He hit me and it felt like a kiss" },
					{ time: 236.94, text: "I can hear violins, violins" },
					{ time: 241.70, text: "Give me all of that ultraviolence" }
                ]
            }
        ]
    },
    {
        id: "album-2",
        title: "Melancholia",
        quote: "Unidos en la muerte.",
        cover: "img/2.jpg", 
        tracks: [
            {
                id: 1,
                title: "Join Me In Death",
                artist: "HIM",
                cover: "img/2.jpg",
                audioPath: "audio/album2/JoinMeInDeath.mp3",
                videoPath: "videos/album2/JoinMeInDeath.mp4",
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
                id: 2,
                title: "Bury Me Deep Inside Your Heart",
                artist: "HIM",
                cover: "img/2.jpg",
                audioPath: "audio/album2/BuryMeDeepInsideYourHeart.mp3",
                videoPath: "videos/album2/BuryMeDeepInsideYourHeart.mp4",
                lyrics: [
					{ time: 45.63, text: "Let me wake up in your arms" },
					{ time: 52.28, text: "Hear you say it's not alright" },
					{ time: 57.27, text: "Let me be so dead and gone" },
					{ time: 62.70, text: "So far away from life" },
					{ time: 67.79, text: "Close my eyes" },
					{ time: 71.64, text: "Hold me tight" },
					{ time: 75.08, text: "And bury me deep inside your heart" },
					{ time: 82.14, text: "All I ever wanted was you, my love" },
					{ time: 90.09, text: "You, all I ever wanted is you, my love" },
					{ time: 101.07, text: "You're all I ever wanted, just you" },
					{ time: 108.01, text: "Let me never see the sun" },
					{ time: 112.70, text: "And never see you smile" },
					{ time: 118.77, text: "Let us be so dead and so gone" },
					{ time: 124.90, text: "So far away from life" },
					{ time: 129.82, text: "Close my eyes" },
					{ time: 133.24, text: "Hold me tight" },
					{ time: 136.53, text: "And bury me deep inside your heart" },
					{ time: 143.75, text: "All I ever wanted was you, my love" },
					{ time: 151.80, text: "You...all I ever wanted is you, my love" },
					{ time: 162.45, text: "You're all I ever wanted,you, oh my love" },
					{ time: 174.25, text: "You're all I ever wanted, you, my love" },
					{ time: 186.43, text: "That's the way it's always been" },
					{ time: 194.73, text: "My heart stops beating only for you, baby" },
					{ time: 205.40, text: "Only for you darling" },
					{ time: 210.93, text: "All I ever wanted was you, my love" },
					{ time: 218.50, text: "You, all I ever wanted is you, my love" },
					{ time: 229.98, text: "You're all I ever wanted, you, my love" },
					{ time: 241.24, text: "You're all I ever wanted, you, my love" }
                ]
            },
            {
                id: 3,
                title: "Gone With The Sin",
                artist: "HIM",
                cover: "img/2.jpg",
                audioPath: "audio/album2/GoneWithTheSin.mp3",
                videoPath: "videos/album2/GoneWithTheSin.mp4",
                lyrics: [
					{ time: 0.01, text: "Oh, my baby, how beautiful you are" },
					{ time: 10.73, text: "Oh, my darling, completely torn apart" },
					{ time: 20.53, text: "You're gone with the sin, my baby" },
					{ time: 26.20, text: "And beautiful you are" },
					{ time: 31.18, text: "So gone with the sin, my darling" },
					{ time: 41.54, text: "I love your skin oh so white" },
					{ time: 52.25, text: "I love your touch cold as ice" },
					{ time: 62.59, text: "And I love every single tear you cry" },
					{ time: 72.78, text: "I just love the way you're losing your life" },
					{ time: 83.83, text: "Oh, my baby, how beautiful you are" },
					{ time: 94.09, text: "Oh, my darling, completely torn apart" },
					{ time: 104.07, text: "You're gone with the sin, my baby" },
					{ time: 109.76, text: "And beautiful you are" },
					{ time: 114.50, text: "So gone with the sin, my darling" },
					{ time: 125.08, text: "I adore the despair in your eyes" },
					{ time: 135.71, text: "I worship your lips once red as wine" },
					{ time: 145.95, text: "I crave for your scent sending shivers down my spine" },
					{ time: 156.27, text: "I just love the way you're running out of life" },
					{ time: 167.31, text: "Oh, my baby, how beautiful you are" },
					{ time: 177.56, text: "Oh, my darling, completely torn apart" },
					{ time: 188.50, text: "You're gone with the sin, my baby" },
					{ time: 193.51, text: "And beautiful you are" },
					{ time: 198.83, text: "So gone with the sin my, darling" }
                ]
            },
            {
                id: 4,
                title: "For You",
                artist: "HIM",
                cover: "img/2.jpg",
                audioPath: "audio/album2/ForYou.mp3",
                videoPath: "videos/album2/ForYou.mp4",
                lyrics: [
					{ time: 44.25, text: "In the grace of your love, I ride the pain" },
					{ time: 53.30, text: "In 666 ways I love you and I hope you feel the same" },
					{ time: 62.10, text: "I'm for you" },
					{ time: 71.80, text: "I'm for you" },
					{ time: 81.80, text: "I give myself for your love and begin all anew" },
					{ time: 91.50, text: "In 777 ways I love you to my death, do us part" },
					{ time: 100.50, text: "And I'm for you" },
					{ time: 109.50, text: "And I'm for you" },
					{ time: 119.20, text: "I'm for you" },
					{ time: 128.50, text: "And I'm for you" },
					{ time: 187.10, text: "In 666 ways I love you and I hope you're wherever you are" },
					{ time: 196.10, text: "I'm here for you" },
					{ time: 205.80, text: "I'm here for you" },
					{ time: 215.10, text: "I'm here for you" },
					{ time: 224.80, text: "I'm here for you" }
                ]
            }
        ]
    },
    {
        id: "album-3",
        title: "Cherry",
        quote: "Jeje muak",
        cover: "img/4.jpg", 
        tracks: [
            {
                id: 1,
                title: "Can't Help Falling In Love",
                artist: "Elvis Presley",
                cover: "img/4.jpg",
                audioPath: "audio/album3/FallingInLove.mp3",
                videoPath: "videos/album3/FallingInLove.mp4",
                lyrics: [
					{ time: 7.46, text: "Wise men say" },
					{ time: 13.48, text: "Only fools rush in" },
					{ time: 21.17, text: "But I can't help" },
					{ time: 26.55, text: "Falling in love with you" },
					{ time: 35.92, text: "Shall I stay?" },
					{ time: 42.28, text: "Would it be a sin" },
					{ time: 49.83, text: "If I can't help" },
					{ time: 55.33, text: "Falling in love with you?" },
					{ time: 64.41, text: "Like a river flows" },
					{ time: 67.74, text: "Surely to the sea" },
					{ time: 71.17, text: "Darling, so it goes" },
					{ time: 74.58, text: "Some things are meant to be" },
					{ time: 82.29, text: "Take my hand" },
					{ time: 88.44, text: "Take my whole life too" },
					{ time: 95.71, text: "For I can't help" },
					{ time: 101.45, text: "Falling in love with you" },
					{ time: 110.18, text: "Like a river flows" },
					{ time: 113.91, text: "Surely to the sea" },
					{ time: 117.20, text: "Darling, so it goes" },
					{ time: 120.28, text: "Some things are meant to be" },
					{ time: 127.46, text: "Take my hand" },
					{ time: 133.84, text: "Take my whole life too" },
					{ time: 141.24, text: "For I can't help" },
					{ time: 146.92, text: "Falling in love with you" },
					{ time: 155.86, text: "For I can't help" },
					{ time: 160.99, text: "Falling in love with you" }
                ]
            },
            {
                id: 2,
                title: "Congratulations",
                artist: "Mac Miller",
                cover: "img/4.jpg",
                audioPath: "audio/album3/Congratulations.mp3",
                videoPath: "videos/album3/Congratulations.mp4",
                lyrics: [
					{ time: 12.32, text: "The Divine Feminine" },
					{ time: 13.78, text: "An album by Mac Miller" },
					{ time: 16.07, text: "The Divine Feminine" },
					{ time: 21.38, text: "The Divine Feminine" },
					{ time: 22.55, text: "" },
					{ time: 29.78, text: "Am I supposed to? Okay" },
					{ time: 30.88, text: "" },
					{ time: 34.40, text: "Love" },
					{ time: 36.76, text: "Love, love, love, love, love" },
					{ time: 38.70, text: "Sex" },
					{ time: 40.52, text: "Love, love, love, love, love, love, love" },
					{ time: 42.54, text: "Sex" },
					{ time: 43.00, text: "" },
					{ time: 46.52, text: "The sun don't shine when I'm alone" },
					{ time: 50.34, text: "I lose my mind and I lose control" },
					{ time: 54.05, text: "I see your eyes look through my soul" },
					{ time: 57.82, text: "Don't be surprised, it's all I know" },
					{ time: 61.58, text: "I felt the highs, and they feel like you" },
					{ time: 65.27, text: "See, a love like mine, it's too good to be true" },
					{ time: 68.86, text: "And you too divine to just be mine" },
					{ time: 73.06, text: "You remind me of the color blue" },
					{ time: 76.80, text: "Girl, I'm so in love with you" },
					{ time: 80.08, text: "Yeah, girl, I'm so in love with you" },
					{ time: 83.50, text: "" },
					{ time: 104.96, text: "Baby, you were everything I ever wanted" },
					{ time: 107.80, text: "Bought a wedding ring, it's in my pocket" },
					{ time: 109.64, text: "Planned to ask the other day" },
					{ time: 111.04, text: "Knew you'd run away, so I guess I just forgot it" },
					{ time: 113.42, text: "Remember when you went away to college?" },
					{ time: 115.32, text: "I was on the phone, we end up talkin'" },
					{ time: 117.16, text: "Past, present, future, all the gossip" },
					{ time: 119.60, text: "Goddamn" },
					{ time: 120.31, text: "" },
					{ time: 120.86, text: "Puppy love ain't what it was, darlin'" },
					{ time: 122.77, text: "Feelings that we had were so alarming" },
					{ time: 124.65, text: "I could make you laugh, I could break the glass" },
					{ time: 126.59, text: "If we made it last, it'd be a bargain" },
					{ time: 128.44, text: "\"Mr. Charming\", that is my department" },
					{ time: 130.34, text: "You was there before the fancy cars, and" },
					{ time: 132.27, text: "You was there when I was just a starvin' artist" },
					{ time: 134.33, text: "When the car was havin' trouble startin'" },
					{ time: 136.62, text: "Now, we got our own apartment" },
					{ time: 138.38, text: "Same box for the mail" },
					{ time: 140.28, text: "Same hamper for the laundry" },
					{ time: 142.10, text: "The food in the fridge is stale" },
					{ time: 143.97, text: "And this mornin'" },
					{ time: 144.88, text: "You cooked the eggs with the kale" },
					{ time: 146.72, text: "I tried to hit it while you was gettin' dressed" },
					{ time: 148.69, text: "You said all you ever think about is sex" },
					{ time: 150.56, text: "I'm like, oh, well" },
					{ time: 152.59, text: "You know me so well" },
					{ time: 154.48, text: "And if this will make you late" },
					{ time: 156.27, text: "I swear I won't tell" },
					{ time: 158.22, text: "And every time I call your phone" },
					{ time: 159.95, text: "You better pick up your cell" },
					{ time: 161.93, text: "I swear to God I'ma freak out" },
					{ time: 163.74, text: "If it goes straight to voicemail" },
					{ time: 165.62, text: "Well, I'm the jealous type" },
					{ time: 167.53, text: "But I swear that ass is what heaven's like" },
					{ time: 169.36, text: "And when I'm in that pussy, it's a better life" },
					{ time: 171.26, text: "That's the only way I'm tryna end the night" },
					{ time: 174.90, text: "It's my only chance, I better get it right" },
					{ time: 176.92, text: "" },
					{ time: 180.86, text: "Take your time, my baby" },
					{ time: 187.64, text: "It's all waiting for you, for you" },
					{ time: 195.32, text: "I know I make your mind go crazy" },
					{ time: 202.67, text: "But it's all waiting right here for you, for you" },
					{ time: 209.55, text: "" },
					{ time: 211.26, text: "You get closer with, run away" },
					{ time: 214.60, text: "All I ever known is the color grey" },
					{ time: 219.03, text: "Your loving ways" },
					{ time: 221.92, text: "Bring me sunshine" },
					{ time: 226.30, text: "I found an angel so divine" },
					{ time: 230.16, text: "Heaven probably not the same without you" },
					{ time: 234.07, text: "But now, you're in my world" },
					{ time: 236.85, text: "In my world" }
                ]
            },
            {
                id: 3,
                title: "Fall In Love With You",
                artist: "Montell Fish",
                cover: "img/4.jpg",
                audioPath: "audio/album3/fallinlove.mp3",
                videoPath: "videos/album3/fallinlove.mp4",
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
            },
            {
                id: 4,
                title: "Something About You",
                artist: "Eyedress & Dent May",
                cover: "img/4.jpg",
                audioPath: "audio/album3/SomethingAboutYou.mp3",
                videoPath: "videos/album3/SomethingAboutYou.mp4",
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
            }
        ]
    },
    {
        id: "album-4",
        title: "Adds",
        quote: "Te amo",
        cover: "img/1.jpg", 
        tracks: [
            {
                id: 1,
                title: "Cuando Sonríes",
                artist: "Rojuu ft. Saramalacara",
                cover: "img/1.jpg",
                audioPath: "audio/album4/CuandoSonries.mp3",
                videoPath: "videos/album4/CuandoSonries.mp4",
                lyrics: [
					{ time: 8.72, text: "Carzé is the fucking boss (e-e-evar)" },
					{ time: 12.78, text: "Cuando quieras me venís a ver" },
					{ time: 16.08, text: "¿Estoy bien? No lo sé, cicatriz en mi piel" },
					{ time: 19.76, text: "Falsos, no son lo que son" },
					{ time: 22.28, text: "¿A ti te quieren de verdad? Eso no lo sé ni yo" },
					{ time: 25.44, text: "Sal, no me quiero ni molestar" },
					{ time: 29.23, text: "No sé porque, pero sé que miente (ah)" },
					{ time: 33.19, text: "Cuando sonríes me mientes (yeh-yeh, yeh)" },
					{ time: 37.18, text: "Sal, no me quiero ni molestar" },
					{ time: 41.46, text: "No sé porque, pero sé que mientes (eh, ah-ah)" },
					{ time: 45.50, text: "Cuando sonríes me mientes (eh)" },
					{ time: 49.45, text: "Todos esos quebrados, están talking shit, yah" },
					{ time: 53.09, text: "En el cora tengo clavado un bisturí" },
					{ time: 56.76, text: "Los ojos rojos de llorar, baby" },
					{ time: 59.87, text: "Veo el cielo rojo como yung lean" },
					{ time: 62.69, text: "Desde que no estás, yo estoy perdida (uh-ah)" },
					{ time: 66.23, text: "Me duele el cuello, solo miro pa' arriba (uh-ah)" },
					{ time: 69.26, text: "Dame un beso en la esquina" },
					{ time: 72.31, text: "Me duele el cora', quiero estar dormida" },
					{ time: 75.20, text: "Desde que no estás, yo estoy perdida" },
					{ time: 78.69, text: "Me duele el cuello, solo miro pa' arriba" },
					{ time: 81.66, text: "Dame un beso en la esquina" },
					{ time: 84.54, text: "Me duele el cora', quiero estar dormida" },
					{ time: 87.66, text: "Cuando quieras me vienes a ver" },
					{ time: 90.76, text: "¿Voy bien? No lo sé, cicatriz en mi piel, yeh (uh-oh, uh)" },
					{ time: 94.96, text: "Falsos, no son lo mejor" },
					{ time: 96.76, text: "¿A ti te quieren de verdad? Eso no lo sé ni yo (yah-yah)" },
					{ time: 99.88, text: "Sal, no me quiero ni molestar" },
					{ time: 103.70, text: "No sé por qué, pero sé que miente (eh)" },
					{ time: 106.92, text: "Cuando sonríes me mientes (eh), ey-yeh" },
					{ time: 110.83, text: "Cuando me tiras me mientes, oro en los dientes" },
					{ time: 114.42, text: "Salí de un curse, he sido inocente" },
					{ time: 117.45, text: "Perdí a mis fieles, hay nuevos fieles" },
					{ time: 120.53, text: "Otra soundcloud, puta, odio los viernes" },
					{ time: 123.21, text: "Eres feliz si te mientes" },
					{ time: 126.87, text: "¿Quién va estar allí cuando estés mal?" },
					{ time: 131.30, text: "Te quieren para un rato pero les da igual tu estado real" },
					{ time: 138.89, text: "Tu estado real" },
					{ time: 141.79, text: "Tu estado real (tu estado real, tu estado real)" },
					{ time: 145.84, text: "Tu estado real (eh-eh, eh-eh-eh-eh)" },
					{ time: 149.63, text: "Cuando quieras me venís a ver" },
					{ time: 153.29, text: "¿Voy bien? No lo sé, cicatriz' en mi piel (uh-uh)" },
					{ time: 156.78, text: "Falsos, no son lo mejor" },
					{ time: 159.15, text: "¿A ti te quieren de verdad? Eso no lo sé ni yo (yah-yah)" },
					{ time: 162.38, text: "Sal, no me quiero ni molestar" },
					{ time: 166.19, text: "No sé porque, pero sé que miente (ah)" },
					{ time: 170.13, text: "Cuando sonríes me mientes (eh-i-eh, yeh)" }
                ]
            },
            {
                id: 2,
                title: "Nana",
                artist: "Rojuu ft. Saramalacara",
                cover: "img/1.jpg",
                audioPath: "audio/album4/NANA.mp3",
                videoPath: "videos/album4/NANA.mp4",
                lyrics: [
					{ time: 7.39, text: "Evil empire laughing all the way to the bank, jajajaja" },
					{ time: 11.68, text: "(¿Roku?)" },
					{ time: 12.75, text: "¿Por qué me tengo que sentir así?" },
					{ time: 16.46, text: "No vengas, me duele más, me duele más, yeah (jajajaja)" },
					{ time: 20.40, text: "Ya no encuentro tu amor" },
					{ time: 23.36, text: "Ya no es un rumor" },
					{ time: 25.70, text: "¿Por qué me tengo que sentir así?" },
					{ time: 29.17, text: "No vengas, me duele más, me duele más, ye-e-eh" },
					{ time: 32.55, text: "Ya no encuentro tu amor" },
					{ time: 36.11, text: "Ya no es un rumor" },
					{ time: 38.16, text: "No-no-no-no quiero que sea el final (oh)" },
					{ time: 41.91, text: "Me hace muy mal" },
					{ time: 43.09, text: "Me cuesta no recordar los buenos momento-to-to'" },
					{ time: 46.47, text: "Yo no te puedo ver" },
					{ time: 48.04, text: "Pero lo quiero hacer" },
					{ time: 49.64, text: "Me gustaría tanto revertir el tiempo (oh-ah-ah)" },
					{ time: 52.79, text: "Ya no me puedo move-e-e—" },
					{ time: 54.51, text: "No sé dónde caer" },
					{ time: 55.97, text: "Ojalá tenerte al lado otra vez" },
					{ time: 58.57, text: "No sé—, aún te quiero, no sé por qué" },
					{ time: 61.03, text: "He pasado unos días malos" },
					{ time: 62.85, text: "Y no quiero volver" },
					{ time: 64.07, text: "¿Por qué me tengo que sentir así? (mmm)" },
					{ time: 67.62, text: "No vengas, me duele más, me duele más, ye-e-eh (jajajaja)" },
					{ time: 71.42, text: "Ya no encuentro tu amor" },
					{ time: 74.46, text: "Ya no es un rumor" },
					{ time: 76.76, text: "¿Po-po-por qué me tengo que sentir así?" },
					{ time: 80.41, text: "No vengas, me duele más, me duele más, ye-e-eh" },
					{ time: 84.00, text: "Ya no encuentro tu amor" },
					{ time: 87.19, text: "Ya no es un rumor" },
					{ time: 89.27, text: "Ye-ye-yeah" },
					{ time: 91.16, text: "Yo sé que va a volver" },
					{ time: 92.68, text: "Ya la cagué otra ve'" },
					{ time: 94.41, text: "Como a los 16 (yeah-yeah)" },
					{ time: 96.82, text: "¿Quién va a venir después?" },
					{ time: 98.45, text: "¿Soy lo que quiero ser?" },
					{ time: 99.99, text: "Esa chapa la pinté, ye-e-e-eh" },
					{ time: 102.76, text: "Fuck, vos me miras mal, un ojo sharingan" },
					{ time: 106.72, text: "Él con mi cora' quiere rolear" },
					{ time: 109.88, text: "You make me calm down, vos me hacés bajar" },
					{ time: 113.16, text: "Esto iba a pasar (ah-ah)" },
					{ time: 116.03, text: "And maybe you want this pero no me querés" },
					{ time: 119.48, text: "And maybe you want me but, yeah-eh-eh" },
					{ time: 122.32, text: "And you know" },
					{ time: 123.34, text: "Cada vez que me despierto miro el fono" },
					{ time: 126.60, text: "Está explotado de mensaje', pero el tuyo no" },
					{ time: 129.65, text: "Fumo tanto porro que a veces me olvido" },
					{ time: 132.62, text: "Y ya no sé" },
					{ time: 134.38, text: "¿Por qué me tengo que sentir así?" },
					{ time: 137.75, text: "No vengas, me duele más, me duele más, ye-e-eh" },
					{ time: 141.68, text: "Ya no encuentro tu amor" },
					{ time: 144.84, text: "Ya no es un rumor" },
					{ time: 147.18, text: "¿Po-po-por qué me tengo que sentir así?" },
					{ time: 150.74, text: "No vengas, me duele más, me duele más, ye-e-eh (jajajaja)" },
					{ time: 154.48, text: "Ya no encuentro tu amor" },
					{ time: 157.63, text: "Ya no es un rumor" },
					{ time: 160.78, text: "Uh, uh-uh" },
					{ time: 163.35, text: "Uh-uh-uh-uh-uh-uh" },
					{ time: 166.10, text: "Uh-uh" },
					{ time: 166.68, text: "Uh-uh-uh-uh-uh-uh" },
					{ time: 168.36, text: "Uh-uh" },
					{ time: 170.96, text: "Uh-uh-uh-uh-uh-uh" }
                ]
            },
            {
                id: 3,
                title: "Brooklyn Blood Pop!",
                artist: "Rojuu",
                cover: "img/1.jpg",
                audioPath: "audio/album4/BrooklynBloodPop.mp3",
                videoPath: "videos/album4/BrooklynBloodPop.mp4",
                lyrics: [
					{ time: 0.04, text: "Pop, pop, pop, pop" },
					{ time: 2.78, text: "Blood, blood, blood, blood, blood (Okey)" },
					{ time: 13.99, text: "No puedo más" },
					{ time: 15.60, text: "Veo luces debajo de tu paz" },
					{ time: 16.92, text: "No me mientas, sé que reirás" },
					{ time: 18.65, text: "Si tanto me quieres, ven y venme a ver" },
					{ time: 20.32, text: "Llevo un ciego que ni sé por qué" },
					{ time: 22.12, text: "Que te quiero pero no me matas" },
					{ time: 23.72, text: "Te dan amor pero lo malgastas" },
					{ time: 25.44, text: "Estoy cansa'o de jugar con ratas" },
					{ time: 27.53, text: "Aoh, te veo cerca y me entra la tos" },
					{ time: 30.60, text: "Necesito colgar un rumor" },
					{ time: 32.45, text: "Necesito llamar tu atención-ción" },
					{ time: 34.29, text: "Para, para, hay mucha pretensión" },
					{ time: 35.84, text: "Joder, no quería еsta situación" },
					{ time: 37.51, text: "Joder, no quería ser tan cabrón" },
					{ time: 39.13, text: "Pеro to' puede ser inevitable" },
					{ time: 40.94, text: "Tu corazón nunca es habitable" },
					{ time: 42.67, text: "No me llames más, solo tengo tablet" },
					{ time: 44.31, text: "¿Qué cojones?, ¿por qué tienes sangre aquí?" },
					{ time: 46.18, text: "Coño, yo no sabía que eras así" },
					{ time: 47.79, text: "Coño, yo no sabía que estaba por ti" },
					{ time: 49.84, text: "¿Entonces, solo estabas horny?" },
					{ time: 51.60, text: "Va, va, va, guay, porque yo también" },
					{ time: 53.24, text: "Me creo un chulo, puta, soy Leïti Sene" },
					{ time: 55.40, text: "Jaja" },
					{ time: 57.34, text: "¡Ya no estás!" },
					{ time: 60.84, text: "¡Ya no estás!" },
					{ time: 63.99, text: "¡Ya no estás!" },
					{ time: 67.20, text: "¡Uoh!VVVVVVVVVV" }
                ]
            },
            {
                id: 4,
                title: "Twilight",
                artist: "Rojuu + Saramalacara",
                cover: "img/1.jpg",
                audioPath: "audio/album4/Twilight.mp3",
                videoPath: "videos/album4/Twilight.mp4",
                lyrics: [
					{ time: 8.35, text: "¿Qué estaría dispuesto a hacer Rojuu por amor?" },
					{ time: 17.62, text: "Carzé is the fucking boss" },
					{ time: 23.41, text: "(¿Roku?)" },
					{ time: 24.07, text: "Yo sé que mi cora' contigo está seguro" },
					{ time: 26.49, text: "Yo sé que si sigue así, nos sobra futuro" },
					{ time: 29.68, text: "Porque yo solo sonrío cuando hablo de ti" },
					{ time: 33.39, text: "Prométeme que siempre cuidarás de mí" },
					{ time: 37.03, text: "Y aunque todo pueda salir mal" },
					{ time: 40.10, text: "Sé que a ti no te puedo perder" },
					{ time: 42.94, text: "Que esta cara de felicidad" },
					{ time: 45.88, text: "Solo tú haces que pueda volver" },
					{ time: 49.67, text: "(Ah-ah)" },
					{ time: 51.96, text: "Es que yo a ti no te puedo perder-er-er" },
					{ time: 56.71, text: "(¿Roku?)" },
					{ time: 59.88, text: "Esa chica me volvió en un egoísta" },
					{ time: 63.31, text: "La quiero solo, solo para mi" },
					{ time: 66.27, text: "Contigo veo el color en la vida" },
					{ time: 69.52, text: "Desde pequeño que eso no es así, ye-yeah" },
					{ time: 71.64, text: "Y nada de este mundo podría hacer que yo te olvide" },
					{ time: 74.49, text: "A estas chulas no voy a dejar que esto lo contaminen" },
					{ time: 77.50, text: "Estas zorras me deprimen" },
					{ time: 79.10, text: "Puta, yo sigo en mi prime" },
					{ time: 80.69, text: "Nena, ya lo he visto todo" },
					{ time: 82.16, text: "Ahora solo quiero el retiro, yeah" },
					{ time: 84.06, text: "(Y es que) siento que me he enamorado" },
					{ time: 85.71, text: "De la persona correcta" },
					{ time: 87.64, text: "Es que aunque ella me tuerza, tú me pones recto" },
					{ time: 90.32, text: "Solo me brillan los ojos contigo" },
					{ time: 93.40, text: "Ojalá ser algo más que solo amigos" },
					{ time: 96.43, text: "Deja que entren estos sentimientos" },
					{ time: 99.74, text: "No los frenes, no los, no los frenes, yeah" },
					{ time: 102.68, text: "Deja que creemos nuevos recuerdos" },
					{ time: 105.79, text: "Sé que vienen, sé que, sé que vienen" },
					{ time: 108.97, text: "Sé que no pudo ser lo nuestro" },
					{ time: 111.45, text: "Pe-pe-pero a veces, por la noche, pienso" },
					{ time: 114.40, text: "No fue el lugar ni el momento correcto" },
					{ time: 117.22, text: "Hubiéramos ido al bosque hablar sobre esto" },
					{ time: 119.95, text: "Hu-hu-hubiéramos escapado, huido del resto" },
					{ time: 123.18, text: "Sé que quieren matarme, él me advirtió sobre esto" },
					{ time: 126.33, text: "El Sol por la ventana y le brilla el rostro" },
					{ time: 129.14, text: "Me nubla la razón como un eclipse, -e-e-e-e-e (hah-ah)" },
					{ time: 135.56, text: "Doy vueltas por mi cuarto desde que te fuiste, eh-eh-eh, ah-ah" },
					{ time: 142.37, text: "A veces te abrazo pero siento frío" },
					{ time: 145.12, text: "Me vi en un sueño y no me había reconocido" },
					{ time: 148.09, text: "Le doy una seca a eso y es como un suspiro" },
					{ time: 151.11, text: "Quiero drip en un rick owens como un vampiro" },
					{ time: 153.84, text: "Aunque últimamente pienso solo en Prada, bape y ropa cara" },
					{ time: 158.04, text: "Y aunque sé que él me miente" },
					{ time: 160.33, text: "No me importa, baby, yo estoy chasin' paper" },
					{ time: 163.34, text: "No me importa, baby, yo estoy chasin', cha-cha-chasin' paper" },
					{ time: 167.60, text: "Yo sé que mi cora' contigo está seguro" },
					{ time: 170.43, text: "Yo sé que si sigue así, nos sobra futuro" },
					{ time: 174.22, text: "Porque yo solo sonrío cuando hablo de ti" },
					{ time: 177.19, text: "Prométeme que siempre cuidarás de mí" },
					{ time: 180.74, text: "Y aunque todo pueda salir mal" },
					{ time: 184.17, text: "Sé que a ti no te puedo perder" },
					{ time: 186.99, text: "Que esta cara de felicidad" },
					{ time: 190.13, text: "Solo tú haces que pueda volver" },
					{ time: 193.98, text: "(Ah-ah)" },
					{ time: 195.94, text: "Es que yo a ti no te puedo perder-er-er (-e-e-e)" },
					{ time: 203.69, text: "Siento frío" },
					{ time: 205.25, text: "Me vi en un sueño y no me había reconocido" },
					{ time: 208.13, text: "Le doy una seca a eso y es como un suspiro" },
					{ time: 211.21, text: "Quiero drip en un rick owens como un vampirovvvvvvvvv" }
                ]
            },
            {
                id: 5,
                title: "The Sundays",
                artist: "Rojuu",
                cover: "img/1.jpg",
                audioPath: "audio/album4/TheSundays.mp3",
                videoPath: "videos/album4/TheSundays.mp4",
                lyrics: [
					{ time: 0.63, text: "Roku roku, roku roku" },
					{ time: 2.76, text: "Roku, roku roku, wa shitte iru" },
					{ time: 4.61, text: "Roku, roku, san yu roku" },
					{ time: 11.26, text: "E-e-evar" },
					{ time: 12.48, text: "Roku roku" },
					{ time: 14.68, text: "Mala memoria, pero de ti me acuerdo siempre (cien)" },
					{ time: 18.70, text: "Estoy jugando Rumble Rose, y fuera parece Frozen (yeah, eh)" },
					{ time: 22.07, text: "Ya ni me seco las lágrimas, echo de menos a Kaunas (Kaunas)" },
					{ time: 25.64, text: "Adoro que sucedan cosas, pero esto ahora parece el Tekken (no)" },
					{ time: 28.79, text: "Hoy puede que peque (what?), soy curioso desde peque (yeah)" },
					{ time: 31.67, text: "Estas memorias no creo que empaque (what?)" },
					{ time: 33.32, text: "Eso de tapizarlas, ¿pa' qué? (¿Pa' qué?)" },
					{ time: 34.83, text: "'Toy tope de lejos de ti, ¿y pa' qué? (¿Pa' qué?)" },
					{ time: 36.66, text: "Si sigo pensando en nosotros, ¿pa' qué? (¿Pa' qué?)" },
					{ time: 38.42, text: "Me ponen tetas en los fanarts, ¿pa' qué? (Pa' qué?)" },
					{ time: 40.28, text: "Tu ausencia me vuelve a doler (yeah, ey)" },
					{ time: 42.49, text: "Escuchando The Sundays, y pensando en nosotros" },
					{ time: 45.52, text: "Dibujándote un cuento, ojalá y que te encante" },
					{ time: 49.17, text: "Escuchando The Sundays, y pensando en nosotros" },
					{ time: 52.69, text: "Dibujándote un cuento, ojalá y que te encante" },
					{ time: 56.11, text: "Llevo mis trenzas y mechas, sacando humo cual mecha" },
					{ time: 59.28, text: "'Toy con los P-I-L-F en el Macas" },
					{ time: 60.67, text: "Peto la web como Nika" },
					{ time: 61.86, text: "A tu peste yo ni caso" },
					{ time: 63.24, text: "A tu ente Johnny Cash" },
					{ time: 64.51, text: "Pongo una molly en el vaso" },
					{ time: 65.89, text: "Con Baby Milo de bolso" },
					{ time: 67.16, text: "Con los chinos viendo el Barça" },
					{ time: 68.51, text: "Estoy con mis miwos como el gato Toro" },
					{ time: 70.10, text: "Tomando tranca y fumando de todo" },
					{ time: 71.73, text: "Tira'o a la bartola, me creo Keroro" },
					{ time: 73.44, text: "Te di mi cora de por vida" },
					{ time: 75.21, text: "Aunque ya no hablemos, quién sabe el futuro" },
					{ time: 76.90, text: "Mi cartera tiene panza" },
					{ time: 78.75, text: "La funda de mi móvil también tiene panza" },
					{ time: 80.58, text: "Estoy con Sarito, está esperando el Transa" },
					{ time: 82.18, text: "Me comí un tripi y andé hasta Saitama" },
					{ time: 83.99, text: "La mente me carcome" },
					{ time: 89.16, text: "La mente me carcome" },
					{ time: 92.47, text: "La mente me carcome (¿cómo así?)" },
					{ time: 96.02, text: "La mente me car– (oh, por Dios)" },
					{ time: 98.11, text: "Escuchando The Sundays, y pensando en nosotros" },
					{ time: 101.64, text: "Dibujándote un cuento, ojalá y que te encante" },
					{ time: 105.13, text: "Escuchando The Sundays, y pensando en nosotros" },
					{ time: 108.40, text: "Dibujándote un cuento, ojalá y que te encante" }
                ]
            }
        ]
    }
];

// --- ESTADO GLOBAL DE LA APLICACIÓN ---
let currentAlbumIndex = 0; 
let currentTrackIndex = 0;
let isPlaying = false;
let isShuffle = false;
let isRepeat = false;

// --- ELEMENTOS DEL DOM ---
const playlistPage = document.getElementById('playlistPage');
const albumDetailPage = document.getElementById('albumDetailPage');
const playerPage = document.getElementById('playerPage');

const albumsGrid = document.getElementById('albumsGrid');
const albumTracks = document.getElementById('albumTracks');
const bgVideo = document.getElementById('bgVideo');
const mainAudio = document.getElementById('mainAudio');

const currentAlbumTitle = document.getElementById('currentAlbumTitle');
const currentAlbumQuote = document.getElementById('currentAlbumQuote');

// Botones de Navegación
const btnBackToHome = document.getElementById('btnBackToHome');
const btnBackToAlbum = document.getElementById('btnBackToAlbum');

// Elementos del reproductor
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

// --- NAVEGACIÓN Y MANEJO DE PÁGINAS (Capa 1, Capa 2, Capa 3) ---
function changeView(viewName) {
    playlistPage.classList.remove('active');
    albumDetailPage.classList.remove('active');
    playerPage.classList.remove('active');

    if (viewName === 'home') {
        playlistPage.classList.add('active');
        if (!isPlaying) { bgVideo.pause(); bgVideo.src = ""; }
        
    } else if (viewName === 'album') {
        albumDetailPage.classList.add('active');
        if (!isPlaying) { bgVideo.pause(); bgVideo.src = ""; }
        
    } else if (viewName === 'player') {
        playerPage.classList.add('active');
        const track = albumsDatabase[currentAlbumIndex].tracks[currentTrackIndex];
        if (track && track.videoPath && isPlaying) {
            bgVideo.src = track.videoPath;
            bgVideo.play().catch(e => console.log(e));
        }
    }
}

// --- RENDERIZADO CAPA 1: LOBBY DE ÁLBUMES ---
function buildAlbumsUI() {
    albumsGrid.innerHTML = '';
    
    albumsDatabase.forEach((album, index) => {
        const li = document.createElement('li');
        li.classList.add('track-item');
        li.innerHTML = `
            <img src="${album.cover}" alt="${album.title}">
            <div class="track-meta">
                <h3>${album.title}</h3>
                <p>${album.tracks.length} Canciones</p>
            </div>
        `;

        li.addEventListener('click', () => {
            currentAlbumIndex = index;
            currentAlbumTitle.textContent = album.title;
            currentAlbumQuote.textContent = album.quote;
            
            buildTracksUI(index); 
            changeView('album'); 
        });

        albumsGrid.appendChild(li);
    });
}

// --- RENDERIZADO CAPA 2: CANCIONES DEL ÁLBUM SELECCIONADO ---
function buildTracksUI(albumIndex) {
    albumTracks.innerHTML = '';
    const tracks = albumsDatabase[albumIndex].tracks;

    if (tracks.length === 0) {
        albumTracks.innerHTML = '<p style="text-align:center; color: var(--text-muted); font-style: italic;">Próximamente...</p>';
        return;
    }

    tracks.forEach((track, index) => {
        const li = document.createElement('li');
        li.classList.add('track-item');
        li.innerHTML = `
            <img src="${track.cover}" alt="${track.title}">
            <div class="track-meta">
                <h3>${track.title}</h3>
                <p>${track.artist}</p>
            </div>
        `;

        li.addEventListener('mouseenter', () => {
            if (track.videoPath && !isPlaying) {
                bgVideo.src = track.videoPath;
                bgVideo.load();
                bgVideo.play().catch(err => console.log("Autoplay bloqueado"));
            }
        });

        li.addEventListener('mouseleave', () => {
            if (!isPlaying) {
                bgVideo.pause();
                bgVideo.src = "";
            }
        });

        li.addEventListener('click', () => {
            currentTrackIndex = index;
            loadTrack();
            startPlayback();
            changeView('player');
        });

        albumTracks.appendChild(li);
    });
}

// --- CONTROL DE REPRODUCCIÓN ---
function loadTrack() {
    const track = albumsDatabase[currentAlbumIndex].tracks[currentTrackIndex];
    if (!track) return;
    
    playerAlbumArt.src = track.cover;
    playerTrackTitle.textContent = track.title;
    playerTrackArtist.textContent = track.artist;
    mainAudio.src = track.audioPath;
    
    if (track.videoPath) {
        bgVideo.src = track.videoPath;
        bgVideo.load();
        bgVideo.play().catch(err => console.log("Autoplay bloqueado"));
    }

    setupLyrics(track.lyrics);
    mainAudio.load();
}

function startPlayback() {
    isPlaying = true;
    mainAudio.play().catch(err => console.log("Error al reproducir"));
    btnPlayPause.innerHTML = '<i class="fas fa-pause"></i>';
}

function pausePlayback() {
    isPlaying = false;
    mainAudio.pause();
    btnPlayPause.innerHTML = '<i class="fas fa-play"></i>';
}

// --- CONTINUOUS PLAYBACK ENTRE ÁLBUMES ---
function playNext() {
    const currentAlbum = albumsDatabase[currentAlbumIndex];
    
    if (isShuffle) {
        currentAlbumIndex = Math.floor(Math.random() * albumsDatabase.length);
        const randomAlbum = albumsDatabase[currentAlbumIndex];
        if(randomAlbum.tracks.length > 0) {
            currentTrackIndex = Math.floor(Math.random() * randomAlbum.tracks.length);
        }
    } else {
        currentTrackIndex++;
        
        if (currentTrackIndex >= currentAlbum.tracks.length) {
            currentTrackIndex = 0; 
            currentAlbumIndex++; 
            
            if (currentAlbumIndex >= albumsDatabase.length) {
                currentAlbumIndex = 0;
            }
            
            while(albumsDatabase[currentAlbumIndex].tracks.length === 0) {
                 currentAlbumIndex++;
                 if (currentAlbumIndex >= albumsDatabase.length) currentAlbumIndex = 0;
            }
        }
    }
    loadTrack();
    startPlayback();
}

function playPrev() {
    if (isShuffle) {
        playNext(); 
    } else {
        currentTrackIndex--;
        if (currentTrackIndex < 0) {
            currentAlbumIndex--;
            if (currentAlbumIndex < 0) currentAlbumIndex = albumsDatabase.length - 1;
            
            while(albumsDatabase[currentAlbumIndex].tracks.length === 0) {
                currentAlbumIndex--;
                if (currentAlbumIndex < 0) currentAlbumIndex = albumsDatabase.length - 1;
            }
            
            currentTrackIndex = albumsDatabase[currentAlbumIndex].tracks.length - 1;
        }
        loadTrack();
        startPlayback();
    }
}

// --- MOTOR DE LETRAS ---
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

// --- UTILIDADES DE TIEMPO ---
function formatTime(seconds) {
    if (isNaN(seconds)) return "0:00";
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    return `${min}:${sec < 10 ? '0' + sec : sec}`;
}

mainAudio.addEventListener('timeupdate', () => {
    const currentTime = mainAudio.currentTime;
    const duration = mainAudio.duration;

    if (duration) {
        const progressPercent = (currentTime / duration) * 100;
        progressBar.style.width = `${progressPercent}%`;
        timeCurrent.textContent = formatTime(currentTime);
    }

    const lyricRows = document.querySelectorAll('.lyric-row');
    let activeRow = null;

    lyricRows.forEach((row, index) => {
        const rowTime = parseFloat(row.getAttribute('data-time'));
        let nextRowTime = Infinity;
        if (index + 1 < lyricRows.length) {
            nextRowTime = parseFloat(lyricRows[index + 1].getAttribute('data-time'));
        }

        if (currentTime >= rowTime && currentTime < nextRowTime) {
            row.classList.add('active-lyric');
            activeRow = row;
        } else {
            row.classList.remove('active-lyric');
        }
    });

    if (activeRow) {
        const containerRect = lyricsView.getBoundingClientRect();
        const rowRect = activeRow.getBoundingClientRect();
        if (rowRect.top < containerRect.top || rowRect.bottom > containerRect.bottom) {
            activeRow.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
});

mainAudio.addEventListener('loadedmetadata', () => {
    timeTotal.textContent = formatTime(mainAudio.duration);
});

mainAudio.addEventListener('ended', () => {
    if (!isRepeat) {
        playNext(); 
    }
});

progressContainer.addEventListener('click', (e) => {
    const width = progressContainer.clientWidth;
    const clickX = e.offsetX;
    const duration = mainAudio.duration;
    if (duration) {
        mainAudio.currentTime = (clickX / width) * duration;
    }
});

// --- ASIGNACIÓN DE EVENTOS ---
btnPlayPause.addEventListener('click', () => {
    if (isPlaying) pausePlayback();
    else startPlayback();
});

btnNext.addEventListener('click', playNext);
btnPrev.addEventListener('click', playPrev);

btnShuffle.addEventListener('click', () => {
    isShuffle = !isShuffle;
    btnShuffle.classList.toggle('active-mode', isShuffle);
});

btnRepeat.addEventListener('click', () => {
    isRepeat = !isRepeat;
    btnRepeat.classList.toggle('active-mode', isRepeat);
    mainAudio.loop = isRepeat;
});

btnBackToHome.addEventListener('click', () => changeView('home'));
btnBackToAlbum.addEventListener('click', () => changeView('album'));

sliderVolume.addEventListener('input', (e) => {
    mainAudio.volume = e.target.value;
});

sliderSpeed.addEventListener('input', (e) => {
    mainAudio.playbackRate = parseFloat(e.target.value);
    displaySpeed.textContent = `${mainAudio.playbackRate.toFixed(2)}x`;
});

// --- INICIALIZACIÓN ---
function init() {
    buildAlbumsUI(); 
    mainAudio.volume = sliderVolume.value;
    mainAudio.playbackRate = parseFloat(sliderSpeed.value);
    displaySpeed.textContent = `${mainAudio.playbackRate.toFixed(2)}x`;
}

window.addEventListener('DOMContentLoaded', init);