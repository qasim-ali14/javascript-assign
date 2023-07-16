//grand assignment::::
// Question 1: Write a JavaScript function that takes in an array of integers and returns the sum of all the positive numbers in the array.
/*
let fun = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    console.log(` ${arr[i]} `)
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
}
let arr = [1, 2, -3, 4];
let cat = fun(arr);
console.log(` ${cat} are sum of +ve integer array  :`);
*/
//Question 2: Write a JavaScript function that takes in a string and returns the reverse of the string without using any built-in reverse functions.
/*
let converter=(str)=>{
  let reverse='';
  for(let i=str.length-1;i>=0;i--){
    reverse+=str[i];
  }
  return reverse;
}

console.log(converter('ila misaq'));
*/
//Question 3: Write a JavaScript function that takes in a number and checks if it is a prime number. Return true if it is, and false otherwise.
/*
let check = (num) => {
  if (num % 2 == 0) {
    return false;
  }
  else {
    return true;
  }
}
let num=prompt('enter number :');
let ch = check(num);
console.log(ch);
*/
//Question 4: Write a JavaScript function that takes in an array of numbers and returns the second smallest number in the array.
/*let smallestarray=(smarr)=>{
  smarr.sort((a, b) => a - b);
  console.log(smarr);
  console.log(` our second smallest element is ${smarr[1]}.`);
}
let smarr=[3,4,5,6,7,2];
smallestarray(smarr)
*/
// Question 5: Write a JavaScript function that takes in an array of strings and returns a new array containing only the strings that have more than five characters.
/* 
let arr=(arra)=>{
   const filtered=arra.filter((str)=> str.length>5);
   return filtered;
 }
let str=['qasim ali','ahmeda','hello']
console.log(arr(str));

*/
//Question 6: Write a JavaScript function that takes in an array of objects representing students (each object has properties for name and grade). Sort the array in descending order based on the students' grades.
/*
let collect=(array)=>{
   
  array.sort((a,b)=> b.grade - a.grade);
  return array;
  
}
let arr=[
  {
    'name':'qasim ali',
    grade:56
  },
  {
    'name':'ali hassan',
    grade:55
  },
  {
    'name':'ahmed ali',
    grade:23
  }
]
console.log(collect(arr));
*/
//Question 7: Write a JavaScript function that takes in a string and counts the number of vowels (a, e, i, o, u) in the string.
/* 
let count=(cnt)=>{
   let countt=0;
   for(let i=0;i<cnt.length;i++){
   if(cnt[i]=='a' || cnt[i]=='e' ||cnt[i]=='i' ||cnt[i]=='o' ||cnt[i]=='u' ){
   countt++;   }
     console.log(cnt[i]);
 }
   console.log(` we have ${countt} vowels in this string.`);
 }

count('aeiou');
*/
//Question 8: Write a JavaScript function that takes in a number and calculates its factorial (the product of all positive integers less than or equal to the number).
/*
let cal=(num)=>{
  let fac=1;
  let i=1;
while(i<=num)
{
  fac=fac*i;
  i++;
}
console.log(` factorial of ${num} is ${fac}`);
}
let f=prompt('enter a number for factorial');
cal(f);
*/
//Question 9: Write a JavaScript function that takes in an array of numbers and returns the average of all the numbers in the array.
/*
let avg=(num)=>{
  let sum=0;
  for(let i=0;i<num.length;i++){
    sum+=num[i];
  }
  return sum/2
}
let number=[1,2,3];
console.log(avg(number));
*/
//Question 10: Write a JavaScript function that takes in two numbers and returns their greatest common divisor (GCD) using the Euclidean algorithm.
/*
let calculateGCD=(a,b)=>{
  if(b>a){
    [a,b]=[b,a]
  }
  while (b !== 0) {
    let remainder=a%b;
    a=b;
    b=remainder;
  }
  return a;
  
}
console.log(calculateGCD(33,4));
*/
//Question 11: Write a JavaScript function that takes in a sentence and returns the word with the highest number of vowels.
/*function countVowels(sentence) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let maxVowelCount = 0;
  let wordWithMostVowels = '';

  // Convert the sentence to lowercase to handle both uppercase and lowercase vowels
  const lowerSentence = sentence.toLowerCase();

  // Split the sentence into individual words
  const words = lowerSentence.split(' ');

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    let vowelCount = 0;

    // Count the vowels in the current word
    for (let j = 0; j < word.length; j++) {
      if (vowels.includes(word[j])) {
        vowelCount++;
      }
    }

    // Check if the current word has more vowels than the previous word with the most vowels
    if (vowelCount > maxVowelCount) {
      maxVowelCount = vowelCount;
      wordWithMostVowels = word;
    }
  }

  return {
    vowelCount: maxVowelCount,
    wordWithMostVowels: wordWithMostVowels
  };
}

const sentence = "The quick brown fox jumps over the lazy aeioleli";
const result = countVowels(sentence);
console.log(result.vowelCount);
console.log(result.wordWithMostVowels); 
*/
//Question 12: Write a JavaScript function that takes in a string and checks if it is a palindrome (reads the same forwards and backwards) without using any built-in reverse functions.
//Question#12
/*let check_palindrome=(str)=>{
    let string=""
    let new_str=str.replace('').toLowerCase();
    for(let i=new_str.length-1;i>=0;i--){
       string+=new_str[i]
    }
    if(new_str===string){
      console.log('Yes, The given string is palindrome')
    }
    else{
      console.log('No, The given string is not palindrome')
    }
  // console.log(string);
}
check_palindrome("baba")
*/
//Question 13: Write a JavaScript function that takes in two arrays of numbers and returns a new array containing only the numbers that are present in both arrays.
/*var arr1=[1,2,3]
var arr2=[4,5,6]

let unique_arr=(arr1,arr2)=>{
   var new_arr=[]
   for(var i=0;i<arr1.length;i++){
      var cur_num=arr1[i];
      if(arr2.includes(cur_num)){
         new_arr.push(cur_num)
      }
   }
   return new_arr;
}
unique_arr(arr1,arr2)
let com_num=unique_arr(arr1,arr2)

if(com_num.length!=0){
   console.log(com_num)
}
else{
   console.log('NO common numbers in the array')
}
*/
/*Question 14: Write a JavaScript function that takes in a number and generates the Fibonacci sequence up to that number.*/
/*
let febnocci=(num)=>{
    if(num<0){
        console.log("Invalid Number");
    }
    else{
    let num1=0,num2=1;
    let num3=0;
    console.log('Fibonacci serirs:');
    console.log(n1);
    console.log(n2);
    n3=n1+n2;
    while(n3<=num){
        console.log(n3);
        n1=n2;
        n2=n3;
        n3=n1+n2;
    }
    }
}
febnocci(500);
*/

