import React from "react";


function Checkbox() {
	return (
		<label className="checkbox-label" for='checkbox'>
			<input type="checkbox" className='checkbox-input' id='checkbox' />
			<span className="checkbox-name">Короткометражки</span>
		</label>
	)
}

export default Checkbox;