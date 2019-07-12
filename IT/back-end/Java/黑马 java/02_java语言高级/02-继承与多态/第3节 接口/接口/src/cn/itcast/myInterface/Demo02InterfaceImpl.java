package cn.itcast.myInterface;

/**
 * @program: 接口
 * @description:
 * @author: Mr.Wang
 * @create: 2019-11 10:10
 */
public class Demo02InterfaceImpl implements Demo02Interface {
    @Override
    public void methodAbs1() {
        System.out.println("这是第一个方法");
    }

    @Override
    public void methodAbs2() {
        System.out.println("这是第二个方法");
    }

    @Override
    public void methodAbs3() {
        System.out.println("这是第三个方法");
    }

    @Override
    public void methodAbs4() {
        System.out.println("这是第四个方法");
    }
}
