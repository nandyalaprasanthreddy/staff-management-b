import { CustomRequest } from "./types";
import { Response, NextFunction } from "express";
import { EmptyObject } from "./types";
import { apiError } from "../utils/appError";
import type { UsersType, DeptType, ShiftType } from "../models/types";
import {
  createUserSrvc,
  createDeptSrvc,
  createShiftSrvc,
  getShiftCreationDetails,
} from "../services/adminSrvc";
import logger from "../config/logger";

export const createUserCtrl = async (
  req: CustomRequest<EmptyObject, EmptyObject, UsersType, EmptyObject>,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await createUserSrvc(req.body);
    logger.info(`User created successfully: ${JSON.stringify(user)}`);
    res.status(201).json({ message: true, data: user });
  } catch (error) {
    logger.error(`Error creating user: ${(error as Error).message}`);
    next(new apiError("Internal server error", 500, false));
  }
};

export const createDeptCtrl = async (
  req: CustomRequest<EmptyObject, EmptyObject, DeptType, EmptyObject>,
  res: Response,
  next: NextFunction
) => {
  console.log("am ctrl");

  try {
    const dept = await createDeptSrvc(req.body);
    logger.info(`Department created successfully: ${JSON.stringify(dept)}`);
    res.status(201).json({ message: true, data: dept });
  } catch (error) {
    logger.error(`Error creating dept: ${(error as Error).message}`);
    next(new apiError("Internal server error", 500, false));
  }
};

export const createShiftCtrl = async (
  req: CustomRequest<EmptyObject, EmptyObject, ShiftType, EmptyObject>,
  res: Response,
  next: NextFunction
) => {
  try {
    const shift = await createShiftSrvc(req.body);
    logger.info(`Shift created successfully: ${JSON.stringify(shift)}`);
    res.status(201).json({ message: true, data: shift });
  } catch (error) {
    logger.error(`Error creating Shift: ${(error as Error).message}`);
    next(new apiError("Internal server error", 500, false));
  }
};

export const getShiftCreationDetailsCtrl = async (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const shift = await getShiftCreationDetails();
    res.status(201).json({ message: true, data: shift });
  } catch (error) {
    next(new apiError("Internal server error", 500, false));
  }
};
getShiftCreationDetails;
