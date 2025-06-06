import { useTranslation } from "react-i18next";

// Import all images using dynamic import
import moonlightMovies from "../assets/moonlight-movies.png";
import muzesAi from "../assets/Muzes.png";
import devBookmark from "../assets/devBookmark.png";
import IMPC from "../assets/IMPC.png";
import WIND_TURBINE from "../assets/wind-turbine.png";

// Centralize image imports
const PROJECT_IMAGES = {
  moonlightMovies,
  muzesAi,
  devBookmark,
  IMPC,
  WIND_TURBINE,
};

export const useProjectsTable = () => {
  const { t } = useTranslation();
  const PROJECTS = [
    {
      id: "Dev Bookmark",
      title: "Dev Bookmark",
      description:
        "DevBookmark transforms how developers manage their digital resources. We're not just a bookmarking tool – we're your partner in professional growth, helping you curate, organize, and share knowledge that matters.",
      image: {
        src: PROJECT_IMAGES.devBookmark,
        placeholderSrc: PROJECT_IMAGES.devBookmark,
      },
      links: {
        site: "https://www.devbookmark.site",
        repo: "https://www.devbookmark.site",
      },
      technologies: [
        "#nestjs14",
        "#typescript",
        "#javascript",
        "#prisma",
        "#Lucide",
        "#cloudflare",
      ],
    },
    {
      id: "Wind turbine solutions",
      title: "Wind turbine solutions",
      description:
        "The Wind Turbine Planner is a React-based application designed to help plan maintenance activities for wind turbines by leveraging real-time wind data. The application fetches and displays wind speed, direction, and other weather-related metrics for the next two days.",
      image: {
        src: PROJECT_IMAGES.WIND_TURBINE,
        placeholderSrc: PROJECT_IMAGES.WIND_TURBINE,
      },
      links: {
        site: "https://wind-turbine-solutions.vercel.app",
        repo: "https://github.com/Milan-960/Wind-turbine-solutions",
      },
      technologies: [
        "#reactjs",
        "#typescript",
        "#vite",
        "#leaflet-map",
        "#jest",
        "#weatherapi",
        "#react-chartjs-2",
      ],
    },
    {
      id: "IMPC mouse phenotyping",
      title: "IMPC mouse phenotyping",
      description:
        "This app allows users to compare the knockout effect of a list of genes among different phenotyping systems by visualizing the data using a heatmap!",
      image: {
        src: PROJECT_IMAGES.IMPC,
        placeholderSrc: PROJECT_IMAGES.IMPC,
      },
      links: {
        site: "https://impc-mouse-phenotyping.vercel.app",
        repo: "https://github.com/Milan-960/EBI-IMPC-Mouse-Phenotyping",
      },
      technologies: [
        "#reactjs",
        "#typescript",
        "#javascript",
        "#heatmap",
        "#bootstrap",
        "#nivo",
      ],
    },
    {
      id: "AI Powered Image Recognition",
      title: "AI Powered Image Recognition",
      description:
        "This repository contains a Progressive Web App (PWA) that leverages TensorFlow.js and the MobileNet model to perform real-time image classification.",
      image: {
        src: "https://raw.githubusercontent.com/Milan-960/AI-Powered-Image-Recognition/main/SS/home.png",
        placeholderSrc:
          "https://raw.githubusercontent.com/Milan-960/AI-Powered-Image-Recognition/main/SS/home.png",
      },
      links: {
        site: "https://ai-powered-image-recognition.vercel.app",
        repo: "https://github.com/Milan-960/AI-Powered-Image-Recognition",
      },
      technologies: ["#nestjs14", "#threejs", "#tensorflow", "#pwa-apps"],
    },
    {
      id: "Threejs react",
      title: "Threejs react",
      description: "Threejs-react app with cool animations and interactions.",
      image: {
        src: "https://raw.githubusercontent.com/Milan-960/Threejs-react/master/ss/Home.png",
        placeholderSrc:
          "https://raw.githubusercontent.com/Milan-960/Threejs-react/master/ss/Home.png",
      },
      links: {
        site: "https://threejs-react-cube.vercel.app/",
        repo: "https://github.com/Milan-960/Threejs-react",
      },
      technologies: ["#reactjs", "#threejs", "#react-icons"],
    },
    {
      id: "MuzesAi",
      title: "Muzes.ai",
      description:
        "Muzes utilizes AI, data, and analytics to give you the easiest and most intuitive software marketplace experience.",
      image: {
        src: PROJECT_IMAGES.muzesAi,
        placeholderSrc: PROJECT_IMAGES.muzesAi,
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
      id: "bingo app",
      title: "Bingo App",
      description:
        "The Bingo app is a simple web application that generates a 5x5 bingo card with random phrases related to video conference calls!",
      image: {
        src: "https://raw.githubusercontent.com/Milan-960/Bingo-App/master/SS/dark.png",
        placeholderSrc:
          "https://raw.githubusercontent.com/Milan-960/Bingo-App/master/SS/dark.png",
      },
      links: {
        site: "https://bingo.milansachani.dev",
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
      id: "nodejs swagger api",
      title: "Nodejs swagger api",
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
      id: "moonlight films",
      title: "Moonlight Films",
      description:
        "This app is about movie with using the movie database API. it will allow user to create an account and they also will be able to put commnets on in review section on the movie app. As well it it will allow user to stream movie online and can download the app.",
      image: {
        src: PROJECT_IMAGES.moonlightMovies,
        placeholderSrc: PROJECT_IMAGES.moonlightMovies,
      },
      links: {
        site: "https://moonlight.milansachani.dev",
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
      id: "raect webpack template",
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
      id: "vite react template",
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
      id: "img generator",
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
      id: "Crypto price tracking-app",
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
      id: "The Traveller Test Smart pension",
      title: "The Traveller Test Smart pension",
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
      id: "The cryptoverse",
      title: "The cryptoverses",
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
      id: "stone papers scissor",
      title: "stone papers scissors",
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
      id: "Memories app",
      title: "Memories app",
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
      id: "weather app",
      title: "weather app ☃️",
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
      id: "realtime chat app",
      title: "chat app 💬",
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
      id: "quote app",
      title: "Quote App 💭",
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
      id: "React recipe list",
      title: "React recipe list",
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
      id: "tic tac toe game",
      title: "Tic Tac Toe Game 🎮",
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
