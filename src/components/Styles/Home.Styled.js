import styled from "styled-components";

export const StyledHome = styled.div`
    padding: 0 1.3rem ;
    
    .header-container{
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        margin-bottom: 3rem;
        font-size: .9rem;
    }

    .header-container h2{
        width: 60%;
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
        font-size: .9rem;
    }
    .link-container i{
        color:${({theme})=> theme.colors.mainBlue};
        font-weight: bold;
    }
    
    
    .news-section{
        margin-top: 3rem;
    }

    @media(max-width: 850px) {
    .header-container {
        font-size: .8rem;
    }
    .link-container a{
        font-size: .8rem;
    }
}

@media(max-width: 600px) {
    .header-container {
        font-size: .7rem;
    }
    .link-container a{
        font-size: .7rem;
    }
}

@media(max-width: 450px) {
    .header-container {
        font-size: .6rem;
    }
    .link-container a{
        font-size: .6rem;
    }
}
`