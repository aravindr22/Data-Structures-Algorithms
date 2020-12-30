#include <iostream>

using namespace std;
// Best Case - O(1)
// Average Case - O(nlogn)
// Worst Case - O(nlogn)

int search(int arr[],int arrSize, int key)
{
    int left=0;     
    int right=arrSize-1;        //the end index is initialised
    while(left<=right)//the while loop is runned till the condition become false            //ie) to find the element
    {
        int mid=(left+right)/2;     //middle index is found
        if(key==arr[mid])  //if the middle element is the key it is printed
        {
            return mid;
            break;
        }
        if(key>arr[mid])    // if the key is grater then left index is changed
        {
            left=mid+1;
        }
        if(key<arr[mid])//if key is lesser the the right index is changed
        {
            right=mid-1;
        }
    }
    return -1;
     
}


int main()
{
    int arr[10]={1,2,3,4,5,6,7,8,9,10};
    int arrSize = sizeof(arr)/sizeof(arr[0]);    //to find array length
    int key=7;      //key value is fixes(the element we want to search)
    int index=search(arr,arrSize,key);  //function is called and the return value is stored in index
    cout<<index;
    return 0;
}
#include <iostream>

using namespace std;
// Best Case - O(1)
// Average Case - O(nlogn)
// Worst Case - O(nlogn)

int search(int arr[],int arrSize, int key)
{
    int left=0;     
    int right=arrSize-1;        //the end index is initialised
    while(left<=right)//the while loop is runned till the condition become false            //ie) to find the element
    {
        int mid=(left+right)/2;     //middle index is found
        if(key==arr[mid])  //if the middle element is the key it is printed
        {
            return mid;
            break;
        }
        if(key>arr[mid])    // if the key is grater then left index is changed
        {
            left=mid+1;
        }
        if(key<arr[mid])//if key is lesser the the right index is changed
        {
            right=mid-1;
        }
    }
    return -1;
     
}


int main()
{
    int arr[10]={1,2,3,4,5,6,7,8,9,10};
    int arrSize = sizeof(arr)/sizeof(arr[0]);    //to find array length
    int key=7;      //key value is fixes(the element we want to search)
    int index=search(arr,arrSize,key);  //function is called and the return value is stored in index
    cout<<index;
    return 0;
}
