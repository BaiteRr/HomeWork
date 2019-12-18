package Task3;

import java.util.Scanner;

public class task9 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Введите количество элементов массива:");
        int count = scanner.nextInt();

        System.out.println("Введите элементы массива arr :");
        int[] arr = new int[count];
        int[] q = new int[count];
        int[] s = new int[count];
        int i = 0;
        for (i = 0; i < count; i++)
        {
            int temp = scanner.nextInt();
            arr[i] = temp;
            q[i] = temp;
            s[i] = temp;
        }




        BubbleSort(arr);
        InsertionSort(q);
        SelectionSort(s);
        System.out.println("Массив отсортировано пузырьком :");
        for (int a : arr)
        {
            System.out.print(a + " ");
        }
        System.out.println("\nМассив отсортировано вставками :");
        for (int a : q)
        {
            System.out.print(a + " ");
        }
        System.out.println("\nМассив отсортировано выбором :");
        for (int a : s)
        {
            System.out.print(a + " ");
        }
    }
    public static int[] BubbleSort(int[] mas)
    {
        int temp;
        for (int i = 0; i < mas.length - 1; i++)
        {
            boolean f = false;
            for (int j = 0; j < mas.length - i - 1; j++)
            {
                if (mas[j + 1] > mas[j])
                {
                    f = true;
                    temp = mas[j + 1];
                    mas[j + 1] = mas[j];
                    mas[j] = temp;
                }
            }
            if (!f) break;
        }
        return mas;
    }
   public static int[] InsertionSort(int[] array)
    {
        for (int i = 1; i < array.length; i++)
        {
            int cur = array[i];
            int j = i;
            while (j > 0 && cur < array[j - 1])
            {
                array[j] = array[j - 1];
                j--;
            }
            array[j] = cur;
        }
        return array;
    }
    public static int[] SelectionSort(int[] arr)
    {
        int min, temp;
        int length = arr.length;

        for (int i = 0; i < length - 1; i++)
        {
            min = i;

            for (int j = i + 1; j < length; j++)
            {
                if (arr[j] < arr[min])
                {
                    min = j;
                }
            }

            if (min != i)
            {
                temp = arr[i];
                arr[i] = arr[min];
                arr[min] = temp;
            }
        }
        return arr;
    }
    }

