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
        }
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
    
    addPost(postMassage: string) {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            like: 0,
            name: 'Ksenia'
        }
        this._state.profilePage.post.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state)
    },
    updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state)
    },
    messagesPost(postMassage: string) {
        const messageYouPost = {
            id: this._state.dialogsPage.messagesData.length + 1,
            message: this._state.dialogsPage.messages
        }
        this._state.dialogsPage.messagesData.push(messageYouPost)
        this._state.dialogsPage.messages = ''
        this._callSubscriber(this._state)
    },
    updateNewMessagesText(newMessages: string) {
        this._state.dialogsPage.messages = newMessages
        this._callSubscriber(this._state)
    },

}


































