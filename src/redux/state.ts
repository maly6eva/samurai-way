import {rerenderEntireTree} from "../render";

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

export let state: StateType = {
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
        messages: 'Messages'
    }
}


export let addPost = (postMassage: string) => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        like: 0,
        name: 'Ksenia'
    }
    state.profilePage.post.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state)
}

export let updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}


export let messagesPost = (postMassage: string) => {
    let messageYouPost = {
        id: 1,
        message: state.dialogsPage.messages
    }
    state.dialogsPage.messagesData.push(messageYouPost)
    state.dialogsPage.messages = ''
    rerenderEntireTree(state)
}

export let updateNewMessagesText = (newMessages: string) => {
    state.dialogsPage.messages = newMessages
    rerenderEntireTree(state)
}






























