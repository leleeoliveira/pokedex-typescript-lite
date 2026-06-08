// Interface para o retorno simplificado do Pokémon que teremos
export interface PokemonResumo {
  id: number;
  nome: string;
  tipos: string[];
  altura: number;  // em decímetros (PokeAPI retorna height)
  peso: number;    // em hectogramas
}

// Interface para mapear sóos campos da API que usamos
export interface PokemonApiResponse {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: { type: { name: string } }[];
}