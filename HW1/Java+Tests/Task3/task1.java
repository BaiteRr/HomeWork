package Task3;

public class task1 {
    public static int getmin(int[] arr){

        int min = arr[0];
        for( int a : arr){
            if (a < min) min = a;
        }

       return min;
    }
}
