export default date => {
	console.log(date);
	const isValid = !isNaN(new Date(date).getDate());
	return {
		isValid,
		date: isValid ? new Date(date) : new Date()
	};
};
