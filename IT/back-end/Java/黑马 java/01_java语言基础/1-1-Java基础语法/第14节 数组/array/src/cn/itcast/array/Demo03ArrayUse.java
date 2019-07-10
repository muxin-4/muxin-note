package cn.itcast.array;

/**
 * 直接打印数组名称，得到的是数组对应的，内存地址哈希值
 * 二进制：01
 * 十进制：0123456789
 * 16 进制：0123456789abcdef
 *
 * 访问数组元素的格式：数组名称[索引值]
 * 索引值：就是一个 int 数字，代表数组当中的编号。
 * 「注意」索引值从 0 开始，一直到"数组的长度 -1"为止。
 */
public class Demo03ArrayUse {
    public static void main(String[] args){
        /**
         * 静态初始化
         *
         * 注意事项：
         * 静态初始化其实也有默认值的过程，只不过系统自动马上将默认值替换成为了大括号当中的具体数值。
         */
        int[] array1 = {10,20,30};

        System.out.println(array1); // [I@6bc7c054  [ 代表数组 6bc7c054 是 16进制

        // 直接打印数组当中的元素
        System.out.println(array1[0]); // 10
        System.out.println(array1[1]); // 20
        System.out.println(array1[2]); // 30

        // 也可以将数组中的某一个单个元素，赋值交给变量
        int num = array1[1];
        System.out.println(num); // 20

        System.out.println("============");
        /**
         * 动态初始化
         *
         * 使用动态初始化数组的时候，其中的元素将会自动拥有一个默认值。规则如下：
         * 1. 如果是整数类型，那么默认为 0；
         * 2. 如果是浮点类型，那么默认为 0.0；
         * 3. 如果是字符类型，那么默认为 '\u0000'；
         * 4. 如果是布尔类型，那么默认为 false；
         * 5. 如果是引用类型，那么默认为 null；
         */
        int[] array2 = new int[3];

        System.out.println(array2);    // 内存地址
        System.out.println(array2[0]); // 0
        System.out.println(array2[1]); // 0
        System.out.println(array2[2]); // 0

        // 将数据 123 赋值给数组 array 当中的 1 号元素
        array2[1] = 123;
        System.out.println(array2[0]); // 0
        System.out.println(array2[1]); // 123
        System.out.println(array2[2]); // 0
    }

}
