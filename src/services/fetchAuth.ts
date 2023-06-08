import { API } from "../api/constants";
import MD5 from "crypto-js/md5";

interface IData {
    key: string,
    secret: string
}

type Auth = (
    data: IData, 
    query: string
) => Promise<any>

const fetchAuth: Auth = async (data, query) => {
    try {
        const url = query;
        const method = "GET";
        const md5 = MD5(`${method}${url}${data.secret}`);
        let response = await fetch(`${API}${url}`, {
            method: method,
            headers: {
                Key: data.key,
                Sign: md5.toString()
            }
        });
        const res = await response.json();

        return await res;
    } catch(e) {
        console.log(e);
        return false;
    }
}

export default fetchAuth;