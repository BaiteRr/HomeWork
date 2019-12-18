package Task3;

import java.util.Scanner;

public class task8 {
    public static void main(String[] args) {
        double[] a = {2,4,1,5,3,2};
        System.out.println(get(a));
    }
    public static double[] get(double[] arr){
        int count = arr.length;
        double[] a = {0};
        if (count % 2 == 0)
        {
            int i = 0;
            double point;
            int index = count / 2;
            int id = 0;
            for (i = 0; i < count / 2; i++)
            {
                point = arr[index];
                arr[index] = arr[id];
                arr[id] = point;
                id++;
                index++;
            }
        }else{
            return a;
        }
        return arr;
    }
}


