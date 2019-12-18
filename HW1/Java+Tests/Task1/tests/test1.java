package Task1.tests;

import Task1.task1;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class test1 {
    @Test
    public void t1() throws Exception{
        assertEquals(6.0, task1.forTest(2,3),0);
    }
    @Test
    public void t2()throws Exception{
        assertEquals(5.0,task1.forTest(3,2),0);
    }
    @Test
    public void t3()throws Exception{
        assertEquals(14.5,task1.forTest(12.5,2),0);
    }
    @Test
    public void t4()throws Exception{
        assertEquals(14.6,task1.forTest(12.6,2),0);
    }
}
