import React, { useState } from "react";
import { ToDo } from "./ToDo.js";

export const List = () => {
	const [newToDo, setNewToDo] = useState("");
	const [list, setList] = useState(["make the bed", "wash my hands"]);
	// let oldList = list.map(list.length);
	return (
		<div>
			<input></input>
			<ToDo text={"hola"} />
			<span>2 tareas faltan</span>
		</div>
	);
};
