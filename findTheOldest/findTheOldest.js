let findTheOldest = (arr => {
    const people = [
        {
          name: 'Carly',
          yearOfBirth: 2018,
        },
        {
          name: 'Ray',
          yearOfBirth: 1962,
          yearOfDeath: 2011
        },
        {
          name: 'Jane',
          yearOfBirth: 1912,
          yearOfDeath: 1941
        },
    ]
    let newDate = new Date().getFullYear();
    let array = arr
                    .map(obj => {
                        if (!obj.yearOfDeath) {
                            let d = new Date();
                            let n = d.getFullYear();
                            obj.yearsLived = n - obj.yearOfBirth;
                            return obj;
                        } 
                            obj.yearsLived = obj.yearOfDeath - obj.yearOfBirth;
                            return obj;
                        })
                    .sort((a, b) => {
                        let lastTotal = a.yearsLived;
                        let nextTotal = b.yearsLived;
    
                        return lastTotal > nextTotal ? -1: 1;
                    });
    return array[0];
});


module.exports = findTheOldest
