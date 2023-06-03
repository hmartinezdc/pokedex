export const getTypePokemon = (typePokemon) => {
  const type = {
    normal: '/type/normal.svg',
    fighting: '/type/fighting.svg',
    flying: '/type/flying.svg',
    poison: '/type/poison.svg',
    ground: '/type/ground.svg',
    rock: '/type/rock.svg',
    bug: '/type/bug.svg',
    ghost: '/type/ghost.svg',
    steel: '/type/steel.svg',
    fire: '/type/fire.svg',
    water: '/type/water.svg',
    grass: '/type/plant.svg',
    electric: '/type/electric.svg',
    psychic: '/type/psychic.svg',
    ice: '/type/ice.svg',
    dragon: '/type/dragon.svg',
    dark: '/type/dark.svg',
    fairy: '/type/fairy1.svg',
    shadow: '/type/normal.svg',
  };
  const unknownt = '/type/normal.svg';
  const chosenType = type[typePokemon] || unknownt;
  return chosenType;
};
