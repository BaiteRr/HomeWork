using NUnit.Framework;
using Calc_CSharpe;

namespace Tests
{
    public class Tests
    {
        Logic logic = new Logic();
        [SetUp]
        public void Setup()
        {
        }

        [Test]
        public void sum_t1()
        {
            Assert.AreEqual(33,logic.summ(10,23));
        }
        [Test]
        public void sum_t2()
        {
            Assert.AreEqual(45, logic.summ(0, 45));
        }
        [Test]
        public void sum_t3()
        {
            Assert.AreEqual(67, logic.summ(67, 0));
        }
        [Test]
        public void sum_t4()
        {
            Assert.AreEqual(10, logic.summ(1.1, 8.9));
        }
         [Test]
        public void sum_t5()
        {
            Assert.AreEqual(6.8, logic.summ(2.3, 4.5));
        }
        [Test]
        public void sum_t6()
        {
            Assert.AreEqual(0, logic.summ(0, 0));
        }
        [Test]
        public void sum_t7()
        {
            Assert.AreEqual(13, logic.summ(-32, 45));
        }
        [Test]
        public void sum_t8()
        {
            Assert.AreEqual(-55, logic.summ(-67, 12));
        }
        [Test]
        public void sum_t9()
        {
            Assert.AreEqual(-3.234567, logic.summ(-1, -2.234567));
        }
        [Test]
        public void sum_t10()
        {
            Assert.AreEqual(1.0000001, logic.summ(0.0000001, 1));
        }


        [Test]
        public void minus_t1()
        {
            Assert.AreEqual(4, logic.minus(10,6 ));
        }
        [Test]
        public void minus_t2()
        {
            Assert.AreEqual(15, logic.minus(15,0 ));
        }
        [Test]
        public void minus_t3()
        {
            Assert.AreEqual(-8, logic.minus(0,8 ));
        }
        [Test]
        public void minus_t4()
        {
            Assert.AreEqual(2.5, logic.minus(5.5,3 ));
        }
        [Test]
        public void minus_t5()
        {
            Assert.AreEqual(3.8, logic.minus(4.9,1.1 ));
        }
        [Test]
        public void minus_t6()
        {
            Assert.AreEqual(-16, logic.minus(-9,7 ));
        }
        [Test]
        public void minus_t7()
        {
            Assert.AreEqual(-17.7, logic.minus(-8.4,9.3 ));
        }
        [Test]
        public void minus_t8()
        {
            Assert.AreEqual(-19998, logic.minus(-9999,9999 ));
        }
        [Test]
        public void minus_t9()
        {
            Assert.AreEqual(-6466, logic.minus(-3232, 3234));
        }
        [Test]
        public void minus_t10()
        {
            Assert.AreEqual(-0.3444, logic.minus(4.999, 5.3434));
        }
        [Test]
        public void minus_t11()
        {
            Assert.AreEqual(0.1358024, logic.minus(2.1234567,1.9876543 ));
        }
        [Test]
        public void minus_t12()
        {
            Assert.AreEqual(21274.247, logic.minus(21321.123,46.876 ));
        }
        [Test]
        public void minus_t13()
        {
            Assert.AreEqual(7122.245, logic.minus(7123.545, 1.3));
        }
        [Test]
        public void minus_t14()
        {
            Assert.AreEqual(0, logic.minus(234.777,234.777 ));
        }
        [Test]
        public void minus_t15()
        {
            Assert.AreEqual(-234465.4, logic.minus(-123.4,234342 ));
        }
        [Test]
        public void minus_t16()
        {
            Assert.AreEqual(-463, logic.minus(-465, -2));
        }


