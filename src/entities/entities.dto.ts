/**
 * @file entities.dto.ts
 * @description Структура Body
 * @author Daniil Perevozchikov
 * @version 1.0
 * @date 28.10.2023
 */

import { IsString } from "class-validator";

export class EntitiesDto {
    @IsString()
    entityType: string
}