
import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem"

        const title='berserk';
        const url = 'https://media4.giphy.com/media/p4w0AMZJa2EtG/giphy.gif?cid=044394073v62c8w1qkleo1chyopor9udaw8fi2t0wpohxdyk&ep=v1_gifs_search&rid=giphy.gif&ct=g'
        

describe('pruebas en gifItem', () => {
    test('debe de hacer match con el snapshot', () => { 
        const { container } = render( <GifItem title={title} url={url}/>);
        expect(container).toMatchSnapshot();
     })

     test('debe de mostras la imagen con el url y el ALT indicado', () => { 
        render( <GifItem title={title} url={url}/>);
        //screen.debug();
        // expect(screen.getByRole('img').src).toBe(url);
        // expect(screen.getByRole('img').alt).toBe(title);
        const {src, alt} = screen.getByRole('img');
        expect( alt ).toBe(title);
        expect( src ).toBe(url);
      })

      test('debe de mostrar el titulo en el componente', () => { 
        render( <GifItem title={title} url={url}/>);
        expect(screen.getByText(title)).toBeTruthy();
       })
})