import Joi from 'joi';
import { ContainerTypes, createValidator, ValidatedRequestSchema } from 'express-joi-validation';
import { Permission } from '../../common/types/types';

export const groupValidator = createValidator();

const Permissions = ['READ', 'WRITE', 'DELETE', 'SHARE', 'UPLOAD_FILES'];


export const groupSchema = Joi.object({
  name: Joi.string().min(3).max(32).required(),
  permissions: Joi.array().items(Joi.string().valid(...Permissions)),
})

export interface CreateGroupRequestSchema extends ValidatedRequestSchema {
  [ContainerTypes.Body]: {
    id?: string;
    name: string;
    permissions: Permission[];
  };
}

export interface UpdateGroupRequestSchema extends ValidatedRequestSchema {
  [ContainerTypes.Body]: {
    id: string;
    name: string;
    permissions: Permission[];
  };
}


