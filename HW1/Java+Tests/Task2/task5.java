package Task2;

public class task5 {
    public static double getSumCifr(double a){
        int sum = 0;
        while(a >= 1)
        {
            double ost = a % 10;
            sum = sum + (int)ost;
            a = a / 10;
        }
        return sum;
    }
}