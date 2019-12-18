package Task1.tests;

import Task1.task2;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class test2 {
    @Test
    public void t1() throws Exception{
        assertEquals("1 четверти", task2.getA(2,3));
    }
    @Test
    public void t2()throws Exception{
        assertEquals("1 четверти", task2.getA(3,2));
    }
    @Test
    public void t3()throws Exception{
        assertEquals("2 четверти", task2.getA(-3,2));
    }
    @Test
    public void t4()throws Exception{
        assertEquals("3 четверти", task2.getA(-3,-2));
    }

    @Test
    public void t5()throws Exception{
        assertEquals("4 четверти", task2.getA(2,-2));
    }
    @Test
    public void t6()throws Exception{
        assertEquals("в начале координат(0;0)", task2.getA(0,0));
    }
    @Test
    public void t7()throws Exception{
        assertEquals("на оси y", task2.getA(0,2));
    }
    @Test
    public void t8()throws Exception{
        assertEquals("на оси x", task2.getA(2,0));
    }
}
