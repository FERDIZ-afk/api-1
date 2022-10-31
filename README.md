# Example result api express js
https://github.com/Danzzxcodes/example-api-express

### Main website 
[danzzapi.xyz](https://danzzapi.xyz)

### To get apikey
[danzzapi.xyz](https://danzzapi.xyz)

#### If you have any suggestions of a website, open an issue!

## Installation

Via npm:
```bash
$ npm install @danzzcoding/danzz-api
```

Via dependencies:
```bash
"@danzzcoding/danzz-api": "github:Danzzxcodes/api"
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
| ytplayaudio | query | youtube query | json | Get youtube play audio |
| ytplayvideo | query | youtube query | json | Get youtube play video |
| ytaudio | url | youtube url | json | Get youtube audio |
| ytvideo | url | youtube url | json | Get youtube video |
| ttaudio | url | tiktok url | json | Get tiktok audio |
| ttvideo | url | tiktok url | json | Get tiktok video |
| fbdl | url | facebook url | json | Get facebook video |
| twdl | url | twitter url | json | Get twitter video |
| igstory | username | ig story username | json | Get instagram story |
| igreels | url | ig reels url | json | Get instagram reels video |
| igdl | url | instagram url | json | Get instagram video |
| igimg | url | instagram url | json | Get instagram image |
| snapinsta | url | snap insta url | json | Get snap insta video |
| ssstik | url | sss tik url | json | Get sss tiktok video |
| snaptik | url | snap tik url | json | Get snap tiktok video |
| sfrom | url | save from url | json | Get save from video |
| mediafire | url | mediafire url | json | Get mediafire file |
| zippy | url | zippy url | json | Get zippy file |
| scloud | url | scloud url | json | Get sound cloud audio |
</details>
