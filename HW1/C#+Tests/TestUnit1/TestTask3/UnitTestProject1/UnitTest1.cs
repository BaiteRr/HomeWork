using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using TestTask3;

namespace UnitTestProject1
{
    [TestClass]
    public class UnitTest1
    {
        [TestMethod]
        public void Test1()
        {
            var Test = new SomeClass();
            Assert.AreEqual(Test.Task13(5, 1, -9), 6);
        }

        [TestMethod]
        public void Test2()
        {
            var Test = new SomeClass();
            Assert.AreEqual(Test.Task13(-5, -1, -9), 0);
        }

        [TestMethod]
        public void Test3()
        {
            var Test = new SomeClass();
            Assert.AreEqual(Test.Task13(5, 1, 2), 8);
        }

        [TestMethod]
        public void Test4()
        {
            var Test = new SomeClass();
            Assert.AreEqual(Test.Task13(-5, 1, 9), 10);
        }

        [TestMethod]
        public void Test5()
        {
            var Test = new SomeClass();
            Assert.AreEqual(Test.Task13(5, -1, 9), 14);
        }
    }
}

