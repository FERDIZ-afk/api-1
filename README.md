# Danzz Api
Access Danzz Rest Api's Programmatically

### Main website 
[danzzapi.xyz](https://danzzapi.xyz)

#### If you have any suggestions of a website, open an issue!

## Installation

Via npm:
```bash
$ npm install @danzzcoding/danzz-api
```

Via dependencies:
```bash
"@danzzcoding/danzz-api": "github:Danzzxcodes/danzzcoding-api",
```
## Simple to Use

```js
const danzzapi = require('@danzzcoding/danzz-api');

/*
danzzapi.type.module-name(params)
.then(res => console.log(res))
.catch(err => console.log(err))
*/
```

### Social Media

```js
//Example!
danzzapi.sosmed.ytplay('until i found you')
.then(res => console.log(res))
.catch(err => console.log(err))
```

<details>
  <summary><b>Lists of module name (type = sosmed)</b> (click to show)</summary>

| module name | params | thing | response | description |
| :--- | :---------- | :--- | :--- | :--- |
| ytaudio | url | youtube url | json | Get Youtube Audio |
| ytvideo | url | youtube url | json | Get Youtube Video |
</details>