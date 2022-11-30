# React Native with NativeWind

- First step, to configure project of simple form with step:

<br>
<br>
# Init

Para fazer o deploy desse projeto rode

```bash
  npx create-expo-app my-app

  cd my-app
```

<br>
 - Run npx tailwindcss init to create a tailwind.config.js file
 
```bash
  // tailwind.config.js

module.exports = {

- content: [],

* content: ["./App.{js,jsx,ts,tsx}", "./<custom directory>/**/*.{js,jsx,ts,tsx}"], <- add Line
  theme: {
  extend: {},
  },
  plugins: [],
  }

````
<br>
 * BabelConfig (Modify your babel.config.js)

 ```bash
  // babel.config.js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
+   plugins: ["nativewind/babel"], <- Add Line
  };
};

````

### follow this repository...

<br>
<br>
<br>

# Referência

- [Doc NativeWind](https://www.nativewind.dev/)
