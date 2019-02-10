export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make ascync call to db
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'Yazid',
            authorLastName: 'Ismail',
            authorId: '12345',
            createdAt: new Date()
        }).then(() => {
            // dispatch
            dispatch({ type: 'CREATE_PROJECT', project })
        }).catch((err) => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', err })
        })
    }
}