using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Task1_Test;

namespace TestProject
{
    [TestClass]
    public class UnitTest1
    {
        [TestMethod]
        public void TestConditionalOperators()
        {
            for(int i = 0; i!= 100;++i)
                Assert.AreEqual(SomeClass.Logic(1, i), i+1);
        }

        [TestMethod]
        public void TestSomeOtherLogic()
        {
            for (int i = 0; i != 100; ++i)
                Assert.AreEqual(SomeClass.Logic(8, i), i * 8);
        }

        [TestMethod]
        public void TestSomeOtherLogic1()
        {
            for (int i = -100; i != 100; ++i)
                Assert.AreEqual(SomeClass.Logic(16, i), i * 16);
        }

        [TestMethod]
        public void TestSomeOtherLogic2()
        {
                Assert.AreEqual(SomeClass.Logic(0, 0), 0);
        }
    }
}
