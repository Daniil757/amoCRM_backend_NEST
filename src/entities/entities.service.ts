import { Injectable, UnauthorizedException, HttpException } from '@nestjs/common';
import { AxiosError } from 'axios';
import axiosMain from 'src/axios/axiosMain';
import checkToken from 'src/handler/checkToken.handler';
import { TokenDomen } from 'src/settings';
import { axiosErrorType } from 'src/types/axiosError.type';
import { EntitiesDto } from './entities.dto';

@Injectable()
export class EntitiesService {

    /**
    * @description добавление сущности
    * @param dto - (string) строка определяющая какую сущность создавать (contacts, leads, companies)
    */
    async create(dto: EntitiesDto) {
        try {
            await checkToken();
            const axiosInst = axiosMain(TokenDomen._DOMAIN, TokenDomen._TOKEN);
            const fetch = await axiosInst.post(`${dto.entityType}`, [{}], {});
            const id = fetch.data._embedded[dto.entityType][0].id;
            return id;
        } catch (e) {
            const error: axiosErrorType = (e as AxiosError).response.data as axiosErrorType;
            throw new HttpException(error.title, error.status);
        }
    }
}
