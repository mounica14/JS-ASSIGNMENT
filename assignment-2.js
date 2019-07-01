//Write a program to print the *s in the following formats

/**
a.
*
* *
* * *
* * * *

**/
//Define method hear.
function starPattern(n){
    append="";
    for(i=1;i<=n;i++){
        for(j=1;j<=i;j++){
            append=append+ " * ";
        }
        append=append+ "<br>";
    }
    return append;

}
document.write("<br>"+starPattern(4));






/**
b.
*
* *
* * *
* * * ***/
//Define method hear.



/**

c.
* * * *
* * *
* *
*

**/

//Define method hear.
function patternStarReverse(n){
    append="";
    for(i=n;i>=1;i--){
        for(j=1;j<=i;j++){
            append=append+ " * ";
        }
        append=append+"<br>";
    }
    return append;
}
document.write("<br>"+patternStarReverse(4));


/**
d.
1
1 2
1 2 3
1 2 3 4

**/

//Define method here.
function numberPattern(n){
    append="";
    for(i=1;i<=n;i++){
        for(j=1;j<=i;j++){
            append=append+ j +" ";
        }
        append=append+"<br>";
    }
    return append;
}
document.write("<br>"+numberPattern(4));
