package cn.itcast.annotation;

/**
 * 自定义注解
 *
 * 属性的返回值类型
 * 基本数据类型
 * String
 * 枚举
 * 注解
 * 上面四种类型的数组
 */
public @interface MyAnno {
    int value();
    public int age(); // 这届的属性
    String name() default "张三";
//    String show2(); // String
//
    Person per(); // 枚举
    MyAnno2 anno2(); // 注解
    String[] strs(); // 上面四种类型的数组
}
