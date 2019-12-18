using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Something;

namespace UnitTestProject1
{
    [TestClass]
    public class UnitTest1
    {
        [TestMethod]
        public void TestMethod1()
        {
            var aaa = new NewClass();
            Assert.AreEqual(aaa.Task14(1, 2, 4), 11);
        }

        [TestMethod]
        public void TestMethod2()
        {
            var aaa = new NewClass();
            Assert.AreEqual(aaa.Task14(0, 0, 0), 3);
        }

        [TestMethod]
        public void TestMethod3()
        {
            var aaa = new NewClass();
            Assert.AreEqual(aaa.Task14(1, 1, 1), 6);
        }
    }
}

    

