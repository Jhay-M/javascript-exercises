const caesar = ((str, int) => {
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
        let alphaBet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');

        return str
                .split('')
                .map(item => {
                    let smallCap = alphabet.indexOf(item);
                    let bigCap = alphaBet.indexOf(item);
                    let smallSum = smallCap + int;
                    let bigSum = bigCap + int;
                
                    if (smallCap >= 0) {
                        if (smallSum > 25) {
                            return alphabet[smallSum - 26];
                        } else if (smallSum < 0) {
                            return alphabet[26 + smallSum];
                        } else return alphabet[smallSum];
                    } else if (bigCap >= 0) {
                        if (bigSum > 25) {
                            return alphaBet[bigSum - 26];
                        } else if ( bigSum < 0) {
                            return alphaBet[26 + bigSum];
                        } else return alphaBet[bigSum];
                    } else return item;
                })
                .join('');
});

module.exports = caesar