//Question 15: Write a JavaScript function that takes in an array of numbers and removes all duplicates, returning a new array with unique elements only.

/*let remove_duplicate=(arr)=>{
    const new_arr=[];
    for(let i=0;i<arr.length;i++){
        if(new_arr.indexOf(arr[i])===-1){
            new_arr.push(arr[i]);
        }
    }
    return new_arr;
}
let arr=[1,2,3,4,5,3,8,9,6,2,3]
const unique_arr=remove_duplicate(arr);
console.log(unique_arr);
*/

//Question 16: Write a JavaScript function that takes in a string and returns the most frequent character in the string.
/*
let most_freq_char=(str)=>{
    let obj={}
    let most_r_char=''
    for(let i=0;i<str.length;i++){
        if(str[i]==" "){continue}
       // console.log(str[i])
        if(!obj[str[i]]){
            obj[str[i]]=0
        }
        obj[str[i]]++
        if(most_r_char==''||obj[str[i]]>obj[most_r_char]){
            most_r_char=str[i]
        }
    }
    return most_r_char
}
console.log(most_freq_char("Hello World"))
*/
//Question 17: Write a JavaScript function that takes in an array of objects representing products (each object has properties for name, price, and quantity) and calculates the total value of all the products.
/*
const products=[
    { name:"Product 1", price:10, quantity:5 },
    { name:"Product 2", price:20, quantity:3 },
    { name:"Product 3", price:30, quantity:8 }
  ];
let total_value=(products)=>{
    let total_val=0;
    for(let i=0;i<products.length;i++){
        total_val+=products[i].price*products[i].quantity;
    }
    return total_val;
}
console.log(total_value(products));
*/
//Question 18: Write a JavaScript function that takes in a number and checks if it is a perfect number (a number equal to the sum of its proper divisors).
/*let is_perfect=(num)=>{
    let sum=0
    for(let i=1;i<num;i++)
    if(num%i==0){
        sum+=i
    }
    return sum===num
}
console.log(`The number is a Perfect Number: ${is_perfect(100)}`)
*/
//Question 19: Write a JavaScript function that takes in an array of strings and returns a new array with the strings sorted in alphabetical order, ignoring case sensitivity.
/*let sort=(arr)=>{
    const new_ar=arr
return arr.slice().sort((a,b)=>{
   return a.toLowerCase().localeCompare(b.toLowerCase());
})
}

const string_arr=['Bilal','qasim','rehman','Ali','Husnain','ahmed']
const sort_arr=sort(string_arr)
console.log(sort_arr)
*/
//Question 20: Write a JavaScript function that takes in a string and determines if it is an anagram of another string (contains the same characters in a different order).
/*let is_anagram=(str1,str2)=>{
    if(str1.length!==str2.length){return false}
    let strobj={}
    for(ch of str1){
        strobj[ch]=(strobj[ch] || 0 )+1
    }
    for(ch of str2){
        if(!strobj[ch]){return false}
        strobj[ch]--
    }
    return true
}
let str1='hellooo'
let str2='lloehot'
console.log(is_anagram(str1,str2))
*/
//Question 21: Write a JavaScript program that takes in an array of numbers and finds the longest increasing subarray within the array. The program should return the starting and ending indices of the subarray
/*let arr=[1,2,3,4,-1,2,5,6,11,6];
let long_inc_subarr=(arr)=>{
    start=0;
    end=0;
    max=1;
    len=1;
    for(let i=1;i<arr.length;i++){
        if(arr[i]>arr[i-1]){
            len++;
        }
        else{
            if(max<len){
                max=len;
                end=i-1;
                start = end - max + 1;
            }
            len=1;
        }
    }
    if(len>max){
        max=len;
        end=arr.length-1;
        start = end - maxLength + 1;
    }
    for(let j=start;j<=end;j++){
        console.log(arr[j]);    
    }
    
}
long_inc_subarr(arr);
*/
//Question 22: Write a JavaScript program that takes in a string and finds the longest palindrome within the string. The program should return the longest palindrome substring.
/*function isPalin(st) {
  const reversedStr = st.split('').reverse().join('');
  return st === reversedStr;
}

function findLongestPalin(str) {
  let longestPalindrome = '';

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      const currentSubstring = str.substring(i, j);

      if (isPalin(currentSubstring) && currentSubstring.length > longestPalindrome.length) {
        longestPalindrome = currentSubstring;
      }
    }
  }

  return longestPalindrome;
}
const inputString = "nsn";
const result = findLongestPalin(inputString);
console.log(result);
*/
//Question 23: Write a JavaScript program that takes in an array of strings and groups them into anagrams. An anagram is a word formed by rearranging the letters of another word. The program should return an array of arrays, where each inner array represents a group of anagrams.
/*function groupAnagrams(strings) {
  const anagramGroups = {};

  for (const str of strings) {
    const sortedStr = str.split('').sort().join('');
    if (anagramGroups[sortedStr]) {
      anagramGroups[sortedStr].push(str);
    } else {
      anagramGroups[sortedStr] = [str];
    }
  }

  // Convert the object values to arrays to get the final result
  const result = Object.values(anagramGroups);

  return result;
}

// Example usage:
const inputArray = ["eat", "tea", "tan", "ate", "nat", "bat"];
const result = groupAnagrams(inputArray);
console.log(result);
// Output: [["eat","tea","ate"],["tan","nat"],["bat"]]
*/
//
//Question 24: Write a JavaScript program that implements the Merge Sort algorithm to sort an array of numbers in ascending order. Avoid using any built-in sorting functions.
/*
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr; 
  }


  const mid = Math.floor(arr.length / 2);

  
  const leftHalf = arr.slice(0, mid);
  const rightHalf = arr.slice(mid);

 
  const sortedLeft = mergeSort(leftHalf);
  const sortedRight = mergeSort(rightHalf);

  
  return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
  const mergedArr = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      mergedArr.push(left[leftIndex]);
      leftIndex++;
    } else {
      mergedArr.push(right[rightIndex]);
      rightIndex++;
    }
  }


  while (leftIndex < left.length) {
    mergedArr.push(left[leftIndex]);
    leftIndex++;
  }

  while (rightIndex < right.length) {
    mergedArr.push(right[rightIndex]);
    rightIndex++;
  }

  return mergedArr;
}

// Example usage:
const unsortedArray = [38, 27, 43, 3, 9, 82, 10];
const sortedArray = mergeSort(unsortedArray);
console.log(sortedArray); // Output: [3, 9, 10, 27, 38, 43, 82]
*/
//Question 25: Write a JavaScript program that takes in a number and generates a Pascal's Triangle with the specified number of rows. The program should output the triangle as an array of arrays, where each inner array represents a row of the triangle
/*
function generatePascalsTriangle(numRows) {
  const triangle = [];

  for (let i = 0; i < numRows; i++) {
    const row = [];
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
    
        row.push(1);
      } else {
      
        const prevRow = triangle[i - 1];
        const value = prevRow[j - 1] + prevRow[j];
        row.push(value);
      }
    }
    triangle.push(row);
  }

  return triangle;
}

// Example usage:
const numRows = 5;
const pascalsTriangle = generatePascalsTriangle(numRows);
console.log(pascalsTriangle);

*/
//Question 26: Write a JavaScript program that takes in an array of integers and finds the maximum sum of a subarray within the array. The program should return the maximum sum.
/*function maxSubarraySum(array) {
  // Initialize the variables.
  let max_ending_here = 0;
  let max_so_far = 0;


  for (let i = 0; i < array.length; i++) {

    max_ending_here = max_ending_here + array[i];


    if (max_ending_here < 0) {
      max_ending_here = 0;
    }

  
    if (max_so_far < max_ending_here) {
      max_so_far = max_ending_here;
    }
  }


  return max_so_far;
}
*/
//Question 30: Write a JavaScript program that implements the Sieve of Eratosthenes algorithm to find all prime numbers up to a given number. The program should return an array of prime numbers.
/*function sieveOfEratosthenes(n) {
  // Initialize a boolean array to represent all numbers from 2 to n.
  const isPrime = new Array(n + 1).fill(true);

  // Mark all even numbers as non-prime.
  for (let i = 2; i <= n; i += 2) {
    isPrime[i] = false;
  }

  // Iterate through all odd numbers from 3 to n.
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    // If the current number is prime, mark all its multiples as non-prime.
    if (isPrime[i]) {
      for (let j = i * i; j <= n; j += i) {
        isPrime[j] = false;
      }
    }
  }

  // Create an array to store all prime numbers.
  const primes = [];

  // Iterate through the boolean array and add all prime numbers to the array.
  for (let i = 2; i <= n; i++) {
    if (isPrime[i]) {
      primes.push(i);
    }
  }

  // Return the array of prime numbers.
  return primes;
}
*/
// Question 31: Write a JavaScript function called divideNumbers that takes two numbers as parameters and divides the first number by the second number. However, if the second number is zero, the function should throw a custom error with the message "Cannot divide by zero!". Use a try and catch block to handle the error and display an appropriate error message.Your task is to implement the divideNumbers function using try and catch to handle the error condition. If the division is successful, the function should return the result of the division. If an error occurs, the function should return null.Write the code for the divideNumbers function and test it with different inputs to ensure it handles the error correctly.

