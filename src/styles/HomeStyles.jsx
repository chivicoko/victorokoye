
import styled from 'styled-components';


const Mobile = styled.div`    

    .textContainer {
        background-color: black;
        color: white;
        padding: 5px;
    }

    .hi {
        border: 1px solid white;
    }

    .hiText {
        color: white;
        padding-bottom: 5px;
    }

`;

const Desktop = styled.div`
    
    display: grid;
    grid-template-columns: auto auto auto;
    grid-column-gap: 20px;
    margin: 10px 0 50px 0;
    padding: 0;

    .img {
        margin-left: 65px;
    }
    .textContainer {
        font-size: 30px;
        background-color: black;
        color: white;
        padding: 5px;
        margin: 0;
        width: 50vw;
    }
    
    h4 {
    }
    
    .hi {
        border: 1px solid white;
    }

    .hiText {
        color: white;
        padding-bottom: 5px;
    }

`;

export { Desktop, Mobile };