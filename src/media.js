const fetch = require('node-fetch')
const baseURI = 'https://danzzapi.xyz'
const apikey = 'danzz' // Get in https://danzzapi.xyz
const apikeyprem = 'YOUR_APIKEY' // Get in https://danzzapi.xyz

module.exports.ytplay = function ytplay(query) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/downloader/ytplay?query=' + query +'&apikey=' + apikeyprem)
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.ytplayaudio = function ytplayaudio(query) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/downloader/ytplaymp3?query=' + query +'&apikey=' + apikeyprem)
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.ytplayvideo = function ytplayvideo(query) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/downloader/ytplaymp4?query=' + query +'&apikey=' + apikeyprem)
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.ytaudio = function ytaudio(url) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/downloader/ytmp3?url=' + url +'&apikey=' + apikey)
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.ytvideo = function ytvideo(url) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/downloader/ytmp4?url=' + url +'&apikey=' + apikey)
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.tiktok = function tiktok(url) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/downloader/ttmp4?url=' + url +'&apikey=' + apikey)
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}

module.exports.tiktokaudio = function tiktokaudio(url) {
	return new Promise((resolve, reject) => {
		fetch(baseURI+'/api/downloader/ttmp3?url=' + url +'&apikey=' + apikey)
		.then(res => res.json())
		.then(resolve)
		.catch(reject)
	})
}