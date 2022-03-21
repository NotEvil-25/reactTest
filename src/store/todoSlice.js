import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todos: [],
    editPopup: {
      show: false,
      itemId: '',
      text: '',
      newText: ''
    }
  },
  reducers: {
    add(state, action) {
      const newItem = action.payload
      state.todos.push(newItem)
    },
    remove(state, action) {
      const id = action.payload
      state.todos = state.todos.filter(item => item.id !== id)
    },
    popup(state, action) {
      const {show, text, itemId, newText} = action.payload

      state.editPopup.show = show
      state.editPopup.text = text
      state.editPopup.itemId = itemId

      if(newText) {
        state.todos.map(item => {
          if(item.id === itemId) {
            return item.text = newText
          }
          return state
        })
      }
    }
  }
})
export const {add, remove, popup} = todoSlice.actions
export const selectTodos = state => state.todo.todos
export const selectEditingId = state => state.todo.editPopup.itemId
export const selectPopupStatus = state => state.todo.editPopup.show
export const selectText = state => state.todo.editPopup.text
export default todoSlice.reducer;