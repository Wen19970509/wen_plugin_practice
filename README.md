# plugin_practice

## install

```
npm i wen-plugin_practice
```

### install plugin

```js
// main.js

import App from './App.vue';
import HelloButton from 'wen-plugin_practice';

const app = createApp(App);
app.use(HelloButton);
```

### Usage anywhere

```html
<template>
    <!-- something else -->
    <hello-button />
</template>
```
