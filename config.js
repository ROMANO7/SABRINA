const fs = require("fs")
const chalk = require("chalk")

//===================================== //
// mudanças de logos:
global.log0 = "https://telegra.ph/file/610688f9db4ec407954b4.jpg" 
global.thumb = "https://telegra.ph/file/610688f9db4ec407954b4.jpg"
global.err4r = "https://telegra.ph/file/610688f9db4ec407954b4.jpg"
// ===================================== //
// alterações de dono e bot:
global.author = "INDO-BOT"
global.sessionName = "SABRINA-QR" // não altere aqui pois é a nome da conexão do bot.
global.linkgrupss = "https://chat.whatsapp.com/EbK67sgLQkWFEgpT3gfzzt"
global.NomeDoBot = "INDOBOT"
global.prefix = "$"
global.NickDono = "ROMANO"
global.numerodonoa = ["14256892344"] 
global.packname = "© Copyright by INDO - BOT"
global.packname2 = `https://youtube.com/channel/UC-Ae5hKACBsuMj-w7uxIUKg`
global.websitex = "https://youtu.be/_BfZRdFFdE8"
//===================================== 
// mensagens:
global.mess = {
    success: '『❗』Prontinho senhor!',    
    admin: '『❗』Apenas adminstradores pode utilizar esse comando!',
    botAdmin: '『❗』Eu preciso ser adm para executar a função.',
    owner: '『❗』Somente meu criador tem direito de usar esse comando.',    
    group: '『❗』 Esse comando só pode ser executado em grupos.',
    private: '『❗』 Esse comando só pdode ser executado no pv.',    
    bot: '『❗』Recurso específico do usuário do número do bot.',    
    wait: '『❗』Aguarde estou atendendo seu pedido.',    
    linkm: '『❗』Cadê o link novinha?',    
    donosmt: '『❗』Este é um recurso especial para o meu criador.',    
    premium: '『❗』Este comando só pode ser executado por usuários premium.',    
    ban: '『❗』Você foi banido pelo meu criador, entre em contato com ele.'
}
// ===================================== //
// não mecher aqui:
global.lolhuman = "RelzzAPIs"
global.banChats = false
global.wlcm = []
global.banChats = false
global.delayantispamcmd = 2
global.gcrevoke = [] 
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
