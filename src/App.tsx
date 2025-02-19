import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {ActionType, StateType} from "./redux/store";


export type AppPropsType = {
    state: StateType
    dispatch: (action: ActionType) => void
}

function App({state, dispatch}: AppPropsType) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar navbar={state.profilePage.navbar}/>
                <div className="app-wrapper-content">
                    <Route path='/dialogs' render={() => <Dialogs
                        dialogsPage={state.dialogsPage}
                        dispatch={dispatch}
                    />}/>
                    <Route path='/profile' render={() => <Profile
                        profilePage={state.profilePage}
                        dispatch={dispatch}
                    />}/>
                </div>
            </div>
        </BrowserRouter>)
}

export default App;