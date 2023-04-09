
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
        margin-left: 24px;
    }

    input {
        margin-left: 24px;
        padding: 2px 5px;
        height: 25px;
        width: 300px;
        text-align: start;
    }
    
    textarea {
        margin-left: 24px;
        padding: 2px 5px;
        height: 110px;
        text-align: start;
        width: 300px;
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

`;

export { Desktop, Mobile };