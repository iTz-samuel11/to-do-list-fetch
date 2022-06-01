import React, { useState } from "react";
import { ToDo } from "./ToDo.js";

export const List = () => {
	const [newToDo, setNewToDo] = useState("");
	const [list, setList] = useState(["make the bed", "wash my hands"]);
	return (
		<div>
			<input></input>
			<ToDo />
			<span>2 tareas faltan</span>
		</div>
	);
};
