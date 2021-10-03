const Calculate = {
  factorial (base) {

    if ( base === 0 ) {
      return 1;
    }

    let sum = 1;

    for (let i = 1; i <= base; i++) {
      sum *= i;
    }
    
    return sum;
  }
}

module.exports = Calculate;


