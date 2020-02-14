import { ICause } from './cause';

export interface IUser {
  _id: string;
  email: string;
  password: string;
  donatedTo: ICause[];
}
