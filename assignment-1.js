//General Programming Logic

//Write a function to add two numbers.
function add(a,b){
    return a+b;
}
document.write("sum of two numbers is "+add(2,4));
document.write("<br>");



//Write a function to get biggest between 2 numbers.
function biggestNumber(a,b){
    if(a>b)
    {
        return a;
    }
    else{
        return b;
    }
}
document.write("biggest between two numbers is " +biggestNumber(2,4));
document.write("<br>");
//Write a function to find whether the give number is even or not
function isEven(x){
    if(x%2==0){
    
        return true;
    }
    else{
    
        return false;
    }
}
document.write(isEven(6));



/**Write a function to get grade of 3 subject marks.
a. Grade is based on average of 3 subject marks
i. Average>90 => A+
ii. Average<90 and average>=80 => A
iii. Average<80 and average>=70 => A-
iv. Average<70 and average>=60 => B+
v. Average<60 and average>=50 => B
vi. Average<50 => FAIL**/
function average(a,b,c){
    sum=a+b+c;
    avg=(sum/3);
    if(avg>90){
        return "A+";
    }
    else if(avg>=80){
        return "A";
    }
    else if(avg>=70){
        return "A-";
    }
    else if(avg>=60){
        return "B+";
    }
    else if(avg>=50){
        return "B";
    }
    else if(avg<50){
        return "Fail";
    }
}

document.write("<br>"+average(50,60,70));
//Write a function to print first 10 natural numbers
function natural(){
    number="";
    for(i=1;i<=10;i++){

number=number+"<br>"+i;
    }
    return number;
}
document.write("<br>"+"first ten natural numbers are "+natural(10));


//Write a function to print first 10 natural numbers in reverse order
function reverse(x){
    revnumber="";
    for(i=x;i>=1;i--){
        revnumber=revnumber+"<br>"+i;
    }
    return revnumber;
}
document.write("<br>"+"reverse of natural numbers are "+reverse(10));
//Write a function to print first 10 even natural numbers
function evenNatural(){
    evennumber="";
    for(i=1;i<=10;i++){
    if(i%2==0){
        evennumber=evennumber+"<br>"+i;

    }
}
return evennumber;

}
document.write("<br>"+"First 10 even natural numbers are "+evenNatural(10));

//Write a function to print numbers between the range ( say 10 to 100 OR 100 to 200 etc.,)

function range(x,y){
numberrange="";
for(i=x;i<y;i++){
    numberrange=numberrange+"<br>"+i;
}

return numberrange;
}

document.write("<br>"+"numbers between the range are "+range(10,100));

//Write a function to print mathematical table of given number
function mathTable(n){
    table="";
    for(i=1;i<=10;i++){
        table=table+"<br>"+(n+"x"+i+"="+(n*i));
    }
    return table;
}
document.write("<br>"+"mathematical table of given number is "+mathTable(4));

//Write a function to find whether the given number is prime or not.
function isPrime(x){
    if(x==1){
        return false;
    }
    else if(x==2){
        return true;
    }
    else
    {
    for(i=2;i<x;i++){
        if(x%i==0){
         return false;
        }
    }
        
            return true;
        }

}
document.write("<br>"+isPrime(11));

//Write a program to print prime numbers between 2 to 100
function primeRange(){
    primeran="";
    for(j=3;j<100;j++){
        if(isPrime(j)){
            primeran=primeran+"<br>"+j;
        }
    }
    return primeran;
}
document.write("<br>"+" prime numbers between the range"+primeRange());

//Write a function to get sum of individual digits of given number
//a. i/p: 123 => output : 6 ( i.e., 1+2+3)
function SumOfIndividuals(n){
    sum=0;
    while(n>0){
        r=n%10;
        sum=sum+r;
        n=parseInt(n/10);
    }
    return sum;
}
document.write("<br>"+"sum of individual digits of given number is "+SumOfIndividuals(456));


//Write a function to get lucky number of given number
//a. Lucky number => sum of individual digits of given number
//b. If the sum is more than 9, again do sum of individual digits of this sum.
//i. i/p : 12345 => 6 ( i.e., 1+2+3+4+5 = 15, 1+5 = 6)
function luckyNumber(a){
   a=SumOfIndividuals(a);
   while(a>9){
       sum=0;
       a=SumOfIndividuals(a);
   }
   return a;
}
document.write("<br>"+"lucky number is "+luckyNumber(567));
    

//Write a function to get reverse of given number
function numberReverse(n){
    reversenumber=0;
    while(n>0){
        r= n%10;
        reversenumber=reversenumber*10+r;
        n=parseInt(n/10);
    }
return reversenumber;
}
document.write("<br>"+"reverse of a number is "+numberReverse(1234));



//Write a function to find whether the given number is  palindrome or not
function isPalindrome(n){
    x=numberReverse(n);
    if(n==x){
        return true;
    }
    else{
        return false;
    }
}
document.write("<br>"+" given palindrome number is "+isPalindrome(121));




//Write a function to find factorial of given number
function factorial(n){
    f=1;
    for(i=2;i<=n;i++)
    {
        f=f*i;
    }
    return f;
}
document.write("<br>"+"factorial of given number is "+factorial(6));




//Write a program to find ncr. Hint : ncr = ( n! / ( (n-r)! * r!)
function numberCombination(n,r){
    a=factorial(n);
    b=factorial(r);
    c=factorial(n-r);
    d=(a/(b*c));
    return d;
}
document.write("<br>"+"ncr is "+numberCombination(4,2));




//Write a function to find sum of individual digits of given number
function word(x){
    if(x==0){
        return "zero";
    }
    if(x==1){
        return "one";
    }
    if(x==2){
        return "two";
    }
    
    if(x==3){
        return "three";
    }
    if(x==4){
        return "four";
    }
    if(x==5){
        return "five";
    }
    if(x==6){
        return "six";
    }
    if(x==7){
        return "seven";
    }
    if(x==8){
        return "eight";
    }
    if(x==9){
        return "nine";
    }

}

document.write("<br>"+word(4));



//Write a function to get reverse of given number





//Write a function to find whether the given number is palindrome or not.





//Write a function to convert given digit into the word format.
//a. If i/p is 1 -> output : One
//b. If i/p is 2 -> output : Two etc.,


//Write a function to convert given number into word format.
//a. If i/p is 123 -> output : One Hundred Twenty Three
