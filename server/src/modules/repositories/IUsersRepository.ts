/* eslint-disable prettier/prettier */
import { Users } from "../entities/Users";

export interface ICreateUsersDTO {
  name: string;
  avatar: string;
  whatsapp: string;
  bio: string;
}

export interface IUsersRepository {
  create(data: ICreateUsersDTO): Promise<Users>
}
