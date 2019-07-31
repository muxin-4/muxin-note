/**
 * 字符和数字的对照关系表（编码表）： ASCII 码表： American Standard Code for Information Interchange，美国信息交换标准代码 
 * Unicode 码表：万国码。也是数字和符号的对照关系，开头 0 - 127 部分和 ASCII 完全一样，但是从 128 开始包含有更多字符。
 */
public class DemoDateTypeChar03 {
	public static void main(String[] args) {
		char char1 = '1';
		System.out.println(char1 + 0); // 49

		char char2 = 'A';
		char char3 = 'C';

		/**
		 * 左侧是 int 类型，右边是 char 类型
		 * char --> int，确实是从小到大
		 * 发生了自动类型转换
		 */
		int num = char3;
		System.out.println(num); // 67

		char char4 = '中';
		System.out.println(char4 + 0); // 20013
	}
}
