import { profileReducer} from './profile-reducer';
import { dialogsReducer} from './dialogs-reducer';
import {combineReducers, createStore} from "redux";


const reducers = combineReducers({
        profilePage: profileReducer,
        dialogsPage: dialogsReducer,
});

let store = createStore(reducers);

export default store;

