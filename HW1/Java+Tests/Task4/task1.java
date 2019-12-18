package Task4;

import java.util.Scanner;

public class task1 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Введите номер дня недели");
        int number = scanner.nextInt();
        if (number < 7 && number > 0)
        {
            System.out.println(nameOfDay(number));
        }
        else
        {
            System.out.println("Введите число от 1 до 7");
        }
    }
    public static String nameOfDay(int number)
    {
        if(number < 1 || number > 7)
            return "false";
        int numberOf = 0;
        int[] numberOfDay = { 1, 2, 3, 4, 5, 6, 7 };
        String[] namesOfDays = { "Monday - Понедельник", "Tuesday - Вторник", "Wednesday - Среда", "Thursday - Четверг", "Friday - Пятница", "Saturday - Суббота", "Sunday - Воскресенье" };
        for(int i = 0; i < 7; i++)
        {
            if(numberOfDay[i] == number - 1)
            {
                numberOf = number - 1;
                break;
            }
        }
        String day = namesOfDays[numberOf];
        return day;
    }
}
