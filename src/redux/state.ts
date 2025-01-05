import React, {ChangeEvent} from "react";

export type PostProps = {
    message: string,
    like: number,
    id: number,
    name: string;
}

export type NavbarPropsType = {
    name: string,
    id: number,
}

export type DialogPropsType = {
    name: string,
    id: number,
}

export type MessageProps = {
    id: number,
    message: string;
}

export type ProfilePageProps = {
    post: PostProps[]
    newPostText: string
    navbar: NavbarPropsType[]
}

export type DialogsPageType = {
    dialogsData: DialogPropsType[]
    messagesData: MessageProps[]
    messages: string
}

export type StateType = {
    profilePage: ProfilePageProps
    dialogsPage: DialogsPageType
}


export const ADD_POST = 'addPost' as const;
export const UPDATE_NEW_POST_TEXT = 'updateNewPostText' as const;
export const UPDATE_NEW_MESSAGES_TEXT = 'updateNewMessageText' as const;
export const MESSAGES_POST = 'messagesPost' as const

export type AddPostAction = {
    type: typeof ADD_POST
}
export type UpdateNewPostTextAction = {
    type: typeof UPDATE_NEW_POST_TEXT;
    newText: string
}
export type UpdateNewMessagesText = {
    type: typeof UPDATE_NEW_MESSAGES_TEXT
    newMessages: string
}

export type MessagesPostAction = {
    type: typeof MESSAGES_POST
}


export type ActionType =
    | AddPostAction
    | UpdateNewPostTextAction
    | UpdateNewMessagesText
    | MessagesPostAction


export const addPostActionCreator = (): AddPostAction => ({
    type: ADD_POST
})

export const updateNewPostTextActionCreator = (newText: string): UpdateNewPostTextAction => ({
    type: UPDATE_NEW_POST_TEXT,
    newText,
})

export const UpdateNewMessagesTextCreator = (newMessages: string): UpdateNewMessagesText => ({
    type: UPDATE_NEW_MESSAGES_TEXT,
    newMessages,
})

export const MessagesPostActionCreator = (): MessagesPostAction => ({
    type: MESSAGES_POST
})

export const addPostValue = (
    e: ChangeEvent<HTMLTextAreaElement>,
    dispatch: (action: ActionType) => void
): void => {
    dispatch(updateNewPostTextActionCreator(e.currentTarget.value))
}

export const addPostElement = (
    newsText: string,
    dispatch: (action: ActionType) => void
): void => {
    if (newsText.trim()) {
        dispatch(addPostActionCreator())
    }
}

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

export let store = {
    _state: {
        profilePage: {
            post: [
                {id: 1, message: 'Go', like: 373, name: 'Ksenia'},
                {id: 2, message: 'Gi', like: 233, name: 'Kristina'},
                {id: 3, message: 'Good post', like: 133, name: 'Timur'}
            ],
            newPostText: 'it-Ksenia',
            navbar: [
                {id: 1, name: 'Ksen'},
                {id: 2, name: 'Valera'},
                {id: 3, name: 'Dima'},
            ]
        },
        dialogsPage: {
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
        },
    },
    _callSubscriber(state: StateType) {
        console.log("rerenderEntireTree")
    },

    getState() {
        return this._state
    },
    subscriber(observer: (state: StateType) => void) {
        this._callSubscriber = observer
    },

    dispatch(action: ActionType) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: this._state.profilePage.post.length + 1,
                message: this._state.profilePage.newPostText,
                like: 0,
                name: 'Ksenia'
            }
            this._state.profilePage.post.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)

        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)

        } else if (action.type === 'messagesPost') {
            const messageYouPost = {
                id: this._state.dialogsPage.messagesData.length + 1,
                message: this._state.dialogsPage.messages
            }
            this._state.dialogsPage.messagesData.push(messageYouPost)
            this._state.dialogsPage.messages = ''
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_MESSAGES_TEXT) {
            this._state.dialogsPage.messages = action.newMessages
            this._callSubscriber(this._state)
        }
    }
}



































