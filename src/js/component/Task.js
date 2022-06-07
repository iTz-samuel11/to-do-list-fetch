import React from "react";
import PropTypes from "prop-types";
import { useCallback } from "react/cjs/react.production.min";

export const Task = (props) => {
	const deleteTask = useCallback(
		async (e) => {
			const response = await fetch(
				"https://assets.breatheco.de/apis/fakes/todos/user/samuel11",
				{
					method: "put",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(
						props.list.filter((task, index) => {
							return index !== props.id;
						})
					),
				}
			);
			if (response !== 200) {
				alert("no pude borrar");
				return;
			}
			await getToDos();
		},
		[props.getToDos, props.id, props.list]
	);
	return (
		<li
			className="d-flex justify-content-between doIt box"
			style={{ padding: "5px", border: "1px solid #d9d9d9" }}>
			<strong>{props.task.label}</strong>
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
	task: PropTypes.object,
	setterList: PropTypes.func,
	list: PropTypes.array,
	id: PropTypes.number,
};
