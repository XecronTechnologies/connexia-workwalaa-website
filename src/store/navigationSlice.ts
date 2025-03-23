import { createSlice, PayloadAction } from "@reduxjs/toolkit";;

interface NavigationState {
    activePage: string;
    navItems: { label: string, page: string,url?:string,external?:boolean }[]; //changed by me
}

const initialState: NavigationState = {
    activePage: 'Home',
    navItems: [
        { label: 'Home', page: 'Home' },
        // { label: 'About', page: 'About' },
        // { label: 'Services', page: 'Services' },
        // { label: 'Plan', page: 'Plan',url:'https://xmind.ai/SyMHBd6l?sheet-id=ee802ac9-f2a0-4933-8462-c37d068c575a',external:true }, //changed by me
        
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