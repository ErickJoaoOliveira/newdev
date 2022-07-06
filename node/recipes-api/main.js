const http = require('http');
const URL = require('url');
const fs = require('fs');
const path = require('path');
let recipes = require('./recipes.json');

const getUsers = (request, response) => {
  let { ingredient, quantidade,name, remove } = URL.parse(request.url, true).query;

  response.writeHead(200, {
    'Access-Control-Allow-Origin': ['*']
  });

  if (ingredient) {    
    let newIngredient = {
      ingredient, quantidade, name
    }
      
    fs.writeFile(
      path.join(__dirname, 'recipes.json'),
      JSON.stringify(recipes, null, 2)
    );
  } else {
    response.end(JSON.stringify(recipes)); 
  }

}

const server = http.createServer(getUsers);

server.listen(5491, () => {
  console.log('API listening on http://localhost:5491');
});