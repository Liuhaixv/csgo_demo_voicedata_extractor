/*
  This file extracts encoded voicedata from demo
*/

import { DemoFile, Player } from "demofile";
import * as fs from "fs";

function extractVoicedata(path) {
  const stream = fs.createReadStream(path);
  const demoFile = new DemoFile();

  demoFile.entities.on("create", e => {
    // We're only interested in player entities being created.
    if (!(e.entity instanceof Player)) {
      return;
    }

    console.log(
      "[Time: %d] %s (%s) joined the game",
      demoFile.currentTime,
      e.entity.name,
      e.entity.steamId
    );
  });

  //demoFile.on("CNETMsgTick",e=>{
  //  console.log(e)
  //})

  var out_streams = {};
  out_streams[1] = fs.createWriteStream("client1.dat")
  out_streams[2] = fs.createWriteStream("client2.dat")
  out_streams[3] = fs.createWriteStream("client3.dat")
  out_streams[4] = fs.createWriteStream("client4.dat")
  out_streams[5] = fs.createWriteStream("client5.dat")
  out_streams[6] = fs.createWriteStream("client6.dat")
  out_streams[7] = fs.createWriteStream("client7.dat")
  out_streams[8] = fs.createWriteStream("client8.dat")
  out_streams[9] = fs.createWriteStream("client9.dat")
  out_streams[10] = fs.createWriteStream("client10.dat")

  demoFile.on("svc_VoiceData",e =>{
      out_streams[e.client].write(e.voiceData);
  }); 

  demoFile.on("end", e => {
    if (e.error) {
      console.error("Error during parsing:", e.error);
      process.exitCode = 1;
    }

    console.log("Finished.");
  });

  // Start parsing the stream now that we've added our event listeners
  demoFile.parseStream(stream);
}

extractVoicedata(process.argv[2]);
