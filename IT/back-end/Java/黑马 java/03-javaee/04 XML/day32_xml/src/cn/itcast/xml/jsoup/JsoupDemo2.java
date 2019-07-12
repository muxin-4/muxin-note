package cn.itcast.xml.jsoup;


import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import java.io.File;
import java.io.IOException;
import java.net.URL;

/**
 * Jsoup对象功能
 */
public class JsoupDemo2 {
    public static void main(String[] args) throws IOException {
        //2.1获取student.xml的path
        String path = JsoupDemo2.class.getClassLoader().getResource("student.xml").getPath();
        //2.2解析xml文档，加载文档进内存，获取dom树--->Document
       /* Document document = Jsoup.parse(new File(path), "utf-8");
        System.out.println(document);*/

       //2.parse​(String html)：解析xml或html字符串
       /* String str = "<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n" +
                "\n" +
                "<students>\n" +
                "\t<student number=\"heima_0001\">\n" +
                "\t\t<name>tom</name>\n" +
                "\t\t<age>18</age>\n" +
                "\t\t<sex>male</sex>\n" +
                "\t</student>\n" +
                "\t<student number=\"heima_0002\">\n" +
                "\t\t<name>jack</name>\n" +
                "\t\t<age>18</age>\n" +
                "\t\t<sex>female</sex>\n" +
                "\t</student>\n" +
                "\n" +
                "</students>";
        Document document = Jsoup.parse(str);
        System.out.println(document);*/

       //3.parse​(URL url, int timeoutMillis)：通过网络路径获取指定的html或xml的文档对象
        URL url = new URL("https://baike.baidu.com/item/jsoup/9012509?fr=aladdin");//代表网络中的一个资源路径
        Document document = Jsoup.parse(url, 10000);
        System.out.println(document);

    }

}
