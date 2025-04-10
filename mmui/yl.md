1. 三方登录
2. cookie 用法： http-only， sicure-site
3. 游览器渲染原理
4. 跨域、怎样解决它
5. 缓存



https://juejin.cn/post/7428853569703198730?searchId=202410231848061F2E0679AB9CE795678E#heading-61


https://juejin.cn/post/7427865237439643689?searchId=202410231848061F2E0679AB9CE795678E#heading-1    


https://juejin.cn/post/7431450163153387570?searchId=20241104145140E4987CE3A28C2513E8B9#heading-2



https://juejin.cn/post/7490506373899894838#heading-11

// 浏览器渲染流水线
1. 组件渲染 → 2. DOM更新 → 3. 浏览器绘制 → 4. useEffect执行
                                      ↗
useLayoutEffect插队 → 2.5. useLayoutEffect执行

useLayoutEffect：在DOM更新后立即修正位置，避免视觉错位
useEffect：可能等到下一帧才调整，用户会看到闪烁
