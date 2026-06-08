import { PokemonResumo, PokemonApiResponse } from '../models/Pokemon';

/**
 * Busca um Pokémon na PokeAPI por nome ou ID
 * @param nomeOuId - ex: "pikachu" ou "25"
 * @returns PokemonResumo ou null se não encontrado/erro
 */
export async function buscarPokemon(nomeOuId: string): Promise<PokemonResumo | null> {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${nomeOuId.toLowerCase()}`;
    const resposta = await fetch(url);

    if (!resposta.ok) {
      console.log(`[ERRO] Pokémon não encontrado: ${nomeOuId}`);
      return null;
    }

    const dados: PokemonApiResponse = await resposta.json();

    // Mapeamento dos campos obrigatórios usando método map
    const pokemonResumo: PokemonResumo = {
      id: dados.id,
      nome: dados.name,
      tipos: dados.types.map(item => item.type.name),
      altura: dados.height,
      peso: dados.weight
    };

    console.log(`[OK] Pokémon encontrado: ${pokemonResumo.nome}`);
    return pokemonResumo;
  } catch (erro) {
    console.log(`[ERRO] Não foi possível buscar o Pokémon: ${nomeOuId}`);
    return null;
  }
}