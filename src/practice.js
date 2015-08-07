var pluck = function(array, propertyName) {
    var newArr = [];
    for (var i = 0; i < array.length; i++) {
        newArr.push(array[i][propertyName]);
    } return newArr;
};





var people = [
    {name : 'moe', age : 30},
    {name : 'curly', age : 50}
];

console.log(pluck(people, 'name'));

console.log(people[0]['name']);