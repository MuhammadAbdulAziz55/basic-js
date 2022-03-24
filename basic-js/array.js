var friendsAge = [15, 17, 14, 21];
// console.log(friendsAge[0]);
// answer 15
// console.log(friendsAge[3]);
// answer = 20
var abdulAzizAge = friendsAge[3];
console.log(abdulAzizAge);
friendsAge[2] = 23;
console.log(friendsAge);
var position = friendsAge.indexOf(15); 
console.log(position);
// answer = 0   If we check the indexOf 44, we get the output is -1 because this array has only 15, 17, 14, 21 index. That's why we get -1 output
console.log(friendsAge.length);


const arr = [];
arr[0] = 1;
arr[1] = 2;
arr[2] = 3;
arr[99] = 100;
console.log(arr.length);
// answer = 100;
// length = LastIndex + 1;
// LastIndex = Length -1;



const names = [
    'Muhammad(Saw)',
    'Isa(A)',
    'Musa(A)',
    'Ibrahim(A)',
    'Adam(A)',
    'Yousuf(A)'
];
// if we add one or more component in names array, we can follow this two method

names[5] = 'Nuh(A)';
// names[names.length] = 'Nuh(A)';
console.log(names);




// const bestProphet = names.indexOf('Muhammad(Saw)');
// console.log(bestProphet);
console.log(names.length);


