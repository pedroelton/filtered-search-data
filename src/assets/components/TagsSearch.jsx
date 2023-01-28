import React, {useState} from "react";
import TagSent from "./TagSent";
import "./TagsSearch.css";

function TagsSearch({data, placeholder}) {
	const [tags, setTags] = useState([]);
	const [isHidden, setIsHidden] = useState(false);
	const [filteredData, setFilteredData] = useState([]);
	const [selectedIndex, setSelectedIndex] = useState(0);

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
		const newFilter = data.filter((value) => {
			return value.name.toLowerCase().includes(searchWord.toLowerCase());
		});
		if (searchWord === "") {
			setFilteredData([]);
		} else {
			setFilteredData(newFilter);
		}
	};

	return (
		<div className="Apps w-screen h-screen flex justify-center items-start flex-col p-5 bg-purple-50">
			<div className="flex w-full   mb-4">
				<div className="border border-gray-10 p-1 rounded-lg w-full max-w-[500px] flex relative bg-white">
					<input
						type="text"
						placeholder={placeholder}
						className="flex-1 outline-0 px-1"
						onKeyUp={(e) => (e.key === "Enter" ? addTags(e) : null)}
						onChange={handleFilter}
					/>

					{filteredData.length !== 0 ? (
						<ul
							className={`my-element ${
								isHidden
									? "hidden"
									: "flex flex-col max-h-[290px] w-auto overflow-y-auto scrollbar shadow-2xl rounded-md absolute top-8 left-0 z-20 bg-white"
							}`}>
							{filteredData.slice(0, 10).map((value, index) => {
								return (
									<a
										href={value.link}
										key={index}>
										<li
											className={
												index === selectedIndex
													? "selected text-left hover:bg-purple-50 border-b text-sm hover:text-blue-500 px-4 py-2 w-full"
													: " text-left hover:bg-purple-50 border-b text-sm hover:text-blue-500 px-4 py-2 w-full"
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
			<div className="flex flex-wrap justify-start items-start gap-2">
				{tags.map((tag, index) => (
					<ul className="flex gap-1">
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
