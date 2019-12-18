using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Calc_CSharpe;

namespace Calc_CSharpe
{
    
    public class Logic
    { 
    public double summ(double a, double b) {
    a += b;
    if(!this.isNice(a)) return 999999999999;
    return this.checkLenght(a);
}
    public double minus(double a, double b) {
    a -= b;
    if(!this.isNice(a)) return 999999999999;
    return this.checkLenght(a);
}
    public bool isNice(double a) {
    Int64 c = Convert.ToInt64(a);
    if (c > 999999999) {
        return false;
    }
    return true;
}
    public double divide(double a, double b) {
        if (a == 0 || b == 0) {
            return 0;
        }
        a /= b;
        if(!this.isNice(a)) return 999999999999;
        return this.checkLenght(a);
}
    public double multiply(double a, double b) {
    a *= b;
    if(!this.isNice(a)) return 999999999999;
    return this.checkLenght(a);
}
    public string cutDisplay(string a) {
    if (a == null) return "false";
            String stringa = "";
            int i = 0;
            if (a.Length > 9)
            {
                foreach (char q in a.ToCharArray())
                {
                    i++;
                    if (i > 9) break;
                    stringa += q;
                    
                }
            }
            else
            {
                return a;
            }
    return stringa;
}
    public double checkLenght(double a) {
    return Convert.ToDouble(this.cutDisplay(Convert.ToString(a)));
}
}
    
}
