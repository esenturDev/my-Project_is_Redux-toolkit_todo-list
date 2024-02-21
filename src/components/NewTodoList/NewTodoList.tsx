import { useState } from "react";
import scss from "./NewTodoList.module.scss";
// import { useSelectorResults } from '../../store/store';
import { useDispatch } from "react-redux";
import { addTodoList, deleteAll } from "../../store/tools/TodoList";
import { Input } from "../ul/input/Input";
import Button from "../ul/button/Button";
import { Cards } from "../cards/Cards";

const NewTodoList = () => {
	const [titleValue, setTitleValue] = useState<string>("");
	const [dateValue, setDateValue] = useState<string>("");
	const [imgValue, setImgValue] = useState<string>("");
	// const todo = useSelectorResults((state) => state.todoReducer.data);
	const dispatch = useDispatch();

	const addTodoListResult = () => {
		if(titleValue === "" && dateValue === "" && imgValue === "") {
			alert('Бир нерсе жазыныз input ка!!!')
		} else {

			dispatch(
				addTodoList({ title: titleValue, date: dateValue, img: imgValue })
			);
		}
		setTitleValue("");
		setDateValue("");
		setImgValue("");
	};
	const deleteAllCards = () => {
		dispatch(deleteAll({ id: Math.random() }));
	};
	return (
		<div className={scss.newtodolist}>
			<div className="container">
				<div className={scss.content}>
					<h1>Todo-List</h1>
					<Input
						placeholder="text..."
						type="text"
						value={titleValue}
						setData={setTitleValue}
					/>
					<Input
						placeholder="date..."
						type="date"
						value={dateValue}
						setData={setDateValue}
					/>
					<Input
						placeholder="photos..."
						type="url"
						value={imgValue}
						setData={setImgValue}
					/>
					<Button onClick={addTodoListResult}>Add Todo List</Button>
					<Button onClick={deleteAllCards}>deleteAll</Button>
					<Cards />
				</div>
			</div>
		</div>
	);
};

export default NewTodoList;
