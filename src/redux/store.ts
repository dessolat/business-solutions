import { configureStore } from '@reduxjs/toolkit';

import feedbacksReducer from './feedbacksSlice';
import languagesReducer from './languagesSlice';

const store = configureStore({
  reducer: {
    feedbacks: feedbacksReducer,
    languages: languagesReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
