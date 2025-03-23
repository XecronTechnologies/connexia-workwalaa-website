import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface HeroSectionState {
  
  title: string;
  subtitle: string;
  rotateAngle: number;
}
interface HomeState {
  // activePage: string;
  hero: HeroSectionState;
}

const initialState: HomeState = {
  // activePage:'/',
  hero: {
    title: "Welcome to the Workwalaa!",
    subtitle:
      "With the help of innovative technology and personalized solutions, we create meaningful connections",
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
