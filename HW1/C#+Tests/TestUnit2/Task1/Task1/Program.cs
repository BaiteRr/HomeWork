using System;

namespace Task1
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine(get());
        }
        public static string get()
        {
            string qwerty = "";
            int i, sum = 0;
            int count = 0;
            for (i = 1; i <= 99; i++)
            {
                sum = sum + i;
                count++;
            }
            qwerty += sum;
            qwerty += " ";
            qwerty += count;
            return qwerty;
        }
    }
}
