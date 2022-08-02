import styled from "styled-components";

export const StyledNews = styled.div`
padding: 2rem 1.3rem ;
text-align: center;
background-color:${({theme})=> theme.colors.mainBackground} ;
h2{
    margin-bottom: 2rem;
    
}
h3{
    color: ${({theme})=>theme.colors.primaryText};
}
select{
    color: ${({theme})=>theme.colors.primaryText};
    margin-bottom: 3rem;
    outline: none;
    border: 1px solid ${({theme})=> theme.colors.borderColor} ;
    

    border-radius: 4px;
    padding: .9rem 1.8rem;
    background: transparent;
    cursor: pointer;
}
option{
    color: ${({theme})=>theme.colors.primaryText};
    background-color:${({theme})=> theme.colors.mainBackground} ;
}
select:hover{
    box-shadow: 0px 0px 4px rgb(174 218 255);
}

select:active{
    box-shadow: 0px 0px 4px rgb(174 218 255);
}

@media (max-width:1000px) {
        padding-top: 60px;
    }

@media (max-width:600px) {
    h2{
        font-size: 1.2rem;
    }
}
`