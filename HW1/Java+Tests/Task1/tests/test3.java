package Task1.tests;

import Task1.task3;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class test3 {
    @Test
    public void t1() throws Exception{
        assertEquals(9, task3.getSum(2,3,4),0);
    }
    @Test
    public void t2() throws Exception{
        assertEquals(4, task3.getSum(-1,-2,4),0);
    }
    @Test
    public void t3() throws Exception{
        assertEquals(0, task3.getSum(-1,-2,0),0);
    }
    @Test
    public void t4() throws Exception{
        assertEquals(0, task3.getSum(-1,-2,-10),0);
    }
}