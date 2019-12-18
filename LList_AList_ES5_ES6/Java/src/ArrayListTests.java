import org.junit.Test;
import java.math.BigDecimal;
import static org.junit.Assert.*;

public class ArrayListTests {

    @Test
    public void push_t1(){
        ArrayList<Integer> arrayList = new ArrayList<>();
        assertEquals(2,arrayList.push(2),0);
    }
    @Test
    public void push_t2(){
        ArrayList<String> arrayList = new ArrayList<>();
        assertEquals("AAA",arrayList.push("AAA"));
    }
    @Test
    public void push_t3(){
        ArrayList<Boolean> arrayList = new ArrayList<>();
        assertEquals(true,arrayList.push(true));
    }
    @Test
    public void push_t4(){
        ArrayList<Object> arrayList = new ArrayList<>();
        assertEquals(new BigDecimal(123),arrayList.push(new BigDecimal(123)));
    }
    @Test
    public void push_t5(){
        ArrayList<Integer> arrayList = new ArrayList<>();
        arrayList.push(2);
        arrayList.push(2);
        arrayList.push(2);
        arrayList.push(2);
        arrayList.push(2);
        arrayList.push(2);
        arrayList.push(2);
        arrayList.push(2);
        arrayList.push(2);
        arrayList.push(2);
        arrayList.push(2);
        arrayList.push(2);
        assertEquals(20,arrayList.getList().length,0);
    }

    @Test
    public void pop_t1(){
        ArrayList<Integer> arrayList = new ArrayList<>();
        arrayList.push(2);
        arrayList.push(1);
        assertEquals(1,arrayList.pop());
    }
    @Test
    public void pop_t2(){
        ArrayList<String> arrayList = new ArrayList<>();
        arrayList.push("aaa");
        arrayList.push("bbb");
        assertEquals("bbb",arrayList.pop());
    }
    @Test
    public void pop_t3(){
        ArrayList<Object> arrayList = new ArrayList<>();
        arrayList.push(new BigDecimal(123));
        arrayList.push(new BigDecimal(124));
        assertEquals(new BigDecimal(124),arrayList.pop());
    }

    @Test
    public void shift_t1(){
        ArrayList<String> arrayList = new ArrayList<>();
        arrayList.push("aaa");
        arrayList.push("bbb");
        arrayList.push("bbb");
        assertEquals(2,arrayList.shift());
    }
    @Test
    public void shift_t2(){
        ArrayList<Integer> arrayList = new ArrayList<>();
        arrayList.push(2);
        arrayList.push(1);
        assertEquals(1,arrayList.shift());
    }
    @Test
    public void shift_t3(){
        ArrayList<Object> arrayList = new ArrayList<>();
        arrayList.push(new BigDecimal(123));
        arrayList.push(new BigDecimal(124));
        arrayList.push(new BigDecimal(123));
        arrayList.push(new BigDecimal(124));
        arrayList.push(new BigDecimal(123));
        arrayList.push(new BigDecimal(124));

        assertEquals(5,arrayList.shift());
    }

    @Test
    public void unshift_t1(){
        ArrayList<Integer> arrayList = new ArrayList<>();
        arrayList.push(2);
        arrayList.push(2);
        arrayList.push(2);
        assertEquals(4,arrayList.unshift(2));
    }
    @Test
    public void unshift_t2(){
        ArrayList<String> arrayList = new ArrayList<>();
        arrayList.push("sds");
        arrayList.push("fff");
        assertEquals(3,arrayList.unshift("AAA"));
    }
    @Test
    public void unshift_t3(){
        ArrayList<Boolean> arrayList = new ArrayList<>();
        arrayList.push(true);
        arrayList.push(false);
        assertEquals(3,arrayList.unshift(true));
    }
    @Test
    public void unshift_t4(){
        ArrayList<Object> arrayList = new ArrayList<>();
        arrayList.push(new BigDecimal(534543));
        arrayList.push(new BigDecimal(12344444));
        arrayList.push(new BigDecimal(-3123123));
        assertEquals(4,arrayList.unshift(new BigDecimal(123)));
    }
    @Test
    public void unshift_t5(){
        ArrayList<Integer> arrayList = new ArrayList<>();
        arrayList.unshift(2);
        arrayList.unshift(2);
        arrayList.unshift(2);
        arrayList.unshift(2);
        arrayList.unshift(2);
        arrayList.unshift(2);
        arrayList.unshift(2);
        arrayList.unshift(2);
        arrayList.unshift(2);
        arrayList.unshift(2);
        arrayList.unshift(2);
        arrayList.unshift(2);
        arrayList.unshift(2);
        assertEquals(20,arrayList.getList().length,0);
    }

    @Test
    public void size_t1(){
        ArrayList<Object> arrayList = new ArrayList<>();
        arrayList.push(new BigDecimal(534543));
        arrayList.push(new BigDecimal(12344444));
        arrayList.push(new BigDecimal(-3123123));
        assertEquals(3,arrayList.size());
    }
    @Test
    public void size_t2(){
        ArrayList<Boolean> arrayList = new ArrayList<>();
        arrayList.push(true);
        arrayList.push(false);
        assertEquals(2,arrayList.size());
    }
    @Test
    public void size_t3(){
        ArrayList<Integer> arrayList = new ArrayList<>();
        arrayList.push(2);
        arrayList.push(2);
        arrayList.push(2);
        assertEquals(3,arrayList.size());
    }
    @Test
    public void size_t4(){
        ArrayList<String> arrayList = new ArrayList<>();
        arrayList.push("sds");
        arrayList.push("fff");
        assertEquals(2,arrayList.size());
    }

    @Test
    public void toString_t1(){
        ArrayList<String> arrayList = new ArrayList<>();
        arrayList.push("sds");
        arrayList.push("fff");
        assertEquals("sds, fff",arrayList.toString());
    }
    @Test
    public void toString_t2(){
        ArrayList<Integer> arrayList = new ArrayList<>();
        arrayList.push(1);
        arrayList.push(3);
        assertEquals("1, 3",arrayList.toString());
    }
    @Test
    public void toString_t3(){
        ArrayList<Boolean> arrayList = new ArrayList<>();
        arrayList.push(true);
        arrayList.push(false);
        assertEquals("true, false",arrayList.toString());
    }
    @Test
    public void toString_t4(){
        ArrayList<Object> arrayList = new ArrayList<>();
        arrayList.push(new BigDecimal(534543));
        arrayList.push(new BigDecimal(12344444));
        arrayList.push(new BigDecimal(-3123123));
        assertEquals("534543, 12344444, -3123123",arrayList.toString());
    }

    @Test
    public void toLinkedList_t(){
        LinkedList<Integer> linkedList = new LinkedList<>(5);
        linkedList.push(2);
        linkedList.push(2);
        linkedList.push(2);
        ArrayList<Integer> arrayList = new ArrayList<>();
        arrayList.push(5);
        arrayList.push(2);
        arrayList.push(2);
        arrayList.push(2);
        assertEquals(linkedList.toString(),arrayList.toLinkedList().toString());
    }

}
