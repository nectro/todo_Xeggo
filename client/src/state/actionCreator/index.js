export const setUser = (userId, name, email) => {
    return (dispatch) => {
        dispatch({
            type: "set_user",
            payload: {
                userId,
                name,
                email
            }
        });
    }
}

export const updateTask = (tasks) => {
    return (dispatch) => {
        dispatch({
            type: "updateTask",
            payload: tasks
        });
    }
}
