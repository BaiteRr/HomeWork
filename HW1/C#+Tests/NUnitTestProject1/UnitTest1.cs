using NUnit.Framework;
using ConsoleApp2;

namespace NUnitTestProject1
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

            int[] arr = { 0, 5, 7, 12, 34 };
            int min = Program.Min(arr);
            Assert.AreEqual(0, min);
        }
        [Test]
        public void Test2()
        {
            int[] arr = { -5, -7, 121, 34 };
            int min = Program.Min(arr);
            Assert.AreEqual(-7, min);

        }

        [Test]
        public void Testmax()
        {

            int[] arr = { 0, 5, 7, 12, 34 };
            int max = Program.Max(arr);
            Assert.AreEqual(34, max);
        }
        [Test]
        public void TestminI()
        {
            int[] arr = { -5, -7, 121, 34 };
            int Imin = Program.Imin(arr);
            Assert.AreEqual(1, Imin);

        }

        [Test]
        public void TestImin()
        {
            int[] arr = { -5, -7, 121, 34 };
            int Imin = Program.Imin(arr);
            Assert.AreEqual(1, Imin);

        }

        [Test]
        public void TestImin1()
        {
            int[] arr = { 0, 5, 7, 12, 34 };
            int Imin = Program.Imin(arr);
            Assert.AreEqual(0, Imin);

        }

        [Test]
        public void TestImax()
        {
            int[] arr = { -5, -7, 121, 34 };
            int Imax = Program.Imax(arr);
            Assert.AreEqual(2, Imax);

        }
        [Test]
        public void TestImax1()
        {
            int[] arr = { 0, 5, 7, 12, 34 };
            int Imax = Program.Imax(arr);
            Assert.AreEqual(4, Imax);

        }
        [Test]
        public void TestImax2()
        {
            int[] arr = { 0, 5, 7, 12, 34 };
            int Imax = Program.Imax(arr);
            Assert.AreEqual(4, Imax);

        }

        [Test]
        public void TestSumEven()
        {
            int[] arr = { 0, 5, 55, 32, 67 };
            int sum = Program.Sum(arr);

            Assert.AreEqual(37, sum);
        }
        [Test]
        public void TestSumEven1()
        {
            int[] arr = { 0, -5, -55, -32, 67 };
            int sum = Program.Sum(arr);

            Assert.AreEqual(-37, sum);
        }
        [Test]
        public void TestSumEven2()
        {
            int[] arr = { };
            int sum = Program.Sum(arr);

            Assert.AreEqual(0, sum);
        }
        [Test]
        public void TestReverse()
        {
            int[] arr = { 1, 2, 3, 4, 5 };
            int[] sum = Program.Reverse(arr);
            int[] exp = { 5, 4, 3, 2, 1 };
            Assert.AreEqual(exp, sum);
        }
        [Test]
        public void TestReverse1()
        {
            int[] arr = { -1, -2, -3, -4, -5 };
            int[] sum = Program.Reverse(arr);
            int[] exp = { -5, -4, -3, -2, -1 };
            Assert.AreEqual(exp, sum);
        }
        [Test]
        public void TestReverse2()
        {
            int[] arr = { };
            int[] sum = Program.Reverse(arr);
            int exp = arr.Length;
            Assert.IsEmpty(sum);
        }

        [Test]
        public void TestEvenN()
        {
            int[] arr = { 1, 2, 3, 4, 5, 6, 7, 8, 9 };
            int sum = Program.N(arr);
            int exp = 5;
            Assert.AreEqual(exp, sum);
        }
        [Test]
        public void TestEvenN2()
        {
            int[] arr = { -1, -2, -3, -4, -5, -6, -7, -8, -9 };
            int sum = Program.N(arr);
            int exp = 5;
            Assert.AreEqual(exp, sum);
        }
        [Test]
        public void TestEvenN3()
        {
            int[] arr = { 0, 0, 0, 0, 0, 0, 0 };
            int sum = Program.N(arr);
            int exp = 4;
            Assert.AreEqual(exp, sum);
        }
        [Test]
        public void Test2Reverse()
        {
            int[] arr = { 1, 2, 3, 4, 5, 6, 7, 8 };
            int[] sum = Program.Reverse2(arr);
            int[] exp = { 5, 6, 7, 8, 1, 2, 3, 4 };
            Assert.AreEqual(exp, sum);
        }
        [Test]
        public void Test2Reverse2()
        {
            int[] arr = { -1, -2, -3, -4, -5, -6, -7, -8 };
            int[] sum = Program.Reverse2(arr);
            int[] exp = { -5, -6, -7, -8, -1, -2, -3, -4 };
            Assert.AreEqual(exp, sum);
        }
        [Test]
        public void TestBubble()
        {
            int[] arr = { 4, 7, 3, 2, 8, 6, 9, 1, 5 };
            int[] sum = Program.bubble(arr);
            int[] exp = { 1, 2, 3, 4, 5, 6, 7, 8, 9 };
            Assert.AreEqual(exp, sum);
        }
        [Test]
        public void TestBubble2()
        {
            int[] arr = { -4, -7, -3, -2, -8, -6, -9, -1, -5 };
            int[] sum = Program.bubble(arr);
            int[] exp = { -9, -8, -7, -6, -5, -4, -3, -2, -1 };
            Assert.AreEqual(exp, sum);
        }

        [Test]
        public void TestInsert()
        {
            int[] arr = { 4, 7, 3, 2, 8, 6, 9, 1, 5 };
            int[] sum = Program.Insert(arr);
            int[] exp = { 1, 2, 3, 4, 5, 6, 7, 8, 9 };
            Assert.AreEqual(exp, sum);
        }
        [Test]
        public void TestInsert2()
        {
            int[] arr = { -4, -7, -3, -2, -8, -6, -9, -1, -5 };
            int[] sum = Program.Insert(arr);
            int[] exp = { -9, -8, -7, -6, -5, -4, -3, -2, -1 };
            Assert.AreEqual(exp, sum);
        }

        [Test]
        public void TestSelect()
        {
            int[] arr = { 4, 7, 3, 2, 8, 6, 9, 1, 5 };
            int[] sum = Program.select(arr);
            int[] exp = { 1, 2, 3, 4, 5, 6, 7, 8, 9 };
            Assert.AreEqual(exp, sum);
        }
        [Test]
        public void TestSelect2()
        {
            int[] arr = { -4, -7, -3, -2, -8, -6, -9, -1, -5 };
            int[] sum = Program.select(arr);
            int[] exp = { -9, -8, -7, -6, -5, -4, -3, -2, -1 };
            Assert.AreEqual(exp, sum);
        }
    }
}