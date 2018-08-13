import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import jwtDecode from 'jwt-decode';

Enzyme.configure({adapter: new Adapter()});

const localStorageMock = (function() {
	var store = {};

	return {
		getItem: function(key) {
			return store[key] || null;
		},
		setItem: function(key, value) {
			store[key] = value.toString();
		},
		clear: function() {
			store = {};
		}
	};

})();

Object.defineProperty(window, 'localStorage', {
	value: localStorageMock
});

Object.defineProperty(window, 'jwtDecode', {
	value: jwtDecode
});

global.fetch = require('jest-fetch-mock');