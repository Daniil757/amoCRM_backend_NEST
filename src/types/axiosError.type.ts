/**
 * @file axiosError.type.ts
 * @description Описание типов
 * @author Daniil Perevozchikov
 * @version 1.0
 * @date 28.10.2023
 */

/**
 * @description Структра ошибки от axios
 */

export type axiosErrorType = {
    title: string,
    type: string,
    status: number,
    detail: string
}