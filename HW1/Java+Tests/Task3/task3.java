package Task3;

import java.util.Scanner;

public class task3 {
    public static int getindex(int[] arr){
        double min = arr[0];
        int i = 1;
        int index = 0;
        for( double a : arr)
        {
            if (a < min) {
                index = i;
                min = a;
            }
            i++;
        }

        return index;
    }
}
