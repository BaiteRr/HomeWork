public class LinkedList<T> implements List {
    public static void main(String[] args) {
        LinkedList<Integer> linkedList = new LinkedList<>(1);
        linkedList.push(3);
        linkedList.push(5);
        linkedList.push(7);
        System.out.println(linkedList.toString());
        linkedList.pop();
        System.out.println(linkedList.toString());
        linkedList.shift();
        System.out.println(linkedList.toString());
        linkedList.push(3);
        linkedList.push(5);
        linkedList.push(7);
        System.out.println(linkedList.length);
        System.out.println(linkedList.toString());
        System.out.println(linkedList.toArrayList().toString());
    }
    private  Noda root;
    private int length = 1;
    private Noda endLink;

    class Noda{
        private T element;
        private Noda next;
        private Noda prev;

    }

    private Noda createNoda(T element) {
        Noda noda = new Noda();
        noda.element = element;
        noda.next = null;
        noda.prev = null;
        return noda;
    }

    private void saveEndLink(Noda link){
            endLink = link;
    }

    LinkedList(T firstElement){
        this.root = createNoda(firstElement);
        saveEndLink(this.root);
    }

    @Override
    public Object push(Object element) {
        Noda newNoda = createNoda((T)element);
        Noda noda = this.endLink;
        noda.next = newNoda;
        newNoda.prev = noda;
        saveEndLink(newNoda);
        this.length++;
        return element;
    }

    @Override
    public Object pop() {
        Object element = endLink.element;
        saveEndLink(this.endLink.prev);
        this.endLink.next = null;
        this.length--;
        return element;
    }

    @Override
    public Object shift() {
        Object element =  this.root;
        this.root = this.root.next;
        this.root.prev = null;
        this.length--;
        return this.length;
    }

    @Override
    public Object unshift(Object element) {
        Noda noda = this.root;
        this.root = this.createNoda((T)element);
        this.length++;
        return this.length;
    }

    @Override
    public Object size() {
        return this.length;
    }

    @Override
    public   String toString(){
        Noda noda = this.root;
        String string = noda.element.toString();
        while (noda.next != null) {
             noda = noda.next;
            string += ", " + noda.element;
        }
        return string;
    }

    public ArrayList toArrayList(){
        ArrayList<T> arrayList =  new ArrayList<>();
        Noda noda = this.root;
        arrayList.push(noda.element);
        String string = noda.element.toString();
        while (noda.next != null) {
            noda = noda.next;
            arrayList.push(noda.element);
        }
        return arrayList;
    }
}
