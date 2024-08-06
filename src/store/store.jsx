import { configureStore } from "@reduxjs/toolkit";
import studentSlice from "./reducers/studentSlice";
import employeeSlice from "./reducers/employeeSlice";
import internshipSlice from "./reducers/internshipSlice";

export const store = configureStore({
  reducer: { studentSlice,employeeSlice ,internshipSlice},
});
