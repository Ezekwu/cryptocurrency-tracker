import styled from "styled-components";

export const StyledGlobalStats = styled.div`
    display: flex;
    gap: 23px;
    padding: 1.3rem;
    font-size: .9rem;
    border-bottom: 1px solid #e9e9e9;
    background-color: ${({theme})=> theme.colors.mainBackground};
    color: ${({theme})=>theme.colors.primaryText};

    span{
        color: ${({theme})=>theme.colors.mainBlue};
    }

`