import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { type TLanguage } from 'types';

interface LanguagesState {
  lang: TLanguage;
}

const initialState: LanguagesState = {
  lang: 'ru'
};

export const languagesSlice = createSlice({
  name: 'languages',
  initialState,
  reducers: {
    changeLanguage: (state, action: PayloadAction<TLanguage>) => {
      state.lang = action.payload;
    }
  }
});

export const { changeLanguage } = languagesSlice.actions;

export default languagesSlice.reducer;
