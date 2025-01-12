import React from 'react';
import {useParams} from "react-router-dom";

const CategoryPage = () => {
    const { category } = useParams();
    return (
        <div>
            Picked category is : {category}
        </div>
    );
};

export default CategoryPage;