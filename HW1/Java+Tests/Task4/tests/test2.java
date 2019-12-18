package Task4.tests;

import Task4.task2;
import org.junit.Assert;
import org.junit.Test;
import static org.junit.Assert.*;

public class test2 {
    @Test
    public void t1() throws Exception{
        int a = 0;
        String[] b = {"","","Ноль"};
        Assert.assertArrayEquals(b, task2.revers(a));
    }
    @Test
    public void t2()throws Exception{
        int a = 3;
        String[] b = {"",""," три"};
        assertArrayEquals(b,task2.revers(a));
    }
    @Test
    public void t3()throws Exception{
        int a = 25;
        String[] b = {""," двадцать"," пять"};
        assertArrayEquals(b,task2.revers(a));
    }
    @Test
    public void t4()throws Exception{
        int a = 476;
        String[] b = {" четыреста"," семьдесят"," шесть"};
        assertArrayEquals(b,task2.revers(a));
    }
    @Test
    public void t5()throws Exception{
        int a = 999;
        String[] b = {" девятьсот"," девяносто"," девять"};
        assertArrayEquals(b,task2.revers(a));
    }
    @Test
    public void t6()throws Exception{
        int a = 9999;
        String[] b = {"false"};
        assertArrayEquals(b,task2.revers(a));
    }
}
