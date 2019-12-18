package Task2.tests;

import Task2.task3;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class test3 {
    @Test
    public void t1() throws Exception{
        assertEquals(2, task3.getKoren(4),0);
    }
    @Test
    public void t2() throws Exception{
        assertEquals(3, task3.getKoren(9),0);
    }
    @Test
    public void t3() throws Exception{
        assertEquals(4, task3.getKoren(16),0);
    }
}
