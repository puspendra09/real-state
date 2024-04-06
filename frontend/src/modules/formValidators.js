export function CheckIfNameIsValid(name) {
	const re = /^[A-Za-z ]+$/;
	return re.test(name);
}
export function CheckIfEmailIsValid(email) {
	var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
}
export function CheckIfPhoneIsValid(phonenumber) {
	var re = /\b[6-9][0-9]{9}\b/;
	return re.test(phonenumber);
}
export function CheckIfCityIsValid(city) {
	var re = /^[A-Za-z ]+$/;
	return re.test(city);
}