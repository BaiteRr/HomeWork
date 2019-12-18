import org.junit.Test;
import java.math.BigDecimal;
import static org.junit.Assert.*;
public class LinkedListTests {

    @Test
    public void push_t1(){
        LinkedList<Integer> linkedList = new LinkedList<>(5);
        assertEquals(2,linkedList.push(2));
    }
    @Test
    public void push_t2(){
        LinkedList<String> linkedList = new LinkedList<>("sds");
        assertEquals("AAA",linkedList.push("AAA"));
    }
    @Test
    public void push_t3(){
        LinkedList<Boolean> linkedList = new LinkedList<>(true);
        assertEquals(true,linkedList.push(true));
    }
    @Test
    public void push_t4(){
        LinkedList<Object> linkedList = new LinkedList<>(new BigDecimal(5345));
        assertEquals(new BigDecimal(123),linkedList.push(new BigDecimal(123)));
    }
    @Test
    public void push_t5(){
        LinkedList<Integer> linkedList = new LinkedList<>(5);
        linkedList.push(2);
        linkedList.push(2);
        linkedList.push(2);
        linkedList.push(2);
        linkedList.push(2);
        linkedList.push(2);
        linkedList.push(2);
        linkedList.push(2);
        linkedList.push(2);
        linkedList.push(2);
        linkedList.push(2);
        linkedList.push(2);
        assertEquals(13,linkedList.size());
    }

    @Test
    public void pop_t1(){
        LinkedList<Integer> linkedList = new LinkedList<>(5);
        linkedList.push(2);
        linkedList.push(1);
        assertEquals(1,linkedList.pop());
    }
    @Test
    public void pop_t2(){
        LinkedList<String> linkedList = new LinkedList<>("fdf");
        linkedList.push("aaa");
        linkedList.push("bbb");
        assertEquals("bbb",linkedList.pop());
    }
    @Test
    public void pop_t3(){
        LinkedList<Object> linkedList = new LinkedList<>(new BigDecimal(45454));
        linkedList.push(new BigDecimal(123));
        linkedList.push(new BigDecimal(124));
        assertEquals(new BigDecimal(124),linkedList.pop());
    }

    @Test
    public void shift_t1(){
        LinkedList<String> linkedList = new LinkedList<>("fdf");
        linkedList.push("aaa");
        linkedList.push("bbb");
        linkedList.push("bbb");
        assertEquals(3,linkedList.shift());
    }
    @Test
    public void shift_t2(){
        LinkedList<Integer> linkedList = new LinkedList<>(5);
        linkedList.push(2);
        linkedList.push(1);
        assertEquals(2,linkedList.shift());
    }
    @Test
    public void shift_t3(){
        LinkedList<Object> linkedList = new LinkedList<>(123);
        linkedList.push(new BigDecimal(123));
        linkedList.push(new BigDecimal(124));
        linkedList.push(new BigDecimal(123));
        linkedList.push(new BigDecimal(124));
        linkedList.push(new BigDecimal(123));
        linkedList.push(new BigDecimal(124));

        assertEquals(6,linkedList.shift());
    }

    @Test
    public void unshift_t1(){
        LinkedList<Integer> linkedList = new LinkedList<>(5);
        linkedList.push(2);
        linkedList.push(2);
        linkedList.push(2);
        assertEquals(5,linkedList.unshift(2));
    }
    @Test
    public void unshift_t2(){
        LinkedList<String> LinkedList = new LinkedList<>("sdf");
        LinkedList.push("sds");
        LinkedList.push("fff");
        assertEquals(4,LinkedList.unshift("AAA"));
    }
    @Test
    public void unshift_t3(){
        LinkedList<Boolean> linkedList = new LinkedList<>(true);
        linkedList.push(true);
        linkedList.push(false);
        assertEquals(4,linkedList.unshift(true));
    }
    @Test
    public void unshift_t4(){
        LinkedList<Object> linkedList = new LinkedList<>(new BigDecimal(54353));
        linkedList.push(new BigDecimal(534543));
        linkedList.push(new BigDecimal(12344444));
        linkedList.push(new BigDecimal(-3123123));
        assertEquals(5,linkedList.unshift(new BigDecimal(123)));
    }
    @Test
    public void unshift_t5(){
        LinkedList<Integer> linkedList = new LinkedList<>(4);
        linkedList.unshift(2);
        linkedList.unshift(2);
        linkedList.unshift(2);
        linkedList.unshift(2);
        linkedList.unshift(2);
        linkedList.unshift(2);
        linkedList.unshift(2);
        linkedList.unshift(2);
        linkedList.unshift(2);
        linkedList.unshift(2);
        linkedList.unshift(2);
        linkedList.unshift(2);
        linkedList.unshift(2);
        assertEquals(14,linkedList.size());
    }

    @Test
    public void size_t1(){
        LinkedList<Object> linkedList = new LinkedList<>(new BigDecimal(5));
        linkedList.push(new BigDecimal(534543));
        linkedList.push(new BigDecimal(12344444));
        linkedList.push(new BigDecimal(-3123123));
        assertEquals(4,linkedList.size());
    }
    @Test
    public void size_t2(){
        LinkedList<Boolean> linkedList = new LinkedList<>(false);
        linkedList.push(true);
        linkedList.push(false);
        assertEquals(3,linkedList.size());
    }
    @Test
    public void size_t3(){
        LinkedList<Integer> linkedList = new LinkedList<>(5);
        linkedList.push(2);
        linkedList.push(2);
        linkedList.push(2);
        assertEquals(4,linkedList.size());
    }
    @Test
    public void size_t4(){
        LinkedList<String> linkedList = new LinkedList<>("sdf");
        linkedList.push("sds");
        linkedList.push("fff");
        assertEquals(3,linkedList.size());
    }

    @Test
    public void toString_t1(){
        LinkedList<String> linkedList = new LinkedList<>("FSDF");
        linkedList.push("sds");
        linkedList.push("fff");
        assertEquals("FSDF, sds, fff",linkedList.toString());
    }
    @Test
    public void toString_t2(){
        LinkedList<Integer> linkedList = new LinkedList<>(5);
        linkedList.push(1);
        linkedList.push(3);
        assertEquals("5, 1, 3",linkedList.toString());
    }
    @Test
    public void toString_t3(){
        LinkedList<Boolean> linkedList = new LinkedList<>(true);
        linkedList.push(true);
        linkedList.push(false);
        assertEquals("true, true, false",linkedList.toString());
    }
    @Test
    public void toString_t4(){
        LinkedList<Object> linkedList = new LinkedList<>(new BigDecimal(34));
        linkedList.push(new BigDecimal(534543));
        linkedList.push(new BigDecimal(12344444));
        linkedList.push(new BigDecimal(-3123123));
        assertEquals("34, 534543, 12344444, -3123123",linkedList.toString());
    }

    @Test
    public void toArrayList_t(){
        LinkedList<Integer> linkedList = new LinkedList<>(5);
        linkedList.push(2);
        linkedList.push(2);
        linkedList.push(2);
        ArrayList<Integer> arrayList = new ArrayList<>();
        arrayList.push(5);
        arrayList.push(2);
        arrayList.push(2);
        arrayList.push(2);
        assertEquals(arrayList.toString(),linkedList.toArrayList().toString());
    }
}
