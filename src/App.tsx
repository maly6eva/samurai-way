import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {DialogPropsType, MessageProps, PostProps} from "./redux/state";



export type  AppPostProps = {
    post: PostProps[]
    dialogsData: DialogPropsType[]
    messagesData: MessageProps[]
}


function App({post, dialogsData, messagesData}: AppPostProps) {


    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>

                <div className="app-wrapper-content">
                    <Route path='/dialogs' component={() => <Dialogs  dialogsData={ dialogsData} messagesData={messagesData}/>}/>
                    <Route path='/profile'  component={() => <Profile post={post} />}/>
                </div>

            </div>
        </BrowserRouter>)

}

export default App;