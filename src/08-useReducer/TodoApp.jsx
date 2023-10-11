
import { useTodos } from "../hooks";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";




export const TodoApp = () => {


    const {todos, todosCount, pendingTodosCount, handleDeleteTodo, handleToggleTodo, handleNewTodo} = useTodos();
    

    return (
        <>
            <h1>TodoApp: {todosCount}</h1>
            <h2>Pendientes: { pendingTodosCount }</h2>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList 
                        todos = {todos} 
                        onDeleteTodo={ id => handleDeleteTodo(id)}
                        onToggleTodo={handleToggleTodo}
                     />
                </div>
                
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <TodoAdd onNewTodo={ todo => handleNewTodo(todo)}/>
                    
                </div>
            </div>

            
        </>
    );
}
