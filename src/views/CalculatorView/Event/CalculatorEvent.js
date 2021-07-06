class CalculatorEvent {
	static ListShowFactorEvents = [];
	static addShowFactorEvent = event =>
		CalculatorEvent.ListShowFactorEvents.push(event);
	static showFactor = factor => {
		CalculatorEvent.ListShowFactorEvents.forEach(event =>
			setTimeout(() => event(factor), 0),
		);
	};
}

export default CalculatorEvent;
