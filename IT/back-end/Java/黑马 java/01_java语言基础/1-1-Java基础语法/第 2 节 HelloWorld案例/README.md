三步 java 程序开发：编写源代码、把源代码编译为字节码、运行字节码



创建 HelloWorld.java 文件

```java
public class HelloWorld {
	public static void main(String[] args) {
		System.out.println("Hello, World");
	}
}
```



**HelloWorld 编译**

```java
javac HelloWorld.java // 编译源程序，把 java 文件编译为字节码文件
java HelloWorld	// 运行字节码文件，输出 Hello, World
```
**关于main方法**

- main方法：称为主方法。写法是固定格式不可以更改。main方法是程序的入口点或起始点，无论我们编写多
  少程序，JVM在运行的时候，都会从main方法这里开始执行。