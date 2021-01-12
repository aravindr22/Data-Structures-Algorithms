//------------Merge Sort complexity----------------
// Best Case - O(nlogn)
// Average Case - O(nlogn)
// Worst Case - O(nlogn)

// Space Complexity - O(n)

#include <iostream>
using namespace std;
void merge(int *a,int low,int high,int mid) //Conqueoring function(sorting and merging )
{
	int i,j,k,temp[high-low+1];
	i=low;
	k=0;
	j=mid+1;
	while(i<=mid&&j<=high)
	{
		if(a[i]<a[j])       // here the child array are sorted and stored temporarily and merged
		{
			temp[k]=a[i];
			k++;
			i++;
		}
		else
		{
			temp[k]=a[j];
			k++;
			j++;
		}
	}
	while(i<=mid)           // insert remaining elements in temp array till mid  
	{
		temp[k]=a[i];
		k++;
		i++;
	}
 	while(j<=high)          // insert ramaining elements in temp array
	{
		temp[k]=a[j];
		k++;
		j++;
	}
	for(i=low;i<=high;i++)
	{
		a[i]=temp[i-low];       // here the elements are placed in the mother array
	}
}

void mergesort(int *a,int low,int high) // this is the dividing function
{
	int mid;
	if (low<high)
	{
		mid=(low+high)/2;       // the mid value of the aray if found which is used for splitting the array
		mergesort(a,low,mid);   
		mergesort(a,mid+1,high);
		merge(a,low,high,mid);  // the Conqueoring function is called 
	}
}

//Merge Sort explanation (Divide & Conqueor method)
//                      [16,1,10,7]            
//                      /         \               
//                   [16,1]       [10,7]              
//                   /    \       /    \       
//                 [16]   [1]   [10]   [7]                   
//                  \      /      \     /      
//                   [1,16]        [7,10]      
//                      \            /         
//                        [1,7,10,16]          

int main()
{
	int n;
	cout<<"\nEnter the number of array element: ";
	cin>>n;             //array size is received
	int arr[n];
	for(int i=0;i<n;i++)
	{
		cout<<"Enter element: ";
		cin>>arr[i];    //array elemenmts are received
	}
	mergesort(arr,0,n-1);   //sorting function is called(first divide function)
	cout<<"\nSorted Data: ";
	for (int i=0;i<n;i++)
	{
        cout<<arr[i]<<"\t"; //after sorting the array elemets are printed
	}
	return 0;
}
