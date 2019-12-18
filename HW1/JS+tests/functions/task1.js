	function dayOfWeek(number){
		number = +number;
    if (number < 7 && number > 0)
    {
        return nameOfDay(number);
    }
    else
    {
    	
        return 'true';
    }

}

    function nameOfDay(number)
    {
        let numberOf = 0;
        let numberOfDay = [ 1, 2, 3, 4, 5, 6, 7 ];
        let namesOfDays = ["Monday - Понедельник", "Tuesday - Вторник", "Wednesday - Среда", "Thursday - Четверг",
        "Friday - Пятница", "Saturday - Суббота", "Sunday - Воскресенье" ];
        for(let i = 0; i < 7; i++)
        {
            if(numberOfDay[i] == number - 1)
            {
                numberOf = number - 1;
                break;
            }
        }
        let day = namesOfDays[numberOf];
        return day;
    }
    
