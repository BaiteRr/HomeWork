package Task2.tests;

import Task2.task4;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class test4 {
    @Test
    public void t1() throws Exception{
        assertEquals(125, task4.getFakt(5),0);
    }
    @Test
    public void t2() throws Exception{
        assertEquals(0, task4.getFakt(-5),0);
    }
}
