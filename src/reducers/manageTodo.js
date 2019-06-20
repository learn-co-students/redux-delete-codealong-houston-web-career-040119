export default function manageTodo(state = {
  todos: [],
}, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        todos: [
          ...state.todos,
          {
            id: Math.random()*10000000000000000,
            text: action.payload.text
          }
        ]
      };
    case 'DELETE_TODO':
      return { todos: state.todos.filter(todo => todo.id !== action.payload) };
    default:
      return state;
  }
}
