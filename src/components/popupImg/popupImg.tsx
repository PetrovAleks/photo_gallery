import React from 'react';
import { observer } from 'mobx-react';
import { state } from '../../store/store';

const PopupImg = observer(() => {
	return (
		<div className="popup" onClick={state.closePopup}>
			<div className="wrapper-popup-img">
				<button className="popup-btn" onClick={state.closePopup} aria-label="close-popup">
					X
				</button>
				<img className="popup-img" src={state.popupImg?.img} alt={state.popupImg?.title} />
			</div>
		</div>
	);
});
export default PopupImg;
