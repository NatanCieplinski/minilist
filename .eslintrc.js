module.exports = {
   root: true,
   parser: 'vue-eslint-parser',
   parserOptions: {
      parser: 'babel-eslint',
      sourceType: 'module'
   },
   env: {
      browser: true,
      node: true
   },
   globals: {
      __static: true
   },
   plugins: ['eslint-plugin-vue'],
   rules: {
      // allow debugger during development
      'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
      indent: ['error', 3],
      'vue/component-tags-order': [
         'error',
         {
            order: ['template', 'script', 'style']
         }
      ]
   },
   extends: [
      // add more generic rulesets here, such as:
      // 'eslint:recommended',
      'plugin:vue/vue3-recommended'
   ]
}
