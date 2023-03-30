const getBorderColor = (borderColor) => {
  switch (borderColor) {
    case 'normal':
      borderColor = 'border-normal';
      break;
    case 'fighting':
      borderColor = 'border-fighting';
      break;
    case 'flying':
      borderColor = 'border-flying';
      break;
    case 'poison':
      borderColor = 'border-poison';
      break;
    case 'ground':
      borderColor = 'border-ground';
      break;
    case 'rock':
      borderColor = 'border-rock';
      break;
    case 'bug':
      borderColor = 'border-bug';
      break;
    case 'ghost':
      borderColor = 'border-ghost';
      break;
    case 'steel':
      borderColor = 'border-steel';
      break;
    case 'fire':
      borderColor = 'border-fire';
      break;
    case 'water':
      borderColor = 'border-water';
      break;
    case 'grass':
      borderColor = 'border-grass';
      break;
    case 'electric':
      borderColor = 'border-electric';
      break;
    case 'psychic':
      borderColor = 'border-psychic';
      break;
    case 'ice':
      borderColor = 'border-ice';
      break;
    case 'dragon':
      borderColor = 'border-dragon';
      break;
    case 'dark':
      borderColor = 'border-dark';
      break;
    case 'fairy':
      borderColor = 'border-fairy';
      break;
    case 'unknown':
      borderColor = 'border-unknown';
      break;
    case 'shadow':
      borderColor = 'border-shadow';
      break;

    default:
      borderColor = 'border-unknown';
      break;
  }
  return borderColor;
};

export default getBorderColor;
