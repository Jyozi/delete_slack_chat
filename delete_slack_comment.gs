function delete_comment(token, channel, ts) {    // Change argument if you get channel timestamps
  // Can get timestamps for messages -> messages[i].ts;
  var payload = {
    "token" : token,
    "channel" : channel,
    "ts" : ts
  }
  var options = {
    "method" : "POST",
    "payload" : payload
  }
  
  var url = "https://slack.com/api/chat.delete"

  var response = UrlFetchApp.fetch(url, options);
  var content = response.getContentText("UTF-8");
//  Utilities.sleep(1000); //If you want to delete multiple, you need to sleep
}

function gethistory() {
  token = 'legacy token'
  channel = 'channel id'
  var url = 'https://slack.com/api/channels.history?token=' + token + '&channel=' + channel;
  var ts = 'timestamp'

  // If you want to get channel timestamps every time
  //  var response = UrlFetchApp.fetch(url);  
  //  var jsonString = response.getContentText("UTF-8");
  //  var messages = JSON.parse(jsonString).messages;
  //  delete_chat(messages, token, channel, ts);

  delete_chat(token, channel, ts);
}
