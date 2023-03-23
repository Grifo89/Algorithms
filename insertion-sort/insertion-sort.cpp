// Insertion sort in C++

#include <iostream>
using namespace std;

// Function to print an array
void printArray(int array[], int size){
    for (int i = 0; i < size; i++) {
        cout << array[i] << " ";
    }
    cout << endl;
}

void insertionSort(int array[], int size) {
    for (int step = 1; step < size; step++) {
        int key = array[step];
        int j = step - 1;
        // Compare key with each element on the left of it until
        // an elemnt smaller than it is found.
        while (j > 0 && array[j] > key) {
            array[j + 1] = array[j];
            j = j - 1;
        }
        array[j + 1] = key;
    }
}

int main() {
    int arr[] = {12, 11, 4, 3, 7, 9};
    int N = sizeof(arr) / sizeof(arr[0]);
    insertionSort(arr, N);
    printArray(arr, N)
    return 0
}