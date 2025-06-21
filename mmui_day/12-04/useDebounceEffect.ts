import { useEffect, useRef } from "react";

/**
 * 使用防抖机制执行副作用操作
 *
 * @param callback - 执行副作用的函数
 * @param deps - 依赖项数组
 * @param delay - 防抖的延迟时间，单位为毫秒
 */
function useDebounceEffect(
  callback: () => void,
  deps: React.DependencyList,
  delay: number
): void {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // 清除之前的定时器
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // 设置一个新的定时器，延迟执行 callback
    timeoutRef.current = setTimeout(() => {
      callback();
    }, delay);

    // 清除定时器，当组件卸载或依赖变化时
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [...deps, delay]); // 依赖项和延迟作为依赖项
}

export default useDebounceEffect;
