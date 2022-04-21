## $route
   一般获取路由信息【路径、query、params等】

## $router 
   一般进行编程式导航进行路由跳转【push、replace】

## 配置路由时
   可以个路由添加路由元信息：meta

## 路由跳转
   声明式导航：router-link 务必要有 to 属性,可以实现路由的跳转
   编程式导航：利用组件的实例的$router.push|replace方法,可以实现路由的跳转。

## 路由传参
   params参数：属于路径当中的一部分，在配置路由时 需要占位。
   query参数：不属于路径的一部分，类似于ajax中的queryString