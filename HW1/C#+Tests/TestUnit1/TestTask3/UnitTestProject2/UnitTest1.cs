using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using TestTask3;

namespace UnitTestProject2
{
    [TestClass]
    public class UnitTest1
    {
        [TestMethod]
        public void TestMethod1()
        {
            var Test = new SomeClass();
            Assert.AreEqual(Test.Task13(5, 1, -9), 6);
        }
    }
}
