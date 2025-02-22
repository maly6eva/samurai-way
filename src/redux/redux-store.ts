import {ProfileActionType, profileReducer, ProfileStateType} from './profile-reducer';
import {DialogsActionType, dialogsReducer, DialogsStateType} from './dialogs-reducer';
import {combineReducers, createStore} from "redux";


export type ReducerAction = ProfileActionType | DialogsActionType

const reducers = combineReducers({
        profilePage: profileReducer,
        dialogsPage: dialogsReducer,
});



export const store = createStore(reducers);

export type RootState = ReturnType<typeof reducers>

export  type AppDispatch = typeof store.dispatch


export default store;

