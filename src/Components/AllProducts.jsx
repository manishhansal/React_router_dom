import {useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const StyledTable = styled.table`
    border: 1px solid #cecece;
    background-color: #cecece;
    margin-left: 40%;
    margin-top: 5%
`

export const AllProducts = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        let isSubscribed = true;
        fetch(`http://localhost:3010/prodData`)
            .then((res) => res.json())
            .then((res) => isSubscribed && setData(res))
            .catch((err) => console.log(err));

        return () => {
            isSubscribed = false;
        }
    }, []);


  return (
    <StyledTable>
        <thead>
            <tr>
                <th>Product Name</th>
                <th>Price</th>
                <th>More Details</th>
            </tr>
        </thead>
        <tbody>
            {
                data.map((prod) => (
                    <tr key={prod.id}>
                        <td>{prod.name}</td>
                        <td>{prod.price}</td>
                        <td>
                            <Link to={`/all_products/${prod.id}`}>More Details..</Link>
                        </td>
                    </tr>
                ))
            }
        </tbody>
    </StyledTable>
  )
}
