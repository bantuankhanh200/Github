module.exports.config = {
  name: "upt",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "Trankhuong",
  description: "Kiểm soát hệ thống bot!",
  commandCategory: "Admin",
  cooldowns: 3
};
function byte2mb(bytes) {
  const units = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  let l = 0, n = parseInt(bytes, 10) || 0;
  while (n >= 1024 && ++l) n = n / 1024;
  return `${n.toFixed(n < 10 && l > 0 ? 1 : 0)} ${units[l]}`;
}
module.exports.run = async ({ api, event }) => {
  const { cpu, osInfo } = global.nodemodule["systeminformation"];
	if (event.senderID != 100015647791389) return api.sendMessage(`⚠️ Xin lỗi, lệnh này chỉ dành cho admin Q.Huy!`, event.threadID, event.messageID)
  const axios = require('axios');
  const fetch = global.nodemodule["node-fetch"];
  const request = require('request');
  const res = await axios.get(`https://api-trankhuong.trankhuong20723.repl.co/love/thinh`);
  var thinh = res.data.data;
  var { manufacturer, brand, speed, physicalCores, cores } = await cpu();
  var { platform: OSPlatform } = await osInfo();
  const fs = require("fs");
  const moment = require("moment-timezone");
  var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss - D/MM/YYYY");
  var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
  if (thu == 'Sunday') thu = 'Chủ Nhật'
  if (thu == 'Monday') thu = 'Thứ Hai'
  if (thu == 'Tuesday') thu = 'Thứ Ba'
  if (thu == 'Wednesday') thu = 'Thứ Tư'
  if (thu == "Thursday") thu = 'Thứ Năm'
  if (thu == 'Friday') thu = 'Thứ  Sáu'
  if (thu == 'Saturday') thu = 'Thứ Bảy'
const fast = global.nodemodule["fast-speedtest-api"];
  const speedTest = new fast({
    token: "YXNkZmFzZGxmbnNkYWZoYXNkZmhrYWxm",
    verbose: false,
    timeout: 10000,
    https: true,
    urlCount: 5,
    bufferSize: 8,
    unit: fast.UNITS.Mbps
  });
  const ketqua = await speedTest.getSpeed();
  const time = process.uptime(),
    hours = Math.floor(time / (60 * 60)),
    minutes = Math.floor((time % (60 * 60)) / 60),
    seconds = Math.floor(time % 60);
  const pidusage = await global.nodemodule["pidusage"](process.pid);
  const timeStart = Date.now();
  axios.get('https://api-trankhuong.trankhuong20723.repl.co/images/trankhuong').then(res => {
    let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
    let callback = function () {
      api.sendMessage({
        body: `🌥️ Hôm nay là: ${thu}\n⏱️ Hiện tại là: ${gio}\n──────────────────\n🤖 Bot đã online được: ${hours} giờ ${minutes} phút ${seconds} giây\n🔰 Tổng nhóm sử dụng: ${global.data.allThreadID.length}\n👥 Tổng người sử dụng: ${global.data.allUserID.length}\n🌸 Dấu lệnh hệ thống: ${global.config.PREFIX}\n──────────────────` + "\n→ Chip CPU: " + manufacturer + brand + "\n→ Tốc độ xử lí: " + speed + " GHz" + "\n→ Số cores: " + physicalCores + "\n→ Số luồng: " + cores + "\n→ Hệ điều hành: " + OSPlatform + `\n→ CPU: ${pidusage.cpu.toFixed(1)}%\n→ RAM: ${byte2mb(pidusage.memory)}\n→ Độ trễ: ${Date.now() - timeStart}ms\n→ Tốc độ mạng: ${ketqua} Mbps\n💌 Thính tặng admin:\n❤️ ${thinh}`,
        attachment: fs.createReadStream(__dirname + `/cache/upt.${ext}`)
      }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/upt.${ext}`), event.messageID);
    };
    request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/upt.${ext}`)).on("close", callback);
  })
}