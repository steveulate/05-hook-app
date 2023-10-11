import { fireEvent, render, screen } from "@testing-library/react";
import { LoginPage } from "../../../src/09-useContext/LoginPage";
import { UserContext } from "../../../src/09-useContext/context/UserContext";

describe('Pruebas en <LoginPage></LoginPage>', () => {

    test('Debe de mostrar el componente sin el usuario', () => {

        render(
            <UserContext.Provider value={{user: null}}>
                <LoginPage>

                </LoginPage>
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toBe('null');
    });


    test('Debe de llamar el setUser cuando se hace click en el boton', () => {

        const setUserMock = jest.fn();

        render(
            <UserContext.Provider value={{user: null, setUser: setUserMock}}>
                <LoginPage>

                </LoginPage>
            </UserContext.Provider>
        );

        const button = screen.getByRole('button');
        fireEvent.click(button);

        expect(setUserMock).toHaveBeenCalledWith({"email": "steve_ulate@hotmail.com", "id": 123, "name": "Steve Ulate"});

        
    });

});