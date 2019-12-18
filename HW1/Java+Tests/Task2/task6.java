package Task2;

public class task6 {
    public static double getOtobraj(int a){
        double t = 0;
        while (a >= 1)
        {
             t = t * 10 + a % 10;

            a = a / 10;
        }
        return t;
    }
}

