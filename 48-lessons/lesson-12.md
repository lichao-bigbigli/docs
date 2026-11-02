# 第 12 课：switch 结构

在编程中，使用 if 条件语句可以很方便地实现简单的分支控制。但是当分支比较多的时候，虽然可以用嵌套的 if 语句来解决，但是程序结构会显得复杂，甚至凌乱。

为了解决这一问题，C++ 提供了另一种多分支结构——switch 语句。

## 12.1 switch 语句的基本框架

```cpp
switch(表达式)
{
    case 常量表达式 1:
        语句序列 1;
        break;
    ……
    // 可以有任意数量的 case 语句
    case 常量表达式 n:
        语句序列 n;
        break;
    default:
        语句序列 n + 1;
}
```

1) **表达式**：这是一个可以计算出特定类型值的式子，通常为整型、字符型等。

2) **常量表达式**：每个 case 后面跟一个常量表达式，其值必须是唯一的，且与 switch 表达式的类型一致。

3) **语句序列**：当 switch 表达式的值与某个 case 后的常量表达式的值匹配时，程序就会执行该 case 后的语句块，直到遇到 break 语句才结束该分支。

4) **default**：是可选的分支，当表达式的值与所有 case 常量表达式的值都不匹配时，程序会执行 default 中的语句块。它可以放在 switch 语句中的任意位置，但通常放在最后。

## 12.2 switch 语句的执行过程

假设有这么一段程序：

```cpp
#include <iostream>
using namespace std;
int main()
{
    int m;
    cin >> m;
    switch (m / 10)
    {
        case M1:
            语句 1;
            break;
        case M2:
            语句 2;
            break;
        case M3:
            语句 3;
            break;
        ...
        default:
            语句 n;
    }
    return 0;
}
```

1) 程序会计算出 switch 后面小括号内表达式的值 m / 10，假定为 M，若它不是整数，系统将自动舍去其小数部分，只取其整数部分作为结果值。

2) 依次计算出每个 case 后常量表达式的值，假定它们为 M1、M2 等，同样，若它们的值不是整数，系统将自动将其转换为整数。

3) 让 M 依次同 M1、M2 等进行比较，一旦遇到 M 与某个值相等，程序就从对应标号的语句开始执行；在碰不到相等的情况下，若存在 default 子句，程序就执行其冒号后面的语句序列，否则不执行任何操作；当执行到复合语句最后的右大括号时，就结束整个 switch 语句的执行。

**注意**

1) case 语句后的各常量表达式的值不能相同，否则会出现错误码。

2) 每个 case 或 default 子句都可以包含多条语句，不需要使用 `{}` 括起来。

3) 各 case 和 default 子句的先后顺序可以变动，这不会影响程序的执行结果。

4) default 子句可以省略，default 后面的语句末尾可以不必写 break。

## 12.3 实例讲解

### 例 1：星期几

在键盘上输入一个数字，用于表示星期几，根据输入的数字对应输出它的英文名称，比如输入 1 表示星期一，输出 Monday。如果输入的数字不在星期一到星期日这个范围内，则输出 input error!。

【输入格式】输入一行，一个正整数，用于表示星期几。

【输出格式】输出一行，为数字对应的星期（用英文表示，星期一到星期日分别为 Monday、Tuesday、Wednesday、Thursday、Friday、Saturday、Sunday）。

【输入样例】1

【输出样例】Monday

**解析**

1) 输入一个正整数来表示星期几，然后输出该数字对应的英文星期名称。如果输入的数字不在 1 到 7 的范围内（即不是星期一到星期日对应的数字），则输出 input error!。

2) `switch(weekday)`：switch 语句根据 weekday 的值进行多分支选择。

a. `case 1:` 到 `case 7:` 分别对应星期一到星期日，当 weekday 的值等于某个 case 后面的常量表达式的值时，程序就会执行该 case 后面的语句。例如，当 weekday 为 1 时，会执行 `cout << "Monday";`，输出 Monday，然后遇到 break 语句，跳出 switch 语句。

b. `break;` 用于终止当前 case 分支的执行，避免继续执行后续 case 分支的语句。

c. `default:` 当 weekday 的值与所有 case 后面的常量表达式的值都不匹配时，会执行 default 分支的语句，即输出 input error!。

**参考代码**

```cpp
#include <iostream>
using namespace std;
int main()
{
    int weekday;
    cin >> weekday;
    switch (weekday)
    {
        case 1: cout << "Monday"; break;
        case 2: cout << "Tuesday"; break;
        case 3: cout << "Wednesday"; break;
        case 4: cout << "Thursday"; break;
        case 5: cout << "Friday"; break;
        case 6: cout << "Saturday"; break;
        case 7: cout << "Sunday"; break;
        default: cout << "input error!";
    }
    return 0;
}
```

### 例 2：计算器

