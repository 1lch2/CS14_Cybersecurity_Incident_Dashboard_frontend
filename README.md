# Cybersecurity Incident Dashboard - frontend
This is the frontend repository of capstone project CS14.

## Setup
### Install NodeJS
**Make sure you install NodeJS first!**

https://nodejs.org/zh-cn/download/

### Install Vue CLI
- Follow the official guide:

    https://cli.vuejs.org/zh/guide/installation.html

- Or use the command below in your terminal.
    ```shell
    npm install -g @vue/cli
    ```
### Install dependencies
In your project directory
```shell
npm install
```

### Compiles and hot-reloads for development
```shell
npm run serve
```
The frontend will run on port `8080`.

## Chart data format
```json
{
    "columns": ["column1", "column2"],  // Field name
    "rows": [                           // Data rows
        {
            "column1": 1001,
            "column2": 2001,
            "column3": "text"
        },
        {
            "column1": 1001,
            "column2": 2001,
            "column3": "text"
        }    
    ]
}
```

## Reference
- Vue.js: https://cn.vuejs.org/index.html
- Vue-router: https://router.vuejs.org/zh/
- Element UI: https://element.eleme.io/#/zh-CN/component/layout
- Axios: https://github.com/axios/axios
- V-Charts: https://v-charts.js.org/#/
- ECharts https://echarts.apache.org/zh/option.html
