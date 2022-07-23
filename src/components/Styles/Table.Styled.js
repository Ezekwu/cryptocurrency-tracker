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
        width: 100%;
    }
    thead{
        background-color: ${({theme})=> theme.colors.navBar};
    }
    
    td, th{
        padding: .9rem 1rem;
        border-bottom: 1px solid ${({theme})=> theme.colors.borderColor};
    }

    th{
        border-top: 1px solid ${({theme})=> theme.colors.borderColor};
        color: ${({theme})=>theme.colors.primaryText};
    }
    table img{
        width: 28px;
        margin-right: 1rem;
    }
    table h3{
        display: inline-block;
        font-size: 1rem;
    }
    td:nth-child(2), td:nth-child(2){
        min-width: 300px;
    }

    .crypto-icon-name{
        display: flex;
        align-items: center;
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
        table{
            overflow-y: hidden;
            
        }

    @media(max-width:1100px){
        
        th:nth-child(1), td:nth-child(1) {
            position: sticky;
            left: 20px;
            z-index: 100;
            background-color:${({theme})=> theme.colors.mainBackground} ;
        }

        th:nth-child(2), td:nth-child(2) {
            position: sticky;
            left: 90px;
            z-index: 100;
            background-color:${({theme})=> theme.colors.mainBackground} ;
        }
    }
`