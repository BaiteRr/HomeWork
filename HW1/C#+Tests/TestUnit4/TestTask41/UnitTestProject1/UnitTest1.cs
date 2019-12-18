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
            Assert.AreEqual(SomeClass.Days(7), "Sunday");
        }


        [TestMethod]
        public void TestMethod2()
        {
            Assert.AreEqual(SomeClass.Days(1), "Monday");
        }


        [TestMethod]
        public void TestMethod3()
        {
            Assert.AreEqual(SomeClass.Days(9), "wrong number");
        }
    }
        
}
