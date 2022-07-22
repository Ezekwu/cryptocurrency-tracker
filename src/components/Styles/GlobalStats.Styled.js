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

    span{
        color: ${({theme})=>theme.colors.mainBlue};
    }

`