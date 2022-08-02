import styled from "styled-components";

export const StyledNavbar = styled.nav`
    position: fixed;
    padding: 2.3rem 1.5rem;
    height: 100vh;
    background-color: ${({theme})=> theme.colors.navBar};
    
    
    .logo-container{
        display: flex;
        margin-bottom: 2.8rem;
        
    }

    .logo-container img{
        width: 30px;
        margin-right: 5px;
    }

    .logo-container span{
        color:${({theme})=> theme.colors.mainBlue};
    }
    
    a{
        color: ${({theme})=>theme.colors.primaryText};
        text-decoration: none;
        padding: .8rem 3.5rem .8rem .8rem;
        border-radius: 6px;

    }
    a:hover{
        color:${({theme})=> theme.colors.mainBlue};
        transition: all .2s ease-in-out;
    }

    .nav-links a.active:hover{
        color: white;
    }
    .nav-links a.active{
        background-color: ${({theme})=> theme.colors.mainBlue};
        color: white;
        font-weight: bold;
    }

    a.active i{
        color: white;
    }

    .nav-links{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-bottom: 120px;
        font-weight:${({theme})=> theme.colors.fontWeight} ;
    }

    .nav-links i{
        margin-right: 10px;
    }
    .theme-wrapper{
        padding: .8rem 3.5rem .8rem .8rem;
    }
    
    .theme-wrapper p{
        margin-bottom: 1rem;
    }
    .theme-icons-container {
        display: flex;
        
        color: ${({theme})=>theme.colors.primaryText};
    }

    .theme-container > div{
        align-self: flex-start;
    }
    @media(max-width: 1000px){
        display: none;
    }
`