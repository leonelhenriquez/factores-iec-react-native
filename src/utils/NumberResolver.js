const NumberResolver = number => {
	if (number.split(',', 3).length === 2) {
		number = number.replace(',', '.');
	}
	return parseFloat(Number(number));
};

export default NumberResolver;
