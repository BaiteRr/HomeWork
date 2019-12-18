
     function revers_bigger(a)
    {if(a === Number(a) && a <= 999999999999 && a >= 0)
        {
        let i = 0;
        let words = [];
        let t = 11;
        while (a > 0)
        {
            let b = a % 1000;
            let c = [ "", "", "" ];
            c = revers(b);
            i++;
            a = (a - b) / 1000;
            switch (i)
            {
                case 2:
                    c[2] = c[2] + " тысячи";
                    break;
                case 3:
                    c[2] = c[2] + " миллиона";
                    break;
                case 4: c[2] = c[2] + " миллиарда";
                    break;
            }
            for (let j = 2; j >= 0; j--)
            {
                words[t] = c[j];
                t--;
            }
        }
        return words;
        }
    else{
        return 'false';
    }
    }
    function revers(a)
    {
        let result = [ "", "", "" ];
        if (a == 0)
        {
            result[2] = "Ноль";
        }
        else if (a == 110)
        {
            result[2] = "сто десять";
        }
        else
        {
            let numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
            let for1 = [ "один", "два", "три", "четыре", "пять", "шесть", "семь", "восемь", "девять", ];
            let for10 = [ "десять", "двадцать", "тридцать", "сорок", "пятьдесят", "шестьдесят", "семьдесят", "восемьдесят", "девяносто", ];
            let for100 = [ "сто", "двести", "триста", "четыреста", "пятьсот", "шестьсот", "семьсот", "восемьсот", "девятьсот" ];
            let for11 = [ "одиннадцать", "двенадцать", "тринадцать", "четырнадцать", "пятнадцать", "шестнадцать", "семнадцать", "восемнадцать", "девятнадцать" ];
            let b;
            let i = 1;
            while (a >= 1)
            {
                b = a % 10;
                a  =  (a - b) /  10;
                for (let j = 0; j < 9; j++)
                {
                    if (numbers[j] == b)
                    {
                        if (i == 1)
                        {
                            result[2] = " " + for1[j];
                            if (a % 10 == 1 && b != 0)
                            {
                                result[2] = " " + for11[j];
                                a /= 10;
                                i++;
                            }
                        }
                        else if (i == 2)
                        {
                            if (b > 1)
                            {
                                result[1] = " " + for10[j];
                            }
                        }
                        else if (i == 3)
                        {
                            result[0] = " " + for100[j];
                        }
                    }
                }
                i++;
            }
        }
        return result;
    }