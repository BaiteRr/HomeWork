package Task3.tests;

import Task3.task10;
import org.junit.Assert;
import org.junit.Test;
import static org.junit.Assert.*;

public class tests10 {
    @Test
    public void t1() throws Exception{
        int[] a = {4,1,3,5,2,3};
        int[] b = {1,2,3,3,4,5};
        Assert.assertArrayEquals(b, task10.quick(a));
    }
    @Test
    public void t2()throws Exception{
        int[] a = {4,-1,3,-5,2,3,5};
        int[] b = {-5,-1,2,3,3,4,5};
        assertArrayEquals(b,task10.quick(a));
    }
    @Test
    public void t3() throws Exception{
        int[] a = {4,1,3,5,2,3};
        int[] b = {1,2,3,3,4,5};
        Assert.assertArrayEquals(b, task10.shell(a));
    }
    @Test
    public void t4()throws Exception{
        int[] a = {4,-1,3,-5,2,3,5};
        int[] b = {-5,-1,2,3,3,4,5};
        assertArrayEquals(b,task10.shell(a));
    }
    @Test
    public void t5() throws Exception{
        int[] a = {4,1,3,5,2,3};
        int[] b = {1,2,3,3,4,5};
        Assert.assertArrayEquals(b, task10.merge(a));
    }
    @Test
    public void t6()throws Exception{
        int[] a = {4,-1,3,-5,2,3,5};
        int[] b = {-5,-1,2,3,3,4,5};
        assertArrayEquals(b,task10.merge(a));
    }
    @Test
    public void t7() throws Exception{
        int[] a = {4,1,3,5,2,3};
        int[] b = {1,2,3,3,4,5};
        Assert.assertArrayEquals(b, task10.piramid(a));
    }
    @Test
    public void t8()throws Exception{
        int[] a = {4,-1,3,-5,2,3,5};
        int[] b = {-5,-1,2,3,3,4,5};
        assertArrayEquals(b,task10.piramid(a));
    }
}
