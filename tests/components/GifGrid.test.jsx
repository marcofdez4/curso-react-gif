import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components";
import { useFecthGifs } from "../../src/hooks/useFecthGifs";

jest.mock('../../src/hooks/useFecthGifs');

describe('pruebas en <GifGrid />', () => { 

    const category= 'Berserk';

    test('debe de mostrar el loading inicialmente', () => { 

        useFecthGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render( <GifGrid category={category}/>);
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));

     });

     test('debe de mostrar items cuando se cargan las imagenes useFetchGifs ', () => { 
        
        const gifs = [{
            id: '123',
            title: 'elden ring',
            url: 'https://hola.com'
        },
        {
            id: '124',
            title: 'elden ring2',
            url: 'https://hola.es'
        }]
        
        useFecthGifs.mockReturnValue({
            images: gifs,
            isLoading: true
        });
        render( <GifGrid category={category}/>);
       
        expect( screen.getAllByRole('img').length).toBe(2)

     });

     
 });