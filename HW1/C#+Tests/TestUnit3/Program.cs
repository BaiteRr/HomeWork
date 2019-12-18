using System;

namespace ConsoleApp2
{
    public static class Program
    {

        static void Main(string[] args) { }

        public static int Min(int[] arr)
        {

            int min = arr[0];
            for (int i = 0; i < arr.Length; i++)
            {
                if (arr[i] < min)
                    min = arr[i];
            }
            return min;
        }

        public static int Max(int[] arr)
        {
            int max = arr[0];
            for (int i = 0; i < arr.Length; i++)
            {
                if (arr[i] > max)
                    max = arr[i];
            }
            return max;
        }

        public static int Imin(int[] arr)
        {
            int imin = 0;
            int min = arr[0];
            for (int i = 0; i < arr.Length; i++)
            {
                if (arr[i] < min)
                {
                    min = arr[i];
                    imin = i;
                }
            }
            return imin;
        }
        public static int Imax(int[] arr)
        {
            int imax = 0;
            int max = arr[0];
            for (int i = 0; i < arr.Length; i++)
            {
                if (arr[i] > max)
                {
                    max = arr[i];
                    imax = i;
                }
            }
            return imax;
        }

        public static int Sum(int[] arr)
        {
            int sum = 0;
            for (int i = 0; i < arr.Length; i++)
            {
                if (i % 2 == 1)
                    sum = sum + arr[i];
            }
            return sum;
        }

        public static int[] Reverse(int[] arr)
        {
            for (int i = 0; i < arr.Length / 2; i++)
            {
                int c = arr[i];
                arr[i] = arr[arr.Length - 1 - i];
                arr[arr.Length - 1 - i] = c;
            }
            return arr;
        }

        public static int N(int[] arr)
        {
            int n = 0;
            for (int i = 0; i <= arr.Length; i++)
            {
                if (i % 2 == 0)
                    n = n + 1;
            }
            return n;
        }

        public static int[] Reverse2(int[] arr)
        {
            for (int i = 0; i < arr.Length / 2; i++)
            {
                int c = arr[i];
                arr[i] = arr[arr.Length / 2 + i];
                arr[arr.Length / 2 + i] = c;
            }

            return arr;
        }

        public static int[] bubble(int[] arr)
        {
            for (int i = 0; i < arr.Length; i++)
                for (int j = 1; j < arr.Length - i; j++)
                    if (arr[j] < arr[j - 1])
                    {
                        int c = arr[j - 1];
                        arr[j - 1] = arr[j];
                        arr[j] = c;
                    }
            return arr;
        }

        public static int[] Insert(int[] arr)
        {
            for (int i = 1; i < arr.Length; i++)
            {
                int c = arr[i];
                int j = i - 1;
                while (j >= 0)
                {
                    if (c < arr[j])
                    {
                        arr[j + 1] = arr[j];
                    }
                    else
                    {
                        arr[j + 1] = c;
                        break;
                    }
                    j--;
                }
                if (j == -1)
                    arr[0] = c;
            }
            return arr;
        }

        public static int[] select(int[] array)
        {

            int tmp;
            for (int i = 0; i < array.Length - 1; i++)
            {
                int min = i;
                for (int j = i + 1; j < array.Length; j++)
                {
                    if (array[j] < array[min])
                    {
                        min = j;
                    }
                }
                tmp = array[i];
                array[i] = array[min];
                array[min] = tmp;
            }
            return array;
        }
    }
}