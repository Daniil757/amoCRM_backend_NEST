/**
 * @file getToken.ts
 * @description Получение/обновление токена
 * @author Daniil Perevozchikov
 * @version 1.0
 * @date 28.10.2023
 */

import axiosToken from "src/axios/axiosToken"
import { TokenDomen } from "src/settings";

const getToken = async () => {
    try {
        const fetch = await axiosToken.get('');
        TokenDomen._TOKEN = `Bearer ${fetch.data.access_token}`
        TokenDomen._DOMAIN = `https://${fetch.data.base_domain}/api/v4/`;
    } catch (error) {        
        throw new Error(error);
    }
}

export default getToken;