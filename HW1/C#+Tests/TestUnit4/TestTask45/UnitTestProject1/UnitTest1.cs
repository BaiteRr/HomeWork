using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using ConsoleApp4;

namespace UnitTestProject1
{
    [TestClass]
    public class UnitTest1
    {
        [TestMethod]
        public void TestMethod1()
        {
            Assert.AreEqual(SomeClass.Propys2(7), "сім");
        }

        [TestMethod]
        public void TestMethod2()
        {
            Assert.AreEqual(SomeClass.Propys2(14), "чотирнадцять");
        }

        [TestMethod]
        public void TestMethod3()
        {
            Assert.AreEqual(SomeClass.Propys2(110), "сто десять");
        }

        [TestMethod]
        public void TestMethod4()
        {
            Assert.AreEqual(SomeClass.Propys2(341), "триста сорок один");
        }

        [TestMethod]
        public void TestMethod5()
        {
            Assert.AreEqual(SomeClass.Propys2(32), "тридцять два");
        }

        [TestMethod]
        public void TestMethod6()
        {
            Assert.AreEqual(SomeClass.Propys2(9999), "дев'ять тисяч дев'ятсот дев'яносто дев'ять");
        }

        [TestMethod]
        public void TestMethod7()
        {
            Assert.AreEqual(SomeClass.Propys2(0), "нуль");
        }

        [TestMethod]
        public void TestMethod8()
        {
            Assert.AreEqual(SomeClass.Propys2(123654733001), "сто двадцять три мільярди шістсот п'ятдесят чотири мільйони сімсот тридцять три тисячі один");
        }

        [TestMethod]
        public void TestMethod9()
        {
            Assert.AreEqual(SomeClass.Propys2(123000000001), "сто двадцять три мільярди один");
        }
        [TestMethod]
        public void TestMethod10()
        {
            Assert.AreEqual(SomeClass.Propys2(1236547330019), "введіть коректне число");
        }
        [TestMethod]
        public void TestMethod11()
        {
            Assert.AreEqual(SomeClass.Propys2(701225513), "сімсот один мільйон двісті двадцять п'ять тисяч п'ятсот тринадцять");
        }
    }
        
}
