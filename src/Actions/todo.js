export const ADD_TODO = 'ADD_TODO'
export const EDIT_TODO = 'EDIT_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const UPDATE_TODO = 'UPDATE_TODO'
export const UPDATE_INPUT = 'UPDATE_INPUT'

export function AddTodo(item) {
    return { type: ADD_TODO, data: item }
}
export function EditTodo(item) {
    return { type: EDIT_TODO, data: item }
}
export function DeleteTodo(item) {
    return { type: DELETE_TODO, data: item }
}
export function UpdateTodo(item) {
    return { type: UPDATE_TODO, data: item }
}
export function UpdateInput(item){
    return { type: UPDATE_INPUT, data: item}
}
