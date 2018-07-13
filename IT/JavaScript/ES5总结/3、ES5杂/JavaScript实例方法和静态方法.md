#JavaScript实例方法和静态方法
静态方法是可以直接用类名.方法名去调用的，而实例方法是不可以的，他必须要用实例才可以去调用。

var Person=function(){};
Person.say=function(){
    console.log('I am a Person,I can say.')
};
Person.prototype.getName=function(name){
    console.log('My name is '+name);
}
以上的代码，实际上很简单，首先是定义了一个function，js里面像上面那样定义一个function实际上是定义了一个类，接下来，我给你这个类添加了一个say的方法，然后接着给这个类的prototype添加了一个getName的方法，所有的类都是会有一个prototype这样的属性，这个属性指向的是object，这个是属于js原型链的问题，在这里我就不阐述了。好了，我现在来按照以下调用一下：

Person.say();
Person.getName('Carl');
是不是发现，第一个可以正常运行，第二个会报错，再来看看下面的代码：

var carl=new Person;
carl.say();
carl.getName('Carl');
是不是和第一段代码刚好相反，那么这个地方实际上我们就看出来了，say方法是’.’在类上面的，所以，它实际上是一个静态方法，那么当然是可以直接通过类进行访问的（这里的静态方法都是public的），所以第一段的第一句话是不会抱错的，而getName这个方法实际上是在prototype上面的，只有创建一个实例的情况下，才可以通过实例进行访问。 所以综上所述，定义在直接用类名（这里就是方法名）’.’一个方法，那么这个实际上创建的是一个静态方法；而用prototype’.’的一个方法，实际上创建的是一个实例方法，实例方法是需要创建实例对象进行访问的，所以，以上就是我想说的，js里面的静态方法和实例方法，同样，静态属性和实例属性也是这个道理。

参考链接
(js里面的实例方法和静态方法)[https://www.jianshu.com/p/bedefecffa22]

