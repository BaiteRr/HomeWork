package Task4.tests;

import Task4.task5;
import org.junit.Assert;
import org.junit.Test;
import static org.junit.Assert.*;

public class test5 {
    @Test
    public void t1() throws Exception{
        int a = 0;
        String[] b = {null,null,null,null,null,null,null,null,null,null,null,null};
        Assert.assertArrayEquals(b, task5.revers_bigger(a));
    }
    @Test
    public void t2()throws Exception{
        int a = 3;
        String[] b = {null,null,null,null,null,null,null,null,null,"",""," три"};
        assertArrayEquals(b,task5.revers_bigger(a));
    }
    @Test
    public void t3()throws Exception{
        int a = 25;
        String[] b = {null,null,null,null,null,null,null,null,null,""," двадцать"," пять"};
        assertArrayEquals(b,task5.revers_bigger(a));
    }
    @Test
    public void t4()throws Exception{
        int a = 476;
        String[] b = {null,null,null,null,null,null,null,null,null," четыреста"," семьдесят"," шесть"};
        assertArrayEquals(b,task5.revers_bigger(a));
    }
    @Test
    public void t5()throws Exception{
        int a = 999;
        String[] b = {null,null,null,null,null,null,null,null,null," девятьсот"," девяносто"," девять"};
        assertArrayEquals(b,task5.revers_bigger(a));
    }
    @Test
    public void t6()throws Exception{
        int a = 9999;
        String[] b = {null,null,null,null,null,null,"",""," девять тысячи"," девятьсот"," девяносто"," девять"};
        assertArrayEquals(b,task5.revers_bigger(a));
    }
    @Test
    public void t7()throws Exception{
        int a = 123459999;
        String[] b = {null,null,null," сто"," двадцать"," три миллиона"," четыреста"," пятьдесят"," девять тысячи"," девятьсот"," девяносто"," девять"};
        assertArrayEquals(b,task5.revers_bigger(a));
    }
    @Test
    public void t8()throws Exception{
        long a = 1123459999;
        String[] b = {"",""," один миллиарда"," сто"," двадцать"," три миллиона"," четыреста"," пятьдесят"," девять тысячи"," девятьсот"," девяносто"," девять"};
        assertArrayEquals(b,task5.revers_bigger(a));
    }
}
