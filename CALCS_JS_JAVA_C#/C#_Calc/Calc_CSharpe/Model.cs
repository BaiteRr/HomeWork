using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Calc_CSharpe;

namespace Calc_CSharper
{
    public class Model { 
        private double countNumber = 0;
        private double memoryNumber = 0;

        private bool isCheck = true;
        private bool isResult = true;
        private bool isrResultCount = true;
        private char operationClicked = '\0';
        
        public void setCountNumber(double value)
        {
            countNumber = value;
        }
        public double getCountNumber()
        {
            return countNumber;
        }

        public void setMemoryNumber(double value)
        {
            memoryNumber = value;
        }
        public double getMemoryNumber()
        {
            return memoryNumber;
        }

        public void setIsCheck(bool value)
        {
            isCheck = value;
        }
        public bool getIsCheck()
        {
            return isCheck;
        }

        public void setIsResult(bool value)
        {
            isResult = value;
        }
        public bool getIsResult()
        {
            return isResult;
        }

        public void setIsResultCount(bool value)
        {
            isrResultCount = value;
        }
        public bool getIsResultCount()
        {
            return isrResultCount;
        }

        public void setOperationClicked(char value)
        {
            operationClicked = value;
        }
        public char getOperationClicked()
        {
            return operationClicked;
        }
    }
}
