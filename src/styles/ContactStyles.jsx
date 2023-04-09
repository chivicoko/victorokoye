
import styled from 'styled-components';


const Mobile = styled.div`    

    .form-container {
        background-color: black
    }

    .input-container {
        padding: 10px 0;
        // text-align: start;
    }

    h1 {
        color: white;
        margin: 0;
        padding-top: 30px;
    }

    p{
        text-align: start;
    }
    
    .label {
        color: white;
        margin-left: 32px;
    }

    input {
        margin-left: 32px;
        padding: 2px 5px;
        height: 25px;
        width: 300px;
        text-align: start;
    }
    
    textarea {
        margin-left: 32px;
        padding: 2px 5px;
        height: 110px;
        text-align: start;
        width: 300px;
    }

    button {
        margin-bottom: 25px;
        color: black;
        font-size: 20px;
        padding: 5px 15px;
        width: 310px;
    }

    button:hover {
        color: white;
        background-color: black;
    }
`;


const Desktop = styled.div`

    .form-container {
        background-color: black
    }

    .input-container {
        padding: 10px 0;
        margin: 0 500px;
    }

    h1 {
        color: white;
        margin: 0;
        padding-top: 30px;
    }

    p{
        text-align: start;
    }

    .label {
        color: white;
    }

    input {
        height: 25px;
        width: 350px;
        text-align: start;
    }

    textarea {
        height: 150px;
        text-align: start;
        width: 350px;
    }

    button {
        margin-bottom: 45px;
        color: black;
        font-size: 20px;
        padding: 5px 15px;
        width: 355px;
    }

    button:hover {
        color: white;
        background-color: black;
        border: 1px solid white;
    }

`;

export { Desktop, Mobile };