using NUnit.Framework;
using Task1;

namespace NUnitTestProject2
{
    public class Tests
    {
        [SetUp]
        public void Setup()
        {
        }

        [Test]
        public void Test1()
        {
            Task1.Program.get();
            Assert.Pass();
        }
    }
}