class SettingsEvent {
	static ListEvents = [];

	static addEvent = (openEvent, closeEvent) => {
		SettingsEvent.ListEvents.push({
			open: openEvent,
			close: closeEvent,
		});
	};

	static open = () => {
		SettingsEvent.ListEvents.forEach(event => {
			setTimeout(event.open, 0);
		});
	};

	static close = () => {
		SettingsEvent.ListEvents.forEach(event => {
			setTimeout(event.close, 0);
		});
	};
}

export default SettingsEvent;
