import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface PassportFormData {
  fullName: string;
  nationality: string;
  passportNumber: string;
  expiryDate: string; // New field for passport expiration date
  purpose: string;
}

const initialState: PassportFormData = {
  fullName: "",
  nationality: "",
  passportNumber: "",
  expiryDate: "", // initialize with empty string
  purpose: "",
};

const passportSlice = createSlice({
  name: "passport",
  initialState,
  reducers: {
    updatePassportForm: (
      state,
      action: PayloadAction<Partial<PassportFormData>>
    ) => {
      return { ...state, ...action.payload };
    },
    resetForm: () => initialState,
  },
});

export const { updatePassportForm, resetForm } = passportSlice.actions;
export default passportSlice.reducer;
