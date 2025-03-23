import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface HeroSectionState {
  title: string;
  subtitle:string;
  rotateAngle: number;
}
interface HomeState {
  hero: HeroSectionState;
}

const initialState: HomeState = {
  hero: {
    title:"Workwalaa",
    subtitle:"Make your Work, Make your Income.",
    rotateAngle: 0,

  },
};

const homeSlice = createSlice({
  name: "home",
  initialState: initialState,
  reducers: {
    setRotateAngle: (state, action: PayloadAction<number>) => {
      state.hero.rotateAngle = action.payload;
    },
  },
});

export const { setRotateAngle } = homeSlice.actions;
export default homeSlice.reducer;