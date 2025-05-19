export type roles = "admin" | "staff";
import { Request } from "express";

export type EmptyObject = Record<string, never>;

export interface CustomRequest<
  TUser extends object = EmptyObject,
  TParams extends object = EmptyObject,
  TBody extends object = EmptyObject,
  TQuery extends object = EmptyObject
> extends Request<TParams, EmptyObject, TBody, TQuery> {
  user?: TUser;
}
