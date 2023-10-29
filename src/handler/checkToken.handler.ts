/**
 * @file checkToken.handler.ts
 * @description Проверка действительности токена
 * @author Daniil Perevozchikov
 * @version 1.0
 * @date 28.10.2023
 */

import { TokenDomen } from "src/settings";
import getToken from "./getToken.handler";
import axiosMain from "src/axios/axiosMain";

const checkToken = async () => {
    // делаем GET запрос для проверки токена
    const axiosInst = axiosMain(TokenDomen._DOMAIN, TokenDomen._TOKEN);
    try {
        await axiosInst.get('leads?limit=1')
    } catch (error) {
        // если запрос неудачный, тогда обновляем токен
        try {
            await getToken();
        } catch (error) {
            throw new Error(error);
        }
    }
}

export default checkToken;