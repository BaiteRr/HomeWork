public interface List<T> {
    public T push(T element);
    public Object pop();
    public Object shift();
    public Object unshift(T element);
    public Object size();
    public String toString();
}
