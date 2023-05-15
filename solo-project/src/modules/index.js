import bookmarkSlice from './bookmarkSlice';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer : {
    bookmark : bookmarkSlice.reducer
  }
})

export default store;