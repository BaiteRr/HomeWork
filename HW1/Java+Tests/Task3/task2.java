package Task3;


public class task2 {
    public static int getmax(int[] arr){
        int max = arr[0];
        for (int a : arr)
        {
            if (a > max) max = a;
        }
        return max;
    }
}
