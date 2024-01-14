export const ApplicationSuccessTemplates = () => {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      @import url("https://fonts.googleapis.com/css2?family=Anton&family=Big+Shoulders+Display:wght@100;200;300;400;500;600;700;800;900&family=Poppins:wght@100;200;300;400;500;600;700;800;900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      body {
        background: rgb(252, 247, 255);
      }
      .container {
        max-width: 560px;
        background: white;
        font-family: "Roboto", sans-serif;
        margin: 0 auto;
      }
      img {
        width: 100%;
        display: block;
      }
      footer {
        padding: 15px 0;
        background-size: cover;
        background-image: url(https://images.pexels.com/videos/3045163/free-video-3045163.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500);
      }
      a {
        display: inline-block;
      }
      .icon {
        display: inline-block;
        height: 30px;
        margin-right: 10px;
        object-fit: contain;
      }

      .socials {
        width: fit-content;
        margin: 0 auto;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <img
        src="https://res.cloudinary.com/db9kd4qbi/image/upload/v1705226302/doctor-doggy/applicationReceived_c8d2py.png"
        alt=""
      />
      <img
        src="https://res.cloudinary.com/db9kd4qbi/image/upload/v1705236418/doctor-doggy/Footer_jfwdjx.png"
        alt=""
      />
      <footer>
        <div class="socials">
          <a href="">
            <img
              src="https://ci3.googleusercontent.com/meips/ADKq_NbA60snfyxm8G2JORXO68vQzXlAfQSnHMgq_NxjTFOHJmgtislRcqt4J7BfdKLZmFFwc04wzSnG2Jk-m4mhTNpZjhYKr7PhXzMcERiDZxWfOUYWXhpnXSFdH3Yq_kDMwUv65UxEQyqzzyIb57lpUusHa-TiZNBrnOi3qbXEYJAk8BFbbsXWJYg6ig=s0-d-e1-ft#https://eu1-dashboard-beepluginuploads3bucket-174u3y07szypz.s3.amazonaws.com/images/R95-W5Z-Z45Z/Facebook_icon_1.png"
              alt=""
              class="icon"
            />
          </a>
          <a href="">
            <img
              src="https://ci3.googleusercontent.com/meips/ADKq_NaNTnawroE7RXhiSnNyXLww3l8-OLGHE2pLJ3xjUxY-XOH5PUMMjjh7ZpRQg06khAFktF05L5SNC17sgpeomk5RXgNa08S6egubit4U8mo7YqcDLlMeoNAsvDSTKMIC-YdN8u3KRCd2tl6jHhCvQp1sktjqfNfhIzs1D8rbqBcX31FLeL04Gm4j=s0-d-e1-ft#https://eu1-dashboard-beepluginuploads3bucket-174u3y07szypz.s3.amazonaws.com/images/R95-W5Z-Z45Z/Twitter_icon_1.png"
              alt=""
              class="icon"
            />
          </a>
          <a href="">
            <img
              src="https://ci3.googleusercontent.com/meips/ADKq_NamTTG-lnfPcr9SkGBvN2woDgDpPZBk7m5o8FvLiPK5aIs5e6KBQ65G_Kj9rVrzurwwHHqaI-7rpXBTd41pzgZn-fPa_MRNS57IlLY7a-B6aNSai2NO0JIu3C3RiHI2StwSwhXfpxsCar6tA-WqgZaAshSA8W5DNKf26erPVwnXbSdqNtWQysM5lTg=s0-d-e1-ft#https://eu1-dashboard-beepluginuploads3bucket-174u3y07szypz.s3.amazonaws.com/images/R95-W5Z-Z45Z/Instagram_icon_1.png"
              alt=""
              class="icon"
            />
          </a>
          <a href="">
            <img
              src="https://ci3.googleusercontent.com/meips/ADKq_NbhnEuGfhNBSHEW7x4lwXxZXbIPISHwDT0aHVKJRg2J7rNzXYQYLJ2l4l1aHVCVO991pzxRYDrHPbiclYTVK1TwQkT4LbCVuOn9fl4JAtASpkXBDNmXTmetfxZuPdAO0hTY7KxmzGfsQvSPaNp4ew4raf1MSvmfTRrr7vHjZTlF4UZ36W7LG45cOg=s0-d-e1-ft#https://eu1-dashboard-beepluginuploads3bucket-174u3y07szypz.s3.amazonaws.com/images/R95-W5Z-Z45Z/Youtube-Icon-2x.png"
              alt=""
              class="icon"
            />
          </a>
        </div>
      </footer>
    </div>
  </body>
</html>
`;
};

export const ApplicationApproved = (email, password) => {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      @import url("https://fonts.googleapis.com/css2?family=Anton&family=Big+Shoulders+Display:wght@100;200;300;400;500;600;700;800;900&family=Poppins:wght@100;200;300;400;500;600;700;800;900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      body {
        background: rgb(252, 247, 255);
      }
      .container {
        max-width: 560px;
        background: white;
        font-family: "Roboto", sans-serif;
        margin: 0 auto;
      }
      img {
        width: 100%;
        display: block;
      }
      footer {
        padding: 15px 0;
        background-size: cover;
        background-image: url(https://images.pexels.com/videos/3045163/free-video-3045163.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500);
      }

      .icon {
        height: 30px;
        width: 30px;
        object-fit: contain;
        display: inline;
      }

      .socials {
        width: fit-content;
        margin: 0 auto;
      }

      a {
        display: inline;
        text-decoration: none;
      }

      .icon-wrapper {
        margin-right: 10px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <img
        src="https://res.cloudinary.com/db9kd4qbi/image/upload/v1705041498/doctor-doggy/applicationReceived_qrd42m.png"
        alt=""
      />
      <img
        src="https://res.cloudinary.com/db9kd4qbi/image/upload/v1705236418/doctor-doggy/Footer_jfwdjx.png"
        alt=""
      />
      <footer>
        <div class="socials">
          <a class="icon-wrapper" href="">
            <img
              src="https://ci3.googleusercontent.com/meips/ADKq_NbA60snfyxm8G2JORXO68vQzXlAfQSnHMgq_NxjTFOHJmgtislRcqt4J7BfdKLZmFFwc04wzSnG2Jk-m4mhTNpZjhYKr7PhXzMcERiDZxWfOUYWXhpnXSFdH3Yq_kDMwUv65UxEQyqzzyIb57lpUusHa-TiZNBrnOi3qbXEYJAk8BFbbsXWJYg6ig=s0-d-e1-ft#https://eu1-dashboard-beepluginuploads3bucket-174u3y07szypz.s3.amazonaws.com/images/R95-W5Z-Z45Z/Facebook_icon_1.png"
              alt=""
              class="icon"
            />
          </a>
          <a class="icon-wrapper" href="">
            <img
              src="https://ci3.googleusercontent.com/meips/ADKq_NaNTnawroE7RXhiSnNyXLww3l8-OLGHE2pLJ3xjUxY-XOH5PUMMjjh7ZpRQg06khAFktF05L5SNC17sgpeomk5RXgNa08S6egubit4U8mo7YqcDLlMeoNAsvDSTKMIC-YdN8u3KRCd2tl6jHhCvQp1sktjqfNfhIzs1D8rbqBcX31FLeL04Gm4j=s0-d-e1-ft#https://eu1-dashboard-beepluginuploads3bucket-174u3y07szypz.s3.amazonaws.com/images/R95-W5Z-Z45Z/Twitter_icon_1.png"
              alt=""
              class="icon"
            />
          </a>
          <a class="icon-wrapper" href="">
            <img
              src="https://ci3.googleusercontent.com/meips/ADKq_NamTTG-lnfPcr9SkGBvN2woDgDpPZBk7m5o8FvLiPK5aIs5e6KBQ65G_Kj9rVrzurwwHHqaI-7rpXBTd41pzgZn-fPa_MRNS57IlLY7a-B6aNSai2NO0JIu3C3RiHI2StwSwhXfpxsCar6tA-WqgZaAshSA8W5DNKf26erPVwnXbSdqNtWQysM5lTg=s0-d-e1-ft#https://eu1-dashboard-beepluginuploads3bucket-174u3y07szypz.s3.amazonaws.com/images/R95-W5Z-Z45Z/Instagram_icon_1.png"
              alt=""
              class="icon"
            />
          </a>
          <a class="icon-wrapper" href="">
            <img
              src="https://ci3.googleusercontent.com/meips/ADKq_NbhnEuGfhNBSHEW7x4lwXxZXbIPISHwDT0aHVKJRg2J7rNzXYQYLJ2l4l1aHVCVO991pzxRYDrHPbiclYTVK1TwQkT4LbCVuOn9fl4JAtASpkXBDNmXTmetfxZuPdAO0hTY7KxmzGfsQvSPaNp4ew4raf1MSvmfTRrr7vHjZTlF4UZ36W7LG45cOg=s0-d-e1-ft#https://eu1-dashboard-beepluginuploads3bucket-174u3y07szypz.s3.amazonaws.com/images/R95-W5Z-Z45Z/Youtube-Icon-2x.png"
              alt=""
              class="icon"
            />
          </a>
        </div>
      </footer>
    </div>
  </body>
</html>
`;
};
