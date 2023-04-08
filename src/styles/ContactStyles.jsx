
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
        margin-left: 58px;
    }

    input {
        margin-left: 58px;
        padding: 2px 5px;
        height: 25px;
        width: 250px;
        text-align: start;
    }
    
    textarea {
        margin-left: 58px;
        padding: 2px 5px;
        height: 110px;
        text-align: start;
        width: 250px;
    }

    button {
        margin-bottom: 25px;
        color: black;
        font-size: 20px;
        padding: 5px 15px;
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
        // margin-left: 65px;
    }

    input {
        // margin-left: 65px;
        height: 25px;
        width: 350px;
        text-align: start;
    }

    textarea {
        // margin-left: 65px;
        height: 150px;
        text-align: start;
        width: 350px;
    }

    button {
        margin-bottom: 45px;
        color: black;
        font-size: 20px;
        padding: 5px 15px;
    }

`;

export { Desktop, Mobile };