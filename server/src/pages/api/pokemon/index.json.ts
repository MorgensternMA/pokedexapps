import type { APIContext, APIRoute } from "astro"
import { addPokemon, getPokemonList } from "../../../services/pokemon"

export const GET: APIRoute = async (context) => {
  return new Response(JSON.stringify({
    pokemonList: await getPokemonList()
  }), {
    headers: {
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    }
  })
}

export const POST: APIRoute = async (context: APIContext) => {
  const pokemon = await context.request.json();
  await addPokemon(pokemon);
  return new Response(JSON.stringify({
    pokemon: pokemon
  }), {
    headers: {
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    }
  })
}