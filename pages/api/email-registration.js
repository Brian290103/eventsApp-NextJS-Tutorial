// get the directory of the data.json
import path from "path";
//to enable u edit the contents of a file
import fs from "fs";
//function for easily accessing our data

function buildPath() {
  // process.cwd get the current working directory
  return path.join(process.cwd(), "data", "data.json");
}

function extractData(filePath) {
  //b4 updating our data we need to extract first our data
  const jsonData = fs.readFileSync(filePath);

  //converting to a JS Object
  const data = JSON.parse(jsonData);
  return data; //this one now is a JS Object
}

export default function handler(req, res) {
  //Destructure the req to get POST

  const { method } = req;

  //Access our data
  //Extract our data (All Events)
  //res 404 if there are no AllEvents
  // All Events - loop through them and identify the eventId
  //Add email into emails_registered - write on our data

  //Only if that email doesn't exist
  //Check if the format of the email is okay

  //call the  build path file

  const filePath = buildPath();
  const { events_categories, allEvents } = extractData(filePath);

  if (!allEvents) {
    return res.status(404).json({
      status: 404,
      message: "Events data not found",
    });
  }

  // if (!events_categories) {
  //   return res.status(404).json({
  //     status: 404,
  //     message: "Events Categories data not found",
  //   });
  // }

  if (method === "POST") {
    //Write code here

    const { email, eventId } = req.body;

    if (!email | !email.includes("@")) {
      res.status(422).json({ message: "Invalid email address" });
      return;
    }

    const newAllEvents = allEvents.map((ev) => {
      if (ev.id === eventId) {
        if (ev.emails_registered.includes(email)) {
          res
            .status(409)
            .json({ message: "This email has already been registered" });
          return ev;
        }
        return {
          //return everything without need of the specifying the city, id
          //... the spread operator
          ...ev,
          emails_registered: [...ev.emails_registered, email],
        };
      }

      //else returns the event object without any operation
      return ev;
    });

    fs.writeFileSync(
      filePath,
      JSON.stringify({ events_categories, allEvents: newAllEvents })
    );

    res.status(200).json({
      message: `You have successfully been registered with the email: ${email} for the event ${eventId}`,
    });
  }
}
