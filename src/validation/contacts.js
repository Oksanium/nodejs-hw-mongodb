import Joi from 'joi';
import { phoneRegExp } from '../constants/index.js';

export const createContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).required().messages({
    'string.base': 'Username should be a string',
    'string.min': 'Minimum {#limit} characters',
    'string.max': 'Maximum {#limit} characters',
    'any.required': 'Username is required',
  }),
  phoneNumber: Joi.string()
    .min(5)
    .max(20)
    .pattern(phoneRegExp)
    .required()
    .messages({
      'string.min': 'Minimum {#limit} characters',
      'string.max': 'Maximum {#limit} characters',
      'string.pattern':
        'Phone number should contain only digits and + - ( ) characters',
      'any.required': 'Phone number is required',
    }),
  email: Joi.string().email().required().messages({
    'string.email': 'Must be a valid Email',
    'any.required': 'Email is required',
  }),
  isFavourite: Joi.boolean().required().messages({
    'string.boolean': 'Must be boolean',
    'any.required': 'Required',
  }),
  contactType: Joi.string().min(3).max(20).required().messages({
    'string.base': 'Contact type should be a string',
    'string.min': 'Minimum {#limit} characters',
    'string.max': 'Maximum {#limit} characters',
    'any.required': 'Contact type is required',
  }),
});

export const updateContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).messages({
    'string.base': 'Username should be a string',
    'string.min': 'Minimum {#limit} characters',
    'string.max': 'Maximum {#limit} characters',
  }),
  phoneNumber: Joi.string().min(5).max(20).pattern(phoneRegExp).messages({
    'string.min': 'Minimum {#limit} characters',
    'string.max': 'Maximum {#limit} characters',
    'string.pattern':
      'Phone number should contain only digits and + - ( ) characters',
  }),
  email: Joi.string().email().messages({
    'string.email': 'Must be a valid Email',
  }),
  isFavourite: Joi.boolean().messages({
    'string.boolean': 'Must be boolean',
  }),
  contactType: Joi.string().min(3).max(20).messages({
    'string.base': 'Contact type should be a string',
    'string.min': 'Minimum {#limit} characters',
    'string.max': 'Maximum {#limit} characters',
  }),
});
