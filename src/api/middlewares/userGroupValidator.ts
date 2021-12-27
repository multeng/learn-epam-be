import Joi from 'joi';
import { ContainerTypes, createValidator, ValidatedRequestSchema } from 'express-joi-validation';

export const userGroupValidator = createValidator();

export const userGroupSchema = Joi.object({
  groupId: Joi.string().uuid().required(),
  usersList: Joi.array().items(Joi.string().uuid().required()),
});

export interface UserGroupRequestSchema extends ValidatedRequestSchema {
  [ContainerTypes.Body]: {
    id?: number;
    groupId: string;
    usersList: string[];
  };
}
