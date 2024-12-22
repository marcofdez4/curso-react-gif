import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import {GifExpertApp} from "../src/GifExpertApp"

describe('Pruebas en <GifExpertApp/>', () => { 
    test('prueba de añadir categoria nueva', async() => { 
        render(<GifExpertApp/>);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {target: {value: 'Elden ring'}});
        fireEvent.submit(form);

        await waitFor(
                    () => true
                );
        
        expect(screen.getAllByLabelText('categories').length).toBe(2);
     });

     test('prueba de añadir categoria repetida', async() => { 
        render(<GifExpertApp/>);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {target: {value: 'Berserk'}});
        fireEvent.submit(form);

        await waitFor(
                    () => true
                );
        
        expect(screen.getAllByLabelText('categories').length).toBe(1);
     })
 })