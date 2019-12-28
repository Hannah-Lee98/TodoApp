import { ADD_TODO, UPDATE_TODO, EDIT_TODO, DELETE_TODO, UPDATE_INPUT } from '../Actions/todo'

const initialState = {
    todoList: [{
        id: 12,
        content: "dmmm",
    },
    {
        id: 3,
        content: "hey",
    }],
    model: null,
    modelInput: null,
}

function todoApp(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                modelInput: null,
                todoList: [...state.todoList, action.data],
            }
        case UPDATE_TODO:
            if (state.modelInput.trim() === "" || state.modelInput.trim() === null)
                return {
                    todoList: state.todoList.filter(item => item.id !== state.model.id)
                }
        
            return (
                {
                    ...state,
                    model: null,
                    todoList: state.todoList.map(item => {
                        if (item.id !== state.model.id) {
                            return item 
                        }
                        return {
                            ...item,
                            content: state.modelInput.trim()
                        }
                    }),
                    modelInput: null,
                }
            )
        case EDIT_TODO:
            if (action.data === null)
                return {
                    ...state,
                    modelInput: null,
                    model: null,
                }
            return {
                ...state,
                model: action.data,
                modelInput: action.data.content
            }
        case DELETE_TODO:
            return {
                todoList: state.todoList.filter(item => item.id !== action.data.id)
            }
        case UPDATE_INPUT:
            return {
                ...state,
                modelInput: action.data
            }
        default:
            return state;
    }
};

export default todoApp;