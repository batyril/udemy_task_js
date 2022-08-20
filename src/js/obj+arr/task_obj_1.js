const personalPlanPeter = {
  name: 'Peter',
  age: '29',
  skills: {
    languages: ['ru', 'eng'],
    programmingLangs: {
      js: '20%',
      php: '10%',
    },
    exp: '1 month',
  },
  showAgeAndLangs() {
    const lang = this.skills.languages.join().toLocaleUpperCase();
    const langUP = lang.toLocaleUpperCase();
    return `Мне ${this.age} и я владею языками: ${langUP}`;
  },
};

function showExperience(obj) {
  const { exp } = obj.skills;
  return exp;
}

function showProgrammingLangs(obj) {
  let result = '';
  const { programmingLangs } = obj.skills;
  for (const langs in programmingLangs) {
    result += `Язык ${langs} изучен на ${programmingLangs[langs]}\n`;
  }
  return result;
}

console.log(showProgrammingLangs(personalPlanPeter));
