package Task2.tests;

import Task2.task2;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class test2 {
    @Test
    public void t1() throws Exception{
        String a = "PROSTOE";
        assertEquals(a, task2.getProst(3));
    }
    @Test
    public void t2() throws Exception{
        String a = "NE PROSTOE";
        assertEquals(a, task2.getProst(8));
    }
}
