 //------------Insertion Sort complexity----------------
// Best Case - O(n)             |--> If the array is nearly sorted
// Average Case - O(n^2)
// Worst Case - O(n^2)
// Space Complexity - O(1)
#include<iostream>
using namespace std;

void insertion_sort(int arr[], int array_size)
{
    int current_value;
     // Traverse through 1 to length of Array
    for(int i=1;i<array_size;i++)
    {
        int j;
        //storing the key value to find the position in array
        current_value=arr[i];
        // Move elements of arr[0..i-1], that are 
        // greater than key, to one position ahead 
        // of their current position 
        for(j=i-1; j>=0 && arr[j] > current_value; j--)
        {
            arr[j+1] = arr[j];
        }
        arr[j+1] = current_value;
        //To see the partial sorted array after every pass remove the comment of below code
        
        
    }
    
}

void print_array(int arr[], int array_size) // to print the array when called
{
    for(int i=0;i<array_size;i++)
    {
        cout<<arr[i];
    }
}

int main()
{
    int arr[] = {-2, 45, 0, 11, -9};
    int size = sizeof(arr) / sizeof(arr[0]);    //to find the length of the array.
    insertion_sort(arr, size);                     //function is called and the array is sorted.
    cout << "Sorted Array in Ascending Order:\n";
    print_array(arr, size);                     //function is called to print the sorted array.
    return 0;
}