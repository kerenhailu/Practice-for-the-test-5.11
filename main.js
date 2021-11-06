//!משימות לסופש
// 1.	צרו פונקציה שמחזירה promise, הפונקציה מקבלת שם,
// הפונקציה בודקת האם השם שווה לשם שלכם.
// function GetPromise(Name){
//     return new Promise((resolve,reject)=>{
//       Name=="keren"?resolve("the same"):reject("not the same")
//     })
// }
// async function getName(){
//     try{
//         return await GetPromise("keren")
//     }
//     catch(error){
//         return error
//     }
// }
// getName()
// .then((res)=>{console.log(res)})
// .catch((rej)=>{console.log(rej)})
// ===========================================================
// 2.	צרו פונקציה שמחזירה promise, הפונקציה מקבלת 2 מספרים, הפונקציה בודקת האם המספרים זהים.
// צרו פונקציה אסיכרונית שקוראת לפונקצית הפרומיס ומחזירה את התוצאה.
// קראו לפונקציה האסיכרונית והדפיסו את התוצאה.
// function getToNum(num1,num2){
//     return new Promise((resolve,reject)=>{
//         num1==num2?resolve("the same num"):reject("not the same")
//     })
// }
// async function TheNumTheSameOrNo(){
//     try{
//         return await getToNum(2,2)
//     }
//     catch(error){
//         return error
//     }
// }
// TheNumTheSameOrNo()
// .then(res=>{console.log(res)})
// .catch(rej=>{console.log(rej)})
// ===========================================================
// 3.	צרו פונקציה שמחזירה promise, הפונקציה מקבלת סטרינג, הפונקציה בודקת האם אורך הסטרינג גדול מ 6.
// הוסיפו טיימר שפועל 4 שניות ורק לאחר מכן מחזיר תשובות.
// צרו פונקציה אסיכרונית שקוראת לפונקצית הפרומיס ומחזירה את התוצאה.
// קראו לפונקציה האסיכרונית והדפיסו את התוצאה למסך.
// הציגו אנימציה של טעינה בזמן שמחכים לתשובה.
// function getString(word){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//         word.length>6?resolve("more then 6"):reject("small then 6")
//    },4000)
// })
// }
// async function MoreThen6(){
//     try{
//         return await getString("kerenHailu")
//     }
//     catch(err){
//         return err
//     }
// }
// MoreThen6()
// .then(res=>{console.log(res)})
// .catch(rej=>console.log(rej))
// ===========================================================
// class Dog{
//     Name;
//     age;
//     type;
//     constructor(Name,age,type){
//         this.Name=Name;
//         this.age=age;
//         this.type=type;
//     }
// }
// let dog1=new Dog("lolo",5,"dfz")
// let dog2=new Dog("Srzf",15,"erd")
// let dog3=new Dog("zdf",25,"dtxh")

// let ArrayDogs=[dog1,dog2,dog3]
// function getPromiseArrayDog(){
//     let num=0
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//           if(ArrayDogs==""){
//          reject("the array is empty")
//         }
//         for(const item of ArrayDogs){
//             if(num<item.age){
//                 num = item.age
//             }
//         }
//         resolve(num)
//         },4000)

//     })
// }
// async function TheOldDog(){
//     try{
//        return await getPromiseArrayDog()
//     }
//     catch(err){
//         return err
//     }
// }
// TheOldDog()
// .then(res=>{console.log(res)})
// .catch(rej=>{console.log(rej)})
// ===========================================================
// 1.	צרו MAP של 7 ילדים, כאשר המפתח הוא השם והערך הוא הגיל.
// הוסיפו ילד.
// הציגו בלוג את הגיל שבחרתן/ם לו.
// הציגו בלוג רק את הגילים.
// הציגו בלוג רק את השמות.
// הציגו בלוג את הילדים שהשם שלהם ארוך מ4 תווים.
// let kids=new Map()
// kids.set("gil",12)
// kids.set("dgcfv",22)
// kids.set("lkyu",32)
// kids.set("szxc",42)
// kids.set("kgmb",52)
// kids.set("gfchhn",62)
// kids.set("fghghcn",72)
// console.log(kids)

