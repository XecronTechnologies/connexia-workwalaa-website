import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface HeroSectionState {
  rotateAngle: number;
}
interface HomeState {
  hero: HeroSectionState;
}

const initialState: HomeState = {
  hero: {
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