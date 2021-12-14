import Joi from 'joi';
import { ContainerTypes, createValidator, ValidatedRequestSchema } from 'express-joi-validation';

export const userValidator = createValidator();

export const userSchema = Joi.object({
  login: Joi.string().min(4).max(32).required(),
  password: Joi.string().alphanum().min(8).max(16).required(),
  age: Joi.number().min(4).max(130).required(),
  isDeleted: Joi.boolean().required(),
});

export interface CreateUserRequstSchema extends ValidatedRequestSchema {
  [ContainerTypes.Body]: {
    id?: string;
    login: string;
    password: string;
    age: number;
    isDeleted: boolean;
  };
}

export interface UpdateUserRequstSchema extends ValidatedRequestSchema {
  [ContainerTypes.Body]: {
    id: string;
    login: string;
    password: string;
    age: number;
    isDeleted: boolean;
  };
}
