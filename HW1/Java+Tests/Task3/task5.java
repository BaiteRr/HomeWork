package Task3;

import java.util.Scanner;

public class task5 {
    public static int getOddsumm(int[] arr){
        int i = 0;
        int sum = 0;
        i = 1;
        int index = 0;
        for(double a : arr)
        {
            if(i % 2 != 0)
            {
                sum += a;
            }
            i++;
        }

        return sum;
    }
}
