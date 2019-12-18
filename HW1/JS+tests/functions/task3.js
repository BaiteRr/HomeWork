    function toNumber(array)
    {
        if(typeof array == 'number' || typeof array == 'string'){
            return 'false';
        }else
        if(array[0] != Number(array)||array != Number(array))
        {
        let number = [];
        let numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
        let for1 = [ "один", "два", "три", "четыре", "пять", "шесть", "семь", "восемь", "девять", ];
        let for10 = [ "десять", "двадцать", "тридцать", "сорок", "пятьдесят", "шестьдесят", "семьдесят", "восемьдесят", "девяносто", ];
        let for100 = [ "сто", "двести", "триста", "четыреста", "пятьсот", "шестьсот", "семьсот", "восемьсот", "девятьсот" ];
        let for11 = [ "одиннадцать", "двенадцать", "тринадцать", "четырнадцать", "пятнадцать", "шестнадцать", "семнадцать", "восемнадцать", "девятнадцать" ];
        let j = 0;
        for (let j = 0; j < 3; j++)
        {
            a = array[j];
            for(let i = 0; i < 9; i++)
            {
                if (a == for1[i])
                {
                    number[2] = numbers[i];
                }
                if (a == for10[i])
                {
                    number[1] = numbers[i];
                }
                if (a == for100[i])
                {
                    number[0] = numbers[i];
                }
                if (a == for11[i])
                {
                    number[2] = i+1;
                    number[1] = 1;
                }
            }
        }
        return number;
    }else{
        return 'false';
    }
    }
