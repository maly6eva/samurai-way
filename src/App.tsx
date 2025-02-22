import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import store from "./redux/redux-store";
import {ActionType} from "./redux/store";

import {Provider} from "react-redux";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";



function App() {

    return (
        <Provider store={store}>
            <BrowserRouter>
                <div className="app-wrapper">
                    <Header/>
                    <Navbar store={store}/>
                    <div className="app-wrapper-content">
                        <Route path='/dialogs' render={() => <DialogsContainer/>}/>

                        <Route path='/profile' render={() => <ProfileContainer />} />
                    </div>
                </div>
            </BrowserRouter>
        </Provider>)
}

export default App;


// import React from 'react';
// import './App.css';
// import {Header} from "./components/Header/Header";
// import {Navbar} from "./components/Navbar/Navbar";
// import {Profile} from "./components/Profile/Profile";
// import {BrowserRouter, Route} from "react-router-dom";
// import store from "./redux/redux-store";
// import {ActionType} from "./redux/store";
// import {DialogsContainer} from "./components/Dialogs/DialogsContainer";


// export type AppPropsType = {
//     store: typeof store;
//     dispatch: (action: ActionType) => void
// }
//
// function App({store, dispatch}: AppPropsType) {
//
//     return (
//         <BrowserRouter>
//             <div className="app-wrapper">
//                 <Header/>
//                 <Navbar store={store}/>
//                 <div className="app-wrapper-content">
//                     <Route path='/dialogs' render={() => <DialogsContainer store={store}  dispatch={dispatch}/>  }/>
//
//                     <Route path='/profile' render={() => <Profile
//                         store={store}  dispatch={dispatch}
//                     />}/>
//                 </div>
//             </div>
//         </BrowserRouter>)
// }
//
// export default App;