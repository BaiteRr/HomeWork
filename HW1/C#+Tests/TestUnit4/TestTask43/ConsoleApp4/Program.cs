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


        }
    }
    public class SomeClass
    {
        public static int Chyslo(string n)
        {
            string[] words = n.Split(new char[] { ' ' });
            int result = 0;
            string Valid = "";
            for (int i = 0; i < words.Length; i++)
            {
                switch (words[i])
                {
                    case "сто":
                    case "двісті":
                    case "триста":
                    case "чотириста":
                    case "п'ятсот":
                    case "шістсот":
                    case "сімсот":
                    case "вісімсот":
                    case "дев'ятсот":
                        Valid = Valid + "s";
                        break;
                    case "десять":
                    case "одинадцять":
                    case "дванадцять":
                    case "тринадцять":
                    case "чотирнадцять":
                    case "п'ятнадцять":
                    case "шістнадцять":
                    case "сімнадцять":
                    case "вісімнадцять":
                    case "дев'ятнадцять":
                        Valid = Valid + "1";
                        break;
                    case "двадцять":
                    case "тридцять":
                    case "сорок":
                    case "п'ятдесят":
                    case "шістдесят":
                    case "сімдесят":
                    case "вісімдесят":
                    case "дев'яносто":
                        Valid = Valid + "d";
                        break;
                    case "один":
                    case "два":
                    case "три":
                    case "чотири":
                    case "п'ять":
                    case "шість":
                    case "сім":
                    case "вісім":
                    case "дев'ять":
                        Valid = Valid + "o";
                        break;
                    case "нуль":
                        Valid = Valid + "0";
                        break;
                    default:
                        Valid = Valid + "x";
                        break;
                }
            }

            if (Valid != "0" && Valid != "o" && Valid != "d" && Valid != "1" && Valid != "so" &&
                Valid != "sdo" && Valid != "sd" && Valid != "s1" && Valid != "s" && Valid != "do")
            {
                result = -1;
            }
            else
            {
                for (int i = 0; i < words.Length; i++)
                {
                    switch (words[i])
                    {
                        case "сто":
                            result = result + 100;
                            break;
                        case "двісті":
                            result = result + 200;
                            break;
                        case "триста":
                            result = result + 300;
                            break;
                        case "чотириста":
                            result = result + 400;
                            break;
                        case "п'ятсот":
                            result = result + 500;
                            break;
                        case "шістсот":
                            result = result + 600;
                            break;
                        case "сімсот":
                            result = result + 700;
                            break;
                        case "вісімсот":
                            result = result + 800;
                            break;
                        case "дев'ятсот":
                            result = result + 900;
                            break;
                        case "десять":
                            result = result + 10;
                            break;
                        case "одинадцять":
                            result = result + 11;
                            break;
                        case "дванадцять":
                            result = result + 12;
                            break;
                        case "тринадцять":
                            result = result + 13;
                            break;
                        case "чотирнадцять":
                            result = result + 14;
                            break;
                        case "п'ятнадцять":
                            result = result + 15;
                            break;
                        case "шістнадцять":
                            result = result + 16;
                            break;
                        case "сімнадцять":
                            result = result + 17;
                            break;
                        case "вісімнадцять":
                            result = result + 18;
                            break;
                        case "дев'ятнадцять":
                            result = result + 19;
                            break;
                        case "двадцять":
                            result = result + 20;
                            break;
                        case "тридцять":
                            result = result + 30;
                            break;
                        case "сорок":
                            result = result + 40;
                            break;
                        case "п'ятдесят":
                            result = result + 50;
                            break;
                        case "шістдесят":
                            result = result + 60;
                            break;
                        case "сімдесят":
                            result = result + 70;
                            break;
                        case "вісімдесят":
                            result = result + 80;
                            break;
                        case "дев'яносто":
                            result = result + 90;
                            break;
                        case "нуль":
                            result = result + 0;
                            break;
                        case "один":
                            result = result + 1;
                            break;
                        case "два":
                            result = result + 2;
                            break;
                        case "три":
                            result = result + 3;
                            break;
                        case "чотири":
                            result = result + 4;
                            break;
                        case "п'ять":
                            result = result + 5;
                            break;
                        case "шість":
                            result = result + 6;
                            break;
                        case "сім":
                            result = result + 7;
                            break;
                        case "вісім":
                            result = result + 8;
                            break;
                        case "дев'ять":
                            result = result + 9;
                            break;
                        default:
                            break;
                    }
                }
            }
            return result;
        }
    }
}


