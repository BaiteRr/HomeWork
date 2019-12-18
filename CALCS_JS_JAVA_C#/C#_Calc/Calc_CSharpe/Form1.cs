using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using Calc_CSharper;
using Calc_CSharpe;
using System.Globalization;

namespace Calc_CSharpe
{
    public partial class Form1 : Form
    {

        Model model = new Model();
        Logic logic = new Logic();
        public Form1()
        {
            InitializeComponent();
            textBox1.ReadOnly = true;
        }
        private void setDisplay(string number)
        {
            textBox1.Text = number;
        }
        private string getDisplay()
        {
            return textBox1.Text;
        }

        public String evetOnClickNumber(double num) {
            if (getDisplay() == "Error")
                goto end;
            if (model.getIsCheck())
            {
                if (double.Parse(getDisplay(), CultureInfo.InvariantCulture) == 0 && num == 0) return "false";
                setDisplay(num.ToString());
                model.setIsCheck(false);
            }
            else
            { 
                    string qwerty = Convert.ToString(getDisplay()) + Convert.ToString(num);
                    setDisplay(logic.cutDisplay(qwerty));
                
            }
            if (num == 0)
            if (getDisplay() == "00")
            {
                setDisplay(num.ToString());
                    model.setIsCheck(true);
                }
            end:
            model.setIsResultCount(true);
            return "good";
        }
         

        private void Form1_Load(object sender, EventArgs e)
        {

        }

        private void button1_Click(object sender, EventArgs e)
        {
            evetOnClickNumber(Convert.ToDouble(button1.Text));
        }

        private void button2_Click(object sender, EventArgs e)
        {
            evetOnClickNumber(Convert.ToDouble(button2.Text));
        }

        private void button3_Click(object sender, EventArgs e)
        {
            evetOnClickNumber(Convert.ToDouble(button3.Text));
        }

        private void button8_Click(object sender, EventArgs e)
        {
            evetOnClickNumber(Convert.ToDouble(button8.Text));
        }

        private void button7_Click(object sender, EventArgs e)
        {
            evetOnClickNumber(Convert.ToDouble(button7.Text));
        }

        private void button6_Click(object sender, EventArgs e)
        {
            evetOnClickNumber(Convert.ToDouble(button6.Text));
        }

        private void button12_Click(object sender, EventArgs e)
        {
            evetOnClickNumber(Convert.ToDouble(button12.Text));
        }

        private void button11_Click(object sender, EventArgs e)
        {
            evetOnClickNumber(Convert.ToDouble(button11.Text));
        }

        private void button10_Click(object sender, EventArgs e)
        {
            evetOnClickNumber(Convert.ToDouble(button10.Text));
        }

        private void button16_Click(object sender, EventArgs e)
        {
            evetOnClickNumber(Convert.ToDouble(button16.Text));
        }

        private void button15_Click(object sender, EventArgs e)
        {
            String array = Convert.ToString(getDisplay());
            for (int i = 0; i < array.Length; i++)
            {
                if(array[i] == '.') goto end;
            }
            setDisplay(array + '.');
            model.setIsCheck(false);
        end:;
        }
        double second = 0;
        char operand = '\0';
        private void button17_Click(object sender, EventArgs e)
        {
            setDisplay("0");
            model.setMemoryNumber(0);
            model.setOperationClicked('\0');
            model.setIsCheck(true);
            model.setIsResult(true);
            model.setIsResultCount(true);
            second = 0;
            operand = '\0';
        }
  
