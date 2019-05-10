# Nepal (bugs&improvements)

## Frontend Bugs

1. 在屏幕较大时（iPad 或者大于 iPad 的屏幕）
   主界面框体随着上下滑动位置会动，但中间的字体不动
2. 注册时没有输入 program 的训练天数，workout plan 里面就会显示 NaN，workout 功能就不可用
   prob fix:
   a. 输入信息时就提示用户
   b. 后期可以更改天数
3. 注册时密码没有任何限制(字母，特殊字符，长度)，修改密码时却有
4. 注册后性别，训练信息等无法更改
5. Responsive (questionnaire page responsive problem in register process):
   GalaxyS5 360x640 only shows the first column
   iPhone5/SE 320x568
   Pixel 2 411x731
6. questionnaire page button click cannot be cancelled (checkbox used for multiple choice).
7. '/'->'/profile'
## Backend Bugs

1. 注册用户后提交 questionnaire 会有 403 错误
   (后台会将用户注册为 customer, 没有权限，应为 subscriber)
2. 同一账号不同电脑(浏览器)可以同时登陆

## 交互逻辑

1. in workout, the exercise(with specific title) cannot be [keep] directly
2. 在 workout 界面，increase fitness 内，用户没有选择特定的项目时
   按钮可由[change,keep]改为[ADD,MORE]以增加可读性
   按钮 increase fitness 应改为 add exercise，进去以后标题保持不变
3. 菜单栏是否应该一直在底端固定？
4. 已经确定好的 exercise 是否应该允许用户 change
5. 已经完成的 daily workout 应该在主界面有显示，且应该出现一个 list 来让用户更直观的看到各项进度
6. should display complete/not and progress of the exercise everyday in plan menu
7. how to move to next day 
 

put into Asana (do translation then)
