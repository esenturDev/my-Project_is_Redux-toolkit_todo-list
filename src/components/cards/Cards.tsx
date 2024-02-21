import scss from "./Cards.module.scss";
import { useSelectorResults } from "../../store/store";
import { useDispatch } from "react-redux";
import { deleteCards, sameResults } from "../../store/tools/TodoList";
import Button from "../ul/button/Button";
import { useState } from "react";

export const Cards = () => {
	const [result, setResult] = useState<null | number>(null);
	const [chekResult, setChekResult] = useState<null | number>(null);
	const [titleValue, setTitleValue] = useState<string>("");
	const [dateValue, setDateValue] = useState<string>("");
	const [imgValue, setImgValue] = useState<string>("");
	const dispatch = useDispatch();
	const todo = useSelectorResults((state) => state.todoReducer.data);

	const deleteD = (id: number) => {
		dispatch(deleteCards({ id: id }));
		console.log(id);
	};

	function resultTrue(id: number) {
		setResult(id);
	}

	const editResultsTexts = (id: number) => {
		dispatch(
			sameResults({
				id: id,
				title: titleValue,
				date: dateValue,
				img: imgValue,
			})
		);
		console.log("Hello");
	};

	const checkboxResult = (id: number) => {
		if (chekResult === id) {
			setChekResult(null);
		} else {
			setChekResult(id);
		}
	};

	return (
		<div className={scss.Cards}>
			{todo.map((item) => (
				<div className={scss.card} key={item.id}>
					{result === item.id ? (
						<>
							<input
								type="text"
								value={titleValue}
								onChange={(e) => setTitleValue(e.target.value)}
							/>
							<input
								type="date"
								value={dateValue}
								onChange={(e) => setDateValue(e.target.value)}
							/>
							<input
								type="url"
								value={imgValue}
								onChange={(e) => setImgValue(e.target.value)}
							/>
							<Button
								onClick={() => {
									editResultsTexts(item.id);
									setResult(null);
								}}>
								Save
							</Button>
							<Button onClick={() => setResult(null)}>Cancel</Button>
						</>
					) : (
						<>
							<div className={scss.divResult}>
								<input
									type="checkbox"
									checked={chekResult === item.id}
									onChange={() => checkboxResult(item.id)}
								/>
								<h2
									className={
										chekResult === item.id
											? `${scss.active}`
											: `${scss.noactive}`
									}
									style={{
										textDecoration:
											chekResult === item.id ? "line-through" : "none",
									}}>
									{item.title}
								</h2>
							</div>
							<p
								className={
									chekResult === item.id ? `${scss.active}` : `${scss.noactive}`
								}
								style={{
									textDecoration:
										chekResult === item.id ? "line-through" : "none",
								}}>
								{item.date}
							</p>
							<img
								className={
									chekResult === item.id ? `${scss.active}` : `${scss.noactive}`
								}
								style={{
									filter: chekResult === item.id ? "grayscale(100%)" : "none",
								}}
								src={item.img}
								alt={item.title}
							/>
							<Button onClick={() => deleteD(item.id)}>delete</Button>
							<Button
								onClick={() => {
									resultTrue(item.id);
									setTitleValue(item.title);
									setDateValue(item.date);
									setImgValue(item.img);
								}}>
								Edit
							</Button>
						</>
					)}
				</div>
			))}
		</div>
	);
};
