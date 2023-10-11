import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../../src/08-useReducer/TodoItem";

describe('Pruebas en <TodoItem></TodoItem>', () => {
    
    const todo = {
        id: 1,
        description: 'Piedra del Alma',
        done: false
    };

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach( ()=> jest.clearAllMocks());

    test('Debe mostrar el Todo Pendiente de completar', () => {
        render(
            <TodoItem 
                todo={ todo } 
                onToggleTodo={onToggleTodoMock} 
                onDeleteTodo={onDeleteTodoMock}>

            </TodoItem>
        );

        const liElement = screen.getByRole('listitem');
        expect(liElement.className).toBe('list-group-item d-flex justify-content-between');

        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('align-self-center');
        
        expect(spanElement.className).not.toContain('text-decoration-line-through');
    });

    test('Debe mostrar el Todo completado', () => {
        todo.done = true;


        render(
            <TodoItem 
                todo={ todo } 
                onToggleTodo={onToggleTodoMock} 
                onDeleteTodo={onDeleteTodoMock}>

            </TodoItem>
        );

        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('text-decoration-line-through');
    });

    test('Span debe llamar el ToggleTodo cuando se hace click', () => {

        render(
            <TodoItem 
                todo={ todo } 
                onToggleTodo={onToggleTodoMock} 
                onDeleteTodo={onDeleteTodoMock}>

            </TodoItem>
        );
        const spanElement = screen.getByLabelText('span');

        fireEvent.click(spanElement);
        expect(onToggleTodoMock).toHaveBeenLastCalledWith(todo.id);
    });

    test('El boton debe de llamar el deleteTodo', () => {

        render(
            <TodoItem 
                todo={ todo } 
                onToggleTodo={onToggleTodoMock} 
                onDeleteTodo={onDeleteTodoMock}>

            </TodoItem>
        );
        const deleteButton = screen.getByRole('button');

        fireEvent.click(deleteButton);
        expect(onDeleteTodoMock).toHaveBeenLastCalledWith(todo.id);
    });

});