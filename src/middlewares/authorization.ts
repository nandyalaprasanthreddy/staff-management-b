import { Request, Response, NextFunction } from "express";
import { apiError } from "../utils/appError";

export const authorization = (...allowedRoles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const user = "admin";
    if (!user || !allowedRoles.includes(user)) {
      throw new apiError("Access denied: insufficient permissions", 400, false);
    }
    next();
  };
};
