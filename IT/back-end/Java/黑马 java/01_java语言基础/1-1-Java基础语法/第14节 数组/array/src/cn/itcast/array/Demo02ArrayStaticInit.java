package cn.itcast.array;

/**
 * 动态初始化（指定长度）：在创建数组的时候，直接指定数组当中的元素个数
 * 静态初始化：在创建数组的时候，不直接指定数据个数多少，而是直接将具体的数据内容进行指定
 *
 * 静态初始化基本格式：
 * 数据类型[] 数组名称 = new 数据类型[] {元素1，元素2，...};
 *
 * 静态初始化省略格式:
 * 数据类型[] 数组名称 = {元素1，元素2，...};
 *
 * 使用建议：
 * 如果不确定数组当中的具体内容，用动态初始化；
 * 已经确定数组中的具体内容，使用静态初始化。
 */
public class Demo02ArrayStaticInit {
    public static void main(String[] args) {
        // 直接创建一个数组，里面装的全都是 int 数字，具体为：5、15、25
        int[] arrayA = new int[] {5, 15,25};

        // 创建一个数组，用来装字符串，"Hello"、"World"、"Java"
        String[] arrayB = new String[]{"Hello", "World", "Java"};

        // 省略格式的静态初始化
        int[] arrayC = { 10, 20, 30};

        /**
         * 动态初始化和静态初始化基本格式可以拆分为两个步骤
         * 静态初始化省略格式不可以拆分为两个步骤
         */
        // 动态初始化，拆分两步
        int[] arrayD;
        arrayD = new int[5];

        // 静态初始化基本格式，差分两步
        int[] arrayE;
        arrayE = new int[] { 11, 21, 31 };
    }
}
