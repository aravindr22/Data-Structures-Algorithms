// In binary search the elements shouls be in sorted order
// Best Case - O(1)
// Average Case - O(nlogn)
// Worst Case - O(nlogn)

#include <iostream>
using namespace std;


void search(int arr[],int n, int k)
{
    int l=0;		
    int r=n-1;		            //The end index is initialised
    
    //the while loop is runned till the condition become false 			
    //ie) to find the element
    while(l<=r)
    {
        int mid=(l+r)/2;		//Middle index is found each time while loop starts
        if(k==arr[mid])         //If the middle element is the key it is printed
        {
            cout<<"Found at: "<<mid;
            break;
        }
        if(k>arr[mid])      	//If the key is grater then left index is changed
        {
            l=mid+1;
        }
          if(k<arr[mid])        //If key is lesser the the right index is changed
        {
            r=mid-1;
        }
    }
     
}

int main()
{
    int arr[100],n;
    cout<<"Enter the number of elements: ";  // No. of elements is received 
    cin>>n;
    for(int i=0;i<n;i++)
    {
        cin>>arr[i];				        //Array elemets are received
    }
    int k;
    cout<<"Enter the key value: ";		    //key value is received
    cin>>k;
    search(arr,n,k);		                //function is called
    return 0;
}


