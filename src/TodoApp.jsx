import { useState } from 'react';
import { useGetTodosQuery, useGetTodoByIdQuery } from './store/apis';

export const TodoApp = () => {

  //En la destructuración ahora la data se va llamar todos
  //const { data : todos =[], isLoading } = useGetTodosQuery();

  const [todoId, setTodoId] = useState(1);
  const { data : todo, isLoading } = useGetTodoByIdQuery(todoId);
  //console.log(todo);
  const nextTodo = () => {
        setTodoId( todoId + 1 );
  }
  const previousTodo = () => {
        if( todoId === 1 ) return;
        setTodoId( todoId - 1 );
  }


  return (
    <>
        <h1>Todos - ART Query</h1>
        <hr/>
        <h4>isLoading { isLoading ? 'True' : 'False' } </h4>

        <pre>{ JSON.stringify(todo) }</pre>
        {/* <ul>
            { todos.map( todo => (
                <li key={ todo.id }>
                    <strong>{ todo.completed ? 'Done ' : 'Pending '}</strong>
                    { todo.title }
                </li>
            ) ) }
        </ul> */}

        <button onClick={ previousTodo }>
            Previous Todo
        </button>
        &nbsp;
        <button onClick={ nextTodo }>
            Next Todo
        </button>
    </>
  )
}
