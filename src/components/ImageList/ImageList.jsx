import { useEffect, useState } from "react";
import axios from "axios";
import Images from "../Images/Image";
import "./ImageList.css";

function ImageList() {

    const [imageList, setImageList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    async function getImages() {
        try {
            const response = await axios.get("https://api.slingacademy.com/v1/sample-data/photos?&limit=20");
            const imageResults = response.data.photos;

            const results = imageResults.map((image) => ({
                id: image.id,
                title: image.title,
                description: image.description,
                url: image.url,
              }));

        setIsLoading(false);
        setImageList(results);
        console.log(results);

        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    }

    useEffect(() =>{
        getImages();
    }, [])



    return(
    <div className="image-list-wrapper">
        <div className="image-image-wrapper">
            {isLoading ? <p>Loading...</p> : 
                imageList.map((image) => (<Images name= {image.title} image= {image.url} key={image.id} id={image.id} />))
            }
        </div>
    </div>
    )
}

export default ImageList;