package cn.itcast.test;

import cn.itcast.junit.Calculator;
import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

/**
 * @program: junit
 * @description:
 * @author: Mr.Wang
 * @create: 2019-05 18:10
 */
public class CalculatorTest {

    /**
     *  初始化方法：
     *  用于资源申请，所有测试方法在执行之前都会先执行该方法
     */
    @Before
    public void init() {
        System.out.println("init...");
    }


    /**
     *  释放资源方法：
     *  在所有测试方法执行完后，都会自动执行该方法
     */
    @After
    public void close() {
        System.out.println("close");
    }

    /**
     * 测试 add 方法
     */
    @Test
    public void testAdd() {
        // 1. 创建计算器对象
        Calculator c = new Calculator();
        // 2. 调用 add 方法
        int result = c.add(1, 2);
        // 3. 断言 我断言这个结果是 3
        Assert.assertEquals(3, result);
    }

    /**
     * 测试 sub 方法
     */
    @Test
    public void testSub() {
        // 1. 创建计算器对象
        Calculator c = new Calculator();
        // 2. 调用 add 方法
        int result = c.sub(1, 2);
        System.out.println("testSub...");
        // 3. 断言 我断言这个结果是 3
        Assert.assertEquals(-1, result);
    }
}
