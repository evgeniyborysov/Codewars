// Who is the killer?
// Some people have been killed!
// You have managed to narrow the suspects down to just a few. Luckily, you know every person who those suspects have seen on the day of the murders.

// Task.
// Given a dictionary with all the names of the suspects and everyone that they have seen on that day which may look like this:

// {'James': ['Jacob', 'Bill', 'Lucas'],
//  'Johnny': ['David', 'Kyle', 'Lucas'],
//  'Peter': ['Lucy', 'Kyle']}

// and also a list of the names of the dead people:

// ['Lucas', 'Bill']

// return the name of the one killer, in our case 'James' because he is the only person that saw both 'Lucas' and 'Bill'

function killer(suspectInfo, dead) {
    let res = {};
    for (let index = 0; index < dead.length; index++) {
        for (const key in suspectInfo) {
            if (suspectInfo[key].includes(dead[index])) {
                if (!res.hasOwnProperty(key)) {
                    res[key] = 1;
                } else {
                    res[key] += 1;
                }
            }
        }
    }
    for (const key in res) {
        if (res[key] === dead.length) {
            return key;
        }
    }
}
