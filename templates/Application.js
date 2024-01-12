export const ApplicationSuccessTemplates = () => {
  return `
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>

  <body
    style="
      width: full;
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      background-color: ghostwhite;
    "
  >
    <div
      style="
        max-width: 500px;
        min-height: 100vh;
        padding: 0;
        margin: 0 auto;
        background-color: white;
        box-sizing: border-box;
        padding: 0 0px;
      "
    >
      <a href="https://partners.doctordoggy.vet">
        <img
          src="https://res.cloudinary.com/db9kd4qbi/image/upload/v1704994509/doctor-doggy/applicationReceived_putgbd.png"
          style="width: 100%"
          alt=""
        />
      </a>
    </div>
  </body>
</html>
`;
};

export const ApplicationApproved = (email, password) => {
  return `<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style></style>
  </head>

  <body
    style="
      width: full;
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      background-color: ghostwhite;
    "
  >
    <div
      style="
        max-width: 500px;
        min-height: 100vh;
        padding: 0;
        margin: 0 auto;
        background-color: white;
        box-sizing: border-box;
        padding: 0 0px;
      "
    >
      <img
        src="https://res.cloudinary.com/db9kd4qbi/image/upload/v1705041498/doctor-doggy/applicationReceived_qrd42m.png"
        style="width: 100%"
        alt=""
      />
      <div
        style="
          font-family: Arial, Helvetica, sans-serif;
          font-size: 16px;
          padding: 30px 0;
          padding-left: 30px;
          padding-bottom: 60px;
        "
      >
        <p style="display: block">
          Email:
          <span style="padding-left: 5px;font-weight: 600"
            >${email}</span
          >
        </p>
        <p style="padding-top: 5px; display: block">
          Password:
          <span style="font-weight: 600">${password}</span>
        </p>
        <a
          style="margin-top: 30px; display: block; text-decoration: none"
          href="https://partners.doctordoggy.vet/login"
        >
          Open partners portal
        </a>
      </div>
    </div>
  </body>
</html>
`;
};
