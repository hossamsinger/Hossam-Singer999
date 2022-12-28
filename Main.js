function truthCheck(collection, pre) {
    let truth=true;
    console.log(collection.length);
    console.log(collection[0]);
    for (let i = 0; i < collection.length; i++) {
        if(!collection[i][pre]){
            truth=false;
        }
    }
    console.log( truth);
    return truth;
    
  }
  
/*truthCheck([{name: "Quincy", role: "Founder", isBot: false}, 
        {name: "Naomi", role: "", isBot: false}, 
        {name: "Camperbot", role: "Bot", isBot: true}], "isBot");
truthCheck([{name: "Quincy", role: "Founder", isBot: false},
            {name: "Naomi", role: "", isBot: false},
            {name: "Camperbot", role: "Bot", isBot: true}], "name")*/
/*----------------------------------------------------------------------------------- */
function addTogether() {
    let sumVal=0;
    if(arguments.length==1){
        function sumTwoAnd(second) {
            // New argument is not a number
            if (typeof(second) !== "number") {
              return undefined;}
            else{
                return
            }
        

        }
        var val1=arguments[0];
        let answer=sumTwoAnd();
    }
    for (let i =0 ; i <arguments.length ; i++)
    {
        if(!Number.isInteger(arguments[i])){
            sumVal=undefined;
            break;
        }
        else
            sumVal+=arguments[i];
    }
    console.log(sumVal);
}
 function sumTwoAnd(){
    return arguments[0]
 }
// addTogether(23,30);
// addTogether(2,"3");
// addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
// // addTogether(2)([3]);
// addTogether("2", 3);
// addTogether(5, undefined);
// addTogether(5)(7);
/*----------------------------------------------------------------------------------- */
const Person = function(firstAndLast) {
    let fullName = firstAndLast;
  
    this.getFirstName = function() {
      return fullName.split(" ")[0];
    };
  
    this.getLastName = function() {
      return fullName.split(" ")[1];
    };
  
    this.getFullName = function() {
      return fullName;
    };
  
    this.setFirstName = function(name) {
      fullName = name + " " + fullName.split(" ")[1];
    };
  
    this.setLastName = function(name) {
      fullName = fullName.split(" ")[0] + " " + name;
    };
  
    this.setFullName = function(name) {
      fullName = name;
    };
  };
  
// const bob = new Person("Bob Ross");
// console.log(bob.getFullName());
// bob.getFullName();
// bob.getFirstName();
// bob.getLastName();
// setFirstName(first)
// setLastName(last)
// setFullName(firstAndLast)
/******************************************************************* */
function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    const pi=3.14;
    
    return arr;
  }
  /*a  is the orbit's semi-major axis
    μ=GM is the standard gravitational parameter
    G is the gravitational constant,
    M is the mass of the more massive body*/
 

//   orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);

/******************************************************************* */
  function palindrome(str) {
    // /[\W_]/g
    let palindRegx=/[\W_]/g; // or var re = /[^A-Za-z0-9]/g;
    var standPalind = str.toLowerCase().replace(palindRegx, '');
    console.log(standPalind);
    let strlong;
    if(standPalind.length%2==0)
        strlong=standPalind.length;
    else
        strlong=standPalind.length-1;
    /**********************************  length  */
    console.log("Actual length is  "+strlong);
    let truth=true;
    for (let i = 0; i < (strlong/2); i++) {
        if(standPalind[i]!=standPalind[standPalind.length-[i+1]]){
            truth=false;          
            break;  
        }
    }
    // return truth;
    console.log(truth);
}
//   palindrome("My age is 0, 0 si ega ym.");
//   palindrome("1 eye for of 1 eye.");
//   palindrome("0_0 (: /-\ :) 0-0");
//   palindrome("eye");
//   palindrome("racecar");
//   palindrome("ecaracecarac");
/******************************************************************* */
function convertToRoman(num) {
    let roman="";
    while(num!=0){
        if(num>=1000 ){
            roman+="M";
            num-=1000;
        }
        if(num>=500 && num<1000){
            roman+="D";
            num-=500;
        }
        if(num==400 ){
            roman+="CD";
            num-=400;
        }
        if(num>=100 && num<500){
            roman+="L";
            num-=100;
        }
        if(num==90 ){
            roman+="XC";
            num-=90;
        }
        if(num>=50 && num<100){
            roman+="L";
            num-=50;
        }
        if(num==40){
            roman+="XL";
            num-=40;
        }

        if(num>=10 && num<50){
            roman+="X";
            num-=10;
        }
        if(num==9){
            roman+="IX";
            num-=9;
        }
        
        if(num>=5 && num<10){
            roman+="V";
            num-=5;
        }
        if(num==4){
            roman+="IV";
            num-=4;
        }
        if(num>=1 && num<5){
            roman+="I";
            num-=1;
        }
    }    
    console.log(roman);
    return roman;
} 
convertToRoman(4);
convertToRoman(9);
// var map = {"M":1000, "D":500, "C":100,"L":50,"X":10,"V":5,"I":1,"":0};
// let roamnNumeral=('I', 'V', 'X', 'L', 'C', 'D', 'M');
// class roamnNumeral{
//     constructor(I,V,X,L,C,D,M) {
//         this.I=1;
//         this.V=5;
//         this.X=10;
//         this.L=50;
//         this.C=100;
//         this.D=500;
//         this.M=1000;
//     }
// }
/************************************************************************* */
function rot13(str) {
    str=str.toLowerCase();
    let alphabetstr = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z";
    let alphabetArr=alphabetstr.split(",");    // array of alpha character
    let decoderString="";      // final val of decryption;
    let key=13;       // shifting value
    let index,newindex;
    for(let i =0; i<str.length;i++){
        for(let j =0 ; j<alphabetArr.length; j++)
        {
            if (!alphabetstr.includes(str[i])) {
                decoderString+=str[i];
                break;
            }
            else{
                index = alphabetArr.indexOf(str[i]);
                newindex=((index+key)%26);
                decoderString+=(alphabetArr[newindex]);
                break;
            }
        }

    }
decoderString=decoderString.toUpperCase();
console.log(decoderString);
return decoderString;
}
// rot13("SERR PBQR PNZC");   // FREE CODE CAMP
// rot13("SERR CVMMN!");
// rot13("SERR YBIR?");
// rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");
/********************************************** ***************************/

function telephoneCheck(str){
    // regex that matches a phone number with no spaces,
    // with spaces, with dashes, and with or without country code
    let regex = /^(1 |1)?((\d{3})|((\d{3})))(-| |)(\d{3})(-| |)(\d{4})$/;      
    // regex that matches parentheses
    // with no spaces, with spaces, with dashes,
    // and with or without country code
    let regexParentheses = /^[1]*[\s]*[(]\d{3}[)][\s]*\d{3}[\s|-]*\d{4}$/;
    
    if (!regex.test(str)) {
        return regexParentheses.test(str);
    } else {
        return true;
    }
      
}
/********************************************** ***************************/
function checkCashRegister(price, cash, cid) {
    
    const INSUFFICIENT_FUNDS = {status: "INSUFFICIENT_FUNDS", change: []}
    const CLOSED = {status: "CLOSED", change: cid}
    const OPEN = {status: "OPEN", change: []}

    let cashInDrawerArray=[
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
  ];
  
  
    let change;
    return change;
  }
  
//   checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], 
//   ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);


/********************************************** ***************************/
