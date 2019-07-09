/**
 * 变量：程序运行期间，可以发生改变的量
 * 
 * 创建一个变量并且使用的格式：
 * 
 * 数据类型 变量名称; // 创建了一个变量
 * 变量名称 = 数据值; // 赋值，将右边的数据值，赋值交给左边的变量
 * 
 * 一步到位的格式：
 * 
 * 数据类型 变量名称 = 数据值; // 在创建一个变量的同时，立刻放入指定的数据值
 * 
 */
public class DemoVariable {
	public static void main(String[] args) {
		// 创建一个变量
		// 格式：数据类型 变量名称;
		int num1;

		// 向变量当中存入一个数据
		// 格式：变量名称 = 数据值;
		num1 = 10;

		// 当打印输出变量名称的时候，显示出来的是变量的内容
		System.out.println(num1); // 10

		// 改变变量当中本来的数字，变成新的数字
		num1 = 20; 
		System.out.println(num1); // 20

		// 一次创建数据类型和数据值
		// 格式：数据类型 变量名称 = 数据值;
		int num2 = 25;
		System.out.println(num2);

		num2 = 35;
		System.out.println(num2); // 35
		System.out.println("===============");

		byte num3 = 30; // 注意：右侧数值的范围不能超过左侧数据类型的取值范围
		System.out.println(num3); // 30

		// byte num4 = 400; // 右侧超出了 byte 数据范围，错误!

		short num5 = 50;
		System.out.println(num5); // 50

		float num6 = 300000000L;
		System.out.println(num6); // 300000000

		long num7 = 2.5F;
		System.out.println(num7); // 2.5

		double num8 = 1.2;
		System.out.println(num8); // 1.2

		char char1 = 'A';
		System.out.println(char1); // A

		char1 = '中';
		System.out.println(char1); // 中

		boolean var1 = true;
		System.out.println(var1); // true

		var1 = false;
		System.out.println(var1); // false

		boolean var2 = var1;
		System.out.println(var2); // false
	}
}
