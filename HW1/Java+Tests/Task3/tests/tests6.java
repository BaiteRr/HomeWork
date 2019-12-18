package Task3.tests;


import Task3.task4;
import Task3.task5;
import Task3.task6;
import Task3.task7;
import org.junit.Assert;
import org.junit.Test;
import static org.junit.Assert.*;

public class tests6 {
    @Test
    public void t1() throws Exception{
        int[] a = {4,1,3,5,2,3};
        int[] b = {3,2,5,3,1,4};
        Assert.assertArrayEquals(b, task6.getreversArray(a));
    }
    @Test
    public void t2()throws Exception{
        int[] a = {4,-1,-3,-5,2,3};
        int[] b = {3,2,-5,-3,-1,4};
        assertArrayEquals(b, task6.getreversArray(a));
    }
}
