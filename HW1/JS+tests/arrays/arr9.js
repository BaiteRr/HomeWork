function InsertionSort(arr)
    {
        for (let i = 1; i < arr.length; i++)
        {
            let cur = arr[i];
            let j = i;
            while (j > 0 && cur < arr[j - 1])
            {
                arr[j] = arr[j - 1];
                j--;
            }
            arr[j] = cur;
        }
        return arr;
    }



function BubbleSort (arr1)
    {
        let temp;
        for (let i = 0; i < arr1.length - 1; i++)
        {
            let f = false;
            for (let j = 0; j < arr1.length - i - 1; j++)
            {
                if (arr1[j + 1] > arr1[j])
                {
                    f = true;
                    temp = arr1[j + 1];
                    arr1[j + 1] = arr1[j];
                    arr1[j] = temp;
                }
            }
            if (!f) break;
        }
        return arr1;
    }


function SelectionSort(arr2)
    {
        let min, temp;
        let length = arr2.length;

        for (let i = 0; i < length - 1; i++)
        {
            min = i;

            for (let j = i + 1; j < length; j++)
            {
                if (arr2[j] < arr2[min])
                {
                    min = j;
                }
            }

            if (min != i)
            {
                temp = arr2[i];
                arr2[i] = arr2[min];
                arr2[min] = temp;
            }
        }
        return arr2;
    }