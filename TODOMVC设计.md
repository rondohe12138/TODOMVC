1、TODOMVC前端设计

​	采用react+redux来进行前端部分的设计

​	代码部分分为actions、components、containers、reducers三个部分，其中components负责页面当中类如页脚，输入框，todo的呈现，containers负责对添加，删除等功能的实现

Components：

（1）addtodo组件

​	AddTodo.js:采用form表单接受输入的数据并提交，采用connect（）方法关联addtodo组件并导出该组件

（2）visibletodolist组件

​	visibleTodoList.js:定义一个mapstatetoprop（）方法，负责将需要管理的state映射到props参数上，并且还定义了getVisibleTodos（）、mapDispatchToProps（）方法，通过connect（）方法关联Todos组件

​	TodoList.js:定义了一个Todolist组件负责任务列表的显示，调用map（）映射方法创建列表项，通过<Todo>组件创建具体的列表项，通过export导出TodoList

​	Todo.js:定义了Todo组件来创建具体的任务列表项，且在其中定义了onClick、style等属性，onClick负责单击事件的处理，通过export导出

（3）、footer组件

​		Footer.js:定义一个footer组件，通过<FilterLink>定义筛选按钮，通过export导出Footer组件

​		FilterLink.js:定义mapStateToProps（）方法，将管理的state传入到props参数当中去，mapDispatchToProps（）将dispatch（）方法映射到Props参数上，通过connect（）方法关联Link组件并导出

​	Link.js:定义一个Link组件负责任务列表的管理，定义一个<button>按钮，并添加onClick、disabled、style等属性、onClick负责单击事件的处理、disabled负责任务列表激活和禁用状态的切换，通过export导出

（4）、App组件

​		App.js:引入<AddTodo>、<VisibleTodoList>、<Footer>三个子组件，通过export导出



Action：

​	action定义



Reducer：

​	index.js:从redux引入combineReducer()方法、引入两个子 模块todos和VisibilityFilter，使用combineReducer方法包裹这两个模块，用export导出

​	todos.js:定义一个Reducer函数，通过判断action类型来执行管理任务列表的操作，用export导出

​	visibilityFilter:定义一个Reducer函数，通过判断action类型来执行管理任务列表的操作，用export导出



2、nodejs登录系统

​	登录系统采用nodejs+mongoDB+docker完成

1、node.js后端处理请求

index.js:用前端返回的username以及password去数据库当中查询，如果匹配成功就在cookie当中设置username来维持登录状态然后跳转至对应的TODOMVC页面，如果没有就返回注册页面，注册完毕后，再次跳转至登录页面进行登录操作

2、对schema的规定

index.js:规定Userschema当中请求的数据为username以及password，利用export导出

  username: {

​    type: String,

​    required: true

  },

  password: {

​    type: Number,

​    required: true,

  }

3、html页面

login.html:利用form表单提交前端输入的数据username以及password

register.html:利用form表单提交前端输入的数据username以及password

error.html:如果不匹配，会返回error页面，在3秒之后返回登录页面







​	