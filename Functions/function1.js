// console.log("Hello");
// function saymyname (){
//     console.log("Iqra");
// }
// saymyname();
// function addTwoNumbers(no1,no2){
//     console.log(no1+no2);
    
// }
// addTwoNumbers(11,9);

function minustwonumbers(no1,no2){
//    let result=no1-no2;
//    return result;
return no1-no2;

}
let result=minustwonumbers(70,40);
console.log("Result:",result)

function loginuser(username){
    console.log(`${username} just loged in`)
    return username

}
let show=loginuser("Iqra");
console.log("show:",show);

//default value

function showPassword(Password=12345){
    if(!Password){
        console.log("plz enter password");
        return;
    }
    return(`${Password} is the password`);
}
console.log(showPassword(9000));



