//variables and data types

const product={
    name:"ball pen",
    rating: 4,
    offer:5,
    price:270,
};

console.log(product);
console.log(typeof product["offer"]);

const profile={
    username:"abcd",
    isFollow: true,
    followers: 534000,
    following:13,
};

console.log(profile);
console.log(typeof profile["username"]);


//Conditional Statements

let age=16;
if(age>=18){
    console.log("You can vote");
}else{
    console.log("You cannot vote");
}

//odd or even
let num=100;
if(num%2===0){
    console.log(num,"is an even number");
}else{
    console.log(num, "is an odd number");
}

//there are also if-else-if...conditions but its not recommended.

//shift+alt+a for multi line comment

/* ternary operator
condition?true output : false output   -- 3 operands */
{let age=5;
let result= age>=18? "adult" : "minor";
console.log(result);}