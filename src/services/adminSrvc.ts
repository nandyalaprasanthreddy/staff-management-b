import { apiError } from "../utils/appError";
import { UsersType, DeptType } from "../models/types";
import { users } from "../models/usersMdl";
import { departments } from "../models/departmentMdl";
import { ShiftType } from "../models/types";
import { shifts } from "../models/ShiftsMdl";
export const createUserSrvc = async (
  paylaod: UsersType
): Promise<UsersType | null> => {
  try {
    const employee = await users.create(paylaod);
    return employee;
  } catch (error) {
    throw new apiError("Internal serverv error", 500, false);
  }
};

export const createDeptSrvc = async (
  paylaod: DeptType
): Promise<DeptType | null> => {
  console.log("am seevc");

  try {
    const employee = await departments.create(paylaod);
    return employee;
  } catch (error) {
    throw new apiError("Internal serverv error", 500, false);
  }
};

export const createShiftSrvc = async (
  paylaod: ShiftType
): Promise<ShiftType | null> => {
  console.log("am seevc");

  try {
    const shift = await shifts.create(paylaod);
    return shift;
  } catch (error) {
    throw new apiError("Internal serverv error", 500, false);
  }
};

interface Sample {
  label: string;
  value: string;
}
export const getShiftCreationDetails = async (): Promise<{
  shifts: Sample[];
  staff: Sample[];
}> => {
  try {
    const [shiftData, staffData] = await Promise.all([
      shifts.find().select("shiftName shiftTime").lean(),
      users.find({ role: "staff" }).select("userName").lean(),
    ]);

    const transformed = await staffData.map(({ _id, userName }) => ({
      value: _id.toString(),
      label: userName,
    }));

    const transformed2 = shiftData.map(({ shiftTime, shiftName }) => ({
      value: shiftTime.shiftCode,
      label: `${shiftName} (${shiftTime.time})`,
    }));

    return {
      shifts: transformed2,
      staff: transformed,
    };
  } catch (error) {
    throw new apiError("Internal server error", 500, false);
  }
};
