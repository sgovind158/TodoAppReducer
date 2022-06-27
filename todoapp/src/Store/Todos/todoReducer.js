import * as types from "../Todos/action.types";
import { getTodos } from "./todoAction";

let initState = {
  addTodos: {
    loading: false,
    error: false,
  },
  getTodos: {
    loading: false,
    error: false,
  },
  data: [],
};

export const todoReducer = (state = initState, action) => {
  let { type, payload } = action;

  switch (type) {
    case types.GETTODOSLOADING: {
      return {
        ...state,
        getTodos: {
          loading: true,
          error: false,
        },
      };
    }

    case types.GETTODOSSUCCESS: {
      // nya array de rhe he
      return {
        ...state,
        getTodos: {
          ...state.getTodos,
          loading: false,
          error: false,
        },

        data: payload,
      };
    }

    case types.GETTODOSERROR: {
      return {
        ...state,
        getTodos: {
          loading: false,
          error: true,
        },
      };
    }

    case types.ADDTODOSLOADING: {
      return {
        ...state,
        addTodos: {
          loading: true,
          error: false,
        },
      };
    }

    case types.ADDTODOSSUCCESS: {
      // localStorage.setItem("addDataObj",  JSON.stringify(payload))
      //   let payload = localStorage.getItem("addDataObj")
      console.log("payload", payload);
      return {
        ...state,
        addTodos: {
          loading: false,
          error: false,
        },

        data: [...state.data, payload],
      };
    }

    case types.ADDTODOSERROR: {
      return {
        ...state,
        addTodos: {
          loading: false,
          error: true,
        },
      };
    }

    case types.ADDTODO: {
      return {
        ...state,
        todos: [...state.todos, payload],
      };
    }

    case types.UPDATETODO: {
      let newTodos = state.data.map((todo) => {
        let newData = state.data;
        if (todo.id === payload.id) {
          return {
            ...state,
            data: [
              ...state.data,
              {
                value: payload.value,
              },
            ],
          };
        } else {
          return todo;
        }
      });
    }

    case types.DELETETODO: {
      let newTodos = state.data.filter((todo) => {
        if (todo.id !== payload) {
          return todo;
        }
      });

      return {
        ...state,
        data: newTodos,
      };
    }

    case types.COMPLETETODO: {
      let newTodos = state.data.map((todo) => {
        if (todo.id === payload) {
          if (todo.isCompleted === false) {
            todo.isCompleted = true;
            return todo;
          } else {
            todo.isCompleted = false;
          }
        }

        return todo;
      });

      return {
        ...state,
        data: newTodos,
      };
    }

    case types.GETTODOSLOADING_P1: {
      return {
        ...state,
        getTodos: {
          loading: true,
          error: false,
        },
      };
    }

    case types.GETTODOSSUCCESS_P1: {
      return {
        ...state,
        getTodos: {
          ...state.getTodos,
          loading: false,
          error: false,
        },

        data: payload,
      };
    }

    case types.GETTODOSERROR_P1: {
      return {
        ...state,
        getTodos: {
          loading: false,
          error: true,
        },
      };
    }

    case types.ADDTODOSLOADING_P1: {
      return {
        ...state,
        addTodos: {
          loading: true,
          error: false,
        },
      };
    }

    case types.ADDTODOSSUCCESS_P1: {
      return {
        ...state,
        addTodos: {
          loading: false,
          error: false,
        },

        data: [...state.data, payload],
      };
    }

    case types.ADDTODOSERROR_P1: {
      return {
        ...state,
        addTodos: {
          loading: false,
          error: true,
        },
      };
    }

    case types.UPDATETODO_P1: {
      let newTodos = state.data.map((todo) => {
        if (todo.id === payload.id) {
          return {
            ...state,
            data: [
              ...state.data,
              {
                value: payload.value,
              },
            ],
          };
        } else {
          return todo;
        }
      });
    }

    case types.DELETETODO_P1: {
      let newTodos = state.data.filter((todo) => {
        if (todo.id !== payload) {
          return todo;
        }
      });

      return {
        ...state,
        data: newTodos,
      };
    }

    case types.COMPLETETODO_P1: {
      let completeTodos = state.data.map((todo) => {
        if (todo.id === payload) {
          if (todo.isCompleted === false) {
            todo.isCompleted = true;
            return todo;
          } else {
            todo.isCompleted = false;
          }
        }
      });

      return {
        ...state,
        data: completeTodos,
      };
    }

    case types.ADDTODO_P1: {
      return {
        ...state,
        todos: [...state.todos, payload],
      };
    }

    default: {
      return state;
    }
  }
};
