    function sizeOfLine( x1,  y1,  x2,  y2)
    {
        if(typeof x1 == 'number' || typeof x2 == 'number' || typeof y1 == 'number'||typeof y2 == 'number')
        {
        let a = 0;
        let x = x2 - x1;
        let y = y2 - y1;
        x = x * x;
        y = y * y;
        a = x + y;
        a = Math.pow(a, 0.5);
        return  a;
        }else{
            return 'false';
        }
    }
