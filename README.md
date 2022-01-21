Hello , this is a module for **sorting**

## How to use :

- install

```bash
npm install sort-dot-js
```

- config :

```javascript
const sort = require("sort-dot-js");
```

- Numbers, Big to small :

```javascript
let numbers = [1, 100, 10];
sort.numBigToSmall(numbers);

// out : [100,10,1]
```

- Numbers, Small To Big :

```javascript
let numbers = [1, 100, 10];
sort.numSmallToBig(numbers);

// out : [1,10,100]
```

- English, big to small :

```javascript
let words = ["Circle", "Angel", "Banana"]; // or ['c','a','b']
sort.enBigToSmall(words);

// out : [ 'Angel', 'Banana', 'Circle' ]
```

- English, small to big :

```javascript
let words = ["Circle", "Angel", "Banana"]; // or ['c','a','b']
sort.enSmallToBig(words);

// out : [ 'Circle', 'Banana', 'Angel' ]
```

- Persian, big to Small :

```javascript
let words = ["آسمان", "بابا", "پادری"]; // or ['ا','ب','پ']
sort.peBigToSmall(words);

// out : [ 'پادری', 'بابا', 'آسمان' ]
```

- Persian, small to big :

```javascript
let words = ["آسمان", "بابا", "پادری"]; // or ['ا','ب','پ']
sort.peSmallToBig(words);

// out : [ 'آسمان', 'بابا', 'پادری' ]
```

## Precautions :

- data type :

Input parameters in methods must be Array type only

- Words of other languages :‌

You can use english (en/Big/Small) related methods, but it may have errors in some languages and it is not accurate, we identified this error in Persian and developed a proprietary method for it, if you know such language, email me. 

## About :

- The purpose of development :

The purpose of creating this library is simply to make sorting operations in JavaScript simple.

- Does it use the SORT JavaScript method ? 

No, this is another algorithm 


#### developer :

The library was developed by Hamidreza Ghahremani\
[mail](mailto:hamidgh@mail.ir)\
[telegram](https://telegram.me/hamid_the)
