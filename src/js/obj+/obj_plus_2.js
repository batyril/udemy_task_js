const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
  const result = [];
  arr.sort();
  while (arr.length >= 3) {
    result.push(arr.splice(0, 3));
  }
  arr.length === 0 ? result.push('Оставшиеся студенты: -') : result.push(`Оставшиеся студенты: ${arr.join(', ')}`);
  return result;
}

sortStudentsByGroups(students);
