function introduction(name) {
    const message1 = `Hi, my name is ${name}.`;
    return message1;
  }

  function introductionWithLanguage(name, language) {
    const message1 = `Hi, my name is ${name} and I am learning to program in ${language}.`;
    return message1;
  }

  
function introductionWithLanguageOptional(name = "", language = "JavaScript") {
    const message1 = `Hi, my name is ${name} and I am learning to program in ${language}.`;
    return message1;
  }
