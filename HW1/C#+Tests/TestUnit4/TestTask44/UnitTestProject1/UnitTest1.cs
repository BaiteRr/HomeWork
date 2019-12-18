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
            Assert.AreEqual(SomeClass.Lengt(1, 0, 0, 0), 1);
        }

        [TestMethod]
        public void TestMethod2()
        {
            Assert.AreEqual(SomeClass.Lengt(2, 1, 1, 2), Math.Sqrt(2));
        }

        [TestMethod]
        public void TestMethod3()
        {
            Assert.AreEqual(SomeClass.Lengt(3, 2, -1, 1), Math.Sqrt(15));
        }
    }
}


