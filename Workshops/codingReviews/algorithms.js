let numbers = [7, 5, 3, 1, 2, 5, 4];

// Bubble Sort
/*
Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order. 
This algorithm is not suitable for large data sets as its average and worst-case time complexity is quite high.
*/ 
function bubbleSort(arr, n)
{
    var i, j, temp;
    var swapped;
    for (i = 0; i < n - 1; i++) 
    {
        swapped = false;
        for (j = 0; j < n - i - 1; j++) 
        {
            if (arr[j] > arr[j + 1]) 
            {
                // Swap arr[j] and arr[j+1]
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }
 
        // IF no two elements were 
        // swapped by inner loop, then break
        if (swapped == false)
        break;
    }
}

// Selection Sort
/*
Selection sort is a simple and efficient sorting algorithm that works by repeatedly selecting the smallest (or largest) 
element from the unsorted portion of the list and moving it to the sorted portion of the list. 
*/


// Insertion Sort
/* 
Insertion sort is a simple sorting algorithm that works similar to the way you sort playing cards in your hands. 
The array is virtually split into a sorted and an unsorted part. 
Values from the unsorted part are picked and placed at the correct position in the sorted part.
*/
 function insertion_sort(list) {
    for (let i = 1; i < list.length; i++) {
        let value = list[i];
        let shiftedIndex = i - 1;
        while (shiftedIndex >= 0) {
            if (value < list[shiftedIndex]) {
                list[shiftedIndex + 1] = list[i]; // shift number in slot i right to slot i+1
                list[shiftedIndex] = value; // shift value left into slot i
                shiftedIndex--;
            } else {
                break
            }
        }  
    }
    return list;
 }
 console.log(insertion_sort(numbers))