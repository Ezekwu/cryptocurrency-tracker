import styled from "styled-components";

export const StyledHome = styled.div`
    padding: 0 1.3rem;
    background-color:${({theme})=> theme.colors.mainBackground} ;
    .header-container{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 2rem;
        font-size: .9rem;
    }
    
    .link-container{
        display: flex;
        align-items: center;
        gap: 10px;
    }
    .link-container a{
        text-decoration: none;
        color:${({theme})=> theme.colors.mainBlue};
        font-weight: bold;
        
    }
    .link-container i{
        color:${({theme})=> theme.colors.mainBlue};
        font-weight: bold;
    }
    
    .news-grid{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(2, 1fr);
        gap: 1.3rem;
    }
    .news-section{
        margin-top: 3rem;
    }
`