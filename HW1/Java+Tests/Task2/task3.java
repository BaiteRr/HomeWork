package Task2;

public class task3 {
    public static double getKoren(int a){
        double count = 1;
        while (true)
        {
            double c = a / count;
            if(count == c)
            {
                return c;
            }
            count++;
        }
    }
}
