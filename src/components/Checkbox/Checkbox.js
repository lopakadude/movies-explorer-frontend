import React from "react";


function Checkbox(props) {
	return (
		<label className="checkbox-label">
			<input
				type="checkbox"
				className='checkbox-input'
				value={props.value}
        checked={props.value}
				onChange={props.onChange}
			/>
			<span className="checkbox-name">Короткометражки</span>
		</label>
	)
}

export default Checkbox;