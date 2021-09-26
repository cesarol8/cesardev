import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';


const Card = () =>{
const { skills } = useContext(PortfolioContext);
	return(
	<div>
		<Container>
			<Row>
				{skills.map((skill) => {
					const { id,title, detail } = skill;
					//console.log(skill);
					return(
					<Col key={id}>
						<div className="package brilliant">
						    <div className="name">{title || 'Skill Title'}</div>
						    <ul>						    
						    {detail.map((det)=>{
						    	const {info,progress} = det;
								//console.log(progress);
						    	return (						    		
								      <li key={info}>
								        <strong>{ info || 'Info one skill' }</strong>	
								        {/* <div clclassNameass="progress"> 
										  <div className="progress__bar" now={progress}></div>
										</div>					         */}
								      </li>			      
								   						    		
						    	);
						    })}
						     </ul>
						  </div>
					</Col>
					);
					})}			
			</Row>
		</Container>
	</div>
	);
}

export default Card;

