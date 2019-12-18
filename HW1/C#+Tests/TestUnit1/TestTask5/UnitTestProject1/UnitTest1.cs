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
            Assert.AreEqual(aa.Task15(0), "F");
        }

        [TestMethod]
        public void TestMethod2()
        {
            var aa = new SomeClass();
            Assert.AreEqual(aa.Task15(20), "E");
        }

        [TestMethod]
        public void TestMethod3()
        {
            var aa = new SomeClass();
            Assert.AreEqual(aa.Task15(45), "D");
        }

        [TestMethod]
        public void TestMethod4()
        {
            var aa = new SomeClass();
            Assert.AreEqual(aa.Task15(65), "C");
        }

        [TestMethod]
        public void TestMethod5()
        {
            var aa = new SomeClass();
            Assert.AreEqual(aa.Task15(80), "B");
        }

        [TestMethod]
        public void TestMethod6()
        {
            var aa = new SomeClass();
            Assert.AreEqual(aa.Task15(100), "A");
        }

        [TestMethod]
        public void TestMethod7()
        {
            var aa = new SomeClass();
            Assert.AreEqual(aa.Task15(101), "");
        }

    }
}
