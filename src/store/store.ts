
import {configureStore} from '@reduxjs/toolkit';
import { todoReducer } from './tools/TodoList';
import {TypedUseSelectorHook, useSelector} from 'react-redux';
export const store = configureStore({ 
  reducer: {
    todoReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type useDispatch = typeof store.dispatch;
export const useSelectorResults: TypedUseSelectorHook<RootState> = useSelector;