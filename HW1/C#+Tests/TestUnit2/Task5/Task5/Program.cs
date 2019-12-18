using System;

namespace Task5
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Введите целое число");
            int a = Convert.ToInt32(Console.ReadLine());
            double sum = 0;
            while(a >= 1)
            {
                double ost = a % 10;
                sum = sum + ost;
                a = a / 10;
            }
            Console.WriteLine($"Сума цифр = {sum}");
        }
    }
}
