### 【小程序 Taro 中 WebView 与应用通信的】

解决问题：

小程序嵌入 h5页面，分享详情商品页面中商品图、名称、价格分享给朋友，如何实现

#### 小程序获取数据，并更新数据

```tsx
const SHARE_APP_MESSAGE = {
  title: 'Default Title',
  path: 'Default Path',
  imageUrl: 'Default Image URL',
};

const App = () => {
  const shareInfo = useRef({
    title: SHARE_APP_MESSAGE.title,
    path: SHARE_APP_MESSAGE.path,
    imageUrl: SHARE_APP_MESSAGE.imageUrl,
  });

  const handleLoad = () => {
  };
  
  const handleMessage = (evt) => {
    const { data } = evt.detail;
    if (data?.length > 0) {
      const { title, path, imageUrl } = data[data.length - 1];
      title && (shareInfo.current.title = title);
      path && (shareInfo.current.path = path);
      imageUrl && (shareInfo.current.imageUrl = imageUrl);
    }
  };

  useShareAppMessage(() => {
    return { ...shareInfo.current };
  });
  
  return (
    <WebView
      source={{
        uri: `${src}?token=${userInfo?.token}`,
      }}
      onLoad={handleLoad}
      onMessage={handleMessage}
    />
  );
};

export default App;
```

#### h5 页面，去发送数据

```tsx
useEffect(() => {
  const sendMiniProgramMessage = () => {
    import("weixin-js-sdk").then((wx) => {
      wx.miniProgram.postMessage({
        // 向小程序发送消息
        data: {
          title: goodDetail?.artwork_name,
          path: `${
            MINI_PROGRAME_URL_MAP["good"]
          }?src=${getUrlPrefix()}/good/${goodDetail.id}`,
          imageUrl: goodDetail?.good_img,
        },
      });
    });
  };

  isWx()
    .then((type) => {
      if (type === "mini-wx" && goodDetail?.id) {
        // 在小程序中，并且存在 goodDetail.id
        sendMiniProgramMessage();
      }
    })
    .catch((error) => {
      // 处理错误，如果有的话
      console.error("Error checking WeChat environment:", error);
    });
}, [goodDetail]);

```



### 其他

- 判断当前环境

  ```js
  // mini-wx: 表示当前环境是微信小程序环境。
  // wx: 表示当前环境是微信公众号环境，但不是小程序环境。
  // no-wx: 表示当前环境不在微信中。
  
  export const isWx = () => {
    const ua = navigator.userAgent.toLowerCase();
  
    if (ua.startsWith("micromessenger")) {
      // 在微信环境中
      return new Promise((resolve) => {
        import("weixin-js-sdk").then((wx) => {
          wx.miniProgram.getEnv(function (res) {
            // 如果是小程序环境
            resolve(res.miniprogram ? "mini-wx" : "wx");
          });
        });
      });
    } else {
      // 不在微信中
      return Promise.resolve("no-wx");
    }
  };
  
  ```

  