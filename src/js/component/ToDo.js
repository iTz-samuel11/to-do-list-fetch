import PropTypes from "prop-types";
import React from "react";

export const ToDo = (id, ...props) => {
	return (
		<div key={id} id={id}>
			{props.text}
		</div>
	);
};

ToDo.propTypes = {
	text: PropTypes.string,
};
