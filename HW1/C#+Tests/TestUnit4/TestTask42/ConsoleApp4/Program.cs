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
        public static string Propys(int n)
        {
            string result = "";
            if (n > 999 || n < 0)
            {
                result = "введіть число від 0 до 999 ";
            }
            else
            {
                if (n == 0)
                {
                    result = "нуль ";
                }
                else
                {
                    int s = n / 100;
                    switch (s)
                    {
                        case 1:
                            result = "сто ";
                            break;
                        case 2:
                            result = "двісті ";
                            break;
                        case 3:
                            result = "триста ";
                            break;
                        case 4:
                            result = "чотириста ";
                            break;
                        case 5:
                            result = "п'ятсот ";
                            break;
                        case 6:
                            result = "шістсот ";
                            break;
                        case 7:
                            result = "сімсот ";
                            break;
                        case 8:
                            result = "вісімсот ";
                            break;
                        case 9:
                            result = "дев'ятсот ";
                            break;
                        default:
                            break;
                    }
                    int de = n % 100;
                    if (10 <= de && de <= 19)
                    {
                        switch (de)
                        {
                            case 10:
                                result = result + "десять ";
                                break;
                            case 11:
                                result = result + "одинадцять ";
                                break;
                            case 12:
                                result = result + "дванадцять ";
                                break;
                            case 13:
                                result = result + "тринадцять ";
                                break;
                            case 14:
                                result = result + "чотирнадцять ";
                                break;
                            case 15:
                                result = result + "п'ятнадцять ";
                                break;
                            case 16:
                                result = result + "шістнадцять ";
                                break;
                            case 17:
                                result = result + "сімнадцять ";
                                break;
                            case 18:
                                result = result + "вісімнадцять ";
                                break;
                            case 19:
                                result = result + "дев'ятнадцять ";
                                break;
                        }
                    }
                    else
                    {
                        int d = (n / 10) % 10;
                        if (2 <= d && d <= 9)
                        {
                            switch (d)
                            {
                                case 2:
                                    result = result + "двадцять ";
                                    break;
                                case 3:
                                    result = result + "тридцять ";
                                    break;
                                case 4:
                                    result = result + "сорок ";
                                    break;
                                case 5:
                                    result = result + "п'ятдесят ";
                                    break;
                                case 6:
                                    result = result + "шістдесят ";
                                    break;
                                case 7:
                                    result = result + "сімдесят ";
                                    break;
                                case 8:
                                    result = result + "вісімдесят ";
                                    break;
                                case 9:
                                    result = result + "дев'яносто ";
                                    break;
                                default:
                                    break;
                            }
                        }
                        else
                        {
                            result = result + "";
                        }

                        int o = n % 10;
                        switch (o)
                        {
                            case 1:
                                result = result + "один ";
                                break;
                            case 2:
                                result = result + "два ";
                                break;
                            case 3:
                                result = result + "три ";
                                break;
                            case 4:
                                result = result + "чотири ";
                                break;
                            case 5:
                                result = result + "п'ять ";
                                break;
                            case 6:
                                result = result + "шість ";
                                break;
                            case 7:
                                result = result + "сім ";
                                break;
                            case 8:
                                result = result + "вісім ";
                                break;
                            case 9:
                                result = result + "дев'ять ";
                                break;
                            default:
                                break;
                        }

                    }
                }
            }
            return result;
        }
    }
}


