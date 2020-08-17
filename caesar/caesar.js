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
                    if (smallSum > 0) {
                        return alphabet[smallSum % 26];
                    } else if (smallSum < 0) {
                        smallSum++;
                        return alphabet[25 + (smallSum % 26)];
                    } else return alphabet[smallSum];
                } else if (bigCap >= 0) {
                    if (bigSum > 0) {
                        return alphaBet[bigSum % 26];
                    } else if ( bigSum < 0) {
                        bigSum++;
                        return alphaBet[25 + (bigSum % 26)];
                    } else return alphaBet[bigSum];
                } else return item;
            })
            .join('');
});

module.exports = caesar
