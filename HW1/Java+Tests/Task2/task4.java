package Task2;

public class task4 {
    public static int getFakt(int a){
        if (a < 0)
        {
            return 0;
        }
        Integer n = 1;
        for(int i = 1; i <= a; i++)
        {
            n = n * i;
        }
        return a + n;
    }
}