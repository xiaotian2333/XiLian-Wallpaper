// 保存原始方法
const originalXHROpen = XMLHttpRequest.prototype.open;
const originalFetch = window.fetch;
const originalWebSocket = window.WebSocket;

// 检查是否为 HTTP/HTTPS URL
function isHttpUrl(url) {
  try {
    const urlObj = new URL(url, window.location.href);
    return urlObj.protocol === 'http:' || urlObj.protocol === 'https:';
  } catch {
    return false; // 无效URL
  }
}

// 拦截 XMLHttpRequest
XMLHttpRequest.prototype.open = function(method, url, async = true, user, password) {
  if (isHttpUrl(url)) {
    console.warn(`HTTP/HTTPS 请求被阻止: ${method} ${url}`);
    this._blocked = true;
    // 立即触发错误事件
    setTimeout(() => {
      if (this.onerror) this.onerror(new Error('HTTP/HTTPS 请求被禁用'));
      this.dispatchEvent(new Event('error'));
    }, 0);
    return;
  }
  // 允许非 HTTP/HTTPS 请求（如 data:、blob: 等）
  return originalXHROpen.call(this, method, url, async, user, password);
};

// 拦截 XMLHttpRequest.send
const originalXHRSend = XMLHttpRequest.prototype.send;
XMLHttpRequest.prototype.send = function(body) {
  if (this._blocked) {
    console.warn('请求被阻止，不发送数据');
    return;
  }
  return originalXHRSend.call(this, body);
};

// 拦截 Fetch API
window.fetch = function(input, init) {
  let url = input;
  if (input instanceof Request) {
    url = input.url;
  } else if (typeof input === 'string') {
    url = input;
  }
  
  if (isHttpUrl(url)) {
    console.warn(`Fetch 请求被阻止: ${url}`);
    return Promise.reject(new Error('HTTP/HTTPS 请求被禁用'));
  }
  
  return originalFetch.call(this, input, init);
};

// 拦截 WebSocket
window.WebSocket = class BlockedWebSocket {
  constructor(url, protocols) {
    if (isHttpUrl(url.replace('ws', 'http').replace('wss', 'https'))) {
      console.warn(`WebSocket 连接被阻止: ${url}`);
      throw new Error('HTTP/HTTPS WebSocket 连接被禁用');
    }
    return new originalWebSocket(url, protocols);
  }
};

// 拦截动态资源加载
const originalCreateElement = document.createElement;
document.createElement = function(tagName) {
  const element = originalCreateElement.call(this, tagName);
  
  if (['script', 'img', 'iframe', 'link', 'audio', 'video'].includes(tagName.toLowerCase())) {
    const originalSetAttribute = element.setAttribute;
    element.setAttribute = function(name, value) {
      if ((name === 'src' || name === 'href') && isHttpUrl(value)) {
        console.warn(`${tagName} 的 ${name} 属性被阻止:`, value);
        return;
      }
      return originalSetAttribute.call(this, name, value);
    };
  }
  
  return element;
};
