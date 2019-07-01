//Array Operations


//Write a function to get biggest number in the given array.
arr=[50,30,80,10,,6]
function biggest(A){
    big=A[0];
    l=A.length;
    for(i=1;i<=l;i++){
        if(A[i]>big){
            big=A[i];
        }
    }
    return big;
}
document.write("biggest number in the array  is "+biggest(arr));
document.write("<br>");



//Write a function to get index /position of biggest number in the given aray
arr=[50,30,80,10,6]
function bigPosition(A){
    big=A[0];
    bigPosition=0;
    l=A.length;
    for(i=1;i<=l;i++){
        if(A[i]<big){
            big=A[i];
            bigPosition=i;
        }
    }
    return bigPosition;
}
document.write("biggest position in the given array  is "+bigPosition(arr));
document.write("<br>");


//Write a function to get sum of all the numbers in the given array
arr1=[10,20,30,40,50]

function sumOfArray(A){
    sum=0;
    l=A.length;
    for(i=0;i<l;i++){
        sum=sum+A[i];
    }
    return sum;
}
document.write("sum of array is "+ sumOfArray(arr1));
document.write("<br>");


//Write a function to search whether the given number is present or not in the given array (linear)
arr2=[1,2,3,4]
function isPresent(A,e){
    for(i=1;i<A.length;i++){
        if(e==A[i]){
            return true;
        }
    }
    return false;
}
document.write("the given number is "+isPresent(arr2,'4'));
document.write("<br>");


//Write a function to sort the given array (bubble sort/selection sort/ quick sort/ merge sort etc.,)
function sortArray(arr){
    n = arr.length-1;
   for ( i = 0; i < n; i++){
       for ( j = 0; j < n-i; j++){
           if (arr[j] > arr[j+1])
           {
               temp = arr[j];
               arr[j] = arr[j+1];
               arr[j+1] = temp;
           }
       }
     
   }
   return arr;
   
   }
document.write("sort of the given array is "+sortArray([8,6,7,3,2,4,1,5]));
document.write("<br>");



//Write a function to merge two given arrays.
function merge(arr1,arr2){
    return arr1.concat(arr2);
}
document.write("merge of two given arrays "+merge([5,4,3,2,1],[10,9,8,7]));
document.write("<br>");


//Write a function to insert an element in the array in given position
function insert(arr,index,ele){
    
    return arr.splice(index, 0, ele); 
}
insert(arr,2,5);
display(arr);
document.write("<br>");
function display(arr){
for(i=0;i <= arr.length-1;i++){
document.write(arr[i]+" ");
}
}

//Write a function to delete an element from given position in the array.
function elementRemove(arr,index) {  
    return arr.splice(index,1)
}
arr=[8,6,4,2];
elementRemove(arr,2);

display(arr);
document.write("<br>");


//Write a function delete given element from given array.

function elementDelete(array, e) {  
    index = array.indexOf(e);
    if (index > -1) {
        array.splice(index, 1);
    }
}
array=[1,2,3,4];
elementDelete(array,3);
display(array);
document.write("<br>");