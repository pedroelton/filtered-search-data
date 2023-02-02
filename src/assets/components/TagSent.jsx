import React from "react";
// import CancelIcon from "@mui/icons-material/Cancel";

function TagSent({ titleName, removeTags, index }) {
	return (
		<li
			key={index}
			className="badge rounded-pill text-bg-primary"
			onClick={removeTags}>
			<div className="text-white">
				<span className="text-sm">{titleName}</span>
			</div>
		</li>
	);
}

export default TagSent;
