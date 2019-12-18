package Task4.tests;

import Task4.task6;
import org.junit.Assert;
import org.junit.Test;
import static org.junit.Assert.*;

public class test6 {
    @Test
    public void t1() throws Exception{
        String a = "000000000123";
        String aa = "";
        String b = "";
        String c = "";
        String d = "сто двадцать три";
        Assert.assertEquals(a, task6.getArray(aa,b,c,d));
    }
    @Test
    public void t2() throws Exception{
        String a = "000000735123";
        String aa = "";
        String b = "";
        String c = "семьсот тридцать пять";
        String d = "сто двадцать три";
        Assert.assertEquals(a, task6.getArray(aa,b,c,d));
    }
    @Test
    public void t3() throws Exception{
        String a = "000013735123";
        String aa = "";
        String b = "тринадцать";
        String c = "семьсот тридцать пять";
        String d = "сто двадцать три";
        Assert.assertEquals(a, task6.getArray(aa,b,c,d));
    }
    @Test
    public void t4() throws Exception{
        String a = "100013735123";
        String aa = "сто";
        String b = "тринадцать";
        String c = "семьсот тридцать пять";
        String d = "сто двадцать три";
        Assert.assertEquals(a, task6.getArray(aa,b,c,d));
    }
    @Test
    public void t5() throws Exception{
        String aa = "сто";
        String b = "тринадцать";
        String c = "семьсот тридцать пять fdf";
        String d = "сто двадцать три";
        Assert.assertEquals("error", task6.getArray(aa,b,c,d));
    }

}
