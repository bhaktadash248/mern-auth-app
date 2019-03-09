const initialState = {
    projects: [
        {
            "id": 1,
            "title": "delectus aut autem",
            "content": "delectus aut autem delectus aut autem delectus aut autem"
        },
        {
            "id": 2,
            "title": "delectus aut autem 2 ",
            "content": "delectus aut autem 2 delectus aut autem 2 delectus aut autem 2"
        },
        {
            "id": 3,
            "title": "delectus aut autem 3 ",
            "content": "delectus aut autem 3  delectus aut autem 3 delectus aut autem 3 "
        },
    ]
}

const projectReducer = (state = initialState, action) => {
    switch(action.type){
        case 'create_Project':
        console.log("created project", action.project)
    }
    return state;
}

export default projectReducer;