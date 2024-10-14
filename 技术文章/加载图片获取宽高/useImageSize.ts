import { message } from "antd";
import { useEffect, useState, useRef } from "react";

export interface ImageSize {
  width: number;
  height: number;
}

/**
 * 自定义钩子函数，用于获取图片的尺寸。
 * @param imageCover - 图片的URL字符串或File对象。
 * @returns 包含imageSize（宽度和高度）和getImageSize函数的对象。
 */
export const useImageSize = (imageCover: string | File) => {
  const [imageSize, setImageSize] = useState<ImageSize | null>(null);
  const currentImageCover = useRef(imageCover); // 引入 useRef 来保存最新的 imageCover

  /**
   * 从URL获取图片的尺寸。
   * @param url - 图片的URL。
   * @returns 一个解析为图片尺寸（宽度和高度）的Promise。
   */
  const getImageSizeFromUrl = (url: string): Promise<ImageSize> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = url;
      img.onload = () => {
        resolve({ width: img.width, height: img.height });
      };
      img.onerror = (error) => {
        reject(error);
      };
    });
  };

  /**
   * 从File对象获取图片的尺寸。
   * @param file - 图片的File对象。
   * @returns 一个解析为图片尺寸（宽度和高度）的Promise。
   */
  const getImageSizeFromFile = (file: File): Promise<ImageSize> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const img = new Image();
        img.src = reader.result as string;
        img.onload = () => {
          resolve({ width: img.naturalWidth, height: img.naturalHeight });
        };
        img.onerror = () => {
          reject(new Error(`获取文件 ${file.name} 的图片尺寸失败`));
        };
      };
      reader.onerror = () => {
        reject(new Error(`读取文件 ${file.name} 作为数据URL失败`));
      };
    });
  };

  /**
   * 获取图片的尺寸，无论是URL字符串还是File对象。
   * @param input - 图片的URL字符串或File对象。
   * @returns 一个解析为图片尺寸（宽度和高度）的Promise。
   */
  const getImageSize = (input: string | File): Promise<ImageSize> => {
    if (typeof input === "string") {
      return getImageSizeFromUrl(input);
    } else if (input instanceof File) {
      return getImageSizeFromFile(input);
    } else {
      return Promise.reject(new Error("getImageSize 的输入类型无效"));
    }
  };

  useEffect(() => {
    currentImageCover.current = imageCover; // 每次更新时记录最新的 imageCover

    if (imageCover) {
      getImageSize(imageCover)
        .then((size: ImageSize) => {
          // 只有当 imageCover 没有被其他更新覆盖时才设置尺寸
          if (currentImageCover.current === imageCover) {
            setImageSize(size);
          }
        })
        .catch(() => message.error("加载图片失败"));
    }
  }, [imageCover]);

  return {
    imageSize,
    getImageSize,
  };
};
