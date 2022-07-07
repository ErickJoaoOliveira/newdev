const http = require('http');
const path = require('path');
const URL = require('url');
const fs = require('fs');
let recipes = require('./recipes.json');

const getRecipes = (req, res) => {
  const {name, ingredient, ingredient2, remove, edit} = URL.parse(req.url, true).query;

  let info = ''

  if(name || ingredient || ingredient2){
    const recipeIdea = recipes.filter(recipe => recipe.name == name)
    if (recipeIdea.leght && !edit && !remove){
      res.end('Essa receita já existe')
    }
    const recipe = {
      name,ingredient,ingredient2
    }

    if (edit){
      if(recipeIdea.leght){
        recipeIdea[0].ingredient = ingredient
        recipeIdea[0].ingredient2 = ingredient2
        info = 'Editado com sucesso'
      }else {
        res.end('Receita não encontrada')  
          }
        }
    
    if(remove ){
      info = 'Removido com sucesso'
      recipes = recipes.filter(recipe => recipe.name != name );
    
      if(!recipeIdea.leght){
        res.end('Receita não encontrada')
      }
    }else if(!remove && !edit){
      info = 'Receita salva com sucesso'
      recipes.push(recipe)
    }
    
    fs.writeFile(
      path.join(__dirname, 'recipes.json'),
      JSON.stringify(recipes, null, 2),
      (error) => {
        if (error) return;
      
        res.end(JSON.stringify({
          status: info,
          data: recipe
        }))
      })
  } else {
    res.end(JSON.stringify(recipes))
  }
}

const server = http.createServer(getRecipes);

server.listen(4984, (req,res) => {
  console.log('ta funfando meu lindo ;)')
})