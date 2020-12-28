// Best Case - O(1)
// Average Case - O(n)
// Worst Case - O(n)

#include<iostream>
using namespace std;


void search(int arr[],int n,int k)
{
    for(int i=0;i<n;i++)
    {
        if(arr[i]==k)	//loop is runned to find the element linearily
        {
            cout<<"the index is found at "<<i;   // the index is printed
        }
    }
    

}
int main()
{
    int arr[100],n;
    cout<<"enter the number of elements:";
    cin>>n;//number of elements are received
    for(int i=0;i<n;i++)
    {
        cin>>arr[i];	//array elements are received
    }
    int k;
    cout<<"enter the key value";
    cin>>k;			//key value is received
    search(arr,n,k);	//function is called	
    return 0;
}
