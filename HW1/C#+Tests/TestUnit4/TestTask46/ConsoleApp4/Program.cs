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
            Console.OutputEncoding = System.Text.Encoding.GetEncoding("Cyrillic");
            Console.InputEncoding = System.Text.Encoding.GetEncoding("Cyrillic");
            string n = (Console.ReadLine());
            


        }
    }
    public class SomeClass
    {
        public static int Chyslo(string n)
        {
            n = n.Trim();

            string[] words = n.Split(' ');
            int result = 0;
            string valid = "";
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
                        valid = valid + "s";
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
                        valid = valid + "1";
                        break;
                    case "двадцять":
                    case "тридцять":
                    case "сорок":
                    case "п'ятдесят":
                    case "шістдесят":
                    case "сімдесят":
                    case "вісімдесят":
                    case "дев'яносто":
                        valid = valid + "d";
                        break;
                    case "одна":
                    case "один":
                    case "два":
                    case "дві":
                    case "три":
                    case "чотири":
                    case "п'ять":
                    case "шість":
                    case "сім":
                    case "вісім":
                    case "дев'ять":
                        valid = valid + "o";
                        break;
                    case "нуль":
                        valid = valid + "0";
                        break;
                    default:
                        valid = valid + "x";
                        break;
                }
            }

            if (valid != "0" && valid != "o" && valid != "d" && valid != "1" && valid != "so" &&
                valid != "sdo" && valid != "sd" && valid != "s1" && valid != "s" && valid != "do")
                return -1;

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
                    case "одна":
                    case "один":
                        result = result + 1;
                        break;
                    case "дві":
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

            return result;
        }

        public static long ChysloExt(string text)
        {
            long bilQty = 0;
            long milQty = 0;
            long kiloQty = 0;
            long hundredsQty = 0;

            var bils = new[] { "мільярдів", "мільярди", "мільярд" };
            var mils = new[] { "мільйонів", "мільйони", "мільйон" };
            var kilos = new[] { "тисяча", "тисячі", "тисяч" };

            var bilPart = text.Split(bils, StringSplitOptions.None);

            if (bilPart.Length == 2)
            {
                bilQty = Chyslo(bilPart[0]);
                if (bilQty == -1)
                    return -1;

                text = bilPart[1];
            }
            else if (bilPart.Length > 2)
                return -1;

            var milParts = text.Split(mils, StringSplitOptions.None);

            if (milParts.Length == 2)
            {
                milQty = Chyslo(milParts[0]);
                if (milQty == -1)
                    return -1;

                text = milParts[1];
            }
            else if (milParts.Length > 2)
                return -1;



            var kiloParts = text.Split(kilos, StringSplitOptions.None);


            if (kiloParts.Length == 2)
            {
                kiloQty = Chyslo(kiloParts[0]);


                if (kiloQty == -1)
                    return -1;


                if (!string.IsNullOrWhiteSpace(kiloParts[1]))
                    hundredsQty = Chyslo(kiloParts[1]);
            }
            else if (kiloParts.Length > 2)
                return -1;

            else if (kiloParts.Length == 1 &&
                     !string.IsNullOrWhiteSpace(kiloParts[0]))
            {
                hundredsQty = Chyslo(kiloParts[0]);
            }

            return bilQty * 1000000000L + milQty * 1000000L + kiloQty * 1000L + hundredsQty;
        }
    }
}


