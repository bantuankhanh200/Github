const axios = require("axios");
const fs = require("fs");
module.exports.config = {
	name: "cap",
	version: "0.0.1",
	hasPermssion: 0,
	credits: "Tpk - táo",
	description: "Cap màn hình",
	commandCategory: "Người dùng",
    cooldowns: 5
}
module.exports.onLoad = async () => {
    const { existsSync } = global.nodemodule["fs-extra"];
    const { resolve } = global.nodemodule["path"];

    const path = resolve(__dirname, "cache", "pornlist.txt");

    if (!existsSync(path)) return await global.utils.downloadFile("https://raw.githubusercontent.com/blocklistproject/Lists/master/porn.txt", path);
    else return;
}

module.exports.run = async ({ event, api, args, Currencies }) => {
  const request = require("request");
const fs = require("fs");

   const { threadID, messageID, senderID } = event;
    var cc = [
      "https://i.imgur.com/J2I4Bi0.jpeg",
      "https://i.imgur.com/H38PlsR.jpeg",
      "https://i.imgur.com/lPECpc0.jpeg",
      "https://i.imgur.com/82TcaN5.jpeg",
              ];
let image = [];
 for(let i = 0; i < 4; i++) {
    const stream = (await axios.get(cc[i], {
        responseType: "stream"
    })).data;
    image.push(stream);
};
  const ccc = {
    body: `🌐== [ CAP FACEBOOK ] ==🌐
────────────────────
1. cap wall dạng điện thoại nền trắng 
2. cap wwall dạng PC nền trắng 
3. cap wall dạng điện thoại nền đen 
4. cap wwall dạng PC nền trắng

➜ Reply tin nhắn kèm STT bạn chọn
 `,
    attachment: image
};
    if (!args[0]) {        
        return api.sendMessage(ccc, event.threadID, (error, info) => {
        
            global.client.handleReply.push({
                type: "choosee",
                name: this.config.name,
                author: event.senderID,
                messageID: info.messageID
            })
        })
    }
}
    module.exports.handleReply = async function ({
    args,
    event,
    Users,
    api,
    handleReply,
    Currencies,
    __GLOBAL
}) {
  const axios = require("axios");
  const fs = require("fs-extra");
  const request = require("request");
  let data = (await Currencies.getData(event.senderID)).ghepTime;
 
    
    switch (handleReply.type) {
    case "choosee": {
        switch (event.body) {
        case "1": {
          const axios = require('axios');
          const moment = require("moment-timezone");
  const tpkk = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss - DD/MM/YYYY");
  let name = await Users.getNameUser(event.senderID);
    let mentions = [];
    mentions.push({
      tag: name,
      id: event.senderID
    })
       api.unsendMessage(handleReply.messageID);
    api.sendMessage({body: `Vui lòng đợi ${name} bot đang cap`, mentions}, event.threadID, event.messageID);
   if (Object.keys(event.mentions).length == 1) {
      var uid = Object.keys(event.mentions)[0];
    }
  else {
          var uid = event.senderID;
    }
    var cookies = `sb=wOieZC9FxlfdPw-SLNvKAd_z;datr=wOieZKHjYLsvLJ5vgFoT8ctb;vpd=v1%3B769x393x2.75;locale=vi_VN;dpr=2.75;wd=393x769;fr=0K6JpC8P07vUntm3S.AWVq_pOnNISpLDVM0gwBxVIiI6c.BknujA.yM.AAA.0.0.Bk3Hi6.AWVCSzKEQa0;c_user=100082076364565;xs=28%3ABzjzm9lNMtLD7A%3A2%3A1692170426%3A-1%3A7427;fbl_cs=AhANXj1Ln5O1%2Fnn9Jo83k3LEGFFuTlVaZU5lRlZmNGR4Z3pObm90NWpZSA;fbl_ci=214863367672762;fbl_st=100626195%3BT%3A28203551;wl_cbv=v2%3Bclient_version%3A2306%3Btimestamp%3A1692213091; xs=42%3AwzoPWdL08HBpDw%3A2%3A1691497737%3A-1%3A747%3A%3AAcUnJLLBoYjG6kYc51MmTW4iwJUsJtf18prgwkVusA; fr=0YC2kL4FUgpz7T59A.AWV2It40g5jaKQjdT8TOgR9wjjU.Bk0nZI.l_.AAA.0.0.Bk0nZI.AWWSbWsC_7Q; useragent=TW96aWxsYS81LjAgKExpbnV4OyBBbmRyb2lkIDEwOyBLKSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWUvMTE2LjAuMC4wIE1vYmlsZSBTYWZhcmkvNTM3LjM2; _uafec=Mozilla%2F5.0%20(Linux%3B%20Android%2010%3B%20K)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F116.0.0.0%20Mobile%20Safari%2F537.36;`,
    vaildItems = ['sb', 'datr', 'c_user', 'xs', 'm_pixel_ratio', 'locale', 'wd', 'fr', 'presence', 'xs', 'm_page_voice', 'fbl_st', 'fbl_ci', 'fbl_cs', 'vpd', 'wd', 'fr', 'presence'];
    var cookie = `sb=wOieZC9FxlfdPw-SLNvKAd_z;datr=wOieZKHjYLsvLJ5vgFoT8ctb;vpd=v1%3B769x393x2.75;locale=vi_VN;dpr=2.75;wd=393x769;fr=0K6JpC8P07vUntm3S.AWVq_pOnNISpLDVM0gwBxVIiI6c.BknujA.yM.AAA.0.0.Bk3Hi6.AWVCSzKEQa0;c_user=100082076364565;xs=28%3ABzjzm9lNMtLD7A%3A2%3A1692170426%3A-1%3A7427;fbl_cs=AhANXj1Ln5O1%2Fnn9Jo83k3LEGFFuTlVaZU5lRlZmNGR4Z3pObm90NWpZSA;fbl_ci=214863367672762;fbl_st=100626195%3BT%3A28203551;wl_cbv=v2%3Bclient_version%3A2306%3Btimestamp%3A1692213091; xs=42%3AwzoPWdL08HBpDw%3A2%3A1691497737%3A-1%3A747%3A%3AAcUnJLLBoYjG6kYc51MmTW4iwJUsJtf18prgwkVusA; fr=0YC2kL4FUgpz7T59A.AWV2It40g5jaKQjdT8TOgR9wjjU.Bk0nZI.l_.AAA.0.0.Bk0nZI.AWWSbWsC_7Q; useragent=TW96aWxsYS81LjAgKExpbnV4OyBBbmRyb2lkIDEwOyBLKSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWUvMTE2LjAuMC4wIE1vYmlsZSBTYWZhcmkvNTM3LjM2; _uafec=Mozilla%2F5.0%20(Linux%3B%20Android%2010%3B%20K)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F116.0.0.0%20Mobile%20Safari%2F537.36;`;
    cookies.split(';').forEach(item => {
        var data = item.split('=');
        if (vaildItems.includes(data[0])) cookie += `${data[0]}=${data[1]};`;
    });
    var url = encodeURI(encodeURI((`https://apicap.quangbao04.repl.co/screenshot/${uid}/${cookie}`))),
        path = __dirname + `/cache/${uid}.png`;
    axios({
        method: "GET",
        url: `https://api.screenshotmachine.com/?key=4ec4c7&url=${url}&dimension=480x800`,
        responseType: "arraybuffer"
    }).then(res => {
        fs.writeFileSync(path, Buffer.from(res.data, "utf-8"));
        api.sendMessage({body: `Cap trang cá nhân facebook dạng nền điện thoại trắng của bạn đây`,mentions, attachment: fs.createReadStream(path) }, event.threadID, () => fs.unlinkSync(path), event.messageID);
    }).catch(err => console.log(err));
        };
            break;
        case "2": {
          const axios = require('axios');
          api.unsendMessage(handleReply.messageID);
const moment = require("moment-timezone");
  const tpkk = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss - DD/MM/YYYY");
  let name = await Users.getNameUser(event.senderID);
    let mentions = [];
    mentions.push({
      tag: name,
      id: event.senderID
    })
       api.unsendMessage(handleReply.messageID);
    api.sendMessage({body: `Vui lòng đợi ${name} bot đang cap`, mentions}, event.threadID, event.messageID);
   if (Object.keys(event.mentions).length == 1) {
      var uid = Object.keys(event.mentions)[0];
    }
  else {
          var uid = event.senderID;
    }
    var cookies = `sb=wOieZC9FxlfdPw-SLNvKAd_z;datr=wOieZKHjYLsvLJ5vgFoT8ctb;vpd=v1%3B769x393x2.75;locale=vi_VN;dpr=2.75;wd=393x769;fr=0K6JpC8P07vUntm3S.AWVq_pOnNISpLDVM0gwBxVIiI6c.BknujA.yM.AAA.0.0.Bk3Hi6.AWVCSzKEQa0;c_user=100082076364565;xs=28%3ABzjzm9lNMtLD7A%3A2%3A1692170426%3A-1%3A7427;fbl_cs=AhANXj1Ln5O1%2Fnn9Jo83k3LEGFFuTlVaZU5lRlZmNGR4Z3pObm90NWpZSA;fbl_ci=214863367672762;fbl_st=100626195%3BT%3A28203551;wl_cbv=v2%3Bclient_version%3A2306%3Btimestamp%3A1692213091; xs=42%3AwzoPWdL08HBpDw%3A2%3A1691497737%3A-1%3A747%3A%3AAcUnJLLBoYjG6kYc51MmTW4iwJUsJtf18prgwkVusA; fr=0YC2kL4FUgpz7T59A.AWV2It40g5jaKQjdT8TOgR9wjjU.Bk0nZI.l_.AAA.0.0.Bk0nZI.AWWSbWsC_7Q; useragent=TW96aWxsYS81LjAgKExpbnV4OyBBbmRyb2lkIDEwOyBLKSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWUvMTE2LjAuMC4wIE1vYmlsZSBTYWZhcmkvNTM3LjM2; _uafec=Mozilla%2F5.0%20(Linux%3B%20Android%2010%3B%20K)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F116.0.0.0%20Mobile%20Safari%2F537.36;`,
    vaildItems = ['sb', 'datr', 'c_user', 'xs', 'm_pixel_ratio', 'locale', 'wd', 'fr', 'presence', 'xs', 'm_page_voice', 'fbl_st', 'fbl_ci', 'fbl_cs', 'vpd', 'wd', 'fr', 'presence'];
    var cookie = `sb=wOieZC9FxlfdPw-SLNvKAd_z;datr=wOieZKHjYLsvLJ5vgFoT8ctb;vpd=v1%3B769x393x2.75;locale=vi_VN;dpr=2.75;wd=393x769;fr=0K6JpC8P07vUntm3S.AWVq_pOnNISpLDVM0gwBxVIiI6c.BknujA.yM.AAA.0.0.Bk3Hi6.AWVCSzKEQa0;c_user=100082076364565;xs=28%3ABzjzm9lNMtLD7A%3A2%3A1692170426%3A-1%3A7427;fbl_cs=AhANXj1Ln5O1%2Fnn9Jo83k3LEGFFuTlVaZU5lRlZmNGR4Z3pObm90NWpZSA;fbl_ci=214863367672762;fbl_st=100626195%3BT%3A28203551;wl_cbv=v2%3Bclient_version%3A2306%3Btimestamp%3A1692213091; xs=42%3AwzoPWdL08HBpDw%3A2%3A1691497737%3A-1%3A747%3A%3AAcUnJLLBoYjG6kYc51MmTW4iwJUsJtf18prgwkVusA; fr=0YC2kL4FUgpz7T59A.AWV2It40g5jaKQjdT8TOgR9wjjU.Bk0nZI.l_.AAA.0.0.Bk0nZI.AWWSbWsC_7Q; useragent=TW96aWxsYS81LjAgKExpbnV4OyBBbmRyb2lkIDEwOyBLKSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWUvMTE2LjAuMC4wIE1vYmlsZSBTYWZhcmkvNTM3LjM2; _uafec=Mozilla%2F5.0%20(Linux%3B%20Android%2010%3B%20K)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F116.0.0.0%20Mobile%20Safari%2F537.36;`;
    cookies.split(';').forEach(item => {
        var data = item.split('=');
        if (vaildItems.includes(data[0])) cookie += `${data[0]}=${data[1]};`;
    });
    var url = encodeURI(encodeURI((`https://apicap.quangbao04.repl.co/screenshot/${uid}/${cookie}`))),
        path = __dirname + `/cache/${uid}.png`;
    axios({
        method: "GET",
        url: `https://api.screenshotmachine.com/?key=4ec4c7&url=${url}&dimension=1920x1080`,
        responseType: "arraybuffer"
    }).then(res => {
        fs.writeFileSync(path, Buffer.from(res.data, "utf-8"));
        api.sendMessage({body: `Cap trang cá nhân facebook dạng pc nền trắng của bạn đây`,mentions, attachment: fs.createReadStream(path) }, event.threadID, () => fs.unlinkSync(path), event.messageID);
    }).catch(err => console.log(err));
        };
            break;
        case "3": {
          const axios = require('axios');
          api.unsendMessage(handleReply.messageID);
const moment = require("moment-timezone");
  const tpkk = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss - DD/MM/YYYY");
  let name = await Users.getNameUser(event.senderID);
    let mentions = [];
    mentions.push({
      tag: name,
      id: event.senderID
    })
       api.unsendMessage(handleReply.messageID);
    api.sendMessage({body: `Vui lòng đợi ${name} bot đang cap`, mentions}, event.threadID, event.messageID);
   if (Object.keys(event.mentions).length == 1) {
      var uid = Object.keys(event.mentions)[0];
    }
  else {
          var uid = event.senderID;
    }
    var cookies = `sb=wOieZC9FxlfdPw-SLNvKAd_z;datr=wOieZKHjYLsvLJ5vgFoT8ctb;vpd=v1%3B769x393x2.75;locale=vi_VN;dpr=2.75;wd=393x769;fr=0K6JpC8P07vUntm3S.AWVq_pOnNISpLDVM0gwBxVIiI6c.BknujA.yM.AAA.0.0.Bk3Hi6.AWVCSzKEQa0;c_user=100082076364565;xs=28%3ABzjzm9lNMtLD7A%3A2%3A1692170426%3A-1%3A7427;fbl_cs=AhANXj1Ln5O1%2Fnn9Jo83k3LEGFFuTlVaZU5lRlZmNGR4Z3pObm90NWpZSA;fbl_ci=214863367672762;fbl_st=100626195%3BT%3A28203551;wl_cbv=v2%3Bclient_version%3A2306%3Btimestamp%3A1692213091; xs=42%3AwzoPWdL08HBpDw%3A2%3A1691497737%3A-1%3A747%3A%3AAcUnJLLBoYjG6kYc51MmTW4iwJUsJtf18prgwkVusA; fr=0YC2kL4FUgpz7T59A.AWV2It40g5jaKQjdT8TOgR9wjjU.Bk0nZI.l_.AAA.0.0.Bk0nZI.AWWSbWsC_7Q; useragent=TW96aWxsYS81LjAgKExpbnV4OyBBbmRyb2lkIDEwOyBLKSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWUvMTE2LjAuMC4wIE1vYmlsZSBTYWZhcmkvNTM3LjM2; _uafec=Mozilla%2F5.0%20(Linux%3B%20Android%2010%3B%20K)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F116.0.0.0%20Mobile%20Safari%2F537.36;`,
    vaildItems = ['sb', 'datr', 'c_user', 'xs', 'm_pixel_ratio', 'locale', 'wd', 'fr', 'presence', 'xs', 'm_page_voice', 'fbl_st', 'fbl_ci', 'fbl_cs', 'vpd', 'wd', 'fr', 'presence'];
    var cookie = `sb=wOieZC9FxlfdPw-SLNvKAd_z;datr=wOieZKHjYLsvLJ5vgFoT8ctb;vpd=v1%3B769x393x2.75;locale=vi_VN;dpr=2.75;wd=393x769;fr=0K6JpC8P07vUntm3S.AWVq_pOnNISpLDVM0gwBxVIiI6c.BknujA.yM.AAA.0.0.Bk3Hi6.AWVCSzKEQa0;c_user=100082076364565;xs=28%3ABzjzm9lNMtLD7A%3A2%3A1692170426%3A-1%3A7427;fbl_cs=AhANXj1Ln5O1%2Fnn9Jo83k3LEGFFuTlVaZU5lRlZmNGR4Z3pObm90NWpZSA;fbl_ci=214863367672762;fbl_st=100626195%3BT%3A28203551;wl_cbv=v2%3Bclient_version%3A2306%3Btimestamp%3A1692213091; xs=42%3AwzoPWdL08HBpDw%3A2%3A1691497737%3A-1%3A747%3A%3AAcUnJLLBoYjG6kYc51MmTW4iwJUsJtf18prgwkVusA; fr=0YC2kL4FUgpz7T59A.AWV2It40g5jaKQjdT8TOgR9wjjU.Bk0nZI.l_.AAA.0.0.Bk0nZI.AWWSbWsC_7Q; useragent=TW96aWxsYS81LjAgKExpbnV4OyBBbmRyb2lkIDEwOyBLKSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWUvMTE2LjAuMC4wIE1vYmlsZSBTYWZhcmkvNTM3LjM2; _uafec=Mozilla%2F5.0%20(Linux%3B%20Android%2010%3B%20K)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F116.0.0.0%20Mobile%20Safari%2F537.36;`;
    cookies.split(';').forEach(item => {
        var data = item.split('=');
        if (vaildItems.includes(data[0])) cookie += `${data[0]}=${data[1]};`;
    });
    var url = encodeURI(encodeURI((`https://apicap.quangbao04.repl.co/screenshot/${uid}/${cookie}`))),
        path = __dirname + `/cache/${uid}.png`;
    axios({
        method: "GET",
        url: `
        https://api.screenshotmachine.com/?key=4ec4c7&url=${url}&dimension=480x800`,
        responseType: "arraybuffer"
    }).then(res => {
        fs.writeFileSync(path, Buffer.from(res.data, "utf-8"));
        api.sendMessage({body: `Cap trang cá nhân facebook dạng nền điện thoại trắng của bạn đây`,mentions, attachment: fs.createReadStream(path) }, event.threadID, () => fs.unlinkSync(path), event.messageID);
    }).catch(err => console.log(err));
        };
            break;
        case "4": {
          const axios = require('axios');
          api.unsendMessage(handleReply.messageID);
const moment = require("moment-timezone");
  const tpkk = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss - DD/MM/YYYY");
  let name = await Users.getNameUser(event.senderID);
    let mentions = [];
    mentions.push({
      tag: name,
      id: event.senderID
    })
       api.unsendMessage(handleReply.messageID);
    api.sendMessage({body: `Vui lòng đợi ${name} bot đang cap`, mentions}, event.threadID, event.messageID);
   if (Object.keys(event.mentions).length == 1) {
      var uid = Object.keys(event.mentions)[0];
    }
  else {
          var uid = event.senderID;
    }
    var cookies = `sb=wOieZC9FxlfdPw-SLNvKAd_z;datr=wOieZKHjYLsvLJ5vgFoT8ctb;vpd=v1%3B769x393x2.75;locale=vi_VN;dpr=2.75;wd=393x769;fr=0K6JpC8P07vUntm3S.AWVq_pOnNISpLDVM0gwBxVIiI6c.BknujA.yM.AAA.0.0.Bk3Hi6.AWVCSzKEQa0;c_user=100082076364565;xs=28%3ABzjzm9lNMtLD7A%3A2%3A1692170426%3A-1%3A7427;fbl_cs=AhANXj1Ln5O1%2Fnn9Jo83k3LEGFFuTlVaZU5lRlZmNGR4Z3pObm90NWpZSA;fbl_ci=214863367672762;fbl_st=100626195%3BT%3A28203551;wl_cbv=v2%3Bclient_version%3A2306%3Btimestamp%3A1692213091; xs=42%3AwzoPWdL08HBpDw%3A2%3A1691497737%3A-1%3A747%3A%3AAcUnJLLBoYjG6kYc51MmTW4iwJUsJtf18prgwkVusA; fr=0YC2kL4FUgpz7T59A.AWV2It40g5jaKQjdT8TOgR9wjjU.Bk0nZI.l_.AAA.0.0.Bk0nZI.AWWSbWsC_7Q; useragent=TW96aWxsYS81LjAgKExpbnV4OyBBbmRyb2lkIDEwOyBLKSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWUvMTE2LjAuMC4wIE1vYmlsZSBTYWZhcmkvNTM3LjM2; _uafec=Mozilla%2F5.0%20(Linux%3B%20Android%2010%3B%20K)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F116.0.0.0%20Mobile%20Safari%2F537.36;`,
    vaildItems = ['sb', 'datr', 'c_user', 'xs', 'm_pixel_ratio', 'locale', 'wd', 'fr', 'presence', 'xs', 'm_page_voice', 'fbl_st', 'fbl_ci', 'fbl_cs', 'vpd', 'wd', 'fr', 'presence'];
    var cookie = `sb=wOieZC9FxlfdPw-SLNvKAd_z;datr=wOieZKHjYLsvLJ5vgFoT8ctb;vpd=v1%3B769x393x2.75;locale=vi_VN;dpr=2.75;wd=393x769;fr=0K6JpC8P07vUntm3S.AWVq_pOnNISpLDVM0gwBxVIiI6c.BknujA.yM.AAA.0.0.Bk3Hi6.AWVCSzKEQa0;c_user=100082076364565;xs=28%3ABzjzm9lNMtLD7A%3A2%3A1692170426%3A-1%3A7427;fbl_cs=AhANXj1Ln5O1%2Fnn9Jo83k3LEGFFuTlVaZU5lRlZmNGR4Z3pObm90NWpZSA;fbl_ci=214863367672762;fbl_st=100626195%3BT%3A28203551;wl_cbv=v2%3Bclient_version%3A2306%3Btimestamp%3A1692213091; xs=42%3AwzoPWdL08HBpDw%3A2%3A1691497737%3A-1%3A747%3A%3AAcUnJLLBoYjG6kYc51MmTW4iwJUsJtf18prgwkVusA; fr=0YC2kL4FUgpz7T59A.AWV2It40g5jaKQjdT8TOgR9wjjU.Bk0nZI.l_.AAA.0.0.Bk0nZI.AWWSbWsC_7Q; useragent=TW96aWxsYS81LjAgKExpbnV4OyBBbmRyb2lkIDEwOyBLKSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWUvMTE2LjAuMC4wIE1vYmlsZSBTYWZhcmkvNTM3LjM2; _uafec=Mozilla%2F5.0%20(Linux%3B%20Android%2010%3B%20K)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F116.0.0.0%20Mobile%20Safari%2F537.36;`;
    cookies.split(';').forEach(item => {
        var data = item.split('=');
        if (vaildItems.includes(data[0])) cookie += `${data[0]}=${data[1]};`;
    });
    var url = encodeURI(encodeURI((`https://apicap.quangbao04.repl.co/screenshot/${uid}/${cookie}`))),
        path = __dirname + `/cache/${uid}.png`;
    axios({
        method: "GET",
        url: `
        https://api.screenshotmachine.com/?key=4ec4c7&url=${url}&dimension=1920x1080`,
        responseType: "arraybuffer"
    }).then(res => {
        fs.writeFileSync(path, Buffer.from(res.data, "utf-8"));
        api.sendMessage({body: `Cap trang cá nhân facebook dạng pc nền đen của bạn đây`,mentions, attachment: fs.createReadStream(path) }, event.threadID, () => fs.unlinkSync(path), event.messageID);
    }).catch(err => console.log(err));
          }
            break;
					default:
           const choose = parseInt(event.body);
            	if (isNaN(event.body)) return api.sendMessage("n", event.threadID, event.messageID);
            	if (choose > 2 || choose < 1) return api.sendMessage("u", event.threadID, event.messageID); 
    }
    }
}
      }