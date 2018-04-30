const initialState = {
    0: 'Todo 0',
    1: 'Todo 1',
    2: 'Todo 2',
    3: 'Todo 3',
    4: 'Todo 4',
    5: 'Todo 5',
    6: 'Todo 6',
    7: 'Todo 7',
    8: 'Todo 8',
    9: 'Todo 9'
};

export const todoMap = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_TODO':
            return {
                ...state,
                [action.todo.id]: action.todo.text
            };

        default:
            return state;
    }
};
