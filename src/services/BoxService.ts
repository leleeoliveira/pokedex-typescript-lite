import { PokemonResumo } from '../models/Pokemon';

export class CatalogoPokemon {
  private pokemons: PokemonResumo[] = [];

  // Adicionar com controle de duplicidade (método some)
  adicionar(pokemon: PokemonResumo): void {
    const jaExiste = this.pokemons.some(p => p.id === pokemon.id);
    if (jaExiste) {
      console.log(`[AVISO] ${pokemon.nome} já está no catálogo.`);
      return;
    }
    this.pokemons.push(pokemon);
    console.log(`[OK] ${pokemon.nome} adicionado ao catálogo.`);
  }

  // Listar catálogo (método forEach)
  listar(): void {
    if (this.pokemons.length === 0) {
      console.log("[AVISO] Catálogo vazio.");
      return;
    }
    console.log("\nCatálogo atual:");
    this.pokemons.forEach(pokemon => {
      console.log(
        `#${pokemon.id} - ${pokemon.nome} | Tipos: ${pokemon.tipos.join(", ")} | Altura: ${pokemon.altura} | Peso: ${pokemon.peso}`
      );
    });
  }

  // Remover por ID (método filter)
  remover(id: number): void {
    const existe = this.pokemons.some(p => p.id === id);
    if (!existe) {
      console.log("[AVISO] Nenhum Pokémon encontrado com esse ID.");
      return;
    }
    this.pokemons = this.pokemons.filter(p => p.id !== id);
    console.log("[OK] Pokémon removido do catálogo.");
  }
}