import React, {ChangeEvent} from 'react';
import { RootState} from "../../redux/redux-store";
import {ActionType} from "../../redux/store";
import {Dialogs} from "./Dialogs";
import {newText, newTextValue} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";


const mapStateToProps = (state: RootState) => ({
    dialogsPage: state.dialogsPage
})

const mapDispatchToProps = (dispatch: (action: ActionType) => void) => ({
    updateNewMessageBody: () => newText('', dispatch),
    sensMessage: (e: ChangeEvent<HTMLTextAreaElement>) => newTextValue(e, dispatch )
})

export default connect(mapStateToProps, mapDispatchToProps)(Dialogs);


//
//
// type DialogsDataPropsType = {
//     dispatch: (action: ActionType) => void
//     store: {
//         getState: () => RootState;
//     };
// }
//
// const DialogsContainer = ({ store, dispatch}: DialogsDataPropsType) => {
//     const state: RootState = store.getState();
//     const dialogsPage = state.dialogsPage;
//
//     const updateNewMessageBody = () =>
//         newText( dialogsPage.messages, dispatch)
//
//     const sensMessage = (e: ChangeEvent<HTMLTextAreaElement> ) => newTextValue(e, dispatch)
//
//     return (
//         <Dialogs updateNewMessageBody={updateNewMessageBody}
//                  sensMessage={sensMessage}
//                  dialogsPage={dialogsPage}/>
//     )
// };
//
// export default DialogsContainer;