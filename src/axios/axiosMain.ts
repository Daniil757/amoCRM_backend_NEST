/**
 * @file axiosMain.ts
 * @description 
 * @author Daniil Perevozchikov
 * @version 1.0
 * @date 28.10.2023
 */

import axios from "axios";
import { TokenDomen } from "src/settings";

const axiosMain = (_DOMAIN:string, _TOKEN:string) => {
    const instance = axios.create({
        baseURL: _DOMAIN,
        headers: {
            "Content-Type": "application/json",
            "Authorization" : _TOKEN
        }
    })

    return instance
}

export default axiosMain;