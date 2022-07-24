import styled from "styled-components";

export const StyledCryptoDetails = styled.div`
    padding: 0 1.3rem;
    .row-1{
        padding: 2rem 0;
        display: flex;
        justify-content: space-between;
    }

    .icon-name-container{
        display: flex;
        align-items: center;
        gap: 15px;
        margin-bottom: 1rem;
    }
    .icon-name-container h2{
        font-size: 1.6rem;
    }

    .icon-name-container > div{
        font-size: .8rem;
        font-weight: bold;
        color: ${({theme})=>theme.colors.primaryText};
        background-color: rgb(234, 233, 233);
        padding:5px 8px;
        border-radius: 5px;
    }

    .rank{
        color: ${({theme})=>theme.colors.secondaryText};
        background-color: rgb(234, 233, 233);
        padding:5px 8px;
        border-radius: 5px;
        font-weight: bold;
        font-size: .79rem;
        width: fit-content;
        margin-bottom: 1.3rem;
    }

    .links{
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
    }
    .links a{
        display: flex;
        align-items: center;
        gap: 5px;
        color: ${({theme})=>theme.colors.secondaryText};
        text-decoration: none;
        background-color: rgb(234, 233, 233);
        padding:5px 8px;
        border-radius: 5px;
        font-weight: bold;
        font-size: .79rem;
        width: fit-content;
    }
    .links a:hover{
        color: ${({theme})=>theme.colors.primaryText};
    }
    .links a i{
        font-size: 1rem;
    }
    .links a i:hover{
        color: ${({theme})=>theme.colors.primaryText};
    }
`