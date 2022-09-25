# No AMD support in UMD module

- Build the library: `vue-cli-service build --target lib --name myLib src/components/HelloWorld.vue`
- Open requirejsExample.html in a browser (on macOS: `open requirejsExample.html`)
- Note the error in the console.

## Adding AMD support
- Uncomment the commented lines in vue.config.js
- Build the library: `vue-cli-service build --target lib --name myLib src/components/HelloWorld.vue`
- Open requirejsExample.html in a browser (on macOS: `open requirejsExample.html`)
- Note the Vue object is now available.

It would be nice if this would be the default in:
https://github.com/vuejs/vue-cli/blob/ae967f769817b2e6dba19a3c0d171be48f67f2a2/packages/%40vue/cli-service/lib/commands/build/resolveLibConfig.js#L104
