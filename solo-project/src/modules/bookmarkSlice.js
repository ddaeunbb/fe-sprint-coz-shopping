import { createSlice } from '@reduxjs/toolkit';

const bookmarkSlice = createSlice({
  name : 'bookmarkSlice',
  initialState : { data : [], modalData: {}, modal: false, clicked : false, toastContent : false},
  reducers : {
    setting : (state, action) => {
      state.data = action.payload;
    },
    bookmarkCheck : (state, action) => {
      state.data = state.data.map(el => {
        if ( el.id === action.payload){
          if (el.bookmark === undefined){
            el.bookmark = true;
            state.toastContent = true;
          }else {
            el.bookmark = !el.bookmark;
            state.toastContent = el.bookmark;
          }
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

    toastSwitch : (state) => {
      console.log('다은');
      state.clicked = !state.clicked;
    },
  }
})


export default bookmarkSlice;
export const { setting, bookmarkCheck, modalSwitch, modalInfo, toastSwitch} = bookmarkSlice.actions; 