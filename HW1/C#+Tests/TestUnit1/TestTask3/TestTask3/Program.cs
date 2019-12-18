using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TestTask3
{
    public class Program
    {
        static void Main(string[] args)
        {
            int a = int.Parse(Console.ReadLine());
            int b = int.Parse(Console.ReadLine());
            int c = int.Parse(Console.ReadLine());

            SomeClass NewObject = new SomeClass();
            NewObject.Task13(a, b, c);

        }
    }
        public class SomeClass
        {
            public int Task13(int a, int b, int c)
            {
                int result = 0;

                if (a > 0)
                {
                    result = result + a;
                }

                if (b > 0)
                {
                    result = result + b;
                }

                if (c > 0)
                {
                    result = result + c;
                }

                return result;
            }
        }
    }


        
       

