using System;

namespace Task2
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Введите  любое число ");
            int count = 0;
            double  number = Convert.ToDouble(Console.ReadLine());
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
                Console.WriteLine("Это простое число");
            }else if(count == 2 && number <= 10)
            {
                Console.WriteLine("Это простое число");
            }else Console.WriteLine("Это не простое число");

        }
    }
}
