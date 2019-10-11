import { useState, useEffect, useRef, useContext } from "react";
import Prismic from "prismic-javascript";
import { Link, RichText, Date } from "prismic-reactjs";

import { PrismicLink } from "apollo-link-prismic";
import { InMemoryCache } from "apollo-cache-inmemory";
import ApolloClient from "apollo-client";
import gql from "graphql-tag";

import {
  getPDdata,
  getMonthYearNumber,
  addUniqueVisitor,
  loggerUtil,
  getUserCredentials,
  addUniqueUser
} from "../utils/index";
import {
  BING_API,
  FT_PRAYER,
  IPSTACK_API,
  IGNORE_HOSTS,
  PRISMIC_TOKEN,
  PRISMIC_SITEDESCRIPTION_DOC,
  PRISMIC_SITEMEDIAS_DOC,
  PRISMIC_LANDING_BG,
  PRISMIC_DYNAMIC_SOURCE_APP_TYPE,
  PRISMIC_DYNAMIC_SOURCE_PRISMIC_TYPE
} from "../utils/constants";
import { UserContext } from "../store/context/userContext";
export const usePrayer = ({
  country = "Netherlands",
  place,
  region = "Noord-Holland",
  date,
  method = 8,
  school = 0
}) => {
  const { forceTrigger } = useContext(UserContext);
  const [month, year] = getMonthYearNumber(date);
  const [inprocess, setInprocess] = useState(false);
  // let city;
  // if (place) {
  //     city = place;
  // }
  // else {
  //     city=region
  // }
  // const API = `https://api.aladhan.com/v1/timingsByCity?city=${city}&country=${country}&method=${method}&school=${school}`;
  const API = `https://api.aladhan.com/v1/calendarByAddress?address=${place},${region},${country}&method=${method}&school=${school}&month=${month}&year=${year}`;
  const [data, setData] = useState({});
  async function fetchPrayerTimes() {
    try {
      setInprocess(true);
      const res = await fetch(API, {
        headers: {
          Accept: "application/json"
        }
      });
      const rawdata = await res.json();
      Object.keys(localStorage).map(key => {
        if (key.startsWith("padachone:")) {
          localStorage.removeItem(key);
        }
        return key;
      });
      const dte = getPDdata();
      const timingsData = rawdata.data.filter(
        item => item.date.readable === dte
      );
      const data = { ...rawdata, data: { ...timingsData[0] } };

      if (data && data.data && data.data.meta) {
        setInprocess(false);
        region && localStorage.setItem(`padachone:region`, region);
        country && localStorage.setItem(`padachone:country`, country);
        place && localStorage.setItem(`padachone:place`, place);
        if (forceTrigger.target === FT_PRAYER) {
          localStorage.setItem(`padachone_FT-${FT_PRAYER}`, true);
        }
        method && localStorage.setItem(`padachone:method`, method);
        school !== "" && localStorage.setItem(`padachone:school`, school);
        localStorage.setItem(`padachone:${date}`, JSON.stringify(data));
      }
      setData(data);
    } catch (e) {
      //
      setData({ error: e.message });
      return false;
    }
  }
  useEffect(() => {
    if (localStorage.getItem(`padachone:${date}`) && !forceTrigger.target) {
      setData(JSON.parse(localStorage.getItem(`padachone:${date}`)));
    } else {
      if (!inprocess) {
        fetchPrayerTimes();
      } else {
        return false;
      }
    }
  }, []);

  useEffect(() => {
    if (forceTrigger.target === FT_PRAYER && !inprocess) {
      fetchPrayerTimes();
    }
  }, [forceTrigger]);
  return [data, setData];
};

export const usePrayerOnGo = ({ lat, lon, method = 8, school = 0 }) => {
  const { forceTrigger } = useContext(UserContext);
  const dte = getPDdata();
  const tdate = new Date(dte);
  const mnth = tdate.getMonth() + 1;
  const year = tdate.getFullYear();
  const API = `https://api.aladhan.com/v1/calendar?latitude=${lat}&longitude=${lon}&method=${method}&month=${mnth}&year=${year}&school=${school}`;
  const [data, setData] = useState({});
  async function fetchTravelPrayerTimes() {
    try {
      const res = await fetch(API, {
        headers: {
          Accept: "application/json"
        }
      });
      const data = await res.json();

      const todaysdata = data.data.filter(item => item.date.readable === dte);
      if (forceTrigger.target === FT_PRAYER) {
        localStorage.setItem(`padachone_FT-${FT_PRAYER}`, true);
      }
      setData(todaysdata);
    } catch (e) {
      //
      setData({ error: e.message });
      return false;
    }
  }
  useEffect(() => {
    fetchTravelPrayerTimes();
  }, []);
  useEffect(() => {
    if (forceTrigger.target === FT_PRAYER) {
      fetchTravelPrayerTimes();
    }
  }, [forceTrigger]);
  return [data, setData];
};

