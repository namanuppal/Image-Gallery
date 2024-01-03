import { Route, Routes } from "react-router-dom";
import Imagedex from "../components/Imagedex/Imagedex";
import ImageDetails from "../components/ImageDetails/ImageDetails";

function CustomRoutes(){
    return (
        <div>
            <Routes>
                <Route path="/" element={<Imagedex />} />
                <Route path="/:id" element={<ImageDetails />} />
            </Routes>
        </div>
    )
}

export default CustomRoutes;