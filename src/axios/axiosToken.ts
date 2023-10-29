/**
 * @file axiosToken.ts
 * @description Экземляр axios при получении токена и домена
 * @author Daniil Perevozchikov
 * @version 1.0
 * @date 26.10.2023
 */
import axios from 'axios'
const axiosToken = axios.create({
    baseURL: 'https://test.gnzs.ru/oauth/get-token.php',
    headers: {
        "Content-Type": "application/json",
        "X-Client-Id": 123456
    }
})

export default axiosToken;