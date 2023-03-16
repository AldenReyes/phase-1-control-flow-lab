function scuberGreetingForFeet(num) {
  if (num > 2500) {
    return 'No can do.';
  }
  if (num > 2000) {
    return 'I will gladly take your thirty bucks.';
  }
  if (num > 400 && num <= 2000) {
    return 'That will be twenty bucks.';
  }
  if (num <= 400) {
    return 'This one is on me!';
  }
}

function ternaryCheckCity(cityName) {
  return cityName === 'NYC' ? ('Ok, sounds good.') : ('No go.');
}

function switchOnCharmFromTip(tipAmount) {
  switch (tipAmount) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.'
  }
}
