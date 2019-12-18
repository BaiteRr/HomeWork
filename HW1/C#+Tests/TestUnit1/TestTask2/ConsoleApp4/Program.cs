using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp4
{
    public class Program
    {
        static void Main(string[] args)
        {
            int x = int.Parse(Console.ReadLine());
            int y = int.Parse(Console.ReadLine());
            SomeClass Super = new SomeClass();
            Super.Task12(x, y);

        }
    }
    public class SomeClass
        {
            public String Task12(int x, int y)
            {
                String result = "";

                if (x > 0 && y > 0)
                {
                    result = "I";
                }

                if (x > 0 && y < 0)
                {
                    result = "IV";
                }

                if (x < 0 && y < 0)
                {
                    result = "III";
                }

                if (x < 0 && y > 0)
                {
                    result = "II";
                }

                if (x == 0 && y == 0)
                {
                    result = "початок координат";
                }

                if (x == 0 && y != 0)
                {
                    result = "Oy";
                }

                if (x != 0 && y == 0)
                {
                    result = "Ox";
                }

                return result;
            }
        }
        }
    

