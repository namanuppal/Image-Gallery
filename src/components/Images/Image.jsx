import { Link } from 'react-router-dom';
import './Image.css';

function Images ( {name, image, id } ) {
    return(
        <div>
            <Link to={`/${id}`}>
                <div><img className="image-wrapper" src={image} alt={name} /></div>
            </Link>
        </div>
    )
}

export default Images;