export const useCurrentLocation = ({ lat, lon }) => {
  const [currentloc, setCurrentloc] = useState({});
  const API = `https://dev.virtualearth.net/REST/v1/Locations/${lat},${lon}?o=json&key=${BING_API}`;
  async function fetchLocation() {
    try {
      const result = await fetch(API, {
        headers: {
          Accept: "application/json"
        }
      });

      const data = await result.json();
      // console.log('%c LOCATION DATA'+JSON.stringify(data), 'color:blue')
      const locationData =
        data.resourceSets[0].resources[0].address.addressLine +
        ", " +
        data.resourceSets[0].resources[0].address.adminDistrict +
        ", " +
        data.resourceSets[0].resources[0].address.countryRegion;
      // setCurrentloc(data.resourceSets[0].resources[0].address.formattedAddress);
      setCurrentloc({
        data: locationData,
        formattedaddress:
          data.resourceSets[0].resources[0].address.formattedAddress
      });
    } catch (e) {
      setCurrentloc({ error: e.message });
      return false;
    }
  }
  useEffect(() => {
    fetchLocation();
  }, []);

  return [currentloc, setCurrentloc];
};

export const useCalcMethods = () => {
  const API = "https://api.aladhan.com/v1/methods";
  const [methods, setMethods] = useState({});
  const fetchMethods = async () => {
    try {
      const result = await fetch(API, {
        headers: {
          Accept: "application/json"
        }
      });
      // .catch(e => {
      //     setMethods({error: e.message})
      //     return false;
      // });
      const data = await result.json();
      const modifiedData = await Object.entries(data.data).map(item => ({
        [item[0]]: item[1]
      }));
      const newdata = { ...data, data: modifiedData };
      if (newdata && newdata.data) {
        localStorage.setItem("padachone-cmethods", JSON.stringify(newdata));
      }
      setMethods(newdata);
    } catch (e) {
      setMethods({ error: e.message });
      return false;
    }
  };
  useEffect(() => {
    if (localStorage.getItem("padachone-cmethods")) {
      setMethods(JSON.parse(localStorage.getItem(`padachone-cmethods`)));
    } else {
      fetchMethods();
    }
  }, []);
  return [methods, setMethods];
};

export const useDrawer = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  function handleDrawerToggle() {
    setDrawerOpen(!drawerOpen);
  }
  return [drawerOpen, handleDrawerToggle];
};

export const useRenderCounts = page => {
  const colors = ["red", "green", "lightblue", "orange", "grey"];
  const renders = useRef(0);
  useEffect(() => {
    console.log(
      "%c FT Renders " + page + " : " + renders.current++,
      `font-size: 30px;color: ${colors[Math.floor(Math.random() * 5)]}`
    );
  });
};

export const useForceTrigger = ({
  setModal: setTrigger,
  params,
  ftname,
  setData
}) => {
  const { forceTrigger } = useContext(UserContext);
  useEffect(() => {
    if (!localStorage.getItem(`padachone_FT-${ftname}`)) {
      setTrigger(params);
    }
  }, []);

  useEffect(() => {
    if (forceTrigger.target === ftname) {
      setData({});
    }
  }, [forceTrigger]);
};

export const useVisitorDetails = dte => {
  const [visitordata, setVisitordata] = useState({});
  const { worker } = useContext(UserContext);

  // const API = `https://api.ipstack.com/check?access_key=${IPSTACK_API}`;
  const API = `https://geoip-db.com/json/`;
  const getVisitorDetails = async () => {
    const results = await fetch(API, {
      headers: {
        Accept: "application/json"
      }
    });
    const data = await results.json();
    console.log("VS", data);
    if (data.IPv4) {
      Object.keys(sessionStorage).map(key => {
        if (key.startsWith("padachone_visitordata:")) {
          sessionStorage.removeItem(key);
        }
        return key;
      });
      sessionStorage.setItem(
        `padachone_visitordata:${dte}`,
        JSON.stringify(data)
      );
      addUniqueVisitor(data);
      // Whatsapp Logger

      loggerUtil({
        msg: `❤️${localStorage.getItem(
          "padachone_username"
        )}❤️ : Hi there! 👋 I'm from ${data.city} (${
          data.postal
        })..Wazz up!..just logged in`
      });
    }
    setVisitordata(data);
  };
  useEffect(() => {
    // Set username
    setVisitordata(() => {
      let { username, token } = getUserCredentials();
      addUniqueUser({ username, token });
      return { ...visitordata, username, token };
    });

    if (sessionStorage.getItem(`padachone_visitordata:${dte}`)) {
      setVisitordata(
        JSON.parse(sessionStorage.getItem(`padachone_visitordata:${dte}`))
      );
    } else if (IGNORE_HOSTS.indexOf(window.location.hostname) === -1) {
      getVisitorDetails();
    }
  }, []);

  return {
    ...visitordata,
    username: localStorage.getItem("padachone_username")
  };
};

