import {ActionType} from "./state";

export const UPDATE_NEW_MESSAGES_TEXT = 'updateNewMessageText' as const;
export const MESSAGES_POST = 'messagesPost' as const

export type MessageType = {
    id: number;
    message: string
}

export type DialogsStateType = {
    dialogsData: {
        id: number;
        name: string}[]
    messagesData: MessageType[];
    messages: string
}

const initialState: DialogsStateType = {
    dialogsData: [
        {id: 1, name: 'Ksenia'},
        {id: 2, name: 'Valery'},
        {id: 3, name: 'Dimasik'},
        {id: 4, name: 'Diana'},
        {id: 5, name: 'Timur'},
        {id: 6, name: 'Darina'}
    ],
    messagesData: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'OK'},
    ],
    messages: ''
}

export type UpdateNewMessagesText = {
    type: typeof UPDATE_NEW_MESSAGES_TEXT
    newMessages: string
}

export type MessagesPostAction = {
    type: typeof MESSAGES_POST
}

export type DialogsActionType = UpdateNewMessagesText | MessagesPostAction

export const newTextValue = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
    dispatch: (action: ActionType) => void
) => {
    dispatch(UpdateNewMessagesTextCreator(e.currentTarget.value))
}

export const newText = (
    messages: string,
    dispatch: (action: ActionType) => void
): void => {
    if (messages.trim()) {
        dispatch(MessagesPostActionCreator())
    }
}

export const dialogsReducer = (state: DialogsStateType = initialState, action: DialogsActionType): DialogsStateType => {
   switch (action.type) {
       case MESSAGES_POST:
           const messageYouPost = {
               id: state.messagesData.length + 1,
               message: state.messages
           }
           state.messagesData.push(messageYouPost)
           state.messages = ''
           return state;

       case UPDATE_NEW_MESSAGES_TEXT:
           state.messages = action.newMessages
           return state;

       default:
           return state;
   }
}

export const UpdateNewMessagesTextCreator = (newMessages: string): UpdateNewMessagesText => ({
    type: UPDATE_NEW_MESSAGES_TEXT,
    newMessages,
})

export const MessagesPostActionCreator = (): MessagesPostAction => ({
    type: MESSAGES_POST
})