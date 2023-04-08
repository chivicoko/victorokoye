import styled from 'styled-components';

const Mobile = styled.nav`

    div span {
        margin: 0 5px;
        padding: 2px 5px;
        border: 1px solid grey;
    }
`;


const Desktop = styled.nav`
    margin-top: 25px;
    display: grid;
    grid-template-columns: auto auto;
    grid-column-gap: 25px

    .links {
        margin-top: 80px;
    }

    div span {
        font-size: 20px;
        margin: 0 15px;
        padding: 5px 15px;
        border: 1px solid grey;
    }
`;

export { Desktop, Mobile };