        [Test]
        public void multiply_t1()
        {
            Assert.AreEqual(230, logic.multiply(10,23 ));
        }
        [Test]
        public void multiply_t2()
        {
            Assert.AreEqual(0, logic.multiply(0,45 ));
        }
        [Test]
        public void multiply_t3()
        {
            Assert.AreEqual(0, logic.multiply(67, 0));
        }
        [Test]
        public void multiply_t4()
        {
            Assert.AreEqual(9.79, logic.multiply(1.1, 8.9));
        }
        [Test]
        public void multiply_t5()
        {
            Assert.AreEqual(10.35, logic.multiply(2.3,4.5 ));
        }
        [Test]
        public void multiply_t6()
        {
            Assert.AreEqual(0, logic.multiply(0, 0));
        }
        [Test]
        public void multiply_7()
        {
            Assert.AreEqual(-1440, logic.multiply(-32,45 ));
        }
        [Test]
        public void multiply_t8()
        {
            Assert.AreEqual(1440, logic.multiply(-32,-45 ));
        }
        [Test]
        public void multiply_t9()
        {
            Assert.AreEqual(20.47, logic.multiply(-8.9, -2.3));
        }
        [Test]
        public void multiply_t10()
        {
            Assert.AreEqual(0.27, logic.multiply(0.9, 0.3));
        }
        [Test]
        public void multiply_t11()
        {
            Assert.AreEqual(2.67, logic.multiply(8.9,0.3 ));
        }
        [Test]
        public void multiply_t12()
        {
            Assert.AreEqual(2.4, logic.multiply(-8, -0.3));
        }
        [Test]
        public void multiply_t13()
        {
            Assert.AreEqual(24, logic.multiply(8, 3));
        }
        [Test]
        public void multiply_t14()
        {
            Assert.AreEqual(1.5, logic.multiply(0.5,3 ));
        }
        [Test]
        public void multiply_t15()
        {
            Assert.AreEqual(0.3391972, logic.multiply(0.25,1.356789 ));
        }
        [Test]
        public void multiply_t16()
        {
            Assert.AreEqual(1.2950551, logic.multiply(0.9545,1.356789 ));
        }
        [Test]
        public void multiply_t17()
        {
            Assert.AreEqual(4.2206980, logic.multiply(2.123456789, 1.9876543));
        }



        [Test]
        public void divide_t1()
        {
            Assert.AreEqual(0, logic.divide(0,45 ));
        }
        [Test]
        public void divide_t2()
        {
            Assert.AreEqual(0.4347826, logic.divide(10, 23));
        }
        [Test]
        public void divide_t3()
        {
            Assert.AreEqual(0, logic.divide(67,0 ));
        }
        [Test]
        public void divide_t4()
        {
            Assert.AreEqual(1, logic.divide(10,10 ));
        }
        [Test]
        public void divide_t5()
        {
            Assert.AreEqual(7.5681818, logic.divide(333,44 ));
        }
        [Test]
        public void divide_t6()
        {
            Assert.AreEqual(0, logic.divide(0,0 ));
        }
        [Test]
        public void divide_t7()
        {
            Assert.AreEqual(3.7073170, logic.divide(45.6, 12.3));
        }
        [Test]
        public void divide_t8()
        {
            Assert.AreEqual(-4.45, logic.divide(-8.9,2 ));
        }


        [Test]
        public void cutDisplay_t1()
        {
            Assert.AreEqual("123", logic.cutDisplay("123"));
        }
        [Test]
        public void cutDisplay_t2()
        {
            Assert.AreEqual("-456", logic.cutDisplay("-456"));
        }
        [Test]
        public void cutDisplay_t3()
        {
            Assert.AreEqual("0", logic.cutDisplay("0"));
        }
        [Test]
        public void cutDisplay_t4()
        {
            Assert.AreEqual("123456789", logic.cutDisplay("1234567891"));
        }
        [Test]
        public void cutDisplay_t5()
        {
            Assert.AreEqual("-12345678", logic.cutDisplay("-123456789"));
        }
        [Test]
        public void cutDisplay_t6()
        {
            Assert.AreEqual("-1.234567", logic.cutDisplay("-1.2345678"));
        }
        [Test]
        public void cutDisplay_t7()
        {
            Assert.AreEqual("1.2345678", logic.cutDisplay("1.23456789"));
        }
        [Test]
        public void cutDisplay_t8()
        {
            Assert.AreEqual("33.567899", logic.cutDisplay("33.56789987"));
        }
        [Test]
        public void cutDisplay_t9()
        {
            Assert.AreEqual("-33.56789", logic.cutDisplay("-33.56789987"));
        }
        [Test]
        public void cutDisplay_t10()
        {
            Assert.AreEqual("99999.987", logic.cutDisplay("99999.98765"));
        }
        [Test]
        public void cutDisplay_t11()
        {
            Assert.AreEqual("-99999.98", logic.cutDisplay("-99999.98765"));
        }
        [Test]
        public void cutDisplay_t12()
        {
            Assert.AreEqual("123456789", logic.cutDisplay("1234567890534534.2131231"));
        }
    }
    
}