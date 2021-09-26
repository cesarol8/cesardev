import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
//import Title from '../Title/Title';
//import skillImg from '../Image/skillImg';
import Card from '../Card/Card';
import PortfolioContext from '../../context/context';

const Skill = () => {
	//const { skill } = useContext(PortfolioContext);

	//const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = skill;

  	const [isDesktop, setIsDesktop] = useState(false);
  	const [isMobile, setIsMobile] = useState(false);

	 useEffect(() => {
	    if (window.innerWidth > 769) {
	      setIsDesktop(true);
	      setIsMobile(false);
	    } else {
	      setIsMobile(true);
	      setIsDesktop(false);
	    }
	  }, []);
	return( 
		<section id="skill">
			<Container>
				<Row className="skill-wrapper">
					
          			<Col md={9} sm={12}>
			            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
			            	
			              	<Card/>			              		
			              	
			            </Fade>
			        </Col>
		          	<Col md={3} sm={12}>
		            	<Fade left={isDesktop} bottom={isMobile} duration={1000} delay={600} distance="30px">
		             	 <div className="skill-wrapper__image">
		                
		                	<span className="skill-text">SKILLS</span>

		              	</div>
		            	</Fade>
      				</Col>
				</Row>
			</Container>
		</section>
	)
};

export default Skill;