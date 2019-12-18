package Task4;

import java.util.Scanner;

public class task2 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Введите число от 0 до 999");
        int a = scanner.nextInt();
        String []result = revers(a);

        for (String c : result)
            System.out.print(c);
    }
    public static String[] revers(int a) {
        String[] error = {"false"};
        if(a > 999 || a < 0)
        return error;

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
            int b;
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

