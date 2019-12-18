package Task3.tests;

import Task3.task8;
import org.junit.Assert;
import org.junit.Test;
import static org.junit.Assert.*;

public class tests8 {
    @Test
    public void t1() throws Exception{
        double[] a = {4,1,3,5,2,3};
        double[] b = {5,2,3,4,1,3};
        Assert.assertArrayEquals(b, task8.get(a),0);
    }
    @Test
    public void t2()throws Exception{
        double[] a = {4,-1,3,-5,2,3,5};
        double[] b = {0};
        assertArrayEquals(b,task8.get(a),0);
    }
}
