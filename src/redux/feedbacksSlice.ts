import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { type TFeedbacks } from 'types';

interface FeedbacksState {
  data: TFeedbacks;
}

const initialState: FeedbacksState = {
  data: null
};

export const feedbacksSlice = createSlice({
  name: 'feedbacks',
  initialState,
  reducers: {
    storeData: (state, action: PayloadAction<TFeedbacks>) => {
      state.data = action.payload
    }
  }
});

export const { storeData } = feedbacksSlice.actions;

export default feedbacksSlice.reducer;
