const Meeting = require("google-meet-api").meet;
const credential = {
  type: "service_account",
  project_id: "theta-disk-398014",
  private_key_id: "480db3b2bb2e8f57d1ef51b7d24ac0b1169c87f4",
  private_key:
    "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDUIEqxFNDxFxMB\n+QYL6d7GyrlzO/rQ70lUEYVo4F6fC8b+VlciVNihqBgVFQb+SzfRolpT7hHPYmPZ\nWvRu1Euy9DjUq8omxbfXrsQfgf1s/BBlYxhxQuv/3r9/7qJi6/MojAiuvfp2hukp\n7p5//j3wxFO40ErjXrJLDb6GnED/jGJS6f4v90fI8olFYhnirhK17rS+wrsEc7Fl\neaYp9B1XxqTMn20WQVhxRVO7J++fySg88FNDyEQ8Lc1cOG4MibjYzMaYNBX4V+IV\nG0V/GW8EeewYBvEuNZ1KAsfRmRXa5NIpMx/xQaPEH2nB0UBvjAdMyHodAIbQZvX7\ngCSwJzCxAgMBAAECggEAA429RUKvQ761IY+/BMTop8VpKRpMjSKubziyQWEdjLC5\nPHUMqs/852u7aDes4Tvi20GgSEQr1bYqVzpBb+LhbXB5zEGgK8PyXMFk2o9GWYSj\n2gL4kPCD/Mp0mat72nLlT7JViec3sokiOlgw8mgmDaodqfIJXc5DZ+OleQ1V6cIJ\nP+k0JvIDM/MHPP2zrygKiakVhPwWppZRg+ee6JSKF1JXamhYm1hVgBkKDwnVZ6Dr\nD8ZiyEWwYhVkJ3ACoAOxgLYjzKsrJ4YP2TKs8VF6d7qFiX+M5Yl0JGc1kVb+D7AF\nf5tTCl9pNyZSV+dz8loDTirg9Pk8XZbzaPxZnvmoLQKBgQDxYd+KFb6eL6+Ajw3I\nQZQhnIpTO2nk+MltkOou/YnZcslO1zVx4t83AxD1KVzKCEs3mQDV+NUnVMZscF05\ngaShJIbTSplecUMgP5jLq2J/1pVQjgHjw4VNmPv52hsWC8+rArPiU+yVw4+bL/bF\nhQ9IhSrwxMPk5WOTVhwM63+NNQKBgQDg+Nzkpj1eeAonxwjKIgewnq2SyvaGGvvU\nrF2If2p6VTy9wgRV78I7cdkp887QJOlKEuqtOvv52HmvbC1r6hbtraIvgWATzFwK\nHTQZLhEGuEz3Zy3wlKK+6Fd35YYu5+pNureYJ5zZpEHQRA+3XyirshAIQwgmEX1z\nBYMyLSqRDQKBgQDoTak023h4BKyCrSo2b+Z/8oetUqC3HDe+mpjGYHsqKq5Skgt9\nbzojV3AagZQrW5AIEdgcFT4OfCf6dKlDjuFBtEWNU14G5joT7yC94lMJdRp+TCzF\nZoYECBd4fc9TiEpz6kX0q5AlEfBDCgYUUdpDkOWikbt1rs4GHfkg9gPrgQKBgQCe\nYxdBczipleGwd5RcmvDHDDAvtO0zJTQ/WsrPGsWgMvp8rmfXCOG6cEDwJFJqgFIu\ncHsAUxKrqBijxImF/F0AIMqan39A8ROrmzvermwWSxME64OQaVTbC0DpjJKX23c+\nGkK/wMPRBq+/LOvTsg80MjzPVEIcaxvjKvJfFSVu0QKBgQCHyZWjFCYrBDd7sYLJ\nZWBI+QilEH4oWMCrfey6VgP2cGm/2NW+gWBXM6wcblwzSHWgrsHSvowT0g1Ry9Z+\nktGRv1P20SGgl46jXJrE5oXyl5HBSmEkC4VCblPfyNp4IBGcFlUpD7yUAI+ncApG\n36iOn0ck3aYdL/HNQ7UWwVTZeg==\n-----END PRIVATE KEY-----\n",
  client_email:
    "doctordoggyvideomate@theta-disk-398014.iam.gserviceaccount.com",
  client_id: "100110176589715172400",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/doctordoggyvideomate%40theta-disk-398014.iam.gserviceaccount.com",
  universe_domain: "googleapis.com",
};

// For more detail you can visit https://developers.google.com/calendar/api/v3/reference/events
const createEvent = async () => {
  try {
    const requestId = Math.floor(Math.random() * 100000);

    // Making auth object to tell that we are authenticated and for authentication purpose we are using info from service-accoun.json file
    const auth = new JWT(
      credential.client_email,
      null,
      credential.private_key,
      ["https://www.googleapis.com/auth/calendar"],
      "databasedoctordoggy@gmail.com", // You google admin account email will come here....
      credential.client_id
    );

    const calendar = new Calander({ version: "v3", auth });

    const event = {
      summary: "Appointment",
      description: "Meeting with client",
      //   Start time for meeting
      start: {
        dateTime: "2024-07-19T12:00:00",
        timeZone: "America/Los_Angeles",
      },
      //   conferenceData is  the object inwhich we specify all meeting link related things.
      conferenceData: {
        createRequest: {
          requestId,
          conferenceSolutionKey: {
            type: "hangoutsMeet", // Type can be amon these eventHangout,eventNamedHangout,hangoutsMeet,addOn
          },
        },
      },
      //   Participants who can join.
      attendees: [{ email: "devpriyangsu@gmail.com" }],
    };

    // Inserting event this will also add event to attendees calander as we are using google admin account email and service-account.json
    const response = await calendar.events.insert({
      calendarId: "primary",
      resource: event,
      conferenceDataVersion: 1,
    });

    console.log("Google Meet link: %s", response.data.hangoutLink);

    return;
  } catch (error) {
    console.log(error);
  }
};

export default async function handler(req, res) {
  if (req.method === "POST") {
      try {
          Meeting({
            clientId:
              "732212139855-fvfl6pn1rt1o55vh69qjh8acmqivnbdo.apps.googleusercontent.com",
            clientSecret: "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",
          });
        
      res.status(200).json({ success: true, message: "Meeting created!" });
    } catch (error) {
      res
        .status(500)
        .json({ success: false, message: "Error creating meeting" });
    }
  } else {
    res.status(405).json({ success: false, message: "Method not allowed" });
  }
}
