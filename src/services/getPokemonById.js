import { axiosInstance } from '../api/axiosInstance';

const getPokemonImg = (sprites) => {
  const firtOption = sprites.other.dream_world.front_default;
  const SecondOption = sprites.other['official-artwork'].front_default;
  const thirdOption = sprites.other.home.front_default;
  if (firtOption) return firtOption;
  if (SecondOption) return SecondOption;
  if (thirdOption) return thirdOption;
  return 'https://i.imgur.com/nIidSyp.png';
};
export const getPokemonById = async (pokemonId) => {
  try {
    const res = await axiosInstance.get(`pokemon/${pokemonId}`);
    const pokemonData = res.data;

    const adaptedData = {
      id: pokemonData.id,
      number: String(pokemonData.id).padStart(3, '0'),
      name: pokemonData.name.replace(/^\w/, (char) => char.toUpperCase()),
      types: pokemonData.types.map((typeInfo) => typeInfo.type.name),
      stats: pokemonData.stats.map((statInfo) => ({
        name: statInfo.stat.name,
        value: statInfo.base_stat,
        percent: Math.round((statInfo.base_stat / 200) * 100),
      })),
      img: getPokemonImg(pokemonData.sprites),
      abilities: pokemonData.abilities.map((abilityInfo) => abilityInfo.ability.name),
      height: pokemonData.height,
      weight: pokemonData.weight,
    };

    return adaptedData;
  } catch (error) {
    console.error(error);
  }
};