/*let dividenumber=(num1,num2)=>{
  let dividing;
  try{
   if(num2==0){
        throw new Error('cannot divide into zero:');
   
   }
  return num1/num2;
  }
 catch(error){
    console.error(error.message);
   return null;
    
  }
}
console.log(dividenumber(8,0));
*/
//Question 32: Write a JavaScript function called findLargestElement that takes an array of numbers as a parameter and returns the largest element in the array. However, if the input is not an array or if the array is empty, the function should throw a custom error with the message "Invalid input: please provide a non-empty array!". Use a try and catch block to handle the error and display an appropriate error message.Your task is to implement the findLargestElement function using try and catch to handle the error condition. If the array is valid and contains elements, the function should return the largest element. If an error occurs, the function should return null.
/*
let largestelement=(array)=>{
  try{
    if(array.length==0){
      throw new Error('invalid input');
    }
    let largest;
    largest=array[0];
      for(let i=0;i<array.length;i++){
        if(array[i]>largest){
          largest=array[i];
        }
    
    }
    return largest;
  }
  catch(error){
    console.error(error.message);
    return null;
  }

}

let arr=[];
console.log(largestelement(arr));
*/
//Question 33: Write an asynchronous JavaScript function called delayedSum that takes two numbers as parameters and returns the sum of the numbers after a delay of 1 second. Use async and await to handle the asynchronous delay.Your task is to implement the delayedSum function using async and await to wait for the delay before computing and returning the sum of the numbers.
/*function hello(num1,num2){
 return new Promise((resolve,reject)=>{
   setTimeout(()=>{
     let num3=num1+num2;
     resolve(num3);
     
   },2000)
 })
}
async function delayedsum(){
  try{
    let cat=await hello(3,4);
    console.log(cat);
  }
  catch(error){
    console.log(error,'error')
  }
} 
delayedsum();
*/
//Question 34: Write a JavaScript function that takes two numbers as parameters and returns their sum.
/*let fun=(a,b)=>{
  return a+b;
}
console.log(fun(4,3));
*/
//Question 35: Write a JavaScript function that takes an object as a parameter and uses a for...in loop to display all the key-value pairs in the object
/*let dis=(objec)=>{
  for(key in objec){
    console.log(`${objec[key]} of ${[key]}`);
  }
}
let obj={
  'name':'qasim ali',
  rollno:077
}
dis(obj);*/
//Question 36:Write a JavaScript function that calculates the factorial of a given number using recursion
/*function  recur(num){
  if(num==0)
    return 1;
  else{
    return num*recur(num-1);
  }
}
console.log(recur(5));*/
//Question 37: Write a JavaScript function that takes an array as a parameter and uses a for...of loop to display each element of the array.
/*let play=(arrr)=>{
  for(let x of arrr){
    console.log(`${x} `)
  }

}
let arr=['qasim','ali','sajjad'];
play(arr);*/
//Question 38: Write a JavaScript function that checks if a given number is prime
/*let check=(num)=>{
  if(num%2!=0){
   return true;
  }
  else
  return false;
}
console.log(check(4))*/
//Question 39: Write a JavaScript function that takes a string as a parameter and checks if it is a palindrome.
/*let check_palindrome=(str)=>{
    let string=""
    let new_str=str.replace('').toLowerCase();
    for(let i=new_str.length-1;i>=0;i--){
       string+=new_str[i]
    }
    if(new_str===string){
      console.log('Yes, The given string is palindrome')
    }
    else{
      console.log('No, The given string is not palindrome')
    }
}
check_palindrome("qasim")*/