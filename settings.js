const chalk = require("chalk")
const fs = require("fs")

//aumto presence updateh
global.autoTyping = false //auto tying in gc (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)
global.autoblockmorroco = true //auto block 212 (true to on, false to off)
global.autokickmorroco = true //auto kick 212 (true to on, false to off) 
global.antispam = true //auto kick spammer (true to on, false to off)


//if api key expire, u can generate one from here: https://beta.openai.com/account/api-keys
global.keyopenai = "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"

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.owner = ['6285752428402'] //ur owner number
global.ownernomer = "6285752428402" //ur owner number2
global.ownername = "vikarekber.com" //ur owner name
global.ytname = "vikarekber.com" //ur yt chanel name
global.socialm = "vikarekber.com" //ur github or insta name
global.location = "Indonesia" //ur location

//new
global.botname = "Vika Rekber Bot"
global.ownernumber = '6285752428402'
global.ownername = 'vikarekber.com'
global.ownerNumber = ["6285752428402@s.whatsapp.net"]
global.ownerweb = "https://vikarekber.com"
global.websitex = "https://vikarekber.com"
global.wagc = "https://chat.whatsapp.com/HLJWa5fWs7BBh7co9n0kqU"
global.themeemoji = '🪀'
global.wm = "VikaRekber.com."
global.botscript = 'https://vikarekber.com' //script link
global.packname = "Sticker By"
global.author = "🦄Vika Rekber\n\n"
global.creator = "6285752428402@s.whatsapp.net"
global.prefa = ['','!','.','#','&']
global.sessionName = 'session'
global.hituet = 0

//media target
global.thum = fs.readFileSync("./XeonMedia/theme/vika.png") //ur thumb pic
global.log0 = fs.readFileSync("./XeonMedia/theme/vika.png") //ur logo pic
global.err4r = fs.readFileSync("./XeonMedia/theme/vika.png") //ur error pic
global.thumb = fs.readFileSync("./XeonMedia/theme/vika.png") //ur thumb pic
global.defaultpp = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60' //default pp wa

//menu image maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//messages
global.mess = {
    success: 'Here you go!', 
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
