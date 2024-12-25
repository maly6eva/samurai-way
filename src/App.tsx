import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {StateType} from "./redux/state";


export type AppPropsType = {
    state: StateType
    addPost: (postMassage: string) => void
}

function App({state, addPost}: AppPropsType) {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar navbar={state.profilePage.navbar}/>
                <div className="app-wrapper-content">
                    <Route path='/dialogs' component={() => <Dialogs
                        dialogsData={state.dialogsPage.dialogsData}
                        messagesData={state.dialogsPage.messagesData}
                    />}/>
                    <Route path='/profile' component={() => <Profile
                        post={state.profilePage.post} addPost={addPost}
                    />}
                    />
                </div>
            </div>
        </BrowserRouter>)
}

export default App;