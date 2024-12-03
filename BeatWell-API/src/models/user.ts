import { Request } from 'express';
import { userSignUpSchema } from '../libs/validator/user.schema';

interface UserData {
  id: number;
  name: string;
  email: string;
}

interface ValidationRequest extends Request {
  userData: UserData;
}

type SignUpData = typeof userSignUpSchema._type;

export { UserData, ValidationRequest, SignUpData };
