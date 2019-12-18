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
            var aa = new SomeClass();
            Assert.AreEqual(aa.Task12(2, -3), "IV");
        }

        [TestMethod]
        public void TestMethod2()
        {
            var aa = new SomeClass();
            Assert.AreEqual(aa.Task12(0, 0), "початок координат");
        }

        [TestMethod]
        public void TestMethod3()
        {
            var aa = new SomeClass();
            Assert.AreEqual(aa.Task12(0, 1), "Oy");

        }

        [TestMethod]
        public void TestMethod4()
        {
            var aa = new SomeClass();
            Assert.AreEqual(aa.Task12(1, 0), "Ox");
        }

        [TestMethod]
        public void TestMethod5()
        {
            var aa = new SomeClass();
            Assert.AreEqual(aa.Task12(-1, -1), "III");
        }

        [TestMethod]
        public void TestMethod6()
        {
            var aa = new SomeClass();
            Assert.AreEqual(aa.Task12(-9, 1), "II");
        }

        [TestMethod]
        public void TestMethod7()
        {
            var aa = new SomeClass();
            Assert.AreEqual(aa.Task12(9, 1), "I");
        }
    }
}
