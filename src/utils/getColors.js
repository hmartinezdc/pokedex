const getColors = (color) => {
  switch (color) {
    case 'normal':
      color = 'pokemon-header--normal';
      break;
    case 'fighting':
      color = 'pokemon-header--fighting';
      break;
    case 'flying':
      color = 'pokemon-header--flying';
      break;
    case 'poison':
      color = 'pokemon-header--poison';
      break;
    case 'ground':
      color = 'pokemon-header--ground';
      break;
    case 'rock':
      color = 'pokemon-header--rock';
      break;
    case 'bug':
      color = 'pokemon-header--bug';
      break;
    case 'ghost':
      color = 'pokemon-header--ghost';
      break;
    case 'steel':
      color = 'pokemon-header--steel';
      break;
    case 'fire':
      color = 'pokemon-header--fire';
      break;
    case 'water':
      color = 'pokemon-header--water';
      break;
    case 'grass':
      color = 'pokemon-header--grass';
      break;
    case 'electric':
      color = 'pokemon-header--electric';
      break;
    case 'psychic':
      color = 'pokemon-header--psychic';
      break;
    case 'ice':
      color = 'pokemon-header--ice';
      break;
    case 'dragon':
      color = 'pokemon-header--dragon';
      break;
    case 'dark':
      color = 'pokemon-header--dark';
      break;
    case 'fairy':
      color = 'pokemon-header--fairy';
      break;
    case 'unknown':
      color = 'pokemon-header--unknown';
      break;
    case 'shadow':
      color = 'pokemon-header--shadow';
      break;

    default:
      color = 'pokemon-header--unknown';
      break;
  }
  return color;
};

export default getColors;
