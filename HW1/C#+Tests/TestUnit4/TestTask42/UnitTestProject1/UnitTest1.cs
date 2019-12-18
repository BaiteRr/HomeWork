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
            Assert.AreEqual(SomeClass.Propys(7), "сім ");
        }

        [TestMethod]
        public void TestMethod2()
        {
            Assert.AreEqual(SomeClass.Propys(14), "чотирнадцять ");
        }

        [TestMethod]
        public void TestMethod3()
        {
            Assert.AreEqual(SomeClass.Propys(110), "сто десять ");
        }

        [TestMethod]
        public void TestMethod4()
        {
            Assert.AreEqual(SomeClass.Propys(341), "триста сорок один ");
        }

        [TestMethod]
        public void TestMethod5()
        {
            Assert.AreEqual(SomeClass.Propys(32), "тридцять два ");
        }

        [TestMethod]
        public void TestMethod6()
        {
            Assert.AreEqual(SomeClass.Propys(9999), "введіть число від 0 до 999 ");
        }

        [TestMethod]
        public void TestMethod7()
        {
            Assert.AreEqual(SomeClass.Propys(0), "нуль ");
        }

    }
        
}
