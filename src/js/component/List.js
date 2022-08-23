import React, { useState, useCallback, useEffect } from "react";
import PropTypes from "prop-types";
import { Counter } from "./Counter.js";
import { Input } from "./Input.js";
import { Tasks } from "./Tasks.js";

export const List = () => {
	const [newTask, setNewTask] = useState("");
	const [listOfTasks, setListOfTasks] = useState([]);

	const getToDos = useCallback(async () => {
		try {
			const response = await fetch(
				"https://assets.breatheco.de/apis/fake/todos/user/samuel11"
			);

			if (!response.ok) {
				createUser();
				return;
			}
			const body = await response.json();
			setListOfTasks(body);
		} catch (error) {
			alert("la lista no esta");
			return;
		}
	}, []);

	const createUser = useCallback(async () => {
		try {
			const response = await fetch(
				"https://assets.breatheco.de/apis/fake/todos/user/samuel11",
				{
					method: "post",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify([]),
				}
			);
			// if (!response.status.ok) {
			// 	alert("no tiene usuario creado");
			// 	return;
			// }

			getToDos();
		} catch (error) {
			alert("no esta disponible la lista");
			return;
		}
	}, [getToDos]);

	useEffect(() => {
		getToDos();
	}, [getToDos]);

	return (
		<div className="container w-100 d-flex flex-column">
			<Input
				text=" What needs to be done?"
				value={newTask}
				setter={setNewTask}
				list={listOfTasks}
				setterList={setListOfTasks}
				getToDos={getToDos}
				createUser={createUser}
			/>
			{listOfTasks.length === 0 ? (
				<div
					className="fs-5"
					style={{ padding: "15px", color: "#4f4f4f" }}>
					{"No tasks, add a task..."}
				</div>
			) : (
				<Tasks
					list={listOfTasks}
					setterList={setListOfTasks}
					getToDos={getToDos}
				/>
			)}
			<Counter list={listOfTasks} />
		</div>
	);
};
