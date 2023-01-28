import React from "react";
// import CancelIcon from "@mui/icons-material/Cancel";

function TagSent({titleName, removeTags, index}) {
	return (
		<li
			key={index}
			className="bg-blue-500 p-2 rounded-lg list-none"
			onClick={removeTags}>
			<div className="flex items-center justify-center text-white gap-1 leading-3">
				<span className="text-sm">{titleName}</span>
			</div>
		</li>
	);
}

export default TagSent;
