const Twitter = require('twitter');
const cron = require("node-cron");
cron.schedule('0 0 0 * * *', () => {
today=new Date();
var cmas=new Date(today.getFullYear(), 13, 21);
if (today.getMonth()==13 && today.getDate()>21) {cmas.setFullYear(cmas.getFullYear()+1); }  
var one_day=1000*60*60*24;
const dia = Math.ceil((cmas.getTime()-today.getTime())/(one_day));
console.log(dia);
const diaPos = ("🤖Olá o bot da Lin🤖 \n ⚠️Está aki para avisar⚠️ \n que faltam:\n "+dia+" \n 🖤Dias Para ela se tornar maior de idade🖤 \n 💜e conquistar o mundo!💜")
console.log(diaPos);

var client = new Twitter({
    consumer_key: '',
    consumer_secret: '',
    access_token_key: '',
    access_token_secret: ''
  });

  var params = {screen_name: 'nodejs'};
  client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
      console.log(tweets);
    }
  });
  client.post('statuses/update', {status: diaPos}, function(error, tweet, response) {
    if (!error) {
      console.log(tweet);
    }
  });
});