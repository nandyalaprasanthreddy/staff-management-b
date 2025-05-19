import { Request, Response, NextFunction, RequestHandler } from 'express';
import { ObjectSchema } from 'joi';

type SchemaMap = {
  body?: ObjectSchema;
  query?: ObjectSchema;
  params?: ObjectSchema;
};

export const joiValidator = (schemas: SchemaMap): RequestHandler => {
  console.log('am executing');

  return (req: Request, res: Response, next: NextFunction) => {
    const validationTargets: (keyof SchemaMap)[] = ['body', 'query', 'params'];

    for (const key of validationTargets) {
      const schema = schemas[key];
      if (schema) {
        const { error } = schema.validate(req[key], { abortEarly: false });
        if (error) {
          res.status(400).json({
            message: `Validation failed in ${key}`,
            errors: error.details.map((detail) => ({
              field: detail.path.join('.'),
              message: detail.message,
            })),
          });
          return;
        }
      }
    }

    next();
  };
};
