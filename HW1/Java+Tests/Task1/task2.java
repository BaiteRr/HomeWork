package Task1;

public class task2 {
    public static void main(String[] args) {
        System.out.println(getA(1,3));
    }

    public static String getA(int x, int y) {
        String a = "";
        if (x > 0) {
            if (x == 0) {
                if (y == 0) {
                    a = "в начале координат(0;0)";
                } else {
                    a = "на оси y";
                }
            }
            if (y > 0 && x != 0) {
                a = "1 четверти";
            } else {
                if (y == 0) {
                    a = "на оси x";
                } else {
                    a = "4 четверти";
                }

            }

        } else {
            if (x == 0) {
                if (y == 0) {
                    a = "в начале координат(0;0)";
                } else {
                    a = "на оси y";
                }
            }
            if (y > 0 && x != 0) {
                a = "2 четверти";
            } else {
                if (y == 0) {
                    if (x != 0)
                        a = "на оси x";
                } else {
                    if (x != 0)
                        a = "3 четверти";
                }

            }

        }
        return a;
    }
}