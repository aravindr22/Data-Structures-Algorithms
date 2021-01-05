 //------------Selection Sort complexity----------------
// Best Case - O(n^2)
// Average Case - O(n^2)
// Worst Case - O(n^2)

// Space Complexity - O(1)
#include<iostream>
using namespace std;

void selection_sort(int array[],int array_length)
{
    int smallest_val_index, temp;
    for (int i = 0; i < array_length; i++) 
    {
        
        //Initially the smallest value is setted up as first element of array
        smallest_val_index = i;

        //The second loop runs from next element in array after i (i.e) i+1 to end of the array
        for(int j = i+1; j < array_length; j++)
        {

            //Check if any element in the array is less then smallest_val_index 
            //If there then it is update with new index
            if( array[j] < array[smallest_val_index]){
                smallest_val_index = j;
        }
    }

        //To check if we found any lowest value than smallest_val_index to avoid unnessary time
        //If we founded means the if condition satisfies and swap occurs
        if(smallest_val_index!= i)
        {
            temp = array[i];
            array[i] = array[smallest_val_index];
            array[smallest_val_index] = temp;
        }

        
    }
    
}

void print_array(int arr[], int array_size) // to print the array when called
{
    for(int i=0;i<array_size;i++)
    {
        cout<<arr[i]<<" ";
    }
}

int main()
{
    int arr[] = {-2, 45, 0, 11, -9};
    int size = sizeof(arr) / sizeof(arr[0]);    //to find the length of the array.
    selection_sort(arr, size);                     //function is called and the array is sorted.
    cout << "Sorted Array in Ascending Order:\n";
    print_array(arr, size);                     //function is called to print the sorted array.
    return 0;
}