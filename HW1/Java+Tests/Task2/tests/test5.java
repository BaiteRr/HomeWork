package Task2.tests;

import Task2.task5;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class test5 {
    @Test
    public void t1() throws Exception{
        assertEquals(6, task5.getSumCifr(123),0);
    }
    @Test
    public void t2() throws Exception{
        assertEquals(0, task5.getSumCifr(0),0);
    }
}
