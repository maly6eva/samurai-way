import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {messagesPost, StateType, updateNewMessagesText} from "./redux/state";


export type AppPropsType = {
    state: StateType
    addPost: (postMassage: string) => void
    updateNewPostText: (newText: string) => void
    messagesPost: (postMassage: string) => void
    updateNewMessagesText: (newMessages: string) => void
}

function App({state, addPost, updateNewPostText, messagesPost, updateNewMessagesText}: AppPropsType) {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar navbar={state.profilePage.navbar}/>
                <div className="app-wrapper-content">
                    <Route path='/dialogs' render={() => <Dialogs
                        dialogsPage={state.dialogsPage}
                        messages={state.dialogsPage.messages}
                        messagesPost={messagesPost}
                        updateNewMessagesText={updateNewMessagesText}
                    />}/>
                    <Route path='/profile' render={() => <Profile
                        profilePage={state.profilePage}
                        addPost={addPost}
                        updateNewPostText={updateNewPostText}
                    />}
                    />
                </div>
            </div>
        </BrowserRouter>)
}

export default App;