  // 存取cookie
  const cookieSet = (key, value, time) => {
    const d = new Date();
    d.setTime(d.getTime() + (time * 60 * 60 * 1000));
    document.cookie = `${key}=${value};expires=${d.toUTCString()}`
  }

  // cookie 获取
  const cookieGet = key => {
    const cookieStr = unescape(document.cookie);
    const arr = cookieStr.split('; ');
    let cookieValue = '';
    for (let i = 0; i < arr.length; i++) {
        const temp = arr[i].split('=');
        if (temp[0] === key) {
            cookieValue = temp[1];
            break
        }
    }
    return cookieValue
  }

  // cookie 删除
  const cookieRemove = key => {
    document.cookie = `${encodeURIComponent(key)}=;expires=${new Date()}`
  }

  export default {
    cookieSet,
    cookieGet,
    cookieRemove
  }