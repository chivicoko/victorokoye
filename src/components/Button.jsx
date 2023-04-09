import styled from "styled-components";

const Button = styled.button`
    color: ${props => props.primary ? "black" : "white"};
    background-color: ${props => props.primary ? "white" : "black"};
    font-size: 20px;
    margin: 0.5em 1em;
    padding: 5px 15px;
    border: 1px solid ${props => props.primary ? "black" : "white"};

    :hover {
        color: ${props => props.primary ? "white" : "black"};
        background-color: ${props => props.primary ? "black" : "white"};
        border: 1px solid ${props => props.primary ? "white" : "black"};
    }
`;

export default Button;