import express from "express";
import { createUserCtrl, createDeptCtrl } from "../controllers/adminCtrl";
import { joiValidator } from "../middlewares/joiValidator";
import { userSchema } from "../validations/userValidation";
import { authorization } from "../middlewares/authorization";
import { adminAccess } from "../utils/constants";
import { createShiftCtrl } from "../controllers/adminCtrl";
import { getShiftCreationDetailsCtrl } from "../controllers/adminCtrl";
export const router = express.Router();

router.post(
  "/v1/create-user",
  authorization(adminAccess),
  joiValidator({ body: userSchema }),
  createUserCtrl
);
router.post("/v1/create-dept", createDeptCtrl);
router.post("/v1/create-shift", createShiftCtrl);
router.get("/v1/get-details-shift-creation", getShiftCreationDetailsCtrl);
