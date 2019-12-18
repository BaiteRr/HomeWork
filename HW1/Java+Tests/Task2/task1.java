package Task2;

public class task1 {
    public static String getChislo(){
        Integer i, sum = 0;
        Integer count = 0;
        for (i = 1; i <= 99; i++)
        {
            if(i % 2 == 0) {
                sum = sum + i;
                count++;
            }
            }
        return  count.toString() + " " + sum.toString();
    }
}
