import {ChangeEvent} from "react";
import {ActionType} from "./state";

export const ADD_POST = 'addPost' as const;
export const UPDATE_NEW_POST_TEXT = 'updateNewPostText' as const;



export type AddPostAction = {
    type: typeof ADD_POST
}
export type UpdateNewPostTextAction = {
    type: typeof UPDATE_NEW_POST_TEXT;
    newText: string
}

export type ProfileActionType = AddPostAction | UpdateNewPostTextAction;

export type ProfileStateType = {
    post: { id: number; message: string; like: number; name: string }[];
    newPostText: string;
    navbar: { id: number; name: string }[];
};


const initialState: ProfileStateType = {
    post: [
        { id: 1, message: 'Hello!', like: 5, name: 'Ksenia' },
        { id: 2, message: 'React is awesome!', like: 10, name: 'Kristina' },
    ],
    newPostText: '',
    navbar: [
        { id: 1, name: 'Ksenia' },
        { id: 2, name: 'Valera' },
        { id: 3, name: 'Dima' },
    ],
};


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
export const profileReducer = (state: ProfileStateType = initialState, action: ProfileActionType): ProfileStateType  => {
   switch (action.type) {
       case ADD_POST:
           let newPost = {
               id: state.post.length + 1,
               message: state.newPostText,
               like: 0,
               name: 'Ksenia'
           };
           state.post.push(newPost)
           state.newPostText = ''
           return state;

       case UPDATE_NEW_POST_TEXT:
           state.newPostText = action.newText
           return state;
       default:
           return state;
   }
}

export const addPostActionCreator = (): AddPostAction => ({
    type: ADD_POST
})

export const updateNewPostTextActionCreator = (newText: string): UpdateNewPostTextAction => ({
    type: UPDATE_NEW_POST_TEXT,
    newText,
})