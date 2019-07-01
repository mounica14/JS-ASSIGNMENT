//Write a function to find the given two strings are equals or not.

str1="mickey";
str2="mouse";
function stringCompare(str1,str2){
if(str1==str2){
    return true;
}
else{
    return false;
}
}
document.write("strings are "+ stringCompare(str1,str2));
document.write("<br>");


//Write a function to reverse the string

function stringReverse(str){
    revstring="";
    for(i=0;i<str.length;i++){
revstring=str[i]+revstring;
}
return revstring;
}
document.write("Reverse of a string is "+ stringReverse("oreo"));
document.write("<br>");


//Write a function to find whether the given string is palindrome or not.
function stringPalindrome1(x){
    str=stringReverse(x)
    if(x==str){
        return true;
    }
    else{
        return false;
    }
}
document.write("strings are "+ stringPalindrome1("liril"));
document.write("<br>");


//Write a function to count number of characters in the given string.
function characterCount(a){
    l=a.length;
    return l;
}
document.write("count of characters are "+characterCount("finding nemo"));
document.write("<br>");

//Write a function to count number of words in the given string
function wordCount(x){
    l=x.length;
    count=0;
    for(i=0;i<=l-1;i++){
        if(x[i]==" "&&x[i+1]!= " "){
            count=count+1;
        }
    }
    return count+1;
}
document.write("word count is "+wordCount("phineas ferb candy"));
document.write("<br>");


//Write a function to count number of lower characters in the given string
function lowerCharCount(c){
    l=c.length;
    count=0;
    for(i=0;i<=l-1;i++){
if(c[i]==c[i].toLowerCase()){
    count=count+1;
}
    }
    return count;
}
document.write("lower character count is "+lowerCharCount("NIKitha"));
document.write("<br>");

//Write a function to remove character from given position in the given string
function removeCharPosition(a,b){
    l=a.length;
    c = "" ;
    
for(i=0;i<=l-1;i++){
    if(i!=b){
        c=c+a[i];
    }
}
return c;
}
document.write("removed character position is "+removeCharPosition("minions",4));
document.write("<br>");


//Write a function to remove given character from given string.(all occurrences)
function removeChar(c,d){
    l=c.length;
    e="";
    for(i=0;i<l;i++){
        if(c[i]!=d){
            e=e+c[i];
        }
    }
    return e;
}
document.write("removed character is "+removeChar("nikitha","n"));
document.write("<br>");

//Write a function to simulate trim function. (i.e., remove white spaces in the beginning and
//ending of the string if any)
function simulateTrim(x){
    l=x.length;
    y="";
    for(i=0;i<l;i++){
        if(x[i]!=""){
            y=y+x[i];
        }
        if(x[i]==" "){
            y=y+x[i];
        }
        if(x[i]==""&& x[i+1]==""){
            x[i]=x[i+1];
        }
        if(x[i]==""&&x[i+1]!=""){
            y=y+x[i];
        }
    }
    return y;
}
document.write("simulate trim function is "+simulateTrim("   cool climate   "));
document.write("<br>");
/** Write a function to remove extra white spaces in the given sentence (If more than once
white spaces there, remove it.)
a. Ex input: Hello
how are
you?
b. Output: Hello how are you?  **/
function RemoveextraWhiteSpace(t){
    l=t.length;
    a="";
    for(i=0;i<l;i++){
        if(t[i]!=" "){
            a=a+t[i];
        }
        if(t[i]==" "&&t[i+1]==" "){
            t[i]=t[i+1];
        }
        if(t[i]==" "&&t[i+1]!==" "){
            a=a+" ";
        }
    }
    return a;
}
document.write("removed extra white spaces is  "+RemoveextraWhiteSpace("  mickey    mouse  "));
document.write("<br>");





/**
Write a function to count how many numbers of times a particular character
appears/present in the given string.
Ex: given string = “hello word”
Given character = ‘l’
Output: 2
**/
function particularCharCount(x,y){
    l=x.length;
    count=0;
    for(i=0;i<l-1;i++){
        if(x[i]==y){
            count++;
        }
    }
    return count;
}
document.write("particular character count is "+particularCharCount("hello world","o"));





/**
 Write a program to count how many numbers of times each character appears/present in
the given string.
Ex: given string = “hello word”
Output:
h.....1
e.....1
l......2
o.....2
w....1
r.....1
d...1
Note: Do it after learning HashMap.   **/
