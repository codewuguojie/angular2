
/*组件*/


import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //选择器
  templateUrl: './app.component.html',//指定一个html文件作为组件的模板(页面布局及内容)
  styleUrls: ['./app.component.css']//该组件模板用到的样式
})


/*定义了该组件的控制器(指被装饰器@Component装饰的一个typescript类)   里面包含与模板的相关的一些属性和方法*/
export class AppComponent {
  title = 'app angular   ';
}


/*相关的一些概念*/
//组件原数据装饰器@Component（）
//template模板，展现
//controller页面逻辑
//@input()输入属性传输器用来接收外部传入数据的，父组件可以直接传递给子组件
//providers提供器  做依赖注入的
//lifecycle hooks生命周期钩子
//@outputs输出属性定义其他组件可能用到的事件，或者组件间共享数据


