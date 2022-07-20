import styled from "styled-components";

export const StyledNavbar = styled.nav`
    position: fixed;
    padding: 2.3rem 1.5rem;
    height: 100vh;
    background-color: ${({theme})=> theme.colors.navBar};
    
    .logo-container{
        display: flex;
        margin-bottom: 2.8rem;
        color: ${({theme})=>theme.colors.primaryText};
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

    a.active:hover{
        color: white;
    }
    a.active{
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
    }

    .nav-links i{
        margin-right: 10px;
    }
`