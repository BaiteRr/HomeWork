package Task4;

import java.util.InputMismatchException;
import java.util.Scanner;

public class task6 {
    public static String getArray(String words1,String words2,String words3,String words4){
    String[] array;

    array =words1.split(" ");
    if(array.length > 3)
        return "error";
    int[] number1 = newArray(array);
    array =words2.split(" ");
        if(array.length > 3)
            return "error";
    int[] number2 = newArray(array);
    array =words3.split(" ");
        if(array.length > 3)
            return "error";
    int[] number3 = newArray(array);
    array =words4.split(" ");
        if(array.length > 3)
            return "error";
    int[] number4 = newArray(array);
    String  k = "";
    for(Integer g :number1)
    {
        k += g.toString();
     }
        for( Integer g :number2)
            {
                k += g.toString();
            }
        for(Integer g :number3)
        {
            k += g.toString();
         }
        for(Integer g :number4)
         {
             k += g.toString();
         }
       return k;
    }

    static int[] newArray(String[] array)
    {
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
