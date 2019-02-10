const initState = {
    projects: [
        { id: '1', title: 'Help me find peach', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
        { id: '2', title: 'Collect all the pokemons', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
        { id: '3', title: 'Egg hunt with Michael', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    ]
}

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('Created project', action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('Create project error', action.err);
            return state;
        default:
            return state;
    }
}

export default projectReducer;
