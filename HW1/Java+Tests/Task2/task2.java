package Task2;

public class task2 {
        public static String getProst(int a){
        int count = 0;
        int number = a;
        for (int i = 1; i <= 10; i++)
        {
            double ost = number % i;
            if(ost == 0)
            {
                count++;
            }
        }
        if (count == 1 &&  number >10)
        {
            return "PROSTOE";
        }else if(count == 2 && number <= 10)
        {
            return "PROSTOE";
        }else
            return"NE PROSTOE";

    }
}
