import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const StyledDiv = styled.div`
    border: 1px solid black;
    background-color: #cecece;
    width: 300px;
    height: 200px;
    margin-left: 40%
`

export const ProductDetails = () => {
    const { prodId } = useParams();
    const [details, setDetails] = useState(null);

    // console.log(prodId)
    useEffect(() => {
        fetch(`http://localhost:3010/prodData?id=${prodId}`)
            .then((res) => res.json())
            .then((res) => setDetails(res))
            .catch((err) => console.log(err))
    }, []);

    // console.log(details)

    if(details===null) {
        return <h1>...Loading Data</h1>
    }
    else if(details.length===0){
        return <h1>Product does not exist</h1>
    }

    return (
        <div>
        <h1>Product Details</h1>
        {   
            details.map((item) => (
                <StyledDiv key={item.id}>
                    <h2>Product Name: {item.name}</h2>
                    <h2>Product Price: {item.price}</h2>
                </StyledDiv>
            ))
        }
        </div>
    )
}
