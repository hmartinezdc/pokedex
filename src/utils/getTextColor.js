const getTextColor = (textColor) => {
  switch (textColor) {
    case 'normal':
      textColor = 'color-normal';
      break;
    case 'fighting':
      textColor = 'color-fighting';
      break;
    case 'flying':
      textColor = 'color-flying';
      break;
    case 'poison':
      textColor = 'color-poison';
      break;
    case 'ground':
      textColor = 'color-ground';
      break;
    case 'rock':
      textColor = 'color-rock';
      break;
    case 'bug':
      textColor = 'color-bug';
      break;
    case 'ghost':
      textColor = 'color-ghost';
      break;
    case 'steel':
      textColor = 'color-steel';
      break;
    case 'fire':
      textColor = 'color-fire';
      break;
    case 'water':
      textColor = 'color-water';
      break;
    case 'grass':
      textColor = 'color-grass';
      break;
    case 'electric':
      textColor = 'color-electric';
      break;
    case 'psychic':
      textColor = 'color-psychic';
      break;
    case 'ice':
      textColor = 'color-ice';
      break;
    case 'dragon':
      textColor = 'color-dragon';
      break;
    case 'dark':
      textColor = 'color-dark';
      break;
    case 'fairy':
      textColor = 'color-fairy';
      break;
    case 'unknown':
      textColor = 'color-unknown';
      break;
    case 'shadow':
      textColor = 'color-shadow';
      break;

    default:
      textColor = 'color-unknown';
      break;
  }
  return textColor;
};

export default getTextColor;
