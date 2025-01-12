import React from 'react';
import {useParams} from "react-router-dom";

const CategoryPage = () => {
    const { id } = useParams();
    return (
        <div>
            Picked news id is : {id}
        </div>
    );
};

export default CategoryPage;