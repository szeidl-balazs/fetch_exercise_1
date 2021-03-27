import React from 'react';

const PersonData = (props) => {

	return (
		<div className="persondata-cont">
			<p>{props.name}</p>
			<p>{props.phone}</p>
			<p>{props.email}</p>
			
		</div>
	);
}

export default PersonData;