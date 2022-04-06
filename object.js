var students = {id: 01, phone: +9939339, name: 'Muhammad Ibn Abdullah'};


var bagInfo = {code: 3321, price: 500, color: 'black', brandName: 'Shaolong'};

/**console.log(students);
console.log(bagInfo);

// If you want to get phone no. in this object, you can follow this 3 process

var phoneNo = students["phone"];
console.log(phoneNo);*/

var phoneNo1 = students.phone;
console.log(phoneNo1); 

// var phonePropName = 'phone';
// var phoneNo2 = students[phonePropName];
// console.log(phoneNo2);

// If you to update data of object, you can follow this process

students.phone = 8801765501651;  /**tricks-1 */
students['phone'] = 88801890134074; /**tricks-2 */
console.log(students);

// how to add property in Object.For example we want to add age property in students object
students.age = 21;      /**tricks-1 */
students['age'] = 30;   /**tricks-2 */
console.log(students);




