
import styled from 'styled-components';

const Mobile = styled.footer`

    padding: 5px 0 25px 0;
    margin: 0;

    div {
        display: grid;
        grid-template-columns: auto auto auto;
        grid-column-gap: 25px;
        padding-bottom: 50px;
    }

    h5 {
        border: 1px solid grey;
        width: 100px;
        margin: 0 140px;
    }

    .socials {
        background: white;
        border: none;
    }

    img {
        width: 30px;
        border-radius: 50%;
    }

    span {
        margin: 10px 5px;
        border-radius: 50%;
        background-color: black;
        padding: 3px;
    }

    .resume {
        background-color: white;
        margin: 15px 15px 25px 15px;
        border: 1px solid black;
        border-radius: 0;
        padding: 5px 10px;
    }

`;

const Desktop = styled.footer`

    justify-content: space-between;
    padding: 5px 0 25px 0;
    margin: 0;

    div {
        display: grid;
        grid-template-columns: auto auto auto;
        grid-column-gap: 25px;
        padding-bottom: 50px;
    }

    h5 {
        border: 1px solid grey;
        width: 100px;
        margin: 0 140px;
    }

    .socials {
        background: white;
        border: none;
    }

    img {
        width: 30px;
        border-radius: 50%;
    }

    span {
        margin: 10px;
        border-radius: 50%;
        background-color: black;
        padding: 3px;
    }

    .resume {
        background-color: white;
        margin: 15px 15px 25px 15px;
        border: 1px solid black;
        border-radius: 0;
        padding: 5px 10px;
    }

`;

export { Mobile, Desktop };