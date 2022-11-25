
const sound = require("sound-play");
const path = require("path");
const filePath = path.join(__dirname, "./foo.mp3");
// play list 1 arry
const playList10 = [
  path.join(__dirname, "./audio/10wib/1. SPOT info waktu pelayanan loket.mp3"),
  path.join(__dirname, "./audio/10wib/2. SPOT Info Pendaftaran Poli Rajal.mp3"),
  path.join(__dirname, "./audio/10wib/3. SPOT Pencegahan Infeksi Silang.mp3"),
  path.join(__dirname, "./audio/10wib/4. SPOT Identifikasi Waktu Berkunjung.mp3"),
  path.join(__dirname, "./audio/10wib/5. SPOT Dilarang Merokok di lingkungan RS.mp3"),
  path.join(__dirname, "./audio/10wib/6. SPOT Pengambilan Foto & Video di lingkungan RS.mp3"),
  path.join(__dirname, "./audio/10wib/7. SPOT TATIP Ruang Rawat Inap RS.mp3"),
  path.join(__dirname, "./audio/10wib/8. SPOT Jam Besuk.mp3"),
  
];
const playList16 = [
  path.join(__dirname, "./audio/16wib/1. SPOT Pencegahan Infeksi Silang.mp3"),
  path.join(__dirname, "./audio/16wib/2. SPOT Kepatuhan penunggu pasien.mp3"),
  path.join(__dirname, "./audio/10wib/3. SPOT Identifikasi Waktu Berkunjung.mp3"),  
  path.join(__dirname, "./audio/10wib/4. SPOT Dilarang Merokok di lingkungan RS.mp3"),  
  path.join(__dirname, "./audio/10wib/5. SPOT Pengambilan Foto & Video di lingkungan RS.mp3"),  
  path.join(__dirname, "./audio/10wib/6. SPOT TATIP Ruang Rawat Inap RS.mp3"),  
  path.join(__dirname, "./audio/10wib/7. SPOT Jam Besuk.mp3"),  
];
//play arrry sound
playList16.forEach(async (item) => {
  // await sound.play(item);
  let play = await sound.play(item);
  play.on("complete", function () {
    console.log("Done with playback!");
  });
  // sound.play(item).then((response) => console.log("done"));

});