export const useMessageBroadcast = () => {
  const [msg, setMsg] = useState("");
  const apiEndpoint = "https://padachone.prismic.io/api/v2";
  const fetchMessage = () => {
    try {
      /*Prismic.api(apiEndpoint, {accessToken: PRISMIC_TOKEN}).then(api => {
                api.query(Prismic.Predicates.at('document.type', 'message-broadcast')).then(response => {
                if (response) {
                    // console.log('%c '+JSON.stringify(response), 'color:orange;font-size:20px;');
                    setMsg(RichText.asText(response.results[0].data.message));
                }
                });
            });*/

      const client = new ApolloClient({
        link: PrismicLink({
          uri: "https://padachone.prismic.io/graphql",
          accessToken: PRISMIC_TOKEN
        }),
        cache: new InMemoryCache()
      });
      // query{
      //     allMessageBroadcasts{
      //        edges {
      //         node {
      //           message
      //           _linkType
      //         }
      //       }
      //     }
      //     allNewsletterss {
      //       edges {
      //         node {
      //           title
      //           date
      //           body
      //           _linkType
      //         }
      //       }
      //     }
      //   }

      client
        .query({
          query: gql`
            query {
              allMessageBroadcasts {
                edges {
                  node {
                    message
                    timeout
                  }
                }
              }
              allNewsletterss {
                edges {
                  node {
                    title
                    date
                    body
                    _linkType
                  }
                }
              }
              allSiteMedias {
                edges {
                  node {
                    assetName
                    assetImage
                    textColor
                    bgColor
                    dynamicSource
                    textColorOverride
                    bgColorOverride
                  }
                }
              }
              allSiteDescriptions {
                edges {
                  node {
                    description
                    textColor
                    bgColor
                  }
                }
              }
              allSiteFooters {
                edges {
                  node {
                    description
                    textColor
                    bgColor
                  }
                }
              }
            }
          `
        })
        .then(response => {
          console.log(
            "%c GraphQL Journey begins..." + JSON.stringify(response),
            "color:lightblue;font-size:30px;"
          );
          console.log("GR", response);
          // setMsg(RichText.asText(response.data.allMessageBroadcasts.edges[0].node.message));
          setMsg(response);
        })
        .catch(error => {
          console.error(error);
        });
    } catch (err) {
      return;
    }
  };
  useEffect(() => {
    fetchMessage();
  }, []);
  return [msg];
};

export const useCmsAsset = (...assets) => {
  const { cmsContents } = useContext(UserContext);
  const [asset, setAsset] = useState([]);
  useEffect(() => {
    if (
      cmsContents.data &&
      cmsContents.data.hasOwnProperty(PRISMIC_SITEMEDIAS_DOC)
    ) {
      let assetsArray = cmsContents.data[PRISMIC_SITEMEDIAS_DOC].edges.reduce(
        (all, item, index) => {
          assets.map(assetItem => {
            if (assetItem === item.node.assetName) {
              all.push(item.node);
            }
            return assetItem;
          });
          return all;
        },
        []
      );
      if (assetsArray.length) {
        setAsset(assetsArray);
      }
    }
  }, [cmsContents]);

  return asset;
};

export const useSiteTitle = ({ docname, options }) => {
  const { cmsContents } = useContext(UserContext);
  const [sitetitle, setSitetitle] = useState(options);
  useEffect(() => {
    cmsContents &&
      setSitetitle({
        description: cmsContents.data[docname].edges[0].node.description,
        textcolor: cmsContents.data[docname].edges[0].node.textColor,
        bgcolor: cmsContents.data[docname].edges[0].node.bgColor,
        showup: true
      });
  }, [cmsContents]);
  return sitetitle;
};

export const useWhatsapplogger = ({ user, comp, action = "idle", msg }) => {
  const { worker, visitor } = useContext(UserContext);
  const [logs, setLogs] = useState({});
  const nudgeWorker = () => {
    let emoji;
    switch (logs.action) {
      case "Finetune Calc Method":
        emoji = "💚";
        break;
      case "Finetune School":
        emoji = "💛";
        break;
      case "Sidemenu":
        emoji = "💜";
        break;
      case "Hijri Info":
        emoji = "💙";
        break;
      case "Set me Up":
        emoji = "👩‍❤️‍💋‍👩";
        break;
      case "Subscribe":
        emoji = "😀";
        break;
      case "Traveller Onboard":
        emoji = "🇺🇸";
        break;
      case "APOD":
        emoji = "👩‍🚀";
        break;
      default:
        emoji = "💂‍";
        break;
    }
    const msgPrefix = `${visitor.username} ${emoji} ( ${visitor.city} - ${visitor.postal} ) :  `;
    const suffix = ` at ${window.location.hostname}`;
    worker.postMessage({
      type: "logger",
      msg: { ...logs, message: `${msgPrefix}${logs.message}${suffix}` }
    });
    setLogs({});
  };
  useEffect(() => {
    if (logs.hasOwnProperty("action") && worker instanceof Worker) {
      nudgeWorker();
    }
  }, [logs]);
  return [logs, setLogs];
};

