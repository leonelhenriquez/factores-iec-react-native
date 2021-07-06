import NumberResolver from './NumberResolver';

const isNumber = strNumber => {
	return !Number.isNaN(NumberResolver(strNumber));
};

export default isNumber;
