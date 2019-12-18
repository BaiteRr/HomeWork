package Task4;

import java.util.InputMismatchException;
import java.util.Scanner;

public class task5 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Введите число от 0 до 999 млрд");
        long a = 0;
        try {
        a = scanner.nextLong();
        } catch (InputMismatchException e) {
            System.out.println(e.getMessage());
        }
        String[] arrayList= revers_bigger(a);
        for (Object c : arrayList)
            if( c != null)
            System.out.print(c);
    }

    public static String[] revers_bigger(long a){
        int i = 0;
        String[] words = new String[12];
        int t = 11;
        while (a > 0 ) {
            long b = a % 1000;
            String[] c = {"","",""};
            c = revers(b);
            i++;
            a /= 1000;
            switch (i){
                case 2: c[2] = c[2] + " тысячи";
                break;
                case 3: c[2] = c[2] + " миллиона";
                break;
                case 4: c[2] = c[2] + " миллиарда";
            }
            for (int j = 2;j >= 0; j--){
                words[t] = c[j];
                t--;
            }
        }
        return words;
    }

    static String[] revers(long a) {
        String[] result = {"", "", ""};
        if (a == 0) {
            result[2] = "Ноль";
        }else if( a == 110)
        {
            result[2] = "сто десять";
        } else {
            int[] numbers = {1, 2, 3, 4, 5, 6, 7, 8, 9};
            String[] for1 = {"один", "два", "три", "четыре", "пять", "шесть", "семь", "восемь", "девять",};
            String[] for10 = {"десять", "двадцать", "тридцать", "сорок", "пятьдесят", "шестьдесят", "семьдесят", "восемьдесят", "девяносто",};
            String[] for100 = {"сто", "двести", "триста", "четыреста", "пятьсот", "шестьсот", "семьсот", "восемьсот", "девятьсот"};
            String[] for11 = {"одиннадцать", "двенадцать", "тринадцать", "четырнадцать", "пятнадцать", "шестнадцать", "семнадцать", "восемнадцать", "девятнадцать"};
            long b;
            int i = 1;
            while (a >= 1) {
                b = a % 10;
                a /= 10;
                for (int j = 0; j < 9; j++) {
                    if (numbers[j] == b) {
                        if (i == 1) {
                            result[2] = " " + for1[j];
                            if (a % 10  == 1 && b != 0){
                                result[2] = " " + for11[j];
                                a/=10;
                                i++;
                            }
                        } else if (i == 2) {
                            if (b > 1) {
                                result[1] = " " + for10[j];
                            }
                        } else if (i == 3) {
                            result[0] = " " + for100[j];
                        }
                    }
                }

                i++;
            }

        }
        return result;
    }
}

