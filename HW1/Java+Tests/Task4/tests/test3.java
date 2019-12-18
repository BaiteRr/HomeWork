package Task4.tests;

import Task4.task3;
import org.junit.Assert;
import org.junit.Test;
import static org.junit.Assert.*;

public class test3 {
    @Test
    public void t1() throws Exception{
        int[] a = {0,0,0};
        String[] b = {"","","Ноль"};
        Assert.assertArrayEquals(a,task3.newArray(b));
    }
    @Test
    public void t2()throws Exception{
        int[] a = {0,0,3};
        String[] b = {"","","три"};
        assertArrayEquals(a,task3.newArray(b));
    }
    @Test
    public void t3()throws Exception{
        int[] a = {0,2,5};
        String[] b = {"","двадцать","пять"};
        assertArrayEquals(a,task3.newArray(b));
    }
    @Test
    public void t4()throws Exception{
        int[] a = {4,7,6};
        String[] b = {"четыреста","семьдесят","шесть"};
        assertArrayEquals(a,task3.newArray(b));
    }
    @Test
    public void t5()throws Exception{
        int[] a = {9,9,9};
        String[] b = {"девятьсот","девяносто","девять"};
        assertArrayEquals(a,task3.newArray(b));
    }
    @Test
    public void t6()throws Exception{
        int[] a = {0,0,0};
        String[] b = {"девятьсот","девяносто","девять","fd"};
        assertArrayEquals(a,task3.newArray(b));
    }
}
