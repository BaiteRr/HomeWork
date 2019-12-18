package com.example.calculator;

import java.math.BigDecimal;

public class Logic
{
    public double summ(double a, double b) {
        BigDecimal a1 = new BigDecimal(a);
        BigDecimal b1 = new BigDecimal(b);
        a1 = a1.add(b1);
        a = Double.parseDouble(a1.toString());
        if(!this.isNice(a)) return 1999999999;
        Float aa = new Float(a);
        return this.checkLenghtMult(aa);
    }
    public double minus(double a, double b) {
        BigDecimal a1 = new BigDecimal(a);
        BigDecimal b1 = new BigDecimal(b);
        a1 = a1.subtract(b1);
        a = Double.parseDouble(a1.toString());
        if(!this.isNice(a)) return 1999999999;
        Float aa = new Float(a);
        return this.checkLenghtMult(aa);
    }
    public boolean isNice(double a) {
        Integer c = (int) a;
        if (c > 999999999||c < -99999999) {
            return false;
        }
        return true;
    }
    public double divide(double a, double b) {
        if (a == 0 || b == 0) {
            return 0;
        }
        BigDecimal a1 = new BigDecimal(a);
        BigDecimal b1 = new BigDecimal(b);
        a1 = a1.divide(b1);
        a = Double.parseDouble(a1.toString());
        if(!this.isNice(a)) return 1999999999;
        Float aa = new Float(a);
        return this.checkLenghtMult(aa);
    }
    public double multiply(double a, double b) {
        BigDecimal a1 = new BigDecimal(a);
        BigDecimal b1 = new BigDecimal(b);
        a1 = a1.multiply(b1);
        a = Double.parseDouble(a1.toString());
        if(!this.isNice(a)) return 1999999999;
        Float aa = new Float(a);
        return this.checkLenghtMult(aa);
    }
    public double checkLenghtMult(Float a) {
        return Double.parseDouble(this.cutDisplay((new BigDecimal(a)).toString()));
    }
    public String cutDisplay(String a) {
        if (a == null) return "false";
        String Stringa = "";
        int i = 0;
        if (a.length() > 9)
        {
            for (char q : a.toCharArray())
            {
                i++;
                if (i > 9) break;
                Stringa += q;

            }
        }
        else
        {
            return a;
        }
        return Stringa;
    }
    public double checkLenght(Double a) {
        return Double.parseDouble(this.cutDisplay((new BigDecimal(a)).toString()));
    }
}
