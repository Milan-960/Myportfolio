import { useTranslation } from "react-i18next";

export const useProjectsTable = () => {
  const { t } = useTranslation();
  const PROJECTS = [
    {
      id: "MuzesAi",
      title: "Muzes.ai",
      description:
        "Muzes utilizes AI, data, and analytics to give you the easiest and most intuitive software marketplace experience.",
      image: {
        src: "https://raw.githubusercontent.com/Milan-960/Myportfolio/develop/SS/Muzes.png",
        placeholderSrc:
          "https://raw.githubusercontent.com/Milan-960/Myportfolio/develop/SS/Muzes.png",
      },
      links: {
        site: "https://www.muzes.ai/",
        repo: "https://github.com/Muzesorg",
      },
      technologies: [
        "#reactjs",
        "#nextjs",
        "#react-icons",
        "#MUI",
        "#axios",
        "#react-toastify",
      ],
    },
    {
      id: "bingo-app",
      title: "Bingo-App",
      description:
        "The Bingo app is a simple web application that generates a 5x5 bingo card with random phrases related to video conference calls!",
      image: {
        src: "https://raw.githubusercontent.com/Milan-960/Bingo-App/master/SS/dark.png",
        placeholderSrc:
          "https://raw.githubusercontent.com/Milan-960/Bingo-App/master/SS/dark.png",
      },
      links: {
        site: "https://bingo-apps.vercel.app",
        repo: "https://github.com/Milan-960/Bingo-App",
      },
      technologies: [
        "#reactjs",
        "fireworks",
        "react-icons",
        "use-sound",
        "gsap",
      ],
    },
    {
      id: "nodejs-swagger-api",
      title: "Nodejs-swagger-api",
      description:
        "Simple REST API on Nodejs server build using swagger-ui and ejs.",
      image: {
        src: "https://raw.githubusercontent.com/Milan-960/Nodejs-swagger-api/master/public/api-docs.png",
        placeholderSrc:
          "https://raw.githubusercontent.com/Milan-960/Nodejs-swagger-api/master/public/api-docs.png",
      },
      links: {
        site: "https://nodejs-swagger-api.vercel.app",
        repo: "https://github.com/Milan-960/Nodejs-swagger-api",
      },
      technologies: ["#reactjs", "#nodejs", "swagger", "ejs"],
    },
    {
      id: "moonlight-films",
      title: "Moonlight-Films",
      description:
        "This app is about movie with using the movie database API. it will allow user to create an account and they also will be able to put commnets on in review section on the movie app. As well it it will allow user to stream movie online and can download the app.",
      image: {
        src: "https://camo.githubusercontent.com/62739f1a7020b7ac646a96cb97a010d6365171d98d80286d7b49b04980b98bf6/68747470733a2f2f692e6962622e636f2f34574d367853702f686f6d652e706e67",
        placeholderSrc:
          "https://camo.githubusercontent.com/30e30b43722ebaf8117f3cdd7479d4657fd579ba8f2cbd44cab05391fc6ad938/68747470733a2f2f692e6962622e636f2f434230363934792f64657461696c2e706e67",
      },
      links: {
        site: "https://moonlight-film.vercel.app",
        repo: "https://github.com/Milan-960/Moonlight-films",
      },
      technologies: [
        "#reactjs",
        "#typescript",
        "firebase",
        "tailwindcss",
        "react-toastify",
        "formkit",
      ],
    },
    {
      id: "raect-webpack-template",
      title: "Reactjs Webpack Template",
      description:
        "A Raect + Webpack starter template with JS. This template can be used directly for the creation of new projects. When using it like this, make sure to not install it via npm but download it directly. The template is (nearly) useless for itself when downloaded via npm! Is a new kind of build tool for frontend web development",
      image: {
        src: "https://raw.githubusercontent.com/Milan-960/Reactjs-webpack-template/master/SS/homenew.png",
        placeholderSrc:
          "https://raw.githubusercontent.com/Milan-960/Reactjs-webpack-template/master/SS/homenew.png",
      },
      links: {
        site: "https://reactjs-webpack-template.vercel.app",
        repo: "https://github.com/Milan-960/Reactjs-webpack-template",
      },
      technologies: ["#reactjs", "#webpack", "#javascript"],
    },
    {
      id: "vite-react-template",
      title: "Vite React Template",
      description:
        "A Vite + React starter template with TypeScript + SWC. Is a new kind of build tool for frontend web development. Think a pre-configured dev server + bundler combo, but leaner and faster.",
      image: {
        src: "https://raw.githubusercontent.com/Milan-960/vite-react-template/master/SS/home.png",
        placeholderSrc:
          "https://raw.githubusercontent.com/Milan-960/vite-react-template/master/SS/home.png",
      },
      links: {
        site: "https://vite-react-template-seven.vercel.app",
        repo: "https://github.com/Milan-960/vite-react-template",
      },
      technologies: ["#reactjs", "#vite", "#typescript"],
    },
    {
      id: "img-generator",
      title: "Img generator app 📸",
      description:
        "This is a simple text editor app to edit the img for making funny memes. you are also able to convert .JPG to .PNG files as well!!",
      image: {
        src: "https://raw.githubusercontent.com/Milan-960/img-generator/main/public/home.png",
        placeholderSrc:
          "https://raw.githubusercontent.com/Milan-960/img-generator/main/public/home.png",
      },
      links: {
        site: "https://img-text-generators.netlify.app",
        repo: "https://github.com/Milan-960/img-generator",
      },
      technologies: [
        "#reactjs",
        "#downloadjs",
        "#html-to-image",
        "#@types/file-saver",
      ],
    },
    {
      id: "Crypto-price-tracking-app",
      title: "Crypto price tracking app 🔥",
      description:
        "This is a Crypto price tracking app that was built using Coingecko Api and is a PWA web app. It show latest price all the cryptocurrencies and chart.🔥💰 It also has a dark mode.",
      image: {
        src: "https://raw.githubusercontent.com/Milan-960/cryptocurrency-list/main/SS/Dhome.png",
        placeholderSrc:
          "https://raw.githubusercontent.com/Milan-960/cryptocurrency-list/main/SS/Dhome.png",
      },
      links: {
        site: "https://cryptocurrency-list-five.vercel.app",
        repo: "https://github.com/Milan-960/cryptocurrency-list",
      },
      technologies: [
        "#reactjs",
        "#coingeckoApi",
        "#tailwindcss",
        "#zustand",
        "#axios",
        "#recharts",
      ],
    },
    {
      id: "The Fitness App",
      title: "The Fitness App",
      description:
        "This is a Fitness App that was built using Rapid API and is a PWA web app. It shows different exercises for gym freak as well as videos of each and every exercise with full details of the exercises with great explanation 💪🏋️‍♀️",
      image: {
        src: "https://raw.githubusercontent.com/Milan-960/Fitness-app/master/SS/home.png",
        placeholderSrc:
          "https://raw.githubusercontent.com/Milan-960/Fitness-app/master/SS/home.png",
      },
      links: {
        site: "https://milan-fitness-app.vercel.app/",
        repo: "https://github.com/Milan-960/Fitness-app.git",
      },
      technologies: ["#reactjs", "#rapidAPI", "#MUI"],
    },

    {
      id: "The-Traveller-Test-Smart-pension",
      title: "The-Traveller-Test-Smart-pension",
      description:
        "This is a reactjs and nodejs-based traveler application. It's for making a wishlist for your future travels in which city you want to visit. You can create a wishlist and see if you've already been to the place.🔥 🔥",
      image: {
        src: "https://raw.githubusercontent.com/Milan-960/traveller-test/master/img/home.png",
        placeholderSrc:
          "https://raw.githubusercontent.com/Milan-960/traveller-test/master/img/home.png",
      },
      links: {
        site: "https://traveller-test.netlify.app",
        repo: "https://github.com/Milan-960/traveller-test",
      },
      technologies: ["#reactjs", "#framer-motion", "#graphql", "#typescript"],
    },

    {
      id: "The-cryptoverse",
      title: "The-cryptoverses",
      description:
        "This is a cryptoverse App that was built using CryptAPIs and is a PWA web app. It show very updated data of all the cryptocurrencies. 🔥 🔥",
      image: {
        src: "https://raw.githubusercontent.com/Milan-960/The-Cryptoverse-App/master/SS/home1.png",
        placeholderSrc:
          "https://raw.githubusercontent.com/Milan-960/The-Cryptoverse-App/master/SS/home1.png",
      },
      links: {
        site: "https://thecrypoverse.netlify.app/",
        repo: "https://github.com/Milan-960/The-Cryptoverse-App.git",
      },
      technologies: [
        "#reactjs",
        "#pwa",
        "#motion",
        "#axios",
        "#rapidAPI",
        "#chartJS",
      ],
    },
    {
      id: "stone-papers-scissor",
      title: "stone-papers-scissors",
      description:
        "Stone Paper Scissors game built with React.js and framer motion and it is a PWA 🔥 I alos have used confetti and winning voice.",
      image: {
        src: "https://raw.githubusercontent.com/Milan-960/Stone-paper-scissors/master/src/assets/start_img.jpeg",
        placeholderSrc:
          "https://raw.githubusercontent.com/Milan-960/Stone-paper-scissors/master/src/assets/start_img.jpeg",
      },
      links: {
        site: "https://stone-papers-scissors.netlify.app/",
        repo: "https://github.com/Milan-960/Stone-paper-scissors/",
      },
      technologies: ["#reactjs", "#pwa", "#framer motion"],
    },
    {
      id: "Memories-app",
      title: "Memories-app",
      description:
        "This is a memory app that was built using nodejs, expressjs and mongodb APIs and is a PWA web app. Where we can store our past memories and as well as we can add images.",
      image: {
        src: "https://i.pinimg.com/474x/ff/19/eb/ff19eb3c45e4840344c20b62825359e3.jpg",
        placeholderSrc:
          "https://i.pinimg.com/474x/ff/19/eb/ff19eb3c45e4840344c20b62825359e3.jpg",
      },
      links: {
        site: "https://mern-memory.vercel.app/",
        repo: "https://github.com/Milan-960/MERN-memory/",
      },
      technologies: [
        "#reactjs",
        "#nodejs",
        "#expressjs",
        "#axios",
        "#mongodb",
        "#nodemon",
        "#npm",
      ],
    },
    {
      id: "weather-app",
      title: "weather-app ☃️",
      description:
        "This is a weather app that was built using weather APIs and is a PWA web app. I also have used AXIOS for implementing APIS.",
      image: {
        src: "https://i.pinimg.com/474x/61/a6/72/61a672be219f12d0ca8e266032ea09d7.jpg",
        placeholderSrc:
          "https://i.pinimg.com/474x/61/a6/72/61a672be219f12d0ca8e266032ea09d7.jpg",
      },
      links: {
        site: "https://live-weather-app-pwa.netlify.app/",
        repo: "https://github.com/Milan-960/weather-app/",
      },
      technologies: ["#react", "#axios", "#NPM", "#CSS3"],
    },
    {
      id: "realtime-chat-app",
      title: "chat-app 💬",
      description:
        "This app has been created with firebase version 9.6.1 which is the very latest version of firebase. where I have used firebase config APIS and have implemented in reactjs to make a REALTIME-CHAT-APP.",
      image: {
        src: "https://i.pinimg.com/originals/40/91/96/40919621f44c58623c4245c997d61656.png",
        placeholderSrc:
          "https://i.pinimg.com/originals/40/91/96/40919621f44c58623c4245c997d61656.png",
      },
      links: {
        site: "https://realtime-chat-app-sage.vercel.app",
        repo: "https://github.com/Milan-960/Realtime-ChatApp",
      },
      technologies: ["#react", "#firebase", "#moment", "#NPM", "#CSS3"],
    },
    {
      id: "quote-app",
      title: "Quote-App 💭",
      description:
        "Basically, This app is about Quotes, I have created this app for adding some Quotes as well as some of your interesting thoughts. 😉",
      image: {
        src: "https://github.com/Milan-960/Quote-App/raw/main/SS/home.png",
        placeholderSrc:
          "https://github.com/Milan-960/Quote-App/raw/main/SS/home.png",
      },
      links: {
        site: "https://dayquotes.netlify.app/quotes",
        repo: "https://github.com/Milan-960/Quote-App",
      },
      technologies: ["#react", "#firebase", "#NPM", "#CSS3", "#Javascript"],
    },
    {
      id: "React-recipe-list",
      title: "React-recipe-list",
      description:
        "This is a react recipe list app that allows you to add your own recipes and use as a reminder. Take a look at the link provided below.😉",
      image: {
        src: "https://raw.githubusercontent.com/Milan-960/Recipe-List-App/main/public/img/RECIPES_LIST.png",
        placeholderSrc:
          "https://raw.githubusercontent.com/Milan-960/Recipe-List-App/main/public/img/RECIPES_LIST.png",
      },
      links: {
        site: "https://recipe-list-app.netlify.app/",
        repo: "https://github.com/Milan-960/Recipe-list-app",
      },
      technologies: ["#Reactjs", "#Javascript", "#CSS3"],
    },
    {
      id: "RoboHash 🤖",
      title: "RoboHash 🤖",
      description:
        "This is a react robofriend app where I have used calls based component and have use it's lifecycle mathod. 😉",
      image: {
        src: "https://raw.githubusercontent.com/Milan-960/RoboHash/master/robohome.png",
        placeholderSrc:
          "https://raw.githubusercontent.com/Milan-960/RoboHash/master/robohome.png",
      },
      links: {
        site: "https://milan-960.github.io/RoboHash",
        repo: "https://github.com/Milan-960/RoboHash",
      },
      technologies: ["#HTML5", "#CSS3", "#Javascript"],
    },
    {
      id: "tic-tac-toe-game",
      title: "Tic-Tac-Toe-Game 🎮",
      description:
        "A Game. where player can play with computer if He/She doesn't have any opponent!",
      image: {
        src: "https://github.com/Milan-960/Tic-Tac-Toe-Game/raw/main/tic.png",
        placeholderSrc:
          "https://github.com/Milan-960/Tic-Tac-Toe-Game/raw/main/tic.png",
      },
      links: {
        site: "https://tic-tac-toem.netlify.app/",
        repo: "https://github.com/Milan-960/Tic-Tac-Toe-Game",
      },
      technologies: ["#HTML5", "#CSS3", "#Javascript"],
    },
  ];

  return { PROJECTS };
};
