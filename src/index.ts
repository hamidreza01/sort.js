class Sort {
    numBigToSmall(array: number[]) {
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
    numSmallToBig(array: number[]) {
        try {
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
    enBigToSmall(array: string[]) {
        try {
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
                        +array[n].split("[!09-012312kaf120!]")[0]
                    ) + new String(array[n]).split("[!09-012312kaf120!]")[1];
            }
            return array;
        } catch (err) {
            console.log(
                "There is a problem with your input values, please read the docs "
            );
        }
    }
    enSmallToBig(array: string[]) {
        try {
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
                        +array[n].split("[!09-012312kaf120!]")[0]
                    ) + new String(array[n]).split("[!09-012312kaf120!]")[1];
            }
            return array;
        } catch (err) {
            console.log(
                "There is a problem with your input values, please read the docs "
            );
        }
    }
    peBigToSmall(array: string[]) {
        try {
            let apList = [
                {
                    value: "ا",
                    code: 10,
                },
                {
                    value: "آ",
                    code: 11,
                },
                {
                    value: "ب",
                    code: 12,
                },
                {
                    value: "پ",
                    code: 13,
                },
                {
                    value: "ت",
                    code: 14,
                },
                {
                    value: "ث",
                    code: 15,
                },
                {
                    value: "ج",
                    code: 16,
                },
                {
                    value: "چ",
                    code: 17,
                },
                {
                    value: "ح",
                    code: 18,
                },
                {
                    value: "خ",
                    code: 19,
                },
                {
                    value: "د",
                    code: 20,
                },
                {
                    value: "ذ",
                    code: 21,
                },
                {
                    value: "ر",
                    code: 22,
                },
                {
                    value: "ز",
                    code: 23,
                },
                {
                    value: "ژ",
                    code: 24,
                },
                {
                    value: "س",
                    code: 25,
                },
                {
                    value: "ش",
                    code: 26,
                },
                {
                    value: "ص",
                    code: 27,
                },
                {
                    value: "ض",
                    code: 28,
                },
                {
                    value: "ط",
                    code: 29,
                },
                {
                    value: "ظ",
                    code: 30,
                },
                {
                    value: "ع",
                    code: 31,
                },
                {
                    value: "غ",
                    code: 32,
                },
                {
                    value: "ف",
                    code: 33,
                },
                {
                    value: "ق",
                    code: 34,
                },
                {
                    value: "ک",
                    code: 35,
                },
                {
                    value: "گ",
                    code: 36,
                },
                {
                    value: "ل",
                    code: 37,
                },
                {
                    value: "م",
                    code: 38,
                },
                {
                    value: "ن",
                    code: 39,
                },
                {
                    value: "و",
                    code: 40,
                },
                {
                    value: "ه",
                    code: 41,
                },
                {
                    value: "ی",
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
                            apList.find((x) => x.value === thisArg[i]).code + ""
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
                        apList.find((x) => x.code + "" === thisArg[i] + thisArg[i + 1]).value
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
    peSmallToBig(array: string[]) {
        try {
            let apList = [
                {
                    value: "ا",
                    code: 10,
                },
                {
                    value: "آ",
                    code: 11,
                },
                {
                    value: "ب",
                    code: 12,
                },
                {
                    value: "پ",
                    code: 13,
                },
                {
                    value: "ت",
                    code: 14,
                },
                {
                    value: "ث",
                    code: 15,
                },
                {
                    value: "ج",
                    code: 16,
                },
                {
                    value: "چ",
                    code: 17,
                },
                {
                    value: "ح",
                    code: 18,
                },
                {
                    value: "خ",
                    code: 19,
                },
                {
                    value: "د",
                    code: 20,
                },
                {
                    value: "ذ",
                    code: 21,
                },
                {
                    value: "ر",
                    code: 22,
                },
                {
                    value: "ز",
                    code: 23,
                },
                {
                    value: "ژ",
                    code: 24,
                },
                {
                    value: "س",
                    code: 25,
                },
                {
                    value: "ش",
                    code: 26,
                },
                {
                    value: "ص",
                    code: 27,
                },
                {
                    value: "ض",
                    code: 28,
                },
                {
                    value: "ط",
                    code: 29,
                },
                {
                    value: "ظ",
                    code: 30,
                },
                {
                    value: "ع",
                    code: 31,
                },
                {
                    value: "غ",
                    code: 32,
                },
                {
                    value: "ف",
                    code: 33,
                },
                {
                    value: "ق",
                    code: 34,
                },
                {
                    value: "ک",
                    code: 35,
                },
                {
                    value: "گ",
                    code: 36,
                },
                {
                    value: "ل",
                    code: 37,
                },
                {
                    value: "م",
                    code: 38,
                },
                {
                    value: "ن",
                    code: 39,
                },
                {
                    value: "و",
                    code: 40,
                },
                {
                    value: "ه",
                    code: 41,
                },
                {
                    value: "ی",
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
                            apList.find((x) => x.value == thisArg[i]).code + ""
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
                        apList.find((x) => x.code + "" === thisArg[i] + thisArg[i + 1]).value
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

export default new Sort();