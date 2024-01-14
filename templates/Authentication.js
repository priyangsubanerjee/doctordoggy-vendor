export const LoginSuccess = (email, browserAgent, date) => {
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

      .messageBox {
        padding: 20px 8px;
        padding-bottom: 30px;
      }

      .success-icon {
        width: 50px;
        height: 50px;
        object-fit: contain;
        display: block;
        margin: 0 auto;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="messageBox">
        <h1
          style="
            font-size: 25px;
            font-weight: 600;
            margin-top: 20px;
          "
        >
          Login success 🎉
        </h1>
        <p style="font-weight: 400; line-height: 1.9; margin-top: 30px">
          Login attemted to your account
          <span style="color: rgb(34, 74, 237)">(${email})</span> from a new
          device. If this was you, you can ignore this email. If this was not
          you, please change your password immediately.
        </p>
        <p style="margin-top: 40px">
          <span style="font-weight: 500">Device:</span>
           <span>${browserAgent}</span>
        </p>
        <p style="margin-top: 15px">
          <span style="font-weight: 500">Time:</span> 
          <span>${date}</span>
        </p>
        <p style="margin-top: 29px; font-weight: 400">
          Have a great day ahead 😇
        </p>
      </div>
      <section>
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
      </section>
    </div>
  </body>
</html>
`;
};

export const PassResetSuccess = (email, device, date) => {
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

      .messageBox {
        padding: 20px 8px;
        padding-bottom: 30px;
      }

      .success-icon {
        width: 50px;
        height: 50px;
        object-fit: contain;
        display: block;
        margin: 0 auto;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="messageBox">
        <h1
          style="
            font-size: 25px;
            font-weight: 600;
            margin-top: 20px;
          "
        >
          Password reset 🔠
        </h1>
        <p style="font-weight: 400; line-height: 1.9; margin-top: 30px">
          Password reset requested for
          <span style="color: rgb(34, 74, 237)">(${email})</span> was resolved
          few minutes back. If this was you, you can ignore this email. If this
          was not you, please change your password immediately.
        </p>
        <p style="margin-top: 40px">
          <span style="font-weight: 500">Device:</span>
          <span>${device}</span>
        </p>
        <p style="margin-top: 15px">
          <span style="font-weight: 500">Time:</span>
          <span>${date}</span>
        </p>
        <p style="margin-top: 29px; font-weight: 400">
          Have a great day ahead 😇
        </p>
      </div>
      <section>
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
      </section>
    </div>
  </body>
</html>
`;
};
