export const required = value => (value ? undefined : 'Required');
export const nonEmpty = value =>
	value.trim() !== '' ? undefined : 'Cannot be empty';
export const isTrimmed = value =>
	value.trim() === value ? undefined : 'Cannot start or end with whitespace';
export const length = length => value => {
	if (length.min && value.length < length.min) {
		return `Must be at least ${length.min} characters long`;
	}
	if (length.max && value.length > length.max) {
		return `Must be at most ${length.max} characters long`;
	}
};
export const matches = field => (value, allValues) =>
	field in allValues && value.trim() === allValues[field].trim()
		? undefined
		: 'Does not match';

export const getValidateMessage = elem => {
	console.log(elem.validity);
	switch(getConstraint(elem)) {
	case 'patternMismatch':
		return 'please match the requested pattern';
	case 'tooLong':
		return `Too long (${elem.value.length}) need at most (${elem.maxLength}) characters`;
	case 'tooShort':
		return `Too short (${elem.value.length}) need at least (${elem.minLength}) characters`;
	case 'valueMissing':
		return 'Please fill out this field';
	default:
		return 1;
	}
};

const getConstraint = elem => {
	for (let constraint in elem.validity) {
		if(elem.validity[constraint])
			return constraint;
	}
	return '';
};