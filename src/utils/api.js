import axios from "axios";
const BASE_URL = 'https://api.themoviedb.org/3';
const TMBD_TOKEN = import.meta.env.VITE_APP_TMBD_TOKEN;

const headers = {
    Authorization: 'bearer ' + TMBD_TOKEN,
}
export const fetchDatafromAPi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers, params
        })
        return data
    }
    catch (err) {
        console.log(err);
        throw err
    }

}