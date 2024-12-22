import { GifItem } from "./GifItem";
import { useFecthGifs } from "../hooks/useFecthGifs";
import PropTypes from "prop-types";



export const GifGrid = ({category}) => {

    const { images, isLoading} = useFecthGifs(category);

    return (
        <>
            <h3 aria-label="categories">{ category }</h3>
            {
                isLoading && (<h2>Cargando...</h2>)
            }
            <div className='card-grid'>
            {images.map(image => 
                (
                    <GifItem key={image.id}
                    title = {image.title}
                    {...image}/>
                )
            )}
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}
