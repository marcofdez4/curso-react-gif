import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFecthGifs = (category) => {

    const [images, setimages] = useState([]);
    const [isLoading, setisLoading] = useState(true);

    const gesImages = async() => {
        const newImages = await getGifs(category);
        setimages(newImages);
        setisLoading(false);
    }

    useEffect( () => {
        gesImages();
    }, [])

    return {
        images: images,
        isLoading: isLoading
    }
}
