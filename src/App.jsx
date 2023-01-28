import {useState} from "react";
import "./App.css";
import TagsSearch from "./assets/components/TagsSearch";
import BookData from "./assets/Data.json";

function App() {
	return (
		<div className="App">
			<TagsSearch
				data={BookData}
				placeholder="Press enter to add resources"
			/>
		</div>
	);
}

export default App;
