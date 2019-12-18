package Task4;

import java.util.InputMismatchException;
import java.util.Scanner;

public class task3 {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Введите число прописью (от 0 до 999)");
        System.out.println("Примечание!!! Вводите слова в нижнем регистре");
        String words = "";

        try {
            words = scanner.nextLine();
        } catch (InputMismatchException e) {
            System.out.print(e.getMessage());
        }
        String[] array;
        array = words.split(" ");
        int[] number = newArray(array);
        for (int a : number)
            System.out.print(a);
        System.out.println("\nПримечание!!! Если результат не верный обратите внимания на правильное правописание слов");

    }
    public static int[] newArray(String[] array)
    { int[] error = {0,0,0};
        if(array.length > 3)
            return error;

        int[] number = {0,0,0};
        int[] numbers = { 1, 2, 3, 4, 5, 6, 7, 8, 9 };
        String[] for1 = { "один", "два", "три", "четыре", "пять", "шесть", "семь", "восемь", "девять", };
        String[] for10 = { "десять", "двадцать", "тридцать", "сорок", "пятьдесят", "шестьдесят", "семьдесят", "восемьдесят", "девяносто", };
        String[] for100 = { "сто", "двести", "триста", "четыреста", "пятьсот", "шестьсот", "семьсот", "восемьсот", "девятьсот" };
        String[] for11 = { "одиннадцать", "двенадцать", "тринадцать", "четырнадцать", "пятнадцать", "шестнадцать", "семнадцать", "восемнадцать", "девятнадцать" };
        for (String a : array)
            for (int i = 0; i < 9; i++) {
                if (a.equals(for1[i])) {
                    number[2] = numbers[i];
                }
                if (a.equals(for10[i])) {
                    number[1] = numbers[i];
                }
                if (a.equals(for100[i])) {
                    number[0] = numbers[i];
                }
                if (a.equals(for11[i])) {
                    number[2] = i+1;
                    number[1] = 1;
                }
            }
        return number;
    }
}
