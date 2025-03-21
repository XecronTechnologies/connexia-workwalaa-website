import { createSlice, PayloadAction } from "@reduxjs/toolkit";;

interface NavigationState {
    activePage: string;
    navItems: { label: string, page: string }[];
}

const initialState: NavigationState = {
    activePage: 'Home',
    navItems: [
        { label: 'Home', page: 'Home' },
        { label: 'About', page: 'About' },
        { label: 'Contact', page: 'Contact' },
    ]
};

const navigationSlice = createSlice({
    name: 'navigation',
    initialState: initialState,
    reducers: {
        setActivePage: (state, action: PayloadAction<string>) => {
            state.activePage = action.payload;
        },
    },
})


export const { setActivePage } = navigationSlice.actions;
export default navigationSlice.reducer;