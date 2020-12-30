#include<iostream>
using namespace std;
// Best Case - O(1)
// Average Case - O(n)
// Worst Case - O(n)

int search(int arr[],int arrSize,int key)
{
    for(int i=0;i<arrSize;i++)
    {
        if(arr[i]==key)	//loop is runned to find the element linearily
        {
            return i;   // the index is returnd
        }
    }
    return -1;
    

}
int main()
{
    int arr[10]={4,5,3,4,7,2,9,1,3,4};
    int arrSize = sizeof(arr)/sizeof(arr[0]);    //to find array length
    int key=1;      //key value is fixes(the element we want to search)
    int index=search(arr,arrSize,key);	//function is called and the return value is stored in index
    cout<<index;
    return 0;
}
