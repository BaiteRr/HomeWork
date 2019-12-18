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
            Assert.AreEqual(SomeClass.Chyslo("сім"), 7);
        }

        [TestMethod]
        public void TestMethod2()
        {
            Assert.AreEqual(SomeClass.Chyslo("чотирнадцять"), 14);
        }

        [TestMethod]
        public void TestMethod3()
        {
            Assert.AreEqual(SomeClass.Chyslo("сто десять"), 110);
        }

        [TestMethod]
        public void TestMethod4()
        {
            Assert.AreEqual(SomeClass.Chyslo("триста сорок один"), 341);
        }

        [TestMethod]
        public void TestMethod5()
        {
            Assert.AreEqual(SomeClass.Chyslo("тридцять два"), 32);
        }

        [TestMethod]
        public void TestMethod6()
        {
            Assert.AreEqual(SomeClass.Chyslo("сто піцот"), -1);
        }

        [TestMethod]
        public void TestMethod7()
        {
            Assert.AreEqual(SomeClass.Chyslo("нуль"), 0);
        }

    }
        
}
