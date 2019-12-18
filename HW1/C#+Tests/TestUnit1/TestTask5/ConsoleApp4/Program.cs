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
            int a = int.Parse(Console.ReadLine());
            SomeClass NewObject = new SomeClass();
            NewObject.Task15(a);

        }
    }
    public class SomeClass
        {
        public String Task15(int a)
        {
            String result = "";
            if (a >= 0 && a <= 19)
            {
                result = "F";
            }
            if (a >= 20 && a <= 39)
            {
                result = "E";
            }
            if (a >= 40 && a <= 59)
            {
                result = "D";
            }
            if (a >= 60 && a <= 74)
            {
                result = "C";
            }
            if (a >= 75 && a <= 89)
            {
                result = "B";
            }
            if (a >= 90 && a <= 100)
            {
                result = "A";
            }
            return result;
        }
    }
 }
    

