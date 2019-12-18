package Task3;

import java.util.Scanner;

public class task4 {
    public static int getindex(int[] arr){
        double max = arr[0];
        int i = 1;
        int index = 0;
        for (double a : arr)
        {
            if (a > max)
            {
                index = i;
                max = a;
            }
            i++;
        }

        return index;
    }
}
