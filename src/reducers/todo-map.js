const initialState = {
    0: { id: 0, text: 'Todo 0' },
    1: { id: 1, text: 'Todo 1' },
    2: { id: 2, text: 'Todo 2' },
    3: { id: 3, text: 'Todo 3' },
    4: { id: 4, text: 'Todo 4' },
    5: { id: 5, text: 'Todo 5' },
    6: { id: 6, text: 'Todo 6' },
    7: { id: 7, text: 'Todo 7' },
    8: { id: 8, text: 'Todo 8' },
    9: { id: 9, text: 'Todo 9' }
};

export const todoMap = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_TODO':
            return {
                ...state,
                [action.todo.id]: action.todo
            };

        default:
            return state;
    }
};
