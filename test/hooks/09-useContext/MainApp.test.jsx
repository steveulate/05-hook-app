const { render, screen } = require("@testing-library/react");
const { MainApp } = require("../../../src/09-useContext/MainApp");
const { MemoryRouter } = require("react-router-dom");

describe('Pruebas en <MainApp></MainApp>', () => {

    test('Debe de mostrar el HomePage', () => {

        render(
            <MemoryRouter>
                <MainApp>
                </MainApp>
            </MemoryRouter>
        );

        expect(screen.getAllByText('HomePage')).toBeTruthy();
    });


    test('Debe de mostrar el LoginPage', () => {

        render(
            <MemoryRouter initialEntries={['/login']}>
                <MainApp>
                </MainApp>
            </MemoryRouter>
        );

        expect(screen.getAllByText('LoginPage')).toBeTruthy();
    });

});