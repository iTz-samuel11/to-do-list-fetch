import React, { useState } from "react";
import PropTypes from "prop-types";
import { Counter } from "./Counter.js";
import { Input } from "./Input.js";
import { Task } from "./Task.js";

export const List = () => {
	const [newTask, setNewTask] = useState("");
	const [listOfTasks, setListOfTasks] = useState([
		"Make the Bed",
		"Wash my Hands",
		"Eat",
		"Walk the dog",
	]);

	return (
		<div className="container w-100 d-flex flex-column">
			<Input
				text=" What needs to be done?"
				value={newTask}
				setter={setNewTask}
				setterList={setListOfTasks}
			/>
			{listOfTasks.length === 0 ? (
				<div
					className="fs-5"
					style={{ padding: "15px", color: "#4f4f4f" }}>
					{"No tasks, add a task..."}
				</div>
			) : (
				<Tasks list={listOfTasks} setterList={setListOfTasks} />
			)}
			<Counter list={listOfTasks} />
		</div>
	);
};

const Tasks = (props) => {
	return (
		<div>
			{props.list.map((task, index) => {
				return (
					<Task
						task={task}
						key={index}
						id={index}
						setterList={props.setterList}
						list={props.list}
					/>
				);
			})}
		</div>
	);
};

Tasks.propTypes = {
	setterList: PropTypes.func,
	list: PropTypes.array,
};
