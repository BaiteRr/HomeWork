let arrayQuick = [1, 144, 22, 7, 4, 74, 121, -2, -3, 88];
function quickSort(array) {
    if ( typeof(masive) !== 'object' ){
        return false
    }
    if(arguments.length > 1 || arguments.length == 0){
        return false
    }

    if (array.length <= 1) {
        return array;
    }
    let pivot = array[array.length - 1];
    let left = [];
    let right = [];

    for (let i = 0; i < array.length - 1; i++) {

        if (array[i] < pivot) {
            left.push(array[i]);
        } else {
            right.push(array[i]);
        }

    }

    return [...quickSort(left), pivot, ...quickSort(right)];

}
function shellSort(vector)
    {
        if ( typeof(vector) !== 'object' ){
            return 'false';
        }

        let step = vector.length / 2;
        while (step > 0)
        {
            let i, j;
            for (i = step; i < vector.length; i++)
            {
                let value = vector[i];
                for (j = i - step; (j >= 0) && (vector[j] > value); j -= step)
                    vector[j + step] = vector[j];
                vector[j + step] = value;
            }
            step /= 2;
        }
        return vector.splice(0,vector.length);

    }
    function  merge( a, l, r,left, right) {

        let i = 0, j = 0, k = 0;
        while (i < left && j < right) {
            if (l[i] <= r[j]) {
                a[k++] = l[i++];
            } else {
                a[k++] = r[j++];
            }
        }
        while (i < left) {
            a[k++] = l[i++];
        } while (j < right) {
            a[k++] = r[j++];
        }
    }
        function Mergee(a){
        
        if ( typeof(a) !== 'object' ){
            return 'false';
        }
        mergeSort(a,a.length);

        return a;
    
        }

    function mergeSort( a, n) {
        if ( typeof(a) !== 'object' )
            return 'false';
        if (n < 2) {
            return;
        }
        let mid = n / 2;
        let l = [];
        let r = [];
        for (let i = 0; i < mid; i++) {
            l[i] = a[i];
        }
        for (let i = mid; i < n; i++) {
            r[i - mid] = a[i];
        }
        mergeSort(l, mid);
        mergeSort(r, n - mid); 
        merge(a, l, r, mid, n - mid);
    }
    function add2pyramid(arr, i, N)
    {
        let imax;
        let buf;
        if ((2 * i + 2) < N)
        {
            if (arr[2 * i + 1] < arr[2 * i + 2]) imax = 2 * i + 2;
            else imax = 2 * i + 1;
        }
        else imax = 2 * i + 1;
        if (imax >= N) return i;
        if (arr[i] < arr[imax])
        {
            buf = arr[i];
            arr[i] = arr[imax];
            arr[imax] = buf;
            if (imax < N / 2) i = imax;
        }
        return i;
    }
        function piramid(a){
           if ( typeof(a) !== 'object' ){
            return 'false';
        }
        Pyramid_Sort(a,a.length);

        return a;   
        }

    function Pyramid_Sort(arr, len)
    {
        //step 1: building the pyramid
        for (let i = len / 2 - 1; i >= 0; --i)
        {
            let prev_i = i;
            i = add2pyramid(arr, i, len);
            if (prev_i != i) ++i;
        }

        //step 2: sorting
        let buf;
        for (let k = len - 1; k > 0; --k)
        {
            buf = arr[0];
            arr[0] = arr[k];
            arr[k] = buf;
            let i = 0, prev_i = -1;
            while (i != prev_i)
            {
                prev_i = i;
                i = add2pyramid(arr, i, k);
            }
        }
    }

