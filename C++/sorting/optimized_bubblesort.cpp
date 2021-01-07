// Optimized implementation of Bubble sort 
#include <iostream> 
using namespace std;


// An optimized version of Bubble Sort 
void bubbleSort(int arr[], int n) 
{ 
    int i, j, temp; 
    bool swapped; 

    // run loops two times: one for walking throught the array
    // and the other for comparison

    for (i = 0; i < n-1; i++) 
    { 
	    swapped = false; 
	    for (j = 0; j < n-i-1; j++) 
	    { 
		    if (arr[j] > arr[j+1]) 
		    { 
               	    temp=arr[j];                    // swap if greater is at the rear position.
                    arr[j]=arr[j+1];
                    arr[j+1]=temp;
		    swapped = true; 
		    } 
	    } 

	// IF no two elements were swapped by inner loop, then break 
	    if (swapped == false) 
		    break; 
    } 
} 

/* Function to print an array */
void printArray(int arr[], int size) 
{ 
	int i; 
	for (i=0; i < size; i++) 
		cout<<arr[i]<<" "; 
	cout<<endl; 
} 

// Driver program to test above functions 
int main() 
{ 
	int arr[] = {64, 34, 25, 12, 22, 11, 90}; 
	int n = sizeof(arr)/sizeof(arr[0]); 
	bubbleSort(arr, n); 
	cout<<"Sorted Array:\n"; 
	printArray(arr, n); 
	return 0; 
} 
