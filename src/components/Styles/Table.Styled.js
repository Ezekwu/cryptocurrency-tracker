import styled from "styled-components";

export const StyledTable = styled.div`
    
    overflow-x: scroll;
    overflow-y: hidden;
    
    color: ${({theme})=>theme.colors.secondaryText};
    a{
        text-decoration: none;
        color: ${({theme})=>theme.colors.secondaryText};
        
    }

    a:hover{
        text-decoration: underline;
    }
    h2{
        margin-bottom: 2rem;
    }
    table {
        border-collapse: collapse;
        text-align: left;
        overflow-y: hidden;
        width: 100%;
        font-size: .9rem;
    }
    thead{
        background-color: ${({theme})=> theme.colors.navBar};
        position: sticky;
        top: 0;
        
    }
    
    td, th{
        padding: .9rem 1rem;
        border-bottom: 1px solid ${({theme})=> theme.colors.borderColor};
    }

    th{
        border-top: 1px solid ${({theme})=> theme.colors.borderColor};
        color: ${({theme})=>theme.colors.primaryText};
        background-color:${({theme})=> theme.colors.navBar} ;
        
    }
    tr:hover{
        background-color:${({theme})=> theme.colors.navBar} ;
        transition: all .1s ease-in;
    }
    table img{
        width: 28px;
        margin-right: 1rem;
    }
    table h3{
        display: inline-block;
        font-size: .9rem;
    }
    td:nth-child(2) {
        min-width: 300px;
    }

    .crypto-icon-name{
        display: flex;
        align-items: center;
        
    }
    .exchange-pair{
        color: ${({theme})=>theme.colors.mainBlue};
        font-weight: bold;
    }
    .price-change-container{
        display: flex;
        align-items: center;
        gap: 7px;
        
    }
    .up{
        color: green;
    }

    .down{
        color: red;
    }

    .price-change-container .down{
        color: red;
    }
    .markets-btn{
        background-color:${({theme})=> theme.colors.navBar};
        color: ${({theme})=>theme.colors.primaryText};
        font-weight: bold;
        font-size: 1rem;
        padding: 1.2rem 4.5rem;
        outline: none;
        border: none;
        border-radius: 6px;
        display: flex;
        margin: 1rem auto;
        cursor: pointer;
    }

    @media(max-width:1100px){
        
        td{
            background-color:${({theme})=> theme.colors.mainBackground} ;
            border-bottom: 1px solid ${({theme})=> theme.colors.borderColor};
        }
        th{
            background-color:${({theme})=> theme.colors.navBar} ;
        }
        th:nth-child(1), td:nth-child(1) {
            position: sticky;
            left: 0px;
            z-index: 100; 
            
        }
        th:nth-child(2):after, td:nth-child(2):after {
                content:'';
                position:absolute;
                left: -0px;
                bottom: -1px;
                width:100%;
                border-bottom: 1px solid ${({theme})=> theme.colors.borderColor};
            }

            

            th:nth-child(1):after, td:nth-child(1):after {
                content:'';
                position:absolute;
                left: 0;
                bottom: -1px;
                width:100%;
                border-bottom: 1px solid ${({theme})=> theme.colors.borderColor};
            }
        th:nth-child(2), td:nth-child(2) {
            position: sticky;
            left: 70px;
            z-index: 100;
            
            border-bottom: 1px solid ${({theme})=> theme.colors.borderColor}; 
        }
    }
    @media(max-width:850px) {
        td:nth-child(2) {
        min-width: 180px;
    }
    td, th{
        padding: .9rem .9rem;
        }

        th:nth-child(2), td:nth-child(2) {
            left: 50px;
        }
    
    }

    @media(max-width:600px) {
        td:nth-child(2) {
        min-width: 130px;
    }

    td, th{
        padding: .9rem .7rem;
        }
    .markets-btn{
        padding: 1rem 3.5rem;
        font-size: .9rem;
    }
    table h3{
        font-size: .81rem;
    }
    }

    @media(max-width:450px) {
        table {
            font-size: .8rem;
        }
        .markets-btn{
        padding: .85rem 2.5rem;
        font-size: .8rem;
    }
    }

`