# csgo_demo_voicedata_extractor
Extract encoded voicedata from csgo demo

## Usage
1. clone repository
2. install dependency (make sure you have installed [Node.js](https://nodejs.org/))
```
./csgo_demo_voicedata_extractor/ npm install demofile
```
3. extract encoded voicedata from csgo demo using ./src/main.js
```
node src/main.js H:/demo.dem
```

## Notice
Be aware of that the extracted data is encoded with `CELT`, u need to decode it with [CELT header file](https://github.com/mumble-voip/celt-0.11.0) and CSGO's .dll(Windows) or .so(Linux) 

If u are using Windows, here is my decoder repository 👉 [csgo_demo_voicedata_decoder](https://github.com/Liuhaixv/csgo_demo_voicedata_decoder)
