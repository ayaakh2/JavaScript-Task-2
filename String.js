// Question 1
console.log("Hello" + " " + "World");

// Question 2
console.log("JavaScript".length);

// Question 3
console.log("Programming".charAt(0));

// Question 4
console.log("coding is fun".slice(0, 4));

// Question 5
console.log("cat".replace("a", "e"));

// Question 6
console.log("javascript".toLocaleUpperCase());

// Question 7
console.log("apple,banana,orange".split(","));

// Question 8
console.log(["hello", "world"].join(" "));

// Question 9
console.log(" hello world ".trim());

// Question 10
console.log("hello world".includes("world"));

// Question 11
let s = "hello";
let news = s.split("").reverse().join("");
console.log(news);

// Question 12
let str = "elephant";
let c = 0;
for (let i = 0; i < str.length; i++) {
  if (str.charAt(i) == "e") {
    c++;
  }
}
console.log(c);

// Question 13
let rr = "racecar";
let flag = true;
for (let i = 0; i < rr.length / 2; i++) {
  if (rr.charAt(i) != rr.charAt(rr.length - 1 - i)) {
    flag = false;
  }
}
console.log(flag);

// Question 14
let st = "hello world";
let ns = "";
// console.log(st);
ns += st[0].toUpperCase();
for (let i = 1; i < st.length; i++) {
  if (st.charAt(i).includes(" ")) {
    ns += st.charAt(i);
    ns += st.charAt(i + 1).toUpperCase();
    i++;
  } else {
    ns += st.charAt(i);
  }
}
console.log(ns);

// Question 15
let n = 1234.5678;
console.log(n.toFixed(2));

// Question 16
let ss = "There are 3 apples and 2 oranges";

let numbers = ss.match(/\d+/g);

console.log(numbers);

// Question 17
let email = "example@email.com";
if (email.includes("@") && email.endsWith(".com")) {
  console.log(true);
} else {
  console.log(false);
}

// Question 18
let sen = "This is a bad word";
console.log(sen.replace("bad", "good"));

// Question 19
let d = "aabbc";
let newd = "";
for (let i = 0; i < d.length; i++) {
  if (!newd.includes(d.charAt(i))) {
    newd += d.charAt(i);
  }
}
console.log(newd);

// Question 20
let sor = "hello";
let sorted = sor.split("").sort().join("");
console.log(sorted);

// Question 21
