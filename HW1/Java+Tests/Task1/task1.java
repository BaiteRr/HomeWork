package Task1;

public class task1 {
    public static void main(String[] args) {
        double c = forTest(2,3);
        System.out.println(c);
    }
    public static   double  forTest(double a, double b){
        double c = a % 2;
        if (c == 0)
        {
            a *= b;
        }
        else
        {
            a += b;
        }
        return  a;
    }
}
