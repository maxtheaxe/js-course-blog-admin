import axios from 'axios';

const client = axios.create({ baseURL: 'https://js-course-blog-server.herokuapp.com/' })

client.interceptors.request.use((config) => {
	const token = localStorage.getItem("token");
	if (token) {
		config.headers.authorization = token;
	}
	return config;
});

export default client;