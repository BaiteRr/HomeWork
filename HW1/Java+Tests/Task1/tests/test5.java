package Task1.tests;

import Task1.task5;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class test5 {
    @Test
    public void t1() throws Exception{
        assertEquals("F", task5.getScore(5));
    }
    @Test
    public void t2() throws Exception{
        assertEquals("ERROR", task5.getScore(-20));
    }
    @Test
    public void t3() throws Exception{
        assertEquals("ERROR", task5.getScore(101));
    }
    @Test
    public void t4() throws Exception{
        assertEquals("A", task5.getScore(100));
    }
}
