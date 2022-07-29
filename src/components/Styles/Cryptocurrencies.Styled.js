import styled from "styled-components";

export const StyledCryptos = styled.div`
    padding: 2rem 1.3rem;
    margin-bottom: 12rem;
    .input-container{
        text-align: center;
        margin:0 auto 2rem;
        width: 300px;
        outline: none;
        border: 1px solid ${({theme})=> theme.colors.borderColor} ;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: .9rem 1.8rem;
    }
    input{
        
        outline: none;
        border: none;
    }
    .input-container:hover{
        box-shadow: 0px 0px 4px rgb(174 218 255);
    }

    .input-container i{
        color:grey ;
    }
`

