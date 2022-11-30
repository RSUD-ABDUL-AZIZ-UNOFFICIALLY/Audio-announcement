
const sound = require("sound-play");
const path = require("path");
var cron = require('node-cron');
console.log("Start");

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
  path.join(__dirname, "./audio/16wib/3. SPOT Identifikasi Waktu Berkunjung.mp3"),  
  path.join(__dirname, "./audio/16wib/4. SPOT Dilarang Merokok di lingkungan RS.mp3"),  
  path.join(__dirname, "./audio/16wib/5. SPOT Pengambilan Foto & Video di lingkungan RS.mp3"),  
  path.join(__dirname, "./audio/16wib/6. SPOT TATIP Ruang Rawat Inap RS.mp3"),  
  path.join(__dirname, "./audio/16wib/7. SPOT Jam Besuk.mp3"),  
];
const playList13 = [
  path.join(__dirname, "./audio/1330wib/1. SPOT TGD Code Blue.mp3"),
  path.join(__dirname, "./audio/1330wib/2. SPOT TGD Code Pink.mp3"),
  path.join(__dirname, "./audio/1330wib/3. SPOT TGD Code Red.mp3"),
  path.join(__dirname, "./audio/1330wib/4. SPOT TGD Code White.mp3"),
  path.join(__dirname, "./audio/1330wib/6. SPOT Kepatuhan PPA.mp3"),
  path.join(__dirname, "./audio/1330wib/7. SPOT Kepatuhan Pencatatan Obat.mp3"),
  path.join(__dirname, "./audio/1330wib/8. SPOT Kepatuhan sticker pasien jatuh.mp3"),
  path.join(__dirname, "./audio/1330wib/9. SPOT Kepatuhan Petugas ke pasien.mp3"),
  path.join(__dirname, "./audio/1330wib/10. SPOT Kepatuhan Penunggu pasien.mp3"),
  path.join(__dirname, "./audio/1330wib/11. SPOT Identifikasi Waktu Berkunjung.mp3"),
  path.join(__dirname, "./audio/1330wib/12. SPOT Dilarang Merokok di lingkungan RS.mp3"),
];

cron.schedule('0 10 * * *', () => {
  console.log('jam' + new Date());
  paly1(0);
});
cron.schedule('0 16 * * *', () => {
  console.log('jam' + new Date());
  paly2(0);
});
cron.schedule('30 13 * * *', () => {
  console.log('jam' + new Date());
  paly3(0);
});


function paly1(a) {
  if (playList10.length > a) {
  sound.play(playList10[a]).then((response) => {
    a++;
    paly1(a);
   console.log("Play List ");
  });
  }else{
    console.log("done")
  }
}

function paly2(a) {
  if (playList16.length > a) {
  sound.play(playList16[a]).then((response) => {
    a++;
    paly2(a);
   console.log("Play List ");
  });
  }else{
    console.log("done")
  }
}
function paly3(a) {
  if (playList13.length > a) {
  sound.play(playList13[a]).then((response) => {
    a++;
    paly3(a);
   console.log("Play List ");
  });
  }else{
    console.log("done")
  }
}