import React, { useState } from "react";

const useSessionStorage = (key, initialValue) => {
	const [storedValue, setStoredValue] = useState(() => {
		const item = window.sessionStorage.getItem(key);
		return item ? JSON.parse(item) : initialValue;
	});
	const setValue = (value) => {
		setStoredValue(value);
		window.sessionStorage.setItem(key, JSON.stringify(value));
	};
	return [storedValue, setValue];
};

export default useSessionStorage;
