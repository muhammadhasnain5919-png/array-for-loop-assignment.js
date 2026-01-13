let numbers1 = [10, 20, 30, 40, 50];
for (let i = 0; i < numbers1.length; i++) {
    console.log(numbers1[i]);
}

let colors = ["red", "blue", "green", "yellow"];
for (let i = colors.length - 1; i >= 0; i--) {
    console.log(colors[i]);
}

let marks1 = [50, 60, 70, 80];
let sum1 = 0;
for (let i = 0; i < marks1.length; i++) {
    sum1 = sum1 + marks1[i];
}
console.log(sum1);

let fruits1 = ["apple", "banana", "mango", "orange"];
let count1 = 0;
for (let i = 0; i < fruits1.length; i++) {
    count1++;
}
console.log(count1);

let nums1 = [45, 22, 89, 14, 77];
let largest = nums1[0];
for (let i = 1; i < nums1.length; i++) {
    if (nums1[i] > largest) {
        largest = nums1[i];
    }
}
console.log(largest);

let values = [9, 3, 15, 1, 6];
let smallest = values[0];
for (let i = 1; i < values.length; i++) {
    if (values[i] < smallest) {
        smallest = values[i];
    }
}
console.log(smallest);

let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8];
let evenCount = 0;
for (let i = 0; i < numbers2.length; i++) {
    if (numbers2[i] % 2 === 0) {
        evenCount++;
    }
}
console.log(evenCount);

let nums2 = [11, 22, 33, 44, 55];
for (let i = 0; i < nums2.length; i++) {
    if (nums2[i] % 2 !== 0) {
        console.log(nums2[i]);
    }
}

let numbers3 = [2, 4, 6, 8];
let multiplied = [];
for (let i = 0; i < numbers3.length; i++) {
    multiplied[i] = numbers3[i] * 2;
}
for (let i = 0; i < multiplied.length; i++) {
    console.log(multiplied[i]);
}

let arr = [10, 20, 30, 40, 50];
let found = false;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 30) {
        found = true;
    }
}
console.log(found);

let marks2 = [45, 67, 32, 90, 50, 41];
let pass = 0;
let fail = 0;
for (let i = 0; i < marks2.length; i++) {
    if (marks2[i] >= 50) {
        pass++;
    } else {
        fail++;
    }
}
console.log(pass);
console.log(fail);

let fruits2 = ["apple", "banana", "cherry"];
for (let i = 0; i < fruits2.length; i++) {
    console.log(i, fruits2[i]);
}

let scores = [80, 70, 90, 100];
let sum2 = 0;
for (let i = 0; i < scores.length; i++) {
    sum2 = sum2 + scores[i];
}
let average = sum2 / scores.length;
console.log(average);

let nums3 = [-5, 10, -3, 7, -1, 8];
for (let i = 0; i < nums3.length; i++) {
    if (nums3[i] > 0) {
        console.log(nums3[i]);
    }
}

let original = [1, 2, 3, 4];
let copy = [];
for (let i = 0; i < original.length; i++) {
    copy[i] = original[i];
}
for (let i = 0; i < copy.length; i++) {
    console.log(copy[i]);
}
