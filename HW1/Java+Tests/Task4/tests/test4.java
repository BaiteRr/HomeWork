package Task4.tests;

import Task4.task4;
import org.junit.Assert;
import org.junit.Test;
import static org.junit.Assert.*;

public class test4 {
    @Test
    public void t1() throws Exception{
        int a = 0;
        Assert.assertEquals(a,task4.sizeOfLine(1,1,1,1),0);
    }
    @Test
    public void t2() throws Exception{
        double a = 2.23606797749979;
        Assert.assertEquals(a,task4.sizeOfLine(3,2,1,1),0);
    }
    @Test
    public void t3() throws Exception{
        double a = 3.605551275463989;
        Assert.assertEquals(a,task4.sizeOfLine(-3,-2,-1,1),0);
    }

}
