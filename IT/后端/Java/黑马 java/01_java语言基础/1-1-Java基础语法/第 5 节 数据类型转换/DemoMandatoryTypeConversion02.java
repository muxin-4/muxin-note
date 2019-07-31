/**
 * 强制类型转换:
 * 		1. 特点：将取值范围大的类型强制转换成取值范围小的类型。
		   比较而言，自动转换是Java自动执行的，而强制转换需要我们自己手动执行。
 * 		2. 格式：范围小的类型 范围小的变量名 = (范围小的类型)原本范围大的数据;
 * 
 * 注意事项：
 * 		1. 强制类型转换一般不推荐使用，因为有可能发生精度损失、数据溢出。
 * 		2. byte/shor/char这三种类型都可以发生数学欲奴三，例如加法"+"。
 * 		3. byte/shor/char这三种类型在运算的时候，都会被首先提升成为 int 类型，然后再计算。
 * 		4. boolean 类型不能发生数据类型转换
 */

 public class DemoMandatoryTypeConversion02 {
	 public static void main(String[] args) {
		// 左边是 int 类型，右边是 long 类型
		int num = (int) 100L;
		System.out.println(num);

		// long 类型强制转换成为 int 类型
		int num2 = (int) 6000000000L;
		System.out.println(num2); // 1705032704

		// double --> int,强制类型转换
		int num3 = (int) 3.99;
		System.out.println(num3); // 所有小数位被舍弃，所有小数位都会被舍弃掉

		char char1 = 'A'; // 这是一个字符型变量，里面是大写字母 A
		System.out.println(char1 + 1); // 66,也就是大写字母 A 被当做 65来进行处理
		// 计算机的底层会用一个数字（二进制）来代表字符 A，就是 65
		// 一旦 char 类型进行了数学运算，那么字符就会按照一定的规则翻译成为一个数字

		byte num4 = 40; // 注意！右侧的数值大小不能超过左侧的类型范围
		byte num5 = 40;
		// byte + byte 会进行类型提升 --> int + int --> int
		int result1 = num4 + num5;
		System.out.println(result1); // 90

		short num6 = 60;
		// byte + short 会进行类型提升 --> int + int --> int
		// int 强制转换为 short：注意必须保证逻辑上真实大小没有超过 short 类型的范围，否则会发生数据溢出
		short result2 = (short)(num4 + num6);
		System.out.println(result2); // 100
	 }
 }
