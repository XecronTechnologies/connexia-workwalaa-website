import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FooterState {
  appVersion: string;
  copyrightYear: number;
  companyName: string;
  showDisclaimer: boolean;
}

const initialState: FooterState = {
  appVersion: "1.0.0",
  copyrightYear: new Date().getFullYear(),
  companyName: "Conecxia",
  showDisclaimer: true,
};

const footerSlice = createSlice({
  name: "footer",
  initialState: initialState,
  reducers: {
    setAppVersion: (state, action: PayloadAction<string>) => {
      state.appVersion = action.payload;
    },
    setCopyrightYear: (state, action: PayloadAction<number>) => {
      state.copyrightYear = action.payload;
    },
    setCompanyName: (state, action: PayloadAction<string>) => {
      state.companyName = action.payload;
    },
    setShowDisclaimer: (state, action: PayloadAction<boolean>) => {
      state.showDisclaimer = action.payload;
    },
  },
});


export const {setAppVersion,setCopyrightYear,setCompanyName,setShowDisclaimer} = footerSlice.actions;
export default footerSlice.reducer;
