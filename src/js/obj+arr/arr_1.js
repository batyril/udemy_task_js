const family = ['Peter', 'Ann', 'Alex', 'Linda'];
function showFamily(arr) {
  if (arr.length === 0 || typeof arr !== 'object') {
    return 'Семья пуста';
  }
  const stringFamily = arr.join(' ');
  return `Семья состоит из: ${stringFamily}`;
}

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
  arr.forEach((name) => {
    console.log(name.toLowerCase());
  });
}

standardizeStrings(favoriteCities)
