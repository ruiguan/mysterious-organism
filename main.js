// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (num, arr) => {
  return {
    specimenNum: num,
    dna: arr,
    // mutate a random DNA base in the input object
    mutate() {
      const randomIndex = Math.floor(Math.random()*15);
      let randomInsert = '';
      // show which Index to be mutated
      console.log(randomIndex)
      switch (arr[randomIndex]) {
        case 'A':
          randomInsert = ['T','C','G'][Math.floor(Math.random()*3)];
          arr.splice(randomIndex, 1, randomInsert);
          return arr;
          break;
        case 'T':
          randomInsert = ['A','C','G'][Math.floor(Math.random()*3)];
          arr.splice(randomIndex, 1, randomInsert);
          return arr;
          break;
        case 'C':
          randomInsert = ['T','A','G'][Math.floor(Math.random()*3)];
          arr.splice(randomIndex, 1, randomInsert);
          return arr;
          break;
        case 'G':
          randomInsert = ['T','C','A'][Math.floor(Math.random()*3)];
          arr.splice(randomIndex, 1, randomInsert);
          return arr;
          break;
      }
    },
    compareDNA(randomObject) {
      let numInCommon = 0;
      for (let i=0; i<15; i++) {
        if (randomObject.dna[i] === this.dna[i]) {
          numInCommon++;
        }
      };
      const percentage = Math.floor((numInCommon / 15)*100);
      return `specimen #${this.specimenNum} and specimen #${randomObject.specimenNum} have ${percentage}% DNA in common`
    },
    willlikelySurvive() {
      let CGnum = 0;
      this.dna.map(item => {
        if (item === 'C' || item === 'G') {
          CGnum ++;
        }
      })
      const percentage = Math.floor((CGnum / 15)*100);
      if (percentage > 60) {
        return true;
      } else {
        return false;
      }
    }
  }
}

let randomDna1 = mockUpStrand()
let randomDna2 = mockUpStrand()
// #1 object
console.log(pAequorFactory(1,randomDna1))
const randomObject1 = pAequorFactory(1,randomDna1)

// #2 object
console.log(pAequorFactory(2,randomDna2))
const randomObject2 = pAequorFactory(2,randomDna2)

// #1 object's DNA
console.log(randomObject1.dna)
console.log(randomObject2.dna)


// #1 object's mutation and survivelikelyhood
console.log(randomObject1.mutate())
console.log(randomObject1.willlikelySurvive())

// #1 and #2 DNA comparison
console.log(randomObject1.compareDNA(randomObject2))

const generate = () => {
  const objectGroup = [];
  let objectsCount = 1;
  while (objectsCount <= 30) {
    let checkObject = pAequorFactory(objectsCount,mockUpStrand());
    // check 
    // console.log(checkObject);
    // console.log(checkObject.willlikelySurvive())
    if (checkObject.willlikelySurvive() === true) {
      objectsCount ++;
      // console.log(objectsCount)
      objectGroup.push(checkObject)
    }
  }
  return objectGroup
}

console.log(generate())


