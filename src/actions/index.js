import axios from "axios";

const GOOGLE_MAPS_API_KEY = "AIzaSyBu2HysW33dcCTR64A4G-RRi4xip1-efAI";//"AIzaSyDHw0pg2HzfXwMeUPh2l8ZtLG_JMCcDzZE";
const API_KEY = "191d69a2d843d17f34d94b2c3dae7e5e";

const GEO_LOCATION_URL = `https://www.googleapis.com/geolocation/v1/geolocate?key=${GOOGLE_MAPS_API_KEY}`;
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast/daily?cnt=7&appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather() {
  const geolocationurl = `${GEO_LOCATION_URL}`;
  // Get the locations from https://www.googleapis.com/geolocation/v1/geolocate?key=${GOOGLE_MAPS_API_KEY}
  const locations = axios.post(geolocationurl);

  return (dispatch) => {
    locations.then((data) => {
        const lat = data.data.location.lat;
        const lng = data.data.location.lng;

        // Get the weather from http://api.openweathermap.org/data/2.5/forecast/daily?cnt=7&appid=${API_KEY}
        const url = `${ROOT_URL}&lat=${lat}&lon=${lng}`;
        const reponse = axios.get(url);
        reponse.then((data) => {
          dispatch({
            type: FETCH_WEATHER,
            payload: data
          })
        })
    });
  };
}
