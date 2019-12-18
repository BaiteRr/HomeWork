package Task3;

import java.util.Scanner;

public class task6 {
    public static int[] getreversArray(int[] arr){
        int i = 0;
        int[] revers = new int[5];
        i = 4;
        for (int a : arr)
        {
            if (i >= 0)
            {
                revers[i] = a;
                i--;
            }
        }
        return revers;
    }
}
