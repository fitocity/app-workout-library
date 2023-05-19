const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://musclewiki.p.rapidapi.com/exercises/20',
  headers: {
    'X-RapidAPI-Key': '4fa46c3ac0msh01ef2be237b42cap18cc61jsn2084e7e24b7f',
    'X-RapidAPI-Host': 'musclewiki.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}
