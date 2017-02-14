console.log(process.argv[2].match(/[^aeiou ]/gi).join('')+'\n'+process.argv[2].match(/[aeiou]/gi).join(''));
