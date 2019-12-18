public class ArrayList<T> implements List<T> {
    public static void main(String[] args) {
        ArrayList<Integer> a = new ArrayList<>();
        System.out.println(a.unshift(3));
        System.out.println(a.unshift(5));
        System.out.println(a.unshift(7));
        System.out.println(a.unshift(3));
        System.out.println(a.unshift(5));
        System.out.println(a.unshift(7));
        System.out.println(a.unshift(3));
        System.out.println(a.unshift(5));
        System.out.println(a.unshift(7));
        System.out.println(a.unshift(3));
        System.out.println(a.unshift(5));
        System.out.println(a.unshift(7));
        System.out.println(a.length);
        System.out.println(a.getList().length);
        System.out.println(a.toString());
        System.out.println(a.toLinkedList().toString());
    }

    private Object[] List = new Object[10];
    private  int length = 0;

    public Object[] getList() {
        return List;
    }

    public void updateArray(){
        Object[] secondList = new Object[this.List.length + 10];
        System.arraycopy(this.List, 0, secondList, 0, this.List.length);
        this.List = secondList;
    }

    @Override
    public T push(T element) {
        this.List[this.length] = element;
        if (this.List.length-1 == this.length)
            updateArray();
        this.length++;
        return element;
    }

    @Override
    public Object pop() {
        Object element = this.List[this.length - 1];
        Object[] array = new Object[this.List.length];
        for (int i = 0; i < this.length - 1; i++) {
            array[i] = this.List[i];
        }
        this.List = array;
        this.length--;
        return element;
    }

    @Override
    public Object shift() {

        Object[] array = new Object[this.List.length];
        int j = 0;
        for (int i = 1; i < this.length; i++) {
            array[j] = this.List[i];
            j++;
        }

        this.List = array;
        this.length--;
        return  this.length;
    }

    @Override
    public Object unshift(T element) {
        if (this.length == this.List.length - 1)
            updateArray();
        Object[] array  =new Object[this.List.length];
        array[0] = element;
        int j = 1;
        for (int i = 0; i < this.List.length - 1; i++) {
            array[j] = this.List[i];
            j++;
        }
        this.List = array;
        this.length++;
        return this.length;
    }

    @Override
    public Object size() {
        return this.length;
    }

    @Override
    public String toString() {
        String string = this.List[0].toString();
        for (int i = 1; i < this.length; i++) {
            string += ", " + this.List[i].toString();
        }
        return string;
    }

    public LinkedList toLinkedList(){
        LinkedList<Object> linkedList = new LinkedList<>(this.List[0]);
        for(int i = 1; i<this.length;i++)
            linkedList.push(this.List[i]);

        return linkedList;
    }
}
