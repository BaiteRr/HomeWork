using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Task1_Test
{
   
    public class SomeClass
    {
        public static int Logic(int a, int b)
        {
            checked
            {
                if (a % 2 == 0)
                {
                    return (a * b);
                }
                else
                {
                    return (a + b);
                }
            }
        }

        public class Program
        {
            static void Main(string[] args)
            {
                var a = int.Parse(Console.ReadLine());
                var b = int.Parse(Console.ReadLine());

                Console.WriteLine(Logic(a, b));
            }
        }
    }
}
