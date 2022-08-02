import styled from "styled-components";

export const StyledCryptos = styled.div`
    padding: 2rem 1.3rem;
    h2{
        margin-bottom:  2rem;
        text-align: center;
    }
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
        margin-right: 10px;
        outline: none;
        border: none;
        color: ${({theme})=>theme.colors.secondaryText};
        background-color:${({theme})=> theme.colors.mainBackground} ;
    }
    .input-container:hover{
        box-shadow: 0px 0px 4px rgb(174 218 255);
    }

    .input-container i{
        color:grey ;
    }
    @media (max-width:600px) {
        .input-container{
            width: 250px;
        }
        
    h2{
        font-size: 1.2rem;
    }
    @media (max-width:450px) {
        .input-container{
            width: 220px;
        }
    }
}
`

