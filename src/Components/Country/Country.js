import React from 'react';

const country = (props) => {
    console.log('props',props);
    return (
        <div>
            <h3>Country Name: {props.name}</h3>
        </div>
    );
};

export default country;