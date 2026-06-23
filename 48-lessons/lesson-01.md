# 第1课：程序入门

## 第1章 顺序结构

顺序结构是一种简单的控制结构，它表示程序按照从上到下的顺序依次执行每一个步骤。

## 1.1 第1课：程序入门

程序是指一组按照特定顺序和逻辑编写的计算机指令，用来完成某些特定任务或解决某个问题。

### 1.1.1 C++简介

C++于1983年由比雅尼·斯特劳斯特卢普在C语言的基础上开发出来，被广泛应用于各个领域。

### 1.1.2 软件使用

开发环境DEV-CPP的安装教程已经放到我的博客 https://bigbigbigli.com/rjxz.html 了。

#### 1. 新建源程序

步骤一：从主菜单中依次选择"文件"->"新建"->"源代码"菜单。

步骤二：创建C++程序基本框架：

```cpp
#include <iostream>
using namespace std;
int main()
{
    return 0;
}
```

**#include \<iostream\>** - 包含输入输出头文件

**using namespace std;** - 使用标准命名空间

**int main(){}** - 主函数声明

**return 0;** - 程序正常结束

#### 2. 保存源程序

从主菜单中选择"文件"->"保存"。

#### 3. 编译

快捷键：F9

#### 4. 运行

快捷键：F10

编译运行：F11

### 1.1.3 标准输出语句

```cpp
#include <iostream>
using namespace std;
int main()
{
    cout << "Hello C++";
    return 0;
}
```

### 1.1.4 实例讲解

#### 例1：蛙蛙的心情

```cpp
#include <iostream>
using namespace std;
int main()
{
    cout << "蛙蛙今天学了新知识，很开心！";
    return 0;
}
```

#### 例2：超市购物

```cpp
#include <iostream>
using namespace std;
int main()
{
    cout << 24 + 3 * 5;
    return 0;
}
```

#### 例3：香蕉和苹果各多少钱

```cpp
#include <iostream>
using namespace std;
int main()
{
    cout << 5*4 << " " << 3*7;
    return 0;
}
```

#### 例4：购物详细清单

```cpp
#include <iostream>
using namespace std;
int main()
{
    cout << "牛奶的总价为：" << 6*12;
    return 0;
}
```