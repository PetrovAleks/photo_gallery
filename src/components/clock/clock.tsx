import React, { useState, useEffect } from 'react';

interface IClock {
	hours: number;
	minute: number;
}

const Clock = (): JSX.Element => {
	const [time, setTime] = useState<IClock>({
		hours: new Date().getHours(),
		minute: new Date().getMinutes(),
	});

	useEffect(() => {
		const intervalID = setInterval(() => tick(), 1000);
		return (): void => {
			clearInterval(intervalID);
		};
	});

	const tick = (): void => {
		setTime(
			(): IClock => {
				return { hours: new Date().getHours(), minute: new Date().getMinutes() };
			},
		);
	};

	return (
		<div className="header-clock">
			{`${time.hours < 10 ? '0' : ''}${time.hours}`}
			<span className="clock-anim">:</span>
			{`${time.minute < 10 ? '0' : ''}${time.minute}`}
		</div>
	);
};

export default Clock;
