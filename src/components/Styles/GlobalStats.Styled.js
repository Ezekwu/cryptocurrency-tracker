import styled from "styled-components";

export const StyledGlobalStats = styled.div`
    
    display: flex;
    gap: 23px;
    padding: 1.3rem 0;
    font-size: .9rem;
    border-bottom: 1px solid ${({theme})=> theme.colors.borderColor};
    background-color: ${({theme})=> theme.colors.mainBackground};
    color: ${({theme})=>theme.colors.primaryText};
    margin-bottom: 2rem;
    div{
        width: auto;
        display: flex;
        gap: 5px;
    }
    h4{
        flex-shrink: 0;
    }

    span{
        flex-shrink: 0;
        color: ${({theme})=>theme.colors.mainBlue};
    }

    

    @media(max-width: 720px) {
        overflow-x: scroll;
    
        div:nth-child(3) {
            margin-right: 30px;
        }
    }  

`