import { Request, Response, NextFunction } from "express";
import { apiError } from "../utils/appError";

export const errorHandler = (
  err: apiError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Something went wrong";
  res.status(statusCode).json({ success: false, message });
};
