<!DOCTYPE html>
<html lang="en">
  <head>
    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
    <meta httpEquiv="cache-control" content="personal website" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#623686" />
    <link rel="icon" type="img/logo.png" href="./img/log.jpeg" />
    <link rel="apple-touch-icon" href="./img/log.jpeg" />
    <link rel="manifest" href="./manifest.json" />
    <link rel="shortcut icon" href="./img/log.jpeg" />
    <title>Milan Sachani</title>
    <meta name="title" content="Milan Sachani" />
    <meta name="keywords" content="coding, project, contact, about" />
    <meta name="language" content="English" />
    <meta
      name="description"
      content="Milan Sachani | Front End Developer | Working as a Freelancer & Up-work as ReactJs Developer. who loves to create a some crazy stuff"
    />
    <meta
      name="image"
      content="https://i.pinimg.com/1200x/93/cb/a6/93cba608cbd38deb81023c9f0407d9ff.jpg"
    />
    <meta
      name="thumbnail"
      content="https://i.pinimg.com/1200x/93/cb/a6/93cba608cbd38deb81023c9f0407d9ff.jpg"
    />

    <!-- Schema.org for Google+ -->
    <meta itemprop="name" content="Milan Sachani" />
    <meta
      itemprop="description"
      content="Milan Sachani | Front End Developer | Working as a Freelancer & Up-work as ReactJs Developer. who loves to create a some crazy stuff"
    />
    <meta
      itemprop="image"
      content="https://i.pinimg.com/1200x/93/cb/a6/93cba608cbd38deb81023c9f0407d9ff.jpg"
    />

    <!-- Twitter  -->
    <meta name="twitter:title" content="Milan Sachani" />
    <meta name="twitter:card" content="summary" />
    <meta
      name="twitter:description"
      content="I am a Developer who likes to share crazy things related to programming!!"
    />
    <meta
      name="twitter:image"
      content="https://i.pinimg.com/1200x/93/cb/a6/93cba608cbd38deb81023c9f0407d9ff.jpg"
    />

    <!-- Open Graph general (Facebook, Pinterest & Google+) -->
    <meta name="og:title" content="Milan Sachani" />
    <meta
      property="og:description"
      content="Milan Sachani | Front End Developer | Freelancer, Up-work & ReactJs Developer. who loves to create some crazy stuff"
    />
    <meta
      property="og:image"
      content="https://i.pinimg.com/1200x/93/cb/a6/93cba608cbd38deb81023c9f0407d9ff.jpg"
    />
    <meta property="og:site_name" content="Milan Sachani" />
    <meta property="og:title" content="Milan Sachani" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://milansachani.dev" />
    <meta name="revisit-after" content="1 day" />
    <meta name="MSSmartTagsPreventParsing" content="TRUE" />
    <meta name="author" content="Milan Sachani" />
    <meta name="robots" content="index,follow" />
    <meta name="copyright" content="2021" />

  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <script>
      if ("serviceWorker" in navigator) {
        window.addEventListener("load", () => {
          navigator.serviceWorker
            .register("./serviceworker.js")
            .then((reg) => console.log("Success: ", reg.scope))
            .catch((err) => console.log("Failure: ", err));
        });
      }
    </script>
  </body>
</html>
