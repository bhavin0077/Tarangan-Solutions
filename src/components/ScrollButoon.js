import React, {useState} from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';



const ScrollButton = () =>{

const [visible, setVisible] = useState(false)

const toggleVisible = () => {
	const scrolled = document.documentElement.scrollTop;
	if (scrolled > 300){
	setVisible(true)
	}
	else if (scrolled <= 300){
	setVisible(false)
	}
};

const scrollToTop = () =>{
	window.scrollTo({
	top: 0,
	behavior: 'smooth'
	/* you can also use 'auto' behaviour
		in place of 'smooth' */
	});
};

window.addEventListener('scroll', toggleVisible);

return (
    <ButtonStyle> 
	<Button style={{position: "fixed", 
   width: "1rem",
   left: "90%",
   bottom: "40px",
   height: "20px",
   fontSize: "3rem",
   zIndex: "1",
   cursor: "pointer",
   color: "#f0c040",}}>
	<FaArrowCircleUp onClick={scrollToTop}
	style={{display: visible ? 'inline' : 'none'}} />
	</Button>
    </ButtonStyle>
);
}

const ButtonStyle = styled.section`

Button:{
   
}

`

export default ScrollButton;