蛙蛙的计算器坏了，但通过编程做一个计算器对蛙蛙来说简直轻而易举，他准备先做一个基本的计算器试一试。

一个最简单的计算器支持 +、-、*、/ 四种运算。现要求输入两个参加运算的数和一个操作符（+、-、*、/），输出运算表达式的结果，并考虑下面两种情况。

1) 如果出现除数为 0 的情况，则输出 Divided by zero!。

2) 如果出现无效的操作符（即不为 +、-、*、/ 之一），则输出 Invalid operator!。

【输入样例】34 56 +

【输出样例】90

**解析**

设 num1、num2 用于存放两个参加运算的数，op 用于存放操作符。

1) 当 op 为 + 号时，实现加法操作。

2) 当 op 为 - 号时，实现减法操作。

3) 当 op 为 * 号时，实现乘法操作。

4) 当 op 为 / 号时，判断 b 值，如果不为 0，则实现除法操作，如果为 0，则输出 Divided by zero!。

5) 当 op 不是上面四种操作符时，输出 Invalid operator!。

**参考代码**

```cpp
#include <iostream>
using namespace std;
int main()
{
    float num1, num2;
    char op;
    cin >> num1 >> num2 >> op;
    switch (op)
    {
        case '+':
            cout << num1 + num2;
            break;
        case '-':
            cout << num1 - num2;
            break;
        case '*':
            cout << num1 * num2;
            break;
        case '/':
            if (num2 != 0)
            {
                cout << num1 / num2;
                break;
            }
            else
                cout << "Divided by zero!";
            break;
        default:
            cout << "Invalid operator!";
    }
    return 0;
}
```

### 例 3：买钢笔

期末来临了，老师决定将剩余班费 x 元用于购买若干支钢笔，奖励给一些学习好、表现好的同学。

已知商店里有三种钢笔，它们的单价分别为 6 元、5 元和 4 元。老师想买尽量多的钢笔（鼓励尽量多的同学），同时他又不想有剩余的钱。于是老师找到了蛙蛙，希望蛙蛙能帮他制订出一种买笔的方案。

【输入格式】输入一行，一个正整数 x（10 ≤ x ≤ 1000）。

【输出格式】输出一行，三个正整数，分别为 6 元、5 元、4 元钢笔的数量。

【输入样例】50

【输出样例】1 0 11

**解析**

1) 要买尽量多的钢笔，都买 4 元的钢笔肯定可以买最多支钢笔。

2) 若买完 4 元钱的钢笔，还剩 1 元，则 4 元钱的钢笔少买 1 支，换成一支 5 元钢笔即可。

3) 若买完 4 元钱的钢笔，还剩 2 元，则 4 元钱的钢笔少买 1 支，换成一支 6 元钢笔即可。

4) 若买完 4 元钱的钢笔，还剩 3 元，则 4 元钱的钢笔少买 2 支，换成一支 5 元钢笔和一支 6 元钢笔即可。

**参考代码**

```cpp
#include <iostream>
using namespace std;
int main()
{
    int a, b, c, x, y;
    cin >> x;
    c = x / 4;
    y = x % 4;
    switch (y)
    {
        case 0: a = 0; b = 0; break;
        case 1: a = 0; b = 1; c--; break;
        case 2: a = 1; b = 0; c--; break;
        case 3: a = 1; b = 1; c -= 2; break;
    }
    cout << a << " " << b << " " << c << endl;
    return 0;
}
```

### 例 4：不同的水果价格

蛙蛙去买水果，发现水果摊有四种水果，分别是苹果、葡萄、橘子和香蕉，单价分别是 3.00 元/千克、8.20 元/千克、4.50 元/千克、3.50 元/千克。

这里要求先在屏幕上显示菜单，接着当用户输入编号 1~4 时，显示相应水果的单价（保留两位小数）。输入其他编号时，显示"没有该水果"。

【输入样例】2

【输出样例】

```
[1]apples
[2]grapes
[3]oranges
[4]bananas
price = 8.20
```

**解析**

该程序需要实现以下功能。

1) 向用户展示水果菜单，列出可供选择的水果及其对应的编号。

2) 接收用户输入的水果编号。

3) 根据用户输入的编号，输出相应水果的单价，单价需保留两位小数。

4) 如果用户输入的编号不在有效范围内（即不是 1~4），则给出提示"没有该水果"。

**参考代码**

```cpp
#include <iostream>
using namespace std;
int main()
{
    int n;
    cout << "[1]apples" << endl;
    cout << "[2]grapes" << endl;
    cout << "[3]oranges" << endl;
    cout << "[4]bananas" << endl;
    cin >> n;
    switch (n)
    {
        case 1: cout << "price = 3.00"; break;
        case 2: cout << "price = 8.20"; break;
        case 3: cout << "price = 4.50"; break;
        case 4: cout << "price = 3.50"; break;
        default: cout << "没有该水果";
    }
    return 0;
}
```
