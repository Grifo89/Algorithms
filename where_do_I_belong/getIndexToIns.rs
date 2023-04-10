fn getIndexToIns(arr: &mut Vec<i32>, num) {
    for i in 0..arr.len() - 1 {
      for j in 0..arr.len() - i - 1 {
        if arr[j + 1] < arr[j] {
          array.swap(j, j + 1);
        }
      }
    }
    for i in 0..arr.len() - 1 {
      if arr[i] >= num {
        return i;
      }
    }
    return arr.len();
  }