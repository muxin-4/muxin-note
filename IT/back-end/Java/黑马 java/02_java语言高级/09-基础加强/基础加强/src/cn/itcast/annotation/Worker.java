package cn.itcast.annotation;

/**
 * @program: 基础加强
 * @description:
 * @author: Mr.Wang
 * @create: 2019-10 19:30
 */
@MyAnno(value = 12, age = 12, per = Person.p1, anno2 = @MyAnno2, strs = {"abc", "bbb"})
@MyAnno3
public class Worker {
    @MyAnno3
    public String name = "aaa";
    @MyAnno3
    public void show() {

    }
}
