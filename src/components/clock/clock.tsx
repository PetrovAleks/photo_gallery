import React, { useState, useEffect } from 'react';

interface IClock {
	hours: number;
	minute: number;
}

const Clock = () => {
	const [time, setTime] = useState<IClock>({
		hours: new Date().getHours(),
		minute: new Date().getMinutes(),
	});

	useEffect(() => {
		const intervalID = setInterval(() => tick(), 60000);
		return () => {
			clearInterval(intervalID);
		};
	});

	const tick = (): void => {
		setTime(() => {
			return { hours: new Date().getHours(), minute: new Date().getMinutes() };
		});
	};

	return (
		<div className="header-clock">{`${time.hours < 10 ? '0' : ''}${
			time.hours
		}:${time.minute < 10 ? '0' : ''}${time.minute}`}</div>
	);
};

export default Clock;