export const useApod = () => {
  const { worker, workerData, setWorkerData } = useContext(UserContext);

  const [landingGrid, setLandingGrid] = useState({});
  const [loading, setLoading] = useState(false);
  const [showfetching, setShowfetching] = useState({
    show: false,
    msg: `Fetching 'Astronomy Picture of the Day'....`
  });
  const asset = useCmsAsset(PRISMIC_LANDING_BG);
  const pdtodaysDate = getPDdata()
    .split(" ")
    .join("");
  useEffect(() => {
    if (asset.length) {
      setLandingGrid({
        bg: asset[0].assetImage.url,
        bgColor: `${asset[0].bgColor}`,
        fontColor: asset[0].textColor,
        type: PRISMIC_DYNAMIC_SOURCE_PRISMIC_TYPE
      });
      console.log("DYN", asset[0].dynamicSource);

      //  Fetch apod only if its 'application' hooked type, so that application has the liberty to fetch it from apod
      if (asset[0].dynamicSource === PRISMIC_DYNAMIC_SOURCE_APP_TYPE) {
        if (
          !localStorage.getItem(`padachone_apod:${pdtodaysDate}`) &&
          worker instanceof Worker
        ) {
          setLoading(true);

          console.log(`WORKER Going to call web worker...`);
          worker.postMessage({
            type: "apod",
            msg: {
              current: localStorage.getItem(`padachone_apod:${pdtodaysDate}`)
            }
          });
        } else {
          console.log(
            `WORKER NOT Going to call web worker as the image is already in the ls...`
          );

          const apodurl = JSON.parse(
            localStorage.getItem(`padachone_apod:${pdtodaysDate}`)
          ).url;
          setLandingGrid(() => {
            return {
              ...landingGrid,
              bg: apodurl,
              bgColor: `${asset[0].bgColorOverride}`,
              fontColor: asset[0].textColorOverride,
              type: PRISMIC_DYNAMIC_SOURCE_APP_TYPE
            };
          });
          console.log(`WORKER Setting bg url for APPPAGES...`);
        }
      }
    }
  }, [asset]);
  useEffect(() => {
    console.log(`WORKER useEffect of workerData...`);

    if (
      workerData &&
      workerData["worker_data"] &&
      workerData["worker_data"].msg &&
      workerData["worker_data"].msg.targetcomp === "AppPages" &&
      !workerData["worker_data"].msg.error &&
      workerData["worker_data"].msg.url
    ) {
      console.log(`WORKER workerData received... : ${workerData}`);

      // console.log(workerData['worker_data'].msg);
      setLandingGrid({
        ...landingGrid,
        bg: workerData["worker_data"].msg.url,
        bgColor: `${asset[0].bgColorOverride}`,
        fontColor: asset[0].textColorOverride,
        type: PRISMIC_DYNAMIC_SOURCE_APP_TYPE
      });
      Object.keys(localStorage).map(key => {
        if (key.startsWith("padachone_apod:")) {
          localStorage.removeItem(key);
        }
        return key;
      });
      localStorage.setItem(
        `padachone_apod:${pdtodaysDate}`,
        JSON.stringify(workerData["worker_data"].msg)
      );
      console.log(`WORKER Set localstorage with ... : ${workerData}`);
      setWorkerData({});
      console.log(`WORKER Set workerData null`);
    } else if (
      workerData["worker_data"] &&
      workerData["worker_data"].msg &&
      workerData["worker_data"].msg.error
    ) {
      setShowfetching({ show: true, msg: `Fetching failed! Falling back....` });
    }
  }, [workerData]);
  useEffect(() => {
    if (landingGrid && landingGrid.bg) {
      setTimeout(() => {
        setLoading(() => {
          setShowfetching({ show: false, msg: "" });
          return false;
        });
      }, 2000);
    }
  }, [landingGrid]);
  useEffect(() => {
    if (loading) {
      setShowfetching({
        show: true,
        msg: `Fetching 'Astronomy Picture of the Day'....`
      });
    }
  }, [loading]);
  return [landingGrid, loading, showfetching];
};
