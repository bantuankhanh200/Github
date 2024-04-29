module.exports.config = {
 name: "ảnh",
 version: "1.0.3",
 hasPermssion: 0,
 credits: "",
 description: "Xem ảnh theo yêu cầu của bạn!",
 usages: "phản hồi 1/2/3",
 commandCategory: "Người dùng",
 cooldowns: 5,
 dependencies: {
  axios: ""
 }
}, module.exports.run = async function({
 event: e,
 api: a,
 args: n
}) {
 if (!n[0]) return a.sendMessage("[ Video Hình Ảnh Và Voice ]\n─────────────────\n1 » 🍇 Ảnh gái\n2 » 🍒 Ảnh trai\n3 » 🍊 Ảnh gái nhật\n4 » 🍍 Video chill\n5 » 🍉 Video anime\n6 » 🍎 Video gái\n7 » 🍅 Voice buồn\n8 » 🥕 Voice hát\n9 » 🌽 Ảnh cosplay tốc chiến\n10 » 🥭 Ảnh skin liên quân\n11 » 🍎 Ảnh skin tốc chiến\n12 » 🍑 Video girl/gái\n13 » 🍓 Video cosplay girl/gái\n14 » ❤️ Video love/tình yêu\n15 » 🎵 Video nhạc chill\n16 » 💿 Video music remix\n─────────────────\n📌 Phản hồi theo số thứ tự để xem ảnh.\n📎 Phí xem mỗi hình ảnh là 100.000$!", e.threadID, ((a, n) => {
  global.client.handleReply.push({
   name: this.config.name,
   messageID: n.messageID,
   author: e.senderID,
   type: "create"
  })
 }), e.messageID)
}, module.exports.handleReply = async ({
 api: e,
 event: a,
 client: n,
 handleReply: t,
 Currencies: s,
 Users: i,
 Threads: o,Currencies,
}) => {
    let $ = 100000;
    let money = (await Currencies.getData(a.senderID)).money;
    if(money < $)return e.sendMessage(` Cần ${$}$ để xem ảnh`, a.threadID);
    Currencies.decreaseMoney(a.senderID, $);
 var { p, h } = linkanh();

 if ("create" === t.type) {
  const n = (await p.get(h)).data.data;
  let t = (await p.get(n, {
   responseType: "stream"
  })).data;
  if (['10', '11'].includes(a.body))t.path = 'tmp.mp3';
  return e.sendMessage({
   body: "Bạn đã chọn xem và mất đi 100.000$",
   attachment: t
  }, a.threadID, a.messageID)
 }

   function linkanh() {
        const p = require("axios");
        if ("1" == a.body)
          var h = "https://api.qvapi.repl.co/api/gai.php";
      else if ("2" == a.body)
         var h = "https://quoc-vong-1.hehehehe001.repl.co/api/boy.php";
      else if ("3" == a.body)
          var h = "https://quoc-vong-1.hehehehe001.repl.co/api/gainhat.php";
      else if ("4" == a.body)
          var h = "https://quoc-vong-1.hehehehe001.repl.co/api/videochill.php";
      else if ("5" == a.body)
          var h = "https://api.qvapi.repl.co/api/videoanime.php";
      else if ("6" == a.body)
          var h = "https://quoc-vong-1.hehehehe001.repl.co/api/videogai.php";
      else if ("7" == a.body)
          var h = "https://quoc-vong-1.hehehehe001.repl.co/api/voicebuon.php";
      else if ("8" == a.body)
          var h = "https://quoc-vong-1.hehehehe001.repl.co/api/voicehat.php";
      else if ("9" == a.body)
          var h = "https://api-trankhuong.trankhuong-tk-jiang-2000.repl.co/images/cosplaytc";
      else if ("10" == a.body)
          var h = "https://api-trankhuong.trankhuong-tk-jiang-2000.repl.co/images/skinlq";
      else if ("11" == a.body)
          var h = "https://api-trankhuong.trankhuong-tk-jiang-2000.repl.co/images/skintc";
      else if ("12" == a.body)
          var h = "https://api-trankhuong.trankhuong-tk-jiang-2000.repl.co/video/girl";
      else if ("13" == a.body)
          var h = "https://api-trankhuong.trankhuong-tk-jiang-2000.repl.co/video/cosplay";
     else if ("14" == a.body)
          var h = "https://api-trankhuong.trankhuong-tk-jiang-2000.repl.co/video/tinhyeu";
     else if ("15" == a.body)
          var h = "https://api-trankhuong.trankhuong-tk-jiang-2000.repl.co/video/nhacchill";
     else if ("16" == a.body)
          var h = "https://api-trankhuong.trankhuong-tk-jiang-2000.repl.co/video/musicremix";
        return { p, h };
    }
};