        private void button14_Click(object sender, EventArgs e)
        {
            if (model.getOperationClicked() == '\0') goto secondClick;
            if (getDisplay() == "Error")
                goto end;
            if (model.getIsResult() == true)
            {
                model.setCountNumber(Convert.ToDouble(getDisplay()));
                switchOperations(model.getOperationClicked(), model.getMemoryNumber(), model.getCountNumber());
                if (model.getMemoryNumber() == 999999999999)
                {
                    setDisplay("Error");
                    goto end;
                }
                if (model.getIsResultCount() == true)
                {
                    second = model.getCountNumber();
                    operand = model.getOperationClicked();
                }
                   

                model.setIsCheck(true);
                model.setIsResult(false);

                setDisplay(logic.cutDisplay(model.getMemoryNumber().ToString()));
                model.setCountNumber(0);
                model.setMemoryNumber(0);
                model.setOperationClicked('\0');
            }
        secondClick:
            if (model.getIsResultCount() == false)
            {
                
                switchOperations(operand, Convert.ToDouble(getDisplay()), second);
                if (model.getMemoryNumber() == 999999999999)
                {
                    setDisplay("Error");
                    goto end;
                }
                setDisplay(logic.cutDisplay(model.getMemoryNumber().ToString()));
                
            }
        end:
            model.setIsResultCount(false);
        }
        public void switchOperations(char getOperationClicked,double first,double second)
        {
            switch (getOperationClicked)
            {
                case '+':
                    model.setMemoryNumber(logic.summ(first, second));
                    break;
                case '-':
                    model.setMemoryNumber(logic.minus(first, second));
                    break;
                case '/':
                    model.setMemoryNumber(logic.divide(first, second));
                    break;
                case '*':
                    model.setMemoryNumber(logic.multiply(first, second));
                    break;
            }
        }
        public void lastOperation()
        {
            if (model.getIsCheck())
            {
                model.setMemoryNumber(Convert.ToDouble(getDisplay()));
            }
            else
                switch (model.getOperationClicked())
                {
                    case '+':
                        model.setMemoryNumber(logic.summ(model.getMemoryNumber(), Convert.ToDouble(getDisplay())));
                        if (model.getMemoryNumber() == 999999999999)
                        {
                            setDisplay("Error");
                            return;
                        }
                        setDisplay(logic.cutDisplay(model.getMemoryNumber().ToString()));
                        break;
                    case '-':
                        model.setMemoryNumber(logic.minus(model.getMemoryNumber(), Convert.ToDouble(getDisplay())));
                        if (model.getMemoryNumber() == 999999999999)
                        {
                            setDisplay("Error");
                            return;
                        }
                        setDisplay(logic.cutDisplay(model.getMemoryNumber().ToString()));
                        break;
                    case '/':
                        model.setMemoryNumber(logic.divide(model.getMemoryNumber(), Convert.ToDouble(getDisplay())));
                        if (model.getMemoryNumber() == 999999999999)
                        {
                            setDisplay("Error");
                            return;
                        }
                        setDisplay(logic.cutDisplay(model.getMemoryNumber().ToString()));
                        break;
                    case '*':
                        model.setMemoryNumber(logic.multiply(model.getMemoryNumber(), Convert.ToDouble(getDisplay())));
                        if (model.getMemoryNumber() == 999999999999)
                        {
                            setDisplay("Error");
                            return;
                        }
                        setDisplay(logic.cutDisplay(model.getMemoryNumber().ToString()));
                        break;
                }
        }
        public void onOperationClick(char operand)
        {
            //model.setMemoryNumber(Convert.ToDouble(getDisplay()));
            model.setMemoryNumber(double.Parse(getDisplay(), CultureInfo.InvariantCulture));
            model.setOperationClicked(operand);
            model.setIsCheck(true);
            model.setIsResult(true);
        }

        private void button13_Click(object sender, EventArgs e)
        {
            if (getDisplay() == "Error")
                goto end;
            lastOperation();
            if (getDisplay() == "Error")
                goto end;
            onOperationClick('+');
            end: model.setIsCheck(true);
        }

        private void button4_Click(object sender, EventArgs e)
        {
            if (getDisplay() == "Error")
                goto end;
            lastOperation();
            if (getDisplay() == "Error")
                goto end;
            onOperationClick('/');
            end: model.setIsCheck(true);
        }

        private void button5_Click(object sender, EventArgs e)
        {
            if (getDisplay() == "Error")
                goto end;
            lastOperation();
            if (getDisplay() == "Error")
                goto end;
            onOperationClick('*');
            end: model.setIsCheck(true);
        }

        private void button9_Click(object sender, EventArgs e)
        {
            if (getDisplay() == "Error")
                goto end;
            lastOperation();
            if (getDisplay() == "Error")
                goto end;
            onOperationClick('-');
            end: model.setIsCheck(true);
        }

        private void textBox1_TextChanged(object sender, EventArgs e)
        {

        }
    }
}
