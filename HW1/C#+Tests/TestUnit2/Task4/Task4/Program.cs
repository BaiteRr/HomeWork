using System;

namespace Task4
{
    class Program
    {
        static void Main(string[] args)
        {
            start:
            Console.WriteLine("Введите число");
            int a = Convert.ToInt32(Console.ReadLine());
            if (a < 0)
            {
                Console.WriteLine("Число должно быть положительным");
                goto start;
            }
            int n = 1;
            for(int i = 1; i <= a; i++)
            {
                n = n * i;
            }
            Console.WriteLine($"Результат : {a}! = {n}");


        }
    }
}
