import React from "react";
import PropTypes from "prop-types";

export const Task = (props) => {
	function deleteTask(e) {
		props.setterList((prevList) =>
			prevList.filter((task, index) => {
				if (index !== props.id) return true;
			})
		);
	}
	return (
		<li
			className="d-flex justify-content-between doIt box"
			style={{ padding: "5px", border: "1px solid #d9d9d9" }}>
			<strong>{props.task}</strong>
			<span
				className="delete"
				style={{
					background: "#eeeeee",
					margin: "1px",
					border: "1px solid #b9b9b9",
				}}
				onClick={deleteTask}>
				<i className="fa-solid fa-trash"></i>
			</span>
		</li>
	);
};

Task.propTypes = {
	task: PropTypes.string,
	setterList: PropTypes.func,
	list: PropTypes.array,
	id: PropTypes.number,
};
