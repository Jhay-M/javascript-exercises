const palindromes = function(str) {
    let punctuation = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~ ';

    let pick = str
                .toLowerCase()
                .split('')
                .filter(letter => {
                    return punctuation.indexOf(letter) === -1;
                })
                .join('');

    let reverse = str
                    .toLowerCase()
                    .split('')
                    .reverse()
                    .filter(letter => {
                        return  punctuation.indexOf(letter) === -1;
                    })
                    .join('');

    return (pick == reverse) ? true: false;
}

module.exports = palindromes
