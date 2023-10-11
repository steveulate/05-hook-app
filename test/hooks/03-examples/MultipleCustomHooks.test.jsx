import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../../src/03-examples/MultipleCustomHooks";
import { useFetch } from "../../../src/hooks/useFetch";
import { useCounter } from "../../../src/hooks/useCounter";


jest.mock('../../../src/hooks/useFetch');

jest.mock('../../../src/hooks/useCounter');

describe('Pruebas en <MultipleCustomHooks>', () => {

    const mockIncrement = jest.fn();
    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    });

    beforeEach( () => jest.clearAllMocks());

    test('Debe mostrar el componente por defecto', () => {

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        });


        render(<MultipleCustomHooks></MultipleCustomHooks>);

        expect(screen.getByText('Loading...'));
        expect(screen.getByText('Rick & Morty Characters'));

        const nextButton = screen.getByRole('button', {name: 'Next Character'});

        expect( nextButton.disabled ).toBeTruthy();

        screen.debug();

    });


    test('Debe de mostrar un Character', () => {

        useFetch.mockReturnValue({
            data: {id: 1, name: 'Rick'},
            isLoading: false,
            hasError: null
        });


        render(<MultipleCustomHooks></MultipleCustomHooks>);
        expect(screen.getByText(1)).toBeTruthy();
        expect(screen.getByText('Rick')).toBeTruthy();


        const nextButton = screen.getByRole('button', {name: 'Next Character'});

        expect( nextButton.disabled ).toBeFalsy();
    });

    test('Debe llamar la funciond de incrementar', () => {


        useFetch.mockReturnValue({
            data: {id: 1, name: 'Rick'},
            isLoading: false,
            hasError: null
        });

        render(<MultipleCustomHooks></MultipleCustomHooks>);
        const nextButton = screen.getByRole('button', {name: 'Next Character'});
        fireEvent.click(nextButton);

        expect(mockIncrement).toHaveBeenCalled();

    })
})