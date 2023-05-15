import { createSlice } from '@reduxjs/toolkit';

const bookmarkSlice = createSlice({
  name : 'bookmarkSlice',
  initialState : { data : [], modal: false, modalData: {}},
  reducers : {
    setting : (state, action) => {
      state.data = action.payload;
    },
    bookmarkCheck : (state, action) => {
      state.data = state.data.map(el => {
        if ( el.id === action.payload){
          el.bookmark === undefined  ? el.bookmark = true : el.bookmark = !el.bookmark;
        }
        return el;
      })
    },
    modalSwitch : (state) => {
      state.modal = !state.modal;
    },

    modalInfo : (state, action) => {
      state.modalData = state.data.filter(el => el.id === action.payload)[0];
    },
  }
})


export default bookmarkSlice;
export const { setting, bookmarkCheck, modalSwitch, modalInfo} = bookmarkSlice.actions; 