package Task3.tests;


import Task3.task4;
import Task3.task7;
import org.junit.Assert;
import org.junit.Test;
import static org.junit.Assert.*;

public class tests4 {
    @Test
    public void t1() throws Exception{
        int[] a = {4,1,3,5,2,3};
        Assert.assertEquals(4, task4.getindex(a),0);
    }
    @Test
    public void t2()throws Exception{
        int[] a = {4,-1,3,-5,2,3};
        assertEquals(0, task4.getindex(a),0);
    }
}
