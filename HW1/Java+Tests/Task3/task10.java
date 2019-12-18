package Task3;

import java.util.Scanner;

public class task10 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Введите количество элементов массива:");
        int count = scanner.nextInt();

        System.out.println("Введите элементы массива arr :");
        int[] arr = new int[count];
        int[] q = new int[count];
        int[] s = new int[count];
        int[] r = new int[count];
        int i = 0;
        for (i = 0; i < count; i++)
        {
            int temp = scanner.nextInt();
            arr[i] = temp;
            q[i] = temp;
            s[i] = temp;
            r[i] = temp;
        }

        quicksort(arr, 0, count - 1);
        shellSort(q);
        mergeSort(s, count);
        Pyramid_Sort(r, r.length);

        System.out.println("Массив отсортировано  быстрой сортировкой:");
        for (int a : arr)
        {
            System.out.print(a +" ");
        }
        System.out.println("\nМассив отсортировано алгоритмом Шелла:");
        for (int a : q)
        {
            System.out.print(a +" ");
        }
        System.out.println("\nМассив отсортировано слиянием :");
        for (int a : s)
        {
            System.out.print(a +" ");
        }
        System.out.println("\nМассив отсортировано пирамидально :");
        for (int a : r)
        {
            System.out.print(a +" ");
        }
    }
    static int partition(int[] array, int start, int end)
    {
        int temp;
        int marker = start;
        for (int i = start; i <= end; i++)
        {
            if (array[i] < array[end])
            {
                temp = array[marker];
                array[marker] = array[i];
                array[i] = temp;
                marker += 1;
            }
        }
        temp = array[marker];
        array[marker] = array[end];
        array[end] = temp;
        return marker;
    }
    public  static  int[] quick(int[] arr){
        quicksort(arr,0,arr.length-1);
        return arr;
    }

    static void quicksort(int[] array, int start, int end)
    {
        if (start >= end)
        {
            return;
        }
        int pivot = partition(array, start, end);
        quicksort(array, start, pivot - 1);
        quicksort(array, pivot + 1, end);
    }
    public  static  int[] shell(int[] arr){
        shellSort(arr);
        return arr;
    }
    static void shellSort(int[] vector)
    {
        int step = vector.length / 2;
        while (step > 0)
        {
            int i, j;
            for (i = step; i < vector.length; i++)
            {
                int value = vector[i];
                for (j = i - step; (j >= 0) && (vector[j] > value); j -= step)
                    vector[j + step] = vector[j];
                vector[j + step] = value;
            }
            step /= 2;
        }

    }
    public static void merge( int[] a, int[] l, int[] r, int left, int right) {
        int i = 0, j = 0, k = 0;
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
    public  static  int[] merge(int[] arr){
        mergeSort(arr,arr.length);
        return arr;
    }

    public static void mergeSort(int[] a, int n) {
        if (n < 2) {
            return;
        }
    int mid = n / 2;
        int[] l = new int[mid];
        int[] r = new int[n - mid];
        for (int i = 0; i < mid; i++) {
            l[i] = a[i];
        }
        for (int i = mid; i < n; i++) {
            r[i - mid] = a[i];
        }
    mergeSort(l, mid); mergeSort(r, n - mid); merge(a, l, r, mid, n - mid);
    }
    static int add2pyramid(int[] arr, int i, int N)
    {
        int imax;
        int buf;
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
    public  static  int[] piramid(int[] arr){
        Pyramid_Sort(arr,arr.length);
        return arr;
    }
    static void Pyramid_Sort(int[] arr, int len)
    {
        //step 1: building the pyramid
        for (int i = len / 2 - 1; i >= 0; --i)
        {
            long prev_i = i;
            i = add2pyramid(arr, i, len);
            if (prev_i != i) ++i;
        }

        //step 2: sorting
        int buf;
        for (int k = len - 1; k > 0; --k)
        {
            buf = arr[0];
            arr[0] = arr[k];
            arr[k] = buf;
            int i = 0, prev_i = -1;
            while (i != prev_i)
            {
                prev_i = i;
                i = add2pyramid(arr, i, k);
            }
        }
    }

}
