import * as emailjs from 'emailjs-com';
import {PRAYERS_ARR} from './constants';
import {db} from '../config/firebase';

export const getPDdata = (type) => {
    const months =  ["Jan","Feb","Mar","Apr","May","Jun","Jul",
    "Aug","Sep","Oct","Nov","Dec"];

    const dte = new Date();
    const day = ('0'+dte.getDate()).slice(-2);
    const month_m = ('0'+(dte.getMonth()+1)).slice(-2);
    const month = months[dte.getMonth()];
    const year = dte.getFullYear();
    if (type === 'mdy') {
        return `${month_m}/${day}/${year}`
    }
    else if (type === 'iso') {
        return dte.toISOString();
    }
    return `${day} ${month} ${year}`

    
}


export function tConvert (time) {
    // Check correct time format and split into components
    time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
  
    if (time.length > 1) { // If time format correct
      time = time.slice (1);  // Remove full string match value
      time[5] = +time[0] < 12 ? ' AM' : ' PM'; // Set AM/PM
      time[0] = +time[0] % 12 || 12; // Adjust hours
    }
    return time.join (''); // return adjusted time or original string
  }

export function handleLocalStorage({name, value=''}) {
    if (!value) {
        return localStorage.getItem(name)
    }
    localStorage.setItem(name, value);
}

export function validateEmail(email) {
    const emailValidator = /\S+@\S+\.\S+/;
    return emailValidator.test(email)
}

export function sendSubscriptionEmail(email) {
    let template_params = {
        "reply_to": "admirer@padachone.com",
        "from_name": "Admirer",
        "to_name": email,
        "message_html": "Thank you for Subscribing to Padachone.com. You are Awesome!"
    }
    
    const service_id = "default_service";
    const template_id = "template_Li3TxnLs";
    return emailjs.send(service_id, template_id, template_params, 'user_L109OnczphkyI5bvHhcSe');        
}

export function getJustPrayers({timings}) {
    let justPrayers = Object.keys(timings).reduce((all, item) => { 
        if (PRAYERS_ARR.indexOf(item) !== -1) {
            all[item] = timings[item];              
        }
        return all;          
      }, {});
    return justPrayers;
}


export const getMonthYearNumber = (PDdate) => {
    const months =  ["Jan","Feb","Mar","Apr","May","Jun","Jul",
    "Aug","Sep","Oct","Nov","Dec"];

    const month = months.indexOf(PDdate.substr(2,3)) + 1;
    const monthNumber = ('0'+month).slice(-2);
    const year = PDdate.substr(5,4)
    
    return [monthNumber, year];   
}

export const checkSubscription = (email) => {
    return db.collection("subscribers")
        .where("email", "==", email)
        .get()
        // .then(querySnapshot => {
        //     const data = querySnapshot.docs.map(doc => doc.data());
        //     console.log('DB : ',data); // array of cities objects
        //     // if (data.length) {
        //     //     return true;
        //     // }
        //     // else {
        //     //     return false;
        //     // }
            
        // });
}

export const addNewSubscriber = ({email, ip}) => {
    return db.collection("subscribers")
        .add({email : email, active: true, ip: ip})
        // .doc(new Date().getTime().toString())
        // .set({email : email})
        // .then(() => {
        //     NotificationManager.success("A new user has been added", "Success");
        //     window.location = "/";
        // })
        // .catch(error => {
        //     NotificationManager.error(error.message, "Create user failed");
        //     this.setState({ isSubmitting: false });
        // });
}
export const addUniqueVisitor = (visitor) => {
    if (visitor.ip) {
        const dt = getPDdata();
        db.collection("visitors")
            .where("date", "==", dt)
            .where("data.ip", "==", visitor.ip)
            .get()
            .then(querySnapshot => {
                const data = querySnapshot.docs.map(doc => doc.data());
                console.log('DB : ',data); // array of cities objects
                if (data.length) {
                    console.log('Visitor already exists');
                    return;
                }
                else {
                    db.collection("visitors")
                        .add({data : visitor, date: dt})
                        .then(() => {
                            console.log('Successfully updated visitor data');
                            return
                        })
                        .catch(err => {
                            console.log(err);
                            return;
                        })
                }
                
            })
            .catch(err => {
                console.log(err);
                return;
            })
    }
    else {
        console.log('NO IP saved')
        return;
        
    }
    
}