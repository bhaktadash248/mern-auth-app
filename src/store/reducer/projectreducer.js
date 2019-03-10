import { create_Project } from "../action/projectAction"

const initialState = {
    data: []
}

const projectReducer = (state = initialState, action) => {
    console.log(action.project)
    switch (action.type) {
        case 'create_Project':
            return {
                ...state,
                data: state.data.concat(action.project)
            }
    }
    return state;
}

export default projectReducer;