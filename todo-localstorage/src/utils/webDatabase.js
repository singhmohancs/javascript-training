export const WebDatabase = {
	setItem(key, value) {
		try {
			localStorage.setItem(key, JSON.stringify(value));
		} catch (error) {
			console.log(error);
		}
	},
	getItem(key) {
		try {
			const value = localStorage.getItem(key);
			return JSON.parse(value);
		} catch (error) {
			console.log(error);
			return null;
		}
	},
	removeItem(key) {
		try {
			localStorage.removeItem(key);
		} catch (error) {
			console.log(error);
		}
	},
};