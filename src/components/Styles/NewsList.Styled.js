import styled from "styled-components";
export const StyledNewsList = styled.div`
    padding: 1rem;
    box-shadow: 0px 1px 4px rgba(0,0,0,0.1); 
    border-radius: 6px;
    &:hover{
        box-shadow: 0px 1px 4px rgba(0,0,0,0.2);
    }
    .row-1{
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-bottom: 10px;
    }
    .row-1 img{
        width: 130px;
        height: 120px;
    }

    h3{
        font-size: 1.1rem;
        margin-bottom: 10px;
    }

    .row-1 p{
        font-size: .85rem;
        margin-bottom: 5px;
    }

    .row-2{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .row-2 > div{
        display: flex;
        align-items: center;
        gap: 5px;
    }
    .row-2 img{
        width: 25px;
        height: 25px;
        border-radius: 50%;
    }
    .row-2 p{
        font-size: .8rem;
    }
`