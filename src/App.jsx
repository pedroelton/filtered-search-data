import { useState } from "react";
import "./App.css";
import TagsSearch from "./assets/components/TagsSearch";
import BookData from "./assets/Data.json";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
	return (
		<div className="container-fluid">
			<TagsSearch
				data={BookData}
				placeholder="Press enter to add resources"
			/>
		</div>
	);
}

export default App;
