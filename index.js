class Sort {
  numBigToSmall(array) {
    try {
      let done = false;
      while (!done) {
        done = true;
        for (let i = 0; i < array.length; i++) {
          if (array[i + 1] > array[i]) {
            done = false;
            let tmp = array[i + 1];
            array[i + 1] = array[i];
            array[i] = tmp;
          }
        }
      }
      return array;
    } catch (err) {
      console.log(
        "There is a problem with your input values, please read the docs "
      );
    }
  }
  numSmallToBig(array) {
    try{
    let done = false;
    while (!done) {
      done = true;
      for (let i = 1; i < array.length; i++) {
        if (array[i - 1] > array[i]) {
          done = false;
          let tmp = array[i - 1];
          array[i - 1] = array[i];
          array[i] = tmp;
        }
      }
    }
    return array;
  } catch (err) {
    console.log(
      "There is a problem with your input values, please read the docs "
    );
  }
  }
  enBigToSmall(array) {
    try{
    for (let f = 0; f < array.length; f++) {
      array[f] =
        array[f].charCodeAt(0) +
        "[!09-012312kaf120!]" +
        array[f].slice(1, array[f].length);
    }
    let done = false;
    while (!done) {
      done = true;
      for (let i = 1; i < array.length; i++) {
        if (
          parseInt(new String(array[i - 1]).split("[!09-012312kaf120!]")[0]) >
          parseInt(new String(array[i]).split("[!09-012312kaf120!]")[0])
        ) {
          done = false;
          let tmp = array[i - 1];
          array[i - 1] = array[i];
          array[i] = tmp;
        }
      }
    }
    for (let n = 0; n < array.length; n++) {
      array[n] =
        String.fromCharCode(
          new String(array[n]).split("[!09-012312kaf120!]")[0]
        ) + new String(array[n]).split("[!09-012312kaf120!]")[1];
    }
    return array;
  } catch (err) {
    console.log(
      "There is a problem with your input values, please read the docs "
    );
  }
  }
  enSmallToBig(array) {
    try{
    for (let f = 0; f < array.length; f++) {
      array[f] =
        array[f].charCodeAt(0) +
        "[!09-012312kaf120!]" +
        array[f].slice(1, array[f].length);
    }
    let done = false;
    while (!done) {
      done = true;
      for (let i = 1; i < array.length; i++) {
        if (
          parseInt(new String(array[i - 1]).split("[!09-012312kaf120!]")[0]) <
          parseInt(new String(array[i]).split("[!09-012312kaf120!]")[0])
        ) {
          done = false;
          let tmp = array[i - 1];
          array[i - 1] = array[i];
          array[i] = tmp;
        }
      }
    }
    for (let n = 0; n < array.length; n++) {
      array[n] =
        String.fromCharCode(
          new String(array[n]).split("[!09-012312kaf120!]")[0]
        ) + new String(array[n]).split("[!09-012312kaf120!]")[1];
    }
    return array;
  } catch (err) {
    console.log(
      "There is a problem with your input values, please read the docs "
    );
  }
  }
  peBigToSmall(array) {
    try{
    let apList = [
      {
        value: "??",
        code: 10,
      },
      {
        value: "??",
        code: 11,
      },
      {
        value: "??",
        code: 12,
      },
      {
        value: "??",
        code: 13,
      },
      {
        value: "??",
        code: 14,
      },
      {
        value: "??",
        code: 15,
      },
      {
        value: "??",
        code: 16,
      },
      {
        value: "??",
        code: 17,
      },
      {
        value: "??",
        code: 18,
      },
      {
        value: "??",
        code: 19,
      },
      {
        value: "??",
        code: 20,
      },
      {
        value: "??",
        code: 21,
      },
      {
        value: "??",
        code: 22,
      },
      {
        value: "??",
        code: 23,
      },
      {
        value: "??",
        code: 24,
      },
      {
        value: "??",
        code: 25,
      },
      {
        value: "??",
        code: 26,
      },
      {
        value: "??",
        code: 27,
      },
      {
        value: "??",
        code: 28,
      },
      {
        value: "??",
        code: 29,
      },
      {
        value: "??",
        code: 30,
      },
      {
        value: "??",
        code: 31,
      },
      {
        value: "??",
        code: 32,
      },
      {
        value: "??",
        code: 33,
      },
      {
        value: "??",
        code: 34,
      },
      {
        value: "??",
        code: 35,
      },
      {
        value: "??",
        code: 36,
      },
      {
        value: "??",
        code: 37,
      },
      {
        value: "??",
        code: 38,
      },
      {
        value: "??",
        code: 39,
      },
      {
        value: "??",
        code: 40,
      },
      {
        value: "??",
        code: 41,
      },
      {
        value: "??",
        code: 42,
      },
    ];
    let swap = [];
    for (let f = 0; f < array.length; f++) {
      for (let i = 0; i < array[f].length; i++) {
        let thisArg = new String(array[f]);
        swap.push(
          thisArg
            .split("")
            [i].replace(
              thisArg[i],
              apList.find((x) => x.value == thisArg[i]).code
            )
        );
      }
      array[f] = swap.join("");
      swap = [];
    }
    let done = false;
    while (!done) {
      done = true;
      for (let i = 1; i < array.length; i++) {
        if (
          parseInt(new String(array[i - 1]).slice(0, 2)) >
          parseInt(new String(array[i]).slice(0, 2))
        ) {
          done = false;
          let tmp = array[i - 1];
          array[i - 1] = array[i];
          array[i] = tmp;
        }
      }
    }
    let swAp = [];
    for (let f = 0; f < array.length; f++) {
      for (let i = 0; i < array[f].length; i += 2) {
        let thisArg = new String(array[f]);
        swAp.push(
          apList.find((x) => x.code == thisArg[i] + thisArg[i + 1]).value
        );
      }
      array[f] = swAp.join("");
      swAp = [];
    }
    return array;
  } catch (err) {
    console.log(
      "There is a problem with your input values, please read the docs "
    );
  }
  }
  peSmallToBig(array) {
    try{
    let apList = [
      {
        value: "??",
        code: 10,
      },
      {
        value: "??",
        code: 11,
      },
      {
        value: "??",
        code: 12,
      },
      {
        value: "??",
        code: 13,
      },
      {
        value: "??",
        code: 14,
      },
      {
        value: "??",
        code: 15,
      },
      {
        value: "??",
        code: 16,
      },
      {
        value: "??",
        code: 17,
      },
      {
        value: "??",
        code: 18,
      },
      {
        value: "??",
        code: 19,
      },
      {
        value: "??",
        code: 20,
      },
      {
        value: "??",
        code: 21,
      },
      {
        value: "??",
        code: 22,
      },
      {
        value: "??",
        code: 23,
      },
      {
        value: "??",
        code: 24,
      },
      {
        value: "??",
        code: 25,
      },
      {
        value: "??",
        code: 26,
      },
      {
        value: "??",
        code: 27,
      },
      {
        value: "??",
        code: 28,
      },
      {
        value: "??",
        code: 29,
      },
      {
        value: "??",
        code: 30,
      },
      {
        value: "??",
        code: 31,
      },
      {
        value: "??",
        code: 32,
      },
      {
        value: "??",
        code: 33,
      },
      {
        value: "??",
        code: 34,
      },
      {
        value: "??",
        code: 35,
      },
      {
        value: "??",
        code: 36,
      },
      {
        value: "??",
        code: 37,
      },
      {
        value: "??",
        code: 38,
      },
      {
        value: "??",
        code: 39,
      },
      {
        value: "??",
        code: 40,
      },
      {
        value: "??",
        code: 41,
      },
      {
        value: "??",
        code: 42,
      },
    ];
    let swap = [];
    for (let f = 0; f < array.length; f++) {
      for (let i = 0; i < array[f].length; i++) {
        let thisArg = new String(array[f]);
        swap.push(
          thisArg
            .split("")
            [i].replace(
              thisArg[i],
              apList.find((x) => x.value == thisArg[i]).code
            )
        );
      }
      array[f] = swap.join("");
      swap = [];
    }
    let done = false;
    while (!done) {
      done = true;
      for (let i = 1; i < array.length; i++) {
        if (
          parseInt(new String(array[i - 1]).slice(0, 2)) <
          parseInt(new String(array[i]).slice(0, 2))
        ) {
          done = false;
          let tmp = array[i - 1];
          array[i - 1] = array[i];
          array[i] = tmp;
        }
      }
    }
    let swAp = [];
    for (let f = 0; f < array.length; f++) {
      for (let i = 0; i < array[f].length; i += 2) {
        let thisArg = new String(array[f]);
        swAp.push(
          apList.find((x) => x.code == thisArg[i] + thisArg[i + 1]).value
        );
      }
      array[f] = swAp.join("");
      swAp = [];
    }
    return array;
  } catch (err) {
    console.log(
      "There is a problem with your input values, please read the docs "
    );
  }
  }
}
module.exports = new Sort();
