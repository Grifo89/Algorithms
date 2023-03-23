// Insertion sort 

pub fn insertion_sort<T>(values: &mut [T])
{
    for i in 1..values.len() {
        let mut key = values[i];
        let mut j = i - 1;
        while j > 0 && arr[j] > key {
            values.swap(j, j - 1);
            j = j - 1;
        }
        values[j + 1] = key
    }
}