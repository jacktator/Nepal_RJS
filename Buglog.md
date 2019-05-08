# Nepal (bugs&improvements)


## Frontend Bugs

1. 在屏幕较大时（iPad 或者大于iPad 的屏幕）
   主界面框体随着上下滑动位置会动，但中间的字体不动
2. 注册时没有输入program的训练天数，workout plan 里面就会显示 NaN，workout功能就不可用
   prob fix:
   a. 输入信息时就提示用户
   b. 后期可以更改天数
4. 注册时密码没有任何限制(字母，特殊字符)，修改密码时却有
5. 注册后性别，训练信息等无法更改

## Backend Bugs
1. 注册用户后提交questionnaire 会有403错误
   (后台会将用户注册为customer, 没有权限，应为subscriber)
2. 同一账号不同电脑(浏览器)可以同时登陆

## 交互逻辑

1. 在用户填完自己的问题需求后，workout->plan 界面应该
2. 在workout界面，increase fitness内，用户没有选择特定的项目时
   按钮应该改为[ADD, MORE]以增加可读性
   按钮increase fitness 应改为 add exercise，进去以后标题保持不变
3. 菜单栏是否应该一直在底端固定？
4. 已经确定好的exercise 是否应该允许用户change
5. 已经完成的daily workout应该在主界面有显示，且应该出现一个list来让用户更直观的看到各项进度
6. should display complete/not and progress of the exercise everyday in plan menu

put into Asana (do translation then)