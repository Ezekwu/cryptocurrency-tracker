import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
	margin: 0;
	padding: 0;
	font-family: 'Montserrat', sans-serif;
    transition: all .2s ease-in-out;
}

body{
	overflow-x: hidden;
	background-color:${({theme})=> theme.colors.mainBackground} ;
}

p{   
    color: ${({theme})=>theme.colors.primaryText};
}

h1, h2{
    color: ${({theme})=>theme.colors.primaryText};
}

h3,h4{
    color: ${({theme})=>theme.colors.secondaryText};
}

.app{
	max-width: 1700px;
	margin: 0 auto;
}
.main-container{
	min-height: 100%;
    margin-left: 278px;
}

input[type=checkbox]{
	height: 0;
	width: 0;
	visibility: hidden;

}

label {
	cursor: pointer;
	text-indent: -9999px;
	width: 45px;
	height: 20px;
    margin: 0 15px;
	background: grey;
	display: block;
	border-radius: 100px;
	position: relative;
}

label:after {
	content: '';
	position: absolute;
	top: 5px;
	left: 5px;
	width:17px;
	height: 10px;
	background: #fff;
	border-radius: 90px;
	transition: 0.3s;
}

input:checked + label {
	background: rgb(31, 154, 255);
}

input:checked + label:after {
	left: calc(100% - 5px);
	transform: translateX(-100%);
}

label:active:after {
	width: 20px; 
}

.news-grid{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(2, 1fr);
        gap: 1.3rem;
    }

	.loader{
		width: 100%;
		height:100%;
		position: fixed;
		background-color:${({theme})=> theme.colors.mainBackground};
		display: flex;
		align-items: center;
		justify-content: center;
		}
	.loader-wrapper{
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-260%, -50%);
		display: flex;
		align-items: center;
		gap: 10px;
	}
    .loader-wrapper > div{
        width: 15px;
		height: 40px;
		background-color: rgb(219, 218, 218);
		animation: lds-facebook 1s cubic-bezier(0, 0.5, 0.5, 1) infinite;

	}
	.loader-wrapper  div:nth-child(1){
		animation-delay: -0.24s;
	}

	.loader-wrapper  div:nth-child(2){
		animation-delay: -0.12s;
	}

	.loader-wrapper  div:nth-child(3){
		animation-delay: 0;
	}
		@keyframes lds-facebook {
	0% {
		top: 8px;
		height: 64px;
	}
	50%, 100% {
		top: 24px;
		height: 32px;
	}
	}
    

	


	@media(max-width:1000px) {
        .main-container{
            margin-left: 0px;
        }
		.loader-wrapper{
			transform: translate(-50%, -50%);
		}
		.mobile-nav + .main-container{
		padding-top: 60px;
	}
	}

	@media(max-width:800px) {
        .news-grid{
			grid-template-columns: repeat(2, 1fr);
		}
	}
	@media(max-width:480px) {
        .news-grid{
			grid-template-columns: 1fr;
		}
	}
`

export default GlobalStyles