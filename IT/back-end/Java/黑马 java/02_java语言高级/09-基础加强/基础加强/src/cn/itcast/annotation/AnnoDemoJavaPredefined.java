package cn.itcast.annotation;

import java.util.Date;

/**
 *
 * - @Override：检测被注解标注的方法是否是继承自父类（接口）的
 * - @Deprecated：该注解标注的内容，表示已过时
 * - @SuppressWarnings：压制警告
 *
 * @program: 基础加强
 * @description:
 * @author: Mr.Wang
 * @create: 2019-10 13:49
 */

@SuppressWarnings("all")
public class AnnoDemoJavaPredefined {

    @Override
    public String toString() {
        return super.toString();
    }

    @Deprecated
    public void show1() {
        // 有缺陷
    }

    public void show2() {
        // 替代 show1 方法
    }

    public void demo() {
        show1();
        Date date= new Date();
    }
}
