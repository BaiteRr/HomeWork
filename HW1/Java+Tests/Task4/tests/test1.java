package Task4.tests;

import Task4.task1;
import org.junit.Assert;
import org.junit.Test;
import static org.junit.Assert.*;

public class test1 {
    @Test
    public void t1() throws Exception{
        int a = 2;
        Assert.assertEquals("Tuesday - Вторник", task1.nameOfDay(a));
    }
    @Test
    public void t2()throws Exception{
        int a = 0;
        assertEquals("false",task1.nameOfDay(a));
    }
    @Test
    public void t3()throws Exception{
        int a = -1;
        assertEquals("false",task1.nameOfDay(a));
    }
    @Test
    public void t4()throws Exception{
        int a = 8;
        assertEquals("false",task1.nameOfDay(a));
    }
}
