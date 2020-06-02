
# REACT NATIVE [WEB] CODE SHARE WITH LERNA + TypeScript
## Code sharing between Mobile and Web
As you know, we still can't use symlinked modules in React Native. [Github](https://github.com/facebook/metro/issues/1)
This is the template that you are able to code sharing between React and React Native. Includes **Redux-Saga** with TypeScript.
Tool management with lerna so first you need to install on your computer.
- Run
```
npm i -g lerna
```

### Then install packages
- Run
```
yarn bootstrap
```

### Start Web Version
- Run 
```
yarn web
```

### Start IOS Version
- Run
```
yarn ios
```

### Start Android Version
- Run
```
yarn android
```


### Delete All Node Modules
- Run
```
yarn clean
```

### Clean Cache, Delete All Node Modules and reinstall again
- Run
```
yarn reset
```

![Demo](https://i.imgur.com/4C1rm2Q.png)

