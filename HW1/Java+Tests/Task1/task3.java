package Task1;

public class task3 {
    public static void main(String[] args) {
        System.out.println();
    }
        public static double getSum( int a, int b, int c){
            double  sum = 0;

            if (a > 0 && b > 0 && c > 0) {
                sum = a + b + c;
            } else {
                double[] array = {a, b, c};

                for (double i : array) {
                    if (i > 0) {
                        sum = sum + i;
                    }
                }
            }
            return sum;
        }
    }
