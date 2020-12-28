// In binary search the elements shouls be in sorted order
// Best Case - O(1)
// Average Case - O(nlogn)
// Worst Case - O(nlogn)

#include <iostream>

using namespace std;


void search(int arr[],int n, int k)
{
    int l=0;		
    int r=n-1;		//the end index is initialised
    while(l<=r)//the while loop is runned till the condition become false 			//ie) to find the element
    {
        int mid=(l+r)/2;		//middle index is found
        if(k==arr[mid])  //if the middle element is the key it is printed
        {
            cout<<"found at"<<mid;
            break;
        }
        if(k>arr[mid])	// if the key is grater then left index is changed
        {
            l=mid+1;
        }
          if(k<arr[mid])//if key is lesser the the right index is changed
        {
            r=mid-1;
        }
    }
     
}

int main()
{
    int arr[100],n;
    cout<<"enter the number of elements:"; // no. of elements is received 
    cin>>n;
    for(int i=0;i<n;i++)
    {
        cin>>arr[i];				//array elemets are received
    }
    int k;
    cout<<"enter the key value";		//key value is received
    cin>>k;
    search(arr,n,k);		//function is called
    return 0;
}


