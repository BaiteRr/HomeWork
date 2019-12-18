using System;

namespace Task6
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Введите целое число");
            int a = Convert.ToInt32(Console.ReadLine());
            Console.Write("Зеркально число : ");
            while (a >= 1)
            {
                int t = a % 10;
                Console.Write(t);
                a = a / 10;
            }
        }
    }
}
