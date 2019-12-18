package Task2.tests;

import Task2.task1;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class test1 {
    @Test
    public void t1() throws Exception{
        String a = "49 2450";
        assertEquals(a, task1.getChislo());
    }
}
