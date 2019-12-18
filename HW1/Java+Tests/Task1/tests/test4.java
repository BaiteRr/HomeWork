package Task1.tests;


import Task1.task4;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class test4 {
    @Test
    public void t1() throws Exception{
        assertEquals(9, task4.getMax(1,2,3),0);
    }
    @Test
    public void t2() throws Exception{
        assertEquals(15, task4.getMax(2,2,3),0);
    }
    @Test
    public void t3() throws Exception{
        assertEquals(6, task4.getMax(1,1,1),0);
    }
}
