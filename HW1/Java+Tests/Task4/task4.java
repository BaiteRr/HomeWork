package Task4;

import java.util.Scanner;

public class task4 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Введите координаты первой точки : ");
        System.out.println("x : ");
        double x1 = scanner.nextDouble();
        System.out.println("y : ");
        double y1 = scanner.nextDouble();
        System.out.println("Введите координаты второй точки : ");
        System.out.println("x : ");
        double x2 = scanner.nextDouble();
        System.out.println("y : ");
        double y2 = scanner.nextDouble();
        System.out.println("Расстояние между первой и второй точкой = " + sizeOfLine(x1, y1, x2, y2) + " у. е.");
    }
    public static double sizeOfLine(double x1, double y1, double x2, double y2)
    {
        double a = 0;
        double x = x2 - x1;
        double y = y2 - y1;
        x = x * x;
        y = y * y;
        a = x + y;
        a = Math.pow(a, 0.5);
        return  a;
    }
}
