import React from 'react';
import './Image.scss';

const Image = props => {
    return (
        <div class="Image">
            {props.url}
        </div>
    )
};

export default Image;