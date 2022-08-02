import styled from "styled-components";

export const StyledFooter = styled.footer`

display: flex;
align-items: center;
justify-content: space-between;
padding: 3rem 1.3rem;
margin-top: 3rem;
background-color: ${({theme})=> theme.colors.navBar};
font-size: .85rem;

    a{
        text-decoration: none;
    }

    p, i{
        color: ${({theme})=>theme.colors.secondaryText};
    }
    .col-1 {
        display: flex;
        align-items: center;

    }
    .logo-container{
        display: flex;
        padding-right: .8rem;
    }

    .logo-container > h2{
        font-size: 1.3rem ;
    }

    .logo-container img{
        width: 25px;
        height: 25px;
        margin-right: 5px;
    }

    .logo-container span{
        color:${({theme})=> theme.colors.mainBlue};
    }

    .footer-links{
        align-self: flex-start;
        padding: 2rem 0 2rem .8rem;
        border-left: 1px solid #aeaeae;
        font-size: .85rem;
        color: ${({theme})=>theme.colors.secondaryText};
    }
    .footer-links > div{
        display: flex;
        gap: 10px;
        margin-bottom: 10px;
    }
    
    .footer-links a{
        text-decoration: none;
        color: ${({theme})=>theme.colors.secondaryText};
    }
    .footer-links a:hover{
        color:${({theme})=> theme.colors.mainBlue};
    }
    .socials-links{
        margin-top: 10px;
        display: flex;
        flex-wrap: wrap;
        gap: 15px;
    }

    .socials-links i{
        cursor: pointer;
        font-size: 1.1rem;
    }

    .socials-links i:hover{
        color:${({theme})=> theme.colors.mainBlue};
    }

    @media (max-width: 1170px) {
        flex-direction: column;
        .col-1{
            margin-bottom: 30px;
        }
        .socials-links{
            justify-content: center;
        }
        
    }
    
    @media (max-width: 500px) {
        .col-1{
            flex-direction: column;
            text-align: center;
        }
        .logo-container{
            padding: 0;
        }
        .footer-links{
            border: none;
        }
    }
`