import * as emailjs from "emailjs-com";
import moment from "moment";
import { PRAYERS_ARR, IGNORE_HOSTS } from "./constants";
import { db } from "../config/firebase";
import { messaging } from "../config/firebase";
import Chance from "chance";
// import firebase from 'firebase';

export const getPDdata = type => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];

  const dte = new Date();
  const day = ("0" + dte.getDate()).slice(-2);
  const month_m = ("0" + (dte.getMonth() + 1)).slice(-2);
  const month = months[dte.getMonth()];
  const year = dte.getFullYear();
  if (type === "mdy") {
    return `${month_m}/${day}/${year}`;
  } else if (type === "iso") {
    return dte.toISOString();
  }
  return `${day} ${month} ${year}`;
};

export function tConvert(time) {
  // Check correct time format and split into components
  time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [
    time
  ];

  if (time.length > 1) {
    // If time format correct
    time = time.slice(1); // Remove full string match value
    time[5] = +time[0] < 12 ? " AM" : " PM"; // Set AM/PM
    time[0] = +time[0] % 12 || 12; // Adjust hours
  }
  return time.join(""); // return adjusted time or original string
}

export function handleLocalStorage({ name, value = "" }) {
  if (!value) {
    return localStorage.getItem(name);
  }
  localStorage.setItem(name, value);
}

export function validateEmail(email) {
  const emailValidator = /\S+@\S+\.\S+/;
  return emailValidator.test(email);
}

export function sendSubscriptionEmail(email) {
  let template_params = {
    reply_to: "admirer@padachone.com",
    from_name: "Admirer",
    to_name: email,
    message_html: "Thank you for Subscribing to Padachone.com. You are Awesome!"
  };

  const service_id = "default_service";
  const template_id = "template_Li3TxnLs";
  return emailjs.send(
    service_id,
    template_id,
    template_params,
    "user_L109OnczphkyI5bvHhcSe"
  );
}

export function getJustPrayers({ timings }) {
  let justPrayers = Object.keys(timings).reduce((all, item) => {
    if (PRAYERS_ARR.indexOf(item) !== -1) {
      all[item] = timings[item];
    }
    return all;
  }, {});
  return justPrayers;
}

export const getMonthYearNumber = PDdate => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];

  const month = months.indexOf(PDdate.substr(2, 3)) + 1;
  const monthNumber = ("0" + month).slice(-2);
  const year = PDdate.substr(5, 4);

  return [monthNumber, year];
};

export const checkSubscription = email => {
  return db
    .collection("subscribers")
    .where("email", "==", email)
    .get();
};

export const addNewSubscriber = ({ email, ip }) => {
  return db
    .collection("subscribers")
    .add({ email: email, active: true, ip: ip });
};
export const addUniqueVisitor = visitor => {
  if (visitor.IPv4) {
    const dt = getPDdata();
    db.collection("visitors")
      .where("date", "==", dt)
      .where("data.IPv4", "==", visitor.IPv4)
      .where("host", "==", window.location.hostname)
      .get()
      .then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => doc.data());
        console.log("DB : ", data); // array of cities objects
        if (data.length) {
          console.log("Visitor already exists");
          return;
        } else {
          db.collection("visitors")
            .add({
              user: localStorage.getItem("padachone_username"),
              data: visitor,
              date: dt,
              host: window.location.hostname,
              timestamp: new Date()
            })
            .then(() => {
              console.log("Successfully updated visitor data");
              return;
            })
            .catch(err => {
              console.log(err);
              return;
            });
        }
      })
      .catch(err => {
        console.log(err);
        return;
      });
  } else {
    console.log("NO IP saved");
    return;
  }
};

export const requestNotify = visitor => {
  if (messaging) {
    // console.log('FCM', await messaging.getToken())
    messaging
      .requestPermission()
      .then(async function() {
        try {
          const token = await messaging.getToken();
          console.log("ACCEPTED", token);

          db.collection("notification")
            .where("token", "==", token)
            .get()
            .then(querySnapshot => {
              const data = querySnapshot.docs.map(doc => doc.data());
              console.log("DB : ", data); //
              if (data.length) {
                console.log("TOKEN already exists");
                return;
              } else {
                db.collection("notification").add({
                  type: "fcm",
                  ip: "visitor.IPv4",
                  token: token,
                  topic: "Prayer",
                  domain: window.location.hostname,
                  device: navigator.userAgent,
                  active: true,
                  timestamp: new Date()
                });
              }
            });
        } catch (e) {
          console.error(e);
        }
      })
      .catch(function(err) {
        console.log("Unable to get permission to notify.", err);
      });
  }
  //FCM Ends here
};

