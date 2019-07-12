package cn.itcast.myInterface;

/**
 * 接口就是多个类的公共规范
 * 接口是一种引用的数据类型，最重要的就是其中的：抽象方法
 *
 * 如何定义一个接口的格式：
 * public interface 接口名称 {
 *      // 接口内容
 * }
 *
 * 注意：换成了关键字 interface 后，编译生成的字节码文件仍然是：.java --> .class
 *
 * 如果是 Java7，那么接口中可以包含的内容由：
 * 1. 常量
 * 2. 抽象方法
 *
 * 如果是 Java8，还可以额外包含有：
 * 3. 默认方法
 * 4. 静态方法
 *
 * 如果是 Java9，还可以额外包含有：
 * 5. 私有方法
 *
 * 接口使用步骤
 * 1. 接口不能直接使用，必须有一个"实现类"来"实现"该接口
 * 格式：
 * public class 实现类名称 implements 接口名称 {
 *     // ...
 * }
 *
 * 2. 接口的实现类必须覆盖重写（实现）接口中的所有的抽象方法
 * 实现：去掉 abstract 关键字，加上方法体大括号。
 *
 * 3.创建实现类的对象，进行使用。
 *
 * 注意事项：
 * 如果实现类并没有覆盖重写接口中所有的抽象方法，那么这个实现类自己就必须是抽象类。
 *
 */
public class Demo01Interface {
    public static void main(String[] args) {
        // 创建实现类的对象，进行使用。
        Demo02InterfaceImpl impl = new Demo02InterfaceImpl();
        impl.methodAbs1();
        impl.methodAbs2();
    }
}
