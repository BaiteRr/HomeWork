using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Something
{
    public class Program
    {
        static void Main(string[] args)
        {
            string aline = Console.ReadLine();
            int a = int.Parse(aline);

            string bline = Console.ReadLine();
            int b = int.Parse(bline);

            string cline = Console.ReadLine();
            int c = int.Parse(cline);
            NewClass NewObject = new NewClass();
            NewObject.Task14(a, b, c);
        }
    }
        public class NewClass
        {
            public int Task14(int a, int b, int c)
            {
                int sum = a + b + c;
                int product = a * b * c;

                return (sum > product ? sum : product) + 3;
            }
        }
        }
    