// checks if user selected timezone is actually users timezone or not
export const validateUserTimezone = tz => {
  const userTimezone = moment.tz.guess();
  if (userTimezone === tz) {
    return true;
  }
  return false;
};

export const addAlert = ({ prayer, time, tz, visitor }) => {
  return new Promise(async (resolve, reject) => {
    const splitForCron = time.split(":");
    const cronExpression = encodeURIComponent(
      `${splitForCron[1]} ${splitForCron[0]} * * *`
    );

    if (messaging) {
      console.log('FCM', await messaging.getToken())
      messaging.requestPermission().then(async function() {
        try {
          const token = await messaging.getToken();
          const result = await fetch(`
          https://padachone-dev.herokuapp.com/schedule?tz=${tz}&prayer=${prayer}&time=${time}&to=${token}&cron=${cronExpression}&real_reminder=1&city=${visitor.city}&postal=${visitor.postal}&user=${visitor.username}
        `);
          const response = await result.json();
          console.log(response);
          sessionStorage.setItem(`padachone_reminder:${time}`, `1`);
          resolve("OK");
        } catch (error) {
          console.log(error);
          reject("NOTOK");
        }
      });
    }
  });
};

export const addTestAlert = ({ prayer, time, tz, visitor }) => {
  return new Promise(async (resolve, reject) => {
    const splitForCron = time.split(":");
    const cronExpression = encodeURIComponent(
      `${splitForCron[1]} ${splitForCron[0]} * * *`
    );

    if (messaging) {
      console.log('FCM', await messaging.getToken())
      messaging.requestPermission().then(async function() {
        try {
          const token = await messaging.getToken();

          const result = await fetch(`
          https://padachone-dev.herokuapp.com/schedule?tz=${tz}&prayer=${prayer}&time=${time}&to=${token}&cron=${cronExpression}&city=${visitor.city}&postal=${visitor.postal}&user=${visitor.username}
        `);
          const response = await result.json();
          console.log(response);
          resolve("OK");
        } catch (error) {
          console.log(error);
          reject("NOTOK");
        }
      });
    }
  });
};

export const loggerUtil = async ({ msg }) => {
  const hostname = window.location.hostname;
  // do not log from ignore hosts (eg :  localhost)
  if (IGNORE_HOSTS.indexOf(hostname) !== -1) {
    return;
  }
  let emoji;
  switch (hostname) {
    case "dev.padachone.com":
      emoji = "👁";
      break;
    case "www.padachone.com":
      emoji = "💋";
      break;
    case "localhost":
      emoji = "💪";
      break;
    default:
      emoji = "🤷‍";
      break;
  }
  const suffix = ` at ${emoji}${hostname}${emoji}`;
  const result = await fetch(
    `https://padachone-dev.herokuapp.com/whatsapp?msg=${msg}${suffix}`
  );
  const respnse = await result.json();
  console.log(respnse);
};

export const getUserCredentials = () => {
  if (
    localStorage.getItem(`padachone_username`) &&
    localStorage.getItem(`padachone_token`)
  ) {
    return {
      username: localStorage.getItem(`padachone_username`),
      token: localStorage.getItem(`padachone_token`)
    };
  }

  // Instantiate Chance so it can be used
  let chance = new Chance();
  // Use Chance here.
  let username = chance
    .name()
    .toLowerCase()
    .replace(" ", "_");
  let token = chance.guid({ version: 5 });

  localStorage.setItem(`padachone_username`, username);
  localStorage.setItem(`padachone_token`, token);
  return {
    username,
    token
  };
};

export const addUniqueUser = ({ username, token }) => {
  try {
    // const dt = getPDdata();
    db.collection("users")
      .where("username", "==", username)
      // .where("data.IPv4", "==", visitor.IPv4)
      .where("host", "==", window.location.hostname)
      .get()
      .then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => doc.data());
        console.log("DB : ", data); // array of cities objects
        if (data.length) {
          console.log("User already exists");
          return;
        } else {
          db.collection("users")
            .add({
              username,
              password: token,
              host: window.location.hostname,
              timestamp: new Date()
            })
            .then(() => {
              console.log("Successfully updated User data");
              // Whatsapp Logger
              loggerUtil({ msg: `💩${username} just registered` });
              return;
            })
            .catch(err => {
              console.log(err);
              return;
            });
        }
      })
      .catch(err => {
        console.log(err);
        return;
      });
  } catch (err) {
    console.error(err);
  }
};

export const getDateTimeOf = (tz="America/New_York") => {
  return moment.tz(tz).format('DD MMM YYYY, H:mm:ss');
}

export const addEllipsis = ({word, maxlength}) => {
  return (word.length > maxlength)?`${word}...`:word;
}
