---
uuid: 67a5cdac-662e-1592-ce8a-72f5c1d1afe1
title: ng-template, ng-container 和 ngTemplateOutlet 的完整使用指南
date: 2023-10-17 15:30:18
tags: ng-template, ng-container 和 ngTemplateOutlet 的完整使用指南
layout: post
categories: ng-template, ng-container 和 ngTemplateOutlet 的完整使用指南
thumbnail: ""
---

### ng-template, ng-container 和 ngTemplateOutlet

```js

@Directive({selector: '[ngIf]'})
export class NgIf {
  private _hasView: boolean = false;

  // TemplateRef 是 `<ng-template>` 的实例引用
  constructor(private _viewContainer: ViewContainerRef, private _template: TemplateRef<Object>) {}

  @Input()
  set ngIf(condition: any) {
    if (condition && !this._hasView) {
      this._hasView = true;
      this._viewContainer.createEmbeddedView(this._template);
    } else if (!condition && this._hasView) {
      this._hasView = false;
      this._viewContainer.clear();
    }
  }
}
ng-template 指令和相关的 ngTemplateOutlet 指令，它们是非常强大的 Angular 特性，能支持 【各种各样】 的高级用例。这些指令经常与 ng-container 一起使用，学习它们是非常有帮助的，我们将会围绕每个指令讲更详细的内容。

现在让我们来看看这些指令的高级用法。注意：原文所有的代码都在这个仓库里https://github.com/angular-university/ng-template-example

本文要点
ng-template 指令介绍
模板输入变量
ng-template 与 ngIf 联合使用
ng-template 与 ngIf 的无糖化语法
ng-template 模板引用与可注入的 TemplateRef
通过模板类型的 @Input() 实现可配置化组件
什么时候使用 ng-container ?
使用 ngTemplateOutlet 自定义指令创建动态模板
Template outlet @Input Properties
完整的联合使用的例子
总结和结论
ng-template 指令介绍
从字面理解，ng-template 指令代表一个 Angular 模板，在这个标签里的内容是组件模板的一部分，然后和其他的模板一起组合成组件最终的模板。在 ng 底层，已经用 ng-template 实现了很多我们会经常使用的结构性指令，包括： ngIf，ngFor 和 ngSwitch。

现在通过一个例子开始我们的学习。在一个 tab 组件中定义两个 tab 按钮（后面会有更多的例子）。在线例子

@Component({
  selector: "app-root",
  template: `
    <ng-template>
      <button class="tab-button" (click)="login()">{{ loginText }}</button>
      <button class="tab-button" (click)="signUp()">{{ signUpText }}</button>
    </ng-template>
  `,
})
export class AppComponent {
  loginText = "Login";
  signUpText = "Sign Up";
  lessons = ["Lesson 1", "Lessons 2"];
  login() {
    console.log("Login");
  }
  signUp() {
    console.log("Sign Up");
  }
}
关于 ng-template，你首先会注意到的是
如果你运行上面的例子，你会发现，屏幕上根本没有渲染任何东西。这是正常的，也是预期的行为。这是因为 ng-template 标签只是简单地定义了一个模板，但我们还没有使用它。接着我们会展示一个例子，用一些常用的 Angular 指令就能让模板渲染出来。

ng-template 指令和 ngIf
你可能是在第一次使用 ngIf/else 实现一些功能时用到了 ng-template，就像下面这个例子一样：

<div class="lessons-list" *ngIf="lessons else loading">...</div>
<ng-template #loading>
  <div>Loading...</div>
</ng-template>
这是一个非常常见的 ngIf/else 用例：我们在等待后端数据返回时，用一个“加载中”来代替数据的展示。如我们所见，这个 else 指向了一个叫 loading 的模板。通过使用 #loading 这样的语法，把模板引用赋值给了 loading。

但除了我们写的这个 ng-template，使用 ngIf 也会创建第二个模板，不过它是隐式的。让我们看看到底发生了什么：

<ng-template [ngIf]="lessons" [ngIfElse]="loading">
  <div class="lessons-list">...</div>
</ng-template>
<ng-template #loading> <div>Loading...</div> </ng-template>
译注：原文中的 desugars，在 wiki 上的解释是，To translate the source code of a computer program into a functionally equivalent form devoid of syntactic sugar. 直译为，将计算机程序的源代码转换成功能相当的无语法糖的形式。
Angular 在内部通过这种无语法糖的操作（译注：简称无糖化），但是编码更为简洁明了，实现了 *ngIf 整个结构指令语法。现在来看看在无糖化过程中发现了什么。

结构指令 ngIf 所在的元素被移到了 ng-template 中
*ngIf 所对应的表达式被拆分到了两个独立的指令中，前者用于 [ngIf]，后者用于可接收模板的 [ngIfElse] 中。
译注： 这是 Angular 12.0.0 的源码
// https://github.com/angular/angular/blob/b31e90575459f27b29ad77626e2e23cad3e50435/packages/common/src/directives/ng_if.ts#L194

/**
* The Boolean expression to evaluate as the condition for showing a template.
*/
@Input()
set ngIf(condition: T) {
  this._context.$implicit = this._context.ngIf = condition;
  this._updateView();
}

/**
* A template to show if the condition expression evaluates to false.
*/

@Input()
set ngIfElse(templateRef: TemplateRef<NgIfContext<T>>|null) {
  assertTemplate('ngIfElse', templateRef);
  this._elseTemplateRef = templateRef;
  this._elseViewRef = null;  // clear previous view if any.
  this._updateView();
}
这只是 ngIf 的一个特例。但 ngFor 和 ngSwitch 也会发生类似的过程。这些指令都非常常用，所以这意味着这些模板在 Angular 中随处可见，或隐式或显式。

但基于这个例子，有个问题可能会出现在脑海中: 如果有多个结构指令应用于同一个元素，这又如何工作?

多个结构指令
当我们在一个元素上使用 ngIf 和 ngFor 时：

<div class="lesson" *ngIf="lessons" *ngFor="let lesson of lessons">
  <div class="lesson-detail">{{lesson | json}}</div>
</div>
这样并不能正常运行。只会得到以下错误：

Uncaught Error: Template parse errors:
Can't have multiple template bindings on one element. Use only one attribute
named 'template' or prefixed with *
报错的意思就是，不能在一个元素上同时使用两个结构性指令。如果有这样的需求，可以采用下面的方法：

<div *ngIf="lessons">
  <div class="lesson" *ngFor="let lesson of lessons">
    <div class="lesson-detail">{{lesson | json}}</div>
  </div>
</div>
在这个例子中，把 ngIf 指令放到了外层的 div 上，但是为了保证代码的正常工作却创建了一个多余的 div。

这样虽然能工作，但能不能既能让代码的正常工作，又不创建多余的元素呢？

答案就是，我们可以使用 ng-containter 结构指令来解决这个问题。

ng-container 指令
为了避免创建多余的 div，我们能用 ng-container 来代替 div。就像这样：

<ng-container *ngIf="lessons">
  <div class="lesson" *ngFor="let lesson of lessons">
    <div class="lesson-detail">{{lesson | json}}</div>
  </div>
</ng-container>
正如我们所看到的，ng-container 指令为我们提供了一个元素，通过它我们可以将结构指令附加到页面的某个区域，而无需为此创建额外的元素。

ng-container 指令还有另一个主要的用例：它还可以提供一个占位符来动态地将模板注入页面。

使用 ngTemplateOutlet 指令动态创建模板
ngIf，只是个开始。我们也可以通过 ngTemplateOutlet 指令将模板本身实例化到页面上的任何地方，紧接着上面的那个 loading 例子，这里做一下改动:

<ng-template #loading> <div>Loading...</div> </ng-template>
<ng-container *ngTemplateOutlet="loading"></ng-container>
具体用法就是，通过模板引用语法 #loading 来引用 loading 模板，将 loading 赋值给 ngTemplateOutlet 结构指令，使其实例化模板。

我们可以在页面上增加更多的 ngTemplateOutlet，并实例化各种不同的模板。稍后会介绍如何通过 ngTemplateOutlet 把一些值传递给模板。

现在我们知道了如何实例化模板，让我们讨论一下模板可以访问什么或不能访问什么。

模板上下文
关于模板的一个关键问题是，它们里面有什么是可见的? 模板是否有自己独立的变量作用域，模板可以看到哪些变量?

在 ng-template 标签中，我们可以访问与外部模板中相同的上下文变量，例如变量 lesson。这是因为所有 ng-template 实例都可以访问它们所嵌入的同一个上下文。

<ng-container *ngIf="lessons">
  <div class="lesson" *ngFor="let lesson of lessons">
    <div class="lesson-detail">
      <ng-container *ngIf="lesson else empty"> {{lesson | json}} </ng-container>
      <ng-template #empty> {{lesson | json}} </ng-template>
    </div>
  </div>
</ng-container>
但是每个模板也可以定义自己的一组输入变量! 实际上，每个模板都关联了一个上下文对象，该对象包含所有特定于模板的输入变量。在线例子

@Component({
  selector: "app-root",
  template: `
    <ng-template #estimateTemplate let-lessonsCounter="estimate">
      <div>Approximately {{ lessonsCounter }} lessons ...</div>
    </ng-template>
    <ng-container *ngTemplateOutlet="estimateTemplate; context: ctx">
    </ng-container>
  `,
})
export class AppComponent {
  totalEstimate = 10;
  ctx = { estimate: this.totalEstimate };
}
以下是对这个例子的分析：

与前面的模板不同，这个模板有一个输入变量（它也可以有几个）
通过 ng-template 上前缀为 let- 的属性来定义了一个输入变量 lessonsCounter
lessonsCounter 变量只能在 ng-template 内部可见
该变量的内容由赋给 let-lessonsCounter 属性的表达式 estimate 决定
estimate 表达式根据上下文对象 context 求值，并将其与要实例化的模板一起传递给 ngTemplateOutlet
上下文对象 context 有一个名为 estimate 的属性，以便在模板中显示该值
还可以给 ctx 对象添加其他属性，然后通过 ngTemplateOutlet 的 context 输入到 ng-template，从而可以拿到更多的输入变量
最终在屏幕上展示的结果是：

Approximately 10 lessons ...
这让我们对如何定义和实例化自己的模板有了一个很好的概览。使用这样的方式还可以在 component 中通过模板进行编码，接下来就会介绍。

Template References
与在页面上使用模板引用名来引用 loading 模板相同（采用这样的方式#loading），我们也可以使用 ViewChild 装饰器直接把模板引用注入到组件里。

@Component({
  selector: "app-root",
  template: `
    <ng-template #defaultTabButtons>
      <button class="tab-button" (click)="login()">{{ loginText }}</button>
      <button class="tab-button" (click)="signUp()">{{ signUpText }}</button>
    </ng-template>
  `,
})
export class AppComponent implements OnInit {
  @ViewChild("defaultTabButtons")
  private defaultTabButtonsTpl: TemplateRef<any>;
  ngOnInit() {
    console.log(this.defaultTabButtonsTpl);
  }
}
译注：@ViewChild 属性装饰器，用于配置一个视图查询。 变更检测器会在视图的 DOM 中查找能匹配上该选择器的第一个元素或指令。 如果视图的 DOM 发生了变化，出现了匹配该选择器的新的子节点，该属性就会被更新。 官网地址
正如我们所看到的，可以像注入任何其他 DOM 元素或组件一样，通过提供模板引用名来注入模板，将 defaultTabButtons 设置到 ViewChild 装饰器上。通过这样的方式，在 component class 里，我们可以访问这个模板引用，还可以把它传递给子组件。

重点：

这个例子表明，当想设计一个支持定制化的组件时，不仅仅是通过传入配置参数或配置对象来实现，还可以通过传入模板来实现。在线例子

  // 传入配置参数或配置对象
  @Input() title: string;
  // 传入模板
  @Input() titleTpl: TemplateRef<any>;
通过模板类型的 @Input() 实现可配置化组件
让我们以一个选项卡容器为例，我们希望在这个容器中提供可配置选项卡按钮的外观。下面是它的样子，我们将在父组件中定义按钮的模板：

@Component({
  selector: "app-root",
  template: `
    <ng-template #customTabButtons>
      <div class="custom-class">
        <button class="tab-button" (click)="login()">{{ loginText }}</button>
        <button class="tab-button" (click)="signUp()">
          {{ signUpText }}
        </button>
      </div>
    </ng-template>
    <tab-container [headerTemplate]="defaultTabButtons"></tab-container>
  `,
})
export class AppComponent implements OnInit {}
然后在标签容器组件上，我们可以定义一个 input 属性，它是一个名为 headerTemplate 的模板：

@Component({
  selector: "tab-container",
  template: `
    <ng-template #defaultTabButtons>
      <div class="default-tab-buttons">...</div>
    </ng-template>
    <ng-container
      *ngTemplateOutlet="headerTemplate ? headerTemplate : defaultTabButtons"
    >
    </ng-container>
    ... rest of tab container component ...
  `,
})
export class TabContainerComponent {
  @Input()
  headerTemplate: TemplateRef<any>;
}
再来分析下最后的这个例子：

在这个 tab-container 组件里有一个 defaultTabButtons 模板
当 headerTemplate 未定义时会使用 defaultTabButtons
如果 headerTemplate 是有定义的，则会使用通过 headerTemplate 传进来的模板
headerTemplate 在 ng-container 的 ngTemplateOutlet 被实例化
目前的逻辑是三元表达式，如果复杂的话，可以通过自定义函数来实现
这种设计的最终结果是，如果没有提供自定义模板，选项卡容器将显示选项卡按钮的默认外观，但如果有自定义模板，它将使用自定义模板。

译注：这个例子是可能是想表达出，在设计定制化组件时，需要考虑默认的显示外观。
总结和结论
核心指令 ng-container , ng-template 和 ngTemplateOutlet 结合在一起，允许我们创建高度动态的和可定制的组件。我们甚至可以根据 @Input() template 完全改变组件的外观，并且可以定义一个模板并在应用程序的多个位置实例化。而这只是将这些功能结合起来的一种可能方式!

```