// for(const key of kids.keys()){
//     if(key.length>4){
//         console.log(key);
//     }
// }
// ===========================================================
//!משימת משתמשים
// let obj={
//     name:"keren",
//     age:22,
//     lname:"hailu"
// }
// function returnToJson(){
//     return new Promise((resolve,reject)=>{
//         obj?resolve("good"):reject("bad");
//     })
// }
// async function getJson(){
//     try{
//         return await returnToJson()
//         .then(res=>{res.json()})
//     }
//     catch(error){
//         return error
//     }
// }
// getJson().then(res=>console.log(res))
// .catch(rej=>{console.log(rej)})
// ===========================================================
// פונקצית פרמיס
// function promise(){
//     return new Promise((resolve,reject)=>{
//         "keren"=="keren"?resolve("yes"):reject("no");
//     })
// }
// async function returnPromise(){
//     try{
//         promise()
//     }
//     catch(error){
//         return error
//     }
// }
// returnPromise()
// .then((res)=>{console.log(res)})
// .catch((rej)=>{console.log(rej)})

// ==============================================================
// צרו מחלקה של יישוב עם שדות של מס תושבים ושם.
// בנו פונקציה שמחזירה את הפרטים בטקסט אחד.
// לאחר מכן צרו מחלקה של מדינה, עיר וכפר, המחלקות יורשות מהמחלקה יישוב.
// הוסיפו לכל מחלקה פונקציה שקוראת לפונקציה ממחלקת ההורה ומחזירה את הטקסט עם סוג היישוב .
// צרו פונקציה סטטית במחלקה יישוב שמקבלת מספר אובייקטים ומחזירה את האובייקט עם מספר התושבים הגדול ביותר.
// צרו טופס שמקבל נתונים מהמשתמש ועל פי הטופס יוצרת את האובייקט המתאים ומוסיפה אותו לטבלה מתחת לטופס.

class Settlement {
  name;
  residents;
  constructor(name, residents) {
    this.name = name;
    this.residents = residents;
  }
  static bigResidents(array) {
    let bigNum = array[0];
    for (let i = 1; i < array.length; i++) {
      if (bigNum.residents < array[i].residents) {
        bigNum.residents = array[i].residents;
      }
    }      return bigNum;

    // for (const item of array) {
    //   item.residents> bigNum

    // }
    // bigNum=item.residents
    // return bigNum
  }
  printDitels() {
    return `${this.name} ${this.residents}`;
  }
}
// const a=new Settlement("fff","dd")
// console.log(a.printDitels());
class Country extends Settlement {
  name;
  residents;
  constructor(name, residents) {
    this.name = name;
    this.residents = residents;
  }
}
const b = new Settlement("keren", 401);
console.log(b.printDitels());

class City extends Settlement {
  name;
  residents;
  constructor(name, residents) {
    this.name = name;
    this.residents = residents;
  }
}
const c = new Settlement("hailu", 77);
console.log(c.printDitels());

class Village extends Settlement {
  name;
  residents;
  constructor(name, residents) {
    this.name = name;
    this.residents = residents;
  }
}
const d = new Settlement("rgvr", 12);
console.log(d.printDitels());

console.log(Settlement.bigResidents([b, c, d]));

class Keren{
  name;
  age;
  constructor(name,age){
    this.name=name;
    this.age=age;
  }
}
// ===================================================================
// function ReturnPromise(num){
//   return new Promise((resolve,reject)=>{
// num==9?resolve("yes"):reject("no");
//   })
// }
// async function p(){
//   try{
//     return await ReturnPromise(7)
//   }
//   catch(err){
//     return err
//   }
// }
// p().then(res=>{console.log(res)})
// .catch(rej=>{console.log(rej)})
// ===================================================================
async function fetchF(){
  try{
    return fetch(`rf`)
    .then(res=>res.json())
  }
  catch(err){
    return err
  }
}
fetchF().then(res=>{console.log(res)})
// ======================================================