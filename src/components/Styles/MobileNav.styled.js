import styled from "styled-components";

export const StyledMobileNav = styled.nav`
position: fixed;
top: 0;
left: 0;
right: 0;
width:100%;
z-index: 200;
border-bottom: 1px solid ${({theme})=> theme.colors.borderColor};
background-color:${({theme})=> theme.colors.navBar};
display: none;
justify-content: space-between;
align-items: center;

.overLay{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 120;
    background-color: rgba(0,0,0,0.5);
    padding: 300rem;
}
    .logo-container{
        display: flex;
        padding: 1rem 1.3rem;
    }

    .logo-container img{
        width: 30px;
        margin-right: 5px;
    }

    .logo-container span{
        color:${({theme})=> theme.colors.mainBlue};
    }

    a{
        text-decoration: none;
    }

    .nav-links a{
        color: ${({theme})=>theme.colors.primaryText};
        text-decoration: none;
        padding: .8rem 3.5rem .8rem .8rem;
        border-radius: 6px;
    }

    a:hover{
        color:${({theme})=> theme.colors.mainBlue};
        transition: all .2s ease-in-out;
    }

    .nav-links > a.active:hover{
        color: white;
    }
    .nav-links > a.active{
        background-color: ${({theme})=> theme.colors.mainBlue};
        color: white;
        font-weight: bold;
    }

    a.active i{
        color: white;
    }
    .hide-menu{
        transform: translateX(100%);
        
    }
    .show-menu{
        transform: translateX(0%);
        
    }

    .nav-links{
        position: fixed;
        top: 0;
        right: 0;
        padding: 5rem 1.5rem 0 1.5rem;
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-bottom: 120px;
        background-color: ${({theme})=> theme.colors.navBar};
        z-index: 200;
        font-weight:${({theme})=> theme.colors.fontWeight} ;
        
        transition: all .2s ease-in-out;
    }

    .nav-links i{
        margin-right: 10px;
    }
    .theme-wrapper{
        padding: .8rem 3.5rem .8rem .8rem;
        cursor: pointer;
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

    .fa-bars-staggered{
        padding: 1rem 1.3rem;
        font-size:1.5rem ;
        color: ${({theme})=>theme.colors.primaryText};
        cursor: pointer;
    }

    .fa-xmark{
        font-size:1rem ;
        cursor: pointer;
        position: absolute;
        left: -45px;
        top: 20px;
        background-color: ${({theme})=> theme.colors.navBar};
        padding: 10px 13px;
        border-radius: 50%;
        color: ${({theme})=>theme.colors.primaryText};
    }
    

    .display{
        display: block;
    }

    .hide{
        display: none;
    }

    @media(max-width: 1000px) {
        display: flex;
    }
    @media(max-width: 500px) {
        .logo-container{
            font-size: .85rem;
        }
        .logo-container img{
            width: 25px;
        }
        .fa-bars-staggered{
            font-size: 1.2rem;
        }
    }
`