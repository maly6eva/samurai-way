import {
    ProfileActionType,
    profileReducer,
} from "./profile-reducer";
import {
    DialogsActionType,
    dialogsReducer,
} from "./dialogs-reducer";



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

export type ActionType = ProfileActionType | DialogsActionType;






export const initialState: StateType= {
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
        }
    }

    export let store = {
        _state: initialState,
        _callSubscriber(state: StateType) {
            console.log("rerenderEntireTree");
        },

    getState() {
        return this._state
    },
    subscriber(observer: (state: StateType) => void) {
        this._callSubscriber = observer
    },
        dispatch(action: ActionType) {
            this._state = {
            ...this._state,
                profilePage: profileReducer(this._state.profilePage, action as ProfileActionType),
                dialogsPage: dialogsReducer(this._state.dialogsPage, action as DialogsActionType),
            }
            this._callSubscriber(this._state);
        },
}



































