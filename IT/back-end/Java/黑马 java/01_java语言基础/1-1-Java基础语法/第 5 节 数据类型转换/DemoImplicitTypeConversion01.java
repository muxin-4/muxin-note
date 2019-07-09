/**
 *  当数据类型不一样时，将会发生数据类型转换
 *  自动类型转换（隐式）
 * 		1. 特点：代码不需要进行特殊处理，自动完成
 * 		2. 规则：数据范围从小到大
 *  强制类型转换（显示）
 */

public class DemoImplicitTypeConversion01 {
	public static void main(String[] args) {
		System.out.println(1024); // 这就是一个整数，默认就是 int 类型
		System.out.println(3.14); // 这就是一个浮点数，默认就是 double 类型

		/**
		 * 左边是 long 类型，右边是默认的 int 类型
		 * 一个等号代表赋值，将右侧 int 类型常量，交给左侧的 long 变量进行存储
		 * int --> long，符合数据范围从小到大的要求
		 */ 
		long num1 = 100;
		System.out.println(num1); // 100

		// 左边是 double 类型，右边是 float 类型
		double num2 = 2.5F;
		System.out.println(num2); // 2.5

		// 左边是 double 类型，右边是 float 类型
		double num3 = 30L;
		System.out.println(num3); // 30.0
	}
}
