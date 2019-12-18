package Task3.tests;

import Task3.task9;
import org.junit.Assert;
import org.junit.Test;
import static org.junit.Assert.*;

public class tests9 {
    @Test
    public void t1() throws Exception {
        int[] a = {4, 1, 3, 5, 2, 3};
        int[] b = {5, 4, 3, 3, 2, 1};
        assertArrayEquals(b, task9.BubbleSort(a));
    }

    @Test
    public void t2() throws Exception {
        int[] a = {4, -1, 3, -5, 2, 3};
        int[] b = {4, 3, 3, 2, -1, -5};
        assertArrayEquals(b, task9.BubbleSort(a));
    }
    @Test
    public void t3() throws Exception {
        int[] a = {4, 1, 3, 5, 2, 3};
        int[] b = {1, 2, 3, 3, 4, 5};
        assertArrayEquals(b, task9.InsertionSort(a));
    }

    @Test
    public void t4() throws Exception {
        int[] a = {4, -1, 3, -5, 2, 3};
        int[] b = {-5, -1, 2, 3, 3, 4};
        assertArrayEquals(b, task9.InsertionSort(a));
    }
    @Test
    public void t5() throws Exception {
        int[] a = {4, 1, 3, 5, 2, 3};
        int[] b = {1, 2, 3, 3, 4, 5};
        assertArrayEquals(b, task9.SelectionSort(a));
    }

    @Test
    public void t6() throws Exception {
        int[] a = {4, -1, 3, -5, 2, 3};
        int[] b = {-5, -1, 2, 3, 3, 4};
        assertArrayEquals(b, task9.SelectionSort(a));
    }
}