export const create_project = "create_project"

export const createProject = (project) => {
    return (dispatch) => {
        dispatch({
            type: "create_Project",
            project
        })

    }
}