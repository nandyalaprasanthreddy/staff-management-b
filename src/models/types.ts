import { Types } from "mongoose";
export type UsersType = {
  userName: string;
  role: string;
  deptName: string;
};

export type DeptType = {
  deptName: string;
};

export interface IShiftTime {
  shiftCode: string;
  time: string;
}

export interface ShiftType {
  createdUserId: Types.ObjectId;
  shiftName?: string;
  shiftTime: IShiftTime;
}
