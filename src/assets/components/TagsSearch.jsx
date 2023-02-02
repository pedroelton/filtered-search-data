import React, { useState } from "react";
import TagSent from "./TagSent";
import "./TagsSearch.css";
import "bootstrap/dist/css/bootstrap.min.css";

function TagsSearch({ data, placeholder }) {
	const [tags, setTags] = useState([]);
	const [isHidden, setIsHidden] = useState(false);
	const [filteredData, setFilteredData] = useState([]);
	const [selectedIndex, setSelectedIndex] = useState(0);

	//Se tiver como usar a tag aqui no lugar de indexToRemove seria melhor
	//Pq se tiver outro component com o msm numero eles podem ser filtrados ao mesmo tempo
	const removeTags = (indexToRemove) => {
		setTags(tags.filter((_, index) => index !== indexToRemove));
	};

	const addTags = (event) => {
		if (event.key === "Enter" && event.target.value !== "") {
			setTags([...tags, event.target.value]);
			event.target.value = "";
		}
	};

	const handleClick = (event) => {
		setTags([...tags, event.target.innerText]);
		event.target.value = "";
		setIsHidden(!isHidden);
	};

	const handleFilter = (event) => {
		const searchWord = event.target.value;
		const noRepeatTags = data.filter((e) => !tags.includes(e.name));
		const newFilter = noRepeatTags.filter((value) => {
			return value.name.toLowerCase().includes(searchWord.toLowerCase());
		});
		if (searchWord === "") {
			setFilteredData([]);
		} else {
			setIsHidden(false);
			setFilteredData(newFilter);
		}
	};

	return (
		<div className="container-fluid d-flex flex-column px-0">
			<div className="d-flex flex-column container-fluid mb-4 px-0">
				<div className="align-items-start justify-content-start w-100 px-0 position-relative">
					<input
						type="text"
						placeholder={placeholder}
						className="border border-light-subtle rounded form-control px-2"
						onKeyUp={(e) => (e.key === "Enter" ? addTags(e) : null)}
						onChange={handleFilter}
					/>
					{filteredData.length !== 0 ? (
						<ul
							className={`my-element ${
								isHidden
									? "d-none"
									: "dropdown-menu d-flex flex-column align-items-start justify-content-start w-auto scrollbar shadow-lg rounded-3 position-absolute top-8 start-0 z-3 bg-light"
							}`}>
							{filteredData.slice(0, 10).map((value, index) => {
								return (
									<a
										href={value.link}
										key={value.name}
										className="text-decoration-none w-100">
										<li
											className={
												index === selectedIndex
													? "dropdown-item border-bottom fs-6 w-100 p-1"
													: "dropdown-item border-bottom fs-6 w-100 p-1"
											}
											onClick={handleClick}>
											{value.name}
										</li>
									</a>
								);
							})}
						</ul>
					) : (
						""
					)}
				</div>
			</div>
			<div className="d-flex flex-wrap align-items-start justify-content-start">
				{tags.map((tag, index) => (
					<ul className="d-flex align-items-start justify-content-start m-0 p-1">
						<TagSent
							titleName={tag}
							key={index}
							removeTags={() => removeTags(index)}
						/>
					</ul>
				))}
			</div>
		</div>
	);
}

export default TagsSearch;
