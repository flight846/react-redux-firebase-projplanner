export const createProject = (project) => {
    return (dispatch, getState) => {
        // make ascync call to db

        // dispatch
        dispatch({ type: 'CREATE_PROJECT', project})
    }
}