package Task3.tests;


import Task3.task4;
import Task3.task5;
import Task3.task7;
import org.junit.Assert;
import org.junit.Test;
import static org.junit.Assert.*;

public class tests5 {
    @Test
    public void t1() throws Exception{
        int[] a = {4,1,3,5,2,3};
        Assert.assertEquals(9, task5.getOddsumm(a),0);
    }
    @Test
    public void t2()throws Exception{
        int[] a = {4,-1,-3,-5,2,3};
        assertEquals(3, task5.getOddsumm(a),0);
    }
}
