import { buscarPokemon } from './services/PokeApiService';
import { CatalogoPokemon } from './services/BoxService';

async function main() {
  console.log("=== Pokédex TypeScript Lite ===\n");

  const catalogo = new CatalogoPokemon();

  // Buscar e adicionar Pikachu
  const pikachu = await buscarPokemon("pikachu");
  if (pikachu) catalogo.adicionar(pikachu);

  // Buscar e adicionar Charmander
  const charmander = await buscarPokemon("charmander");
  if (charmander) catalogo.adicionar(charmander);

  // Tentar adicionar Pikachu novamente (duplicidade)
  const pikachu2 = await buscarPokemon("pikachu");
  if (pikachu2) catalogo.adicionar(pikachu2);

  // Buscar Pokémon inexistente (erro tratado)
  await buscarPokemon("pokemon-inexistente");

  // Listar catálogo
  catalogo.listar();

  // Remover Pokémon por ID (Pikachu id=25)
  catalogo.remover(25);

  // Listar novamente
  catalogo.listar();
}

main();