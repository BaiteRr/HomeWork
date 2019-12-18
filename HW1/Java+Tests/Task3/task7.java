package Task3;


public class task7 {
    public static void main(String[] args) {
        int[] a = {4,1,3,5,2,3};
        System.out.println(getI(a));
    }
    public static int getI(int[] arr){
        int i = 0;
        i = 0;
        int index = 0;
        for(double a : arr)
        {
            if (a % 2 != 0)
            {
                i++;
            }
        }
        return  i;
    }
}
