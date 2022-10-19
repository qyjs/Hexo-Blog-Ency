---
uuid: 7808bb85-ab44-1b87-690e-153578ecb969
title: 8个工程必备的JavaScript代码片段
date: 2021-09-22 14:28:18
tags: JavaScript
layout: post
categories: JavaScript
thumbnail: ""
---

## 8 个工程必备的 JavaScript 代码片段

### 获取文件后缀名

```js
/**
 * 获取文件后缀名
 * @param {String} filename
 */
export function getExt(filename) {
  if (typeof filename == "string") {
    return filename.split(".").pop().toLowerCase();
  } else {
    throw new Error("filename must be a string type");
  }
}

getExt("1.mp4");
```

### 复制内容到剪贴板

```js

export function copyToBoard(value) {
    const element = document.createElement('textarea')
    document.body.appendChild(element)
    element.value = value
    element.select()
    if (document.execCommand('copy')) {
        document.execCommand('copy')
        document.body.removeChild(element)
        return true
    }
    document.body.removeChild(element)
    return false
}

copyToBoard('lalallala')

- 创建一个textare元素并调用select()方法选中
- document.execCommand('copy')方法，拷贝当前选中内容到剪贴板。
```

### 休眠多少毫秒

```js
/**
 * 休眠xxxms
 * @param {Number} milliseconds
 */
export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

//使用方式
const fetchData = async () => {
  await sleep(1000);
};
```

### 生成随机字符串

```js
/**
 * 生成随机id
 * @param {*} length
 * @param {*} chars
 */
export function uuid(length, chars) {
  chars =
    chars || "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  length = length || 8;
  var result = "";
  for (var i = length; i > 0; --i)
    result += chars[Math.floor(Math.random() * chars.length)];
  return result;
}

uuid();
```

### 简单的深拷贝

```js
/**
 *深拷贝
 * @export
 * @param {*} obj
 * @returns
 */
export function deepCopy(obj) {
  if (typeof obj != "object") {
    return obj;
  }
  if (obj == null) {
    return obj;
  }
  return JSON.parse(JSON.stringify(obj));
}

- 缺陷：只拷贝对象、数组以及对象数组，对于大部分场景已经足够
const person={name:'xiaoming',child:{name:'Jack'}}
deepCopy(person)
```

### 数组去重

```js
/**
 * 数组去重
 * @param {*} arr
 */
export function uniqueArray(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("The first parameter must be an array");
  }
  if (arr.length == 1) {
    return arr;
  }
  return [...new Set(arr)];
}

-原理是利用Set中不能出现重复元素的特性;
uniqueArray([1, 1, 1, 1, 1]);
```

### 对象转化为 FormData 对象

```js
/**
 * 对象转化为formdata
 * @param {Object} object
 */

 export function getFormData(object) {
    const formData = new FormData()
    Object.keys(object).forEach(key => {
        const value = object[key]
        if (Array.isArray(value)) {
            value.forEach((subValue, i) =>
                formData.append(key + `[${i}]`, subValue)
            )
        } else {
            formData.append(key, object[key])
        }
    })
    return formData
}

- 上传文件时我们要新建一个FormData对象，然后有多少个参数就append多少次，使用该函数可以简化逻辑

let req={
    file:xxx,
    userId:1,
    phone:'15198763636',
    //...
}
fetch(getFormData(req))
```

### 保留到小数点以后 n 位

```js
// 保留小数点以后几位，默认2位
export function cutNumber(number, no = 2) {
  if (typeof number != "number") {
    number = Number(number);
  }
  return Number(number.toFixed(no));
}
```
