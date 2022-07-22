import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
	margin: 0;
	padding: 0;
	font-family: 'Montserrat', sans-serif;
    
}

body{
	overflow-x: hidden;
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
.main-container{
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

`

export default GlobalStyles