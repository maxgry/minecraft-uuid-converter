var fs = require("fs");
var nbt = require("nbt");
var axios = require("axios");
var path = require("path");
var config = require("./config.json");

var playerdata = config.path_playerdata_dir;

// main();
nice();

async function nice() {
  try {
    console.log("Converting (renaming lol) playerdata from OnlineUUIDs to OfflineUUIDs\n")
    fs.readdir(playerdata, async function(err, files) {
      try {
        for (let i = 0; i < files.length; i++) {
          var filename = files[i]
            .split(".")
            .slice(0, -1)
            .join(".");
          var fileExtension = path.extname(files[i]);
          var offlineUUID = await getOfflineUrl(filename);
          var newFullFileName = offlineUUID + fileExtension;

          console.log("Old OnlineUUID: " + filename + "\n  --> New OffileUUID: " + offlineUUID);

          fs.renameSync(
            playerdata + "/" + files[i],
            playerdata + "/" + newFullFileName
          );
        }
      } catch (e) {
        console.log("\n\n## ERROR: "+ e +"\n\n");
      }
    });
    console.log("\nFinished\n");
  } catch (e) {
    console.log("\n\n## ERROR: "+ e +"\n\n");
  }
}
async function getOfflineUrl(pOnlineUUID) {
  try {
    var reqUrl = "http://tools.glowingmines.eu/convertor/uuid/" + pOnlineUUID;
    var res = await axios.get(reqUrl);
    //console.log("nice " + res.data.offlineuuid);
    return res.data.offlineuuid;
  } catch (e) {
    console.log("\n\n## ERROR: "+ e +"\n\n");
  }
}
