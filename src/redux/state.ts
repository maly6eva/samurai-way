export type PostProps = {
    message: string,
    like: number,
    id: number,
    name: string;
}

export type DialogPropsType = {
    name: string,
    id: number,
}

export type MessageProps = {
    id: number,
    message: string;
}


export let state = {
     post:<PostProps[]> [
    {id: 1, message: 'Go', like: 373, name: 'Ksenia'},
    {id: 2, message: 'Gi', like: 233, name: 'Kristina'},
    {id: 3, message: 'Good post', like: 133, name: 'Timur'},
],
    dialogsData: <DialogPropsType[]> [
        {id: 1, name: 'Ksenia'},
        {id: 2, name: 'Valery'},
        {id: 3, name: 'Dimasik'},
        {id: 4, name: 'Diana'},
        {id: 5, name: 'Timur'},
        {id: 6, name: 'Darina'}
    ],
    messagesData:  <MessageProps[]>  [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'OK'},
    ]
}

//
// export type  CitationPropsType = {
//     id: number,
//     citation: string
// }
//
//
// let citation: CitationPropsType[] = [
//     {id: 1, citation: 'Пройдет время, и жизнь покажет, что все было только к лучшему.'},
//     {id: 2, citation: 'Бесполезной жизни стоит опасаться куда больше, чем смерти.'},
//     {id: 3, citation: 'Если ты не наделил ценностью жизнь, она не будет ее иметь'},
// ]