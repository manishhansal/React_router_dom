import React from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
    text-decoration: none;
    margin: 10px;
    color: blue;
    font-size: 25px;
`

export const Navbar = () => {
    return (
        <div>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/all_products">All Products</StyledLink>
        </div>
    )
}
