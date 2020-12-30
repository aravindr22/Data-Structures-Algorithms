//------------Bubble Sort complexity----------------
// Best Case - O(n)
// Average Case - O(n^2)
// Worst Case - O(n^2)

#include<iostream>
using namespace std;

void bubble_sort(int arr[], int array_size)
{
    int i,j,temp;

    // run loops two times: one for walking throught the array
    // and the other for comparison

    for(i=0;i<array_size-1;i++)
    {
        
        //The minus i is added here because after each pass greatest element will sorted and placed at last
        //So there is no need of checking again so we eleminate out to minimize the time complexity
        for(j=0;j<array_size-i-1;j++)
        {
            if(arr[j]>arr[j+1])                 // To sort in descending order, change > to < in this line.
            {
                temp=arr[j];                    // swap if greater is at the rear position.
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
}

void print_array(int arr[], int array_size)
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
    bubble_sort(arr, size);                     //function is called and the array is sorted.
    cout << "Sorted Array in Ascending Order:\n";
    print_array(arr, size);                     //function is called to print the sorted array.
    return 0;
}