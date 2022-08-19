import { TaskItem } from "./models/TaskItem.js";

export let tasks: TaskItem[] = [
	new TaskItem(1, "task one"),
	new TaskItem(2, "task two"),
	new TaskItem(3, "task three"),
	new TaskItem(4, "task four", true),
];
