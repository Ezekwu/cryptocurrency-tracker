import styled from "styled-components";

export const StyledCryptoDetails = styled.div`
    background-color: ${({theme})=> theme.colors.mainBackground};
    padding: 0 1.3rem;

    .row-1{
        padding: 2rem 0;
        display: flex;
        justify-content: space-between;
    }
    
    .col-2{
        width: 100%;
    }
    .icon-name-container{
        display: flex;
        align-items: center;
        gap: 15px;
        margin-bottom: 2rem;
    }
    .icon-name-container h2{
        font-size: 1.6rem;
    }
    .icon-name-container img{
        width: 35px;
    }

    .icon-name-container > div{
        font-size: .8rem;
        font-weight: bold;
        color: ${({theme})=>theme.colors.primaryText};
        background-color: ${({theme})=>theme.colors.tag};
        padding:5px 8px;
        border-radius: 5px;
    }

    .rank{
        color: ${({theme})=>theme.colors.primaryText};
        background-color: ${({theme})=> theme.colors.tag};
        padding:5px 8px;
        border-radius: 5px;
        font-weight: bold;
        font-size: .79rem;
        width: fit-content;
        margin-bottom: 1rem;
    }

    .links{
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
    }
    .links a{
        display: flex;
        align-items: center;
        gap: 5px;
        color: ${({theme})=>theme.colors.secondaryText} ;
        text-decoration: none;
        background-color: ${({theme})=>theme.colors.tag};
        padding:5px 8px;
        border-radius: 5px;
        font-weight: bold;
        font-size: .79rem;
        width: fit-content;
    }
    .links a:hover{
        color: ${({theme})=>theme.colors.primaryText};
    }
    .links a p{
        color: ${({theme})=>theme.colors.secondaryText} ;
    }
    .links a p:hover{
        color: ${({theme})=>theme.colors.primaryText};
    }
    .links a i{
        font-size: 1rem;
    }
    .links a i:hover{
        color: ${({theme})=>theme.colors.primaryText};
    }
    .col-2{
        width: 100%;
        text-align: right;
        
    }

    
    .col-2 .symbol{
        margin-left: auto;
        font-size: .9rem;
        margin-bottom: .8rem;
        background-color: ${({theme})=>theme.colors.tag};
        padding:5px 8px;
        border-radius: 5px;
        width: fit-content;
        color: ${({theme})=>theme.colors.secondaryText};
    }

    .price-price_change-container{
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 15px;
    }

    .price-price_change-container .price{
        font-size: 1.8rem;
        display: inline;
    }
    
    .price-price_change-container .down {
        display: flex;
        align-items: flex-start;
        gap: 6px;
        font-size: .97rem;
        border-radius: 6px;
        color: white;
        padding:7px 15px;
        background-color: #f23e3e
    }

    .price-price_change-container .up {
        display: flex;
        align-items: flex-start;
        gap: 6px;
        font-size: .97rem;
        border-radius: 6px;
        color: white;
        padding:7px 15px;
        background-color: #38cc58;
    }

    .fa-sort-up{
        position: relative;
        top: 6px;
    }
    .fa-sort-down{
        position: relative;
        bottom: 2px;
    }
    
    .details-description{
        display: flex;
        justify-content: space-between;
        gap: 20px;
        padding: 3rem 0 5rem;
    }

    .crypto-details{
        background-color: ${({theme})=> theme.colors.navBar};
        padding: 1.2rem 1.2rem 4rem;
        border-radius: 6px;
        align-self: flex-start;
    }

    .crypto-details h3{
        margin-bottom: 1.5rem;
        color: ${({theme})=>theme.colors.primaryText};
    }

    .crypto-details > p{
        margin-bottom: 1rem;
        font-weight: bold;
        color: ${({theme})=>theme.colors.secondaryText};
    }

    .stat{
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 2rem;
        font-size: .85rem;
        padding: 1rem 0;
        border-bottom: 1px solid ${({theme})=> theme.colors.borderColor};
        
    }

    .tag{
        color: ${({theme})=>theme.colors.secondaryText};
        width: 100%;
    }

    .value{
        text-align: right;
        margin-left: 7rem;
    }
    .price-change > .price-up{
        color: green;
        display: flex;
        justify-content: flex-end;
        gap: 5px;
        
    }

    .price-change > .price-down{
        color: red;
        display: flex;
        justify-content: flex-end;
        gap: 5px;
        
    }

    .description h3{
        margin-bottom: .5rem;
        color: ${({theme})=>theme.colors.primaryText};
    }

    .description p{
        font-size: .85rem;
        margin-bottom: 3rem;
        line-height: 1.4rem;
        
    }
    .chart-heading{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 2rem;
    }

    .row-2 h3{
        
        font-size:20px;
    }
    .row-2 ul{
        display: flex;
        gap: 10px;
        background-color: ${({theme})=> theme.colors.navBar};
        padding: 10px 15px;
        border-radius: 4px;
    }
    .row-2 li{
        cursor: pointer;
        padding: 7px;
        list-style-type: none;
        font-weight: bold;
        color: ${({theme})=>theme.colors.secondaryText};
    }
    .active{
        background-color: ${({theme})=>theme.colors.tag};
        box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.1);
        border-radius: 5px;
    }
    .row-2 li:hover{
        background-color: ${({theme})=>theme.colors.tag};
        box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.1);
        border-radius: 5px;
        
        
    }
    .row-3 h2{
        margin-bottom: 3rem;
    }
    @media (max-width:800px) {
        .details-description{
            flex-direction: column;
        }
        .crypto-details{
            width: 93%;
            margin: 0 auto;
            padding: 1.2rem .7rem 4rem;
        }
        .value{
            margin-left: 0;
        }
    }
    @media(max-width:600px) {
        padding: 0 1rem;
        .row-1{
            flex-direction: column;
        }
        .col-2{
            
        }
        .col-2 .symbol{
            margin-left: 0;
            margin-top: 2rem;
        }
        .crypto-details h3{
            font-size: 1.2rem;
        }
        .price-price_change-container{
        
        align-items: flex-start;
        
        }
        .chart-heading{
            flex-direction: column;
            gap: 20px;
        }
        .icon-name-container img{
        width: 30px;
    }

    .icon-name-container h2{
        font-size: 1.3rem;
    }
    .links a i{
        font-size: .8rem;
    }
    .price-price_change-container .price{
        font-size: 1.45rem;
    }
    .tag{
        font-size: .75rem;

    }
    .value{
        font-size: .75rem;
    }
    }
`