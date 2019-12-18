using System;

namespace Task3
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Ведите число");
            int a = Convert.ToInt32(Console.ReadLine());
            int count = 1;
            while (true)
            {
                int c = a / count;
                if(count == c)
                {
                    Console.WriteLine($"Корень числа = {c}");
                    break;
                }
                count++;
            }
        }
    }
}
