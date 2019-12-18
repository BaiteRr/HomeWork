package Task1;

public class task5 {

        public static String getScore(int a){


            if (a > 100 || a < 0) {
                return "ERROR";
            }
            if (a >= 0 && a <= 19)
            {
                return "F";
            }
            if (a >= 20 && a <= 39)
            {
                return "E";
            }
            if (a >= 40 && a <= 59)
            {
                return "D";
            }
            if (a >= 60 && a <= 74)
            {
                return "C";
            }
            if (a >= 75 && a <= 89)
            {
                return "B";
            }
            if (a >= 90 && a <= 100)
            {
                return "A";
            }
            return "";
        }
}
