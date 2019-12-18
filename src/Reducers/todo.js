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
            if (state.modelInput.trim() === "")
                return {
                    todoList: state.todoList.filter(item => item.id !== state.model.id)
                }
            const todoList1 = state.todoList;
            const todoListTemp = todoList1.slice()
            const index = todoList1.findIndex(item => item.id === state.model.id)
            todoListTemp[index] = { ...state.model, content: state.modelInput.trim() }
            return (
                {
                    ...state,
                    model: null,
                    todoList: todoListTemp,
                    modelInput: null,
                }
            )
        case EDIT_TODO:
            return {
                ...state,
                model: action.data ? action.data : null,
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