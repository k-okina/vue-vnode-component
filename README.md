# vue-vnode-component
## インストール方法
npm

```
$ npm install vue-vnode-component
```

yarn

```
$ yarn add vue-vnode-component
```

```
import VNode from 'vue-vnode-component';

Vue.component('VNode', VNode);
```

## 特徴
VNodeのvnode属性にvnodeインスタンスを渡すとtemplate内で表示できる
一応render関数内でも使えるけど、childに直接vnode渡せばいんじゃない？と思う。

## 主な使い方
スロットに入れられたコンポーネント等をこのように使える。
そうすると、名前付きスロットなどもtemplateタグ内で完全にラッピングできる。

```
<VNode
  v-for="(vnode, i) in $vnode.componentOptions.children"
  :key="i"
  :vnode="vnode"
/>
```
