const { Client, Util, MessageEmbed, DiscordAPIError, DataResolver } = require("discord.js");
require("dotenv").config();
//const keepAlive = require(`./server.js`);
const bot = new Client

const PREFIX = process.env.PREFIX;
const fs = require("fs");
bot.database = require ("./database.json");

const _0x3fb4=['\x20\x20online','if\x20there\x20any\x20bug\x20contact\x20\x20Han#9122\x20at\x20discord','user','tag','ready','Enjoy','log'];const _0xc93b6a=_0x3c86,handb=bot['database'];function _0x3c86(_0xd7a900,_0x3fb402){_0xd7a900=_0xd7a900-0x17d;let _0x3c86ac=_0x3fb4[_0xd7a900];return _0x3c86ac;}bot['on'](_0xc93b6a(0x181),async _0x40c2b4=>{const _0x2ac575=_0xc93b6a;console[_0x2ac575(0x183)](bot[_0x2ac575(0x17f)][_0x2ac575(0x180)]+_0x2ac575(0x17d)),console[_0x2ac575(0x183)](_0x2ac575(0x17e)),console['log'](_0x2ac575(0x182));});

bot.on("message", async (message) => {
	const _0xe18b=['toLowerCase','bot','slice','startsWith','split','author','content'];const _0x1360f0=_0x3ec2;if(!message['guild'])return;if(message[_0x1360f0(0xc5)][_0x1360f0(0xc1)])return;if(!message[_0x1360f0(0xc6)][_0x1360f0(0xc3)](PREFIX))return;let command=message[_0x1360f0(0xc6)][_0x1360f0(0xc0)]()[_0x1360f0(0xc4)]('\x20')[0x0];function _0x3ec2(_0x5c6c2f,_0xe18b57){_0x5c6c2f=_0x5c6c2f-0xc0;let _0x3ec26f=_0xe18b[_0x5c6c2f];return _0x3ec26f;}command=command[_0x1360f0(0xc2)](PREFIX['length']);

    if (command === "help"){
        return message.channel.send(`\`\`\`${PREFIX}setremoveableroles ${PREFIX}ping ${PREFIX}help ${PREFIX}setroles ${PREFIX}setchannel ${PREFIX}settag\`\`\``)
    }

    if (command === "setroles") {
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You doesnt have permission!")
        let args = message.content.split(' ');
        if (!args[1]) return message.channel.send(`mention roles`)
        const _0x4d9e=['first','writeFile','roles','settings','roleid','mentions','stringify','./database.json','channel'];function _0x2a2d(_0x5629f8,_0x4d9eee){_0x5629f8=_0x5629f8-0x1a8;let _0x2a2d7d=_0x4d9e[_0x5629f8];return _0x2a2d7d;}const _0x2a8280=_0x2a2d;let mroles=message[_0x2a8280(0x1ad)][_0x2a8280(0x1aa)][_0x2a8280(0x1a8)]();if(!mroles)return message[_0x2a8280(0x1b0)]['send']('err');handb[_0x2a8280(0x1ab)][_0x2a8280(0x1ac)]=mroles['id'],fs[_0x2a8280(0x1a9)](_0x2a8280(0x1af),JSON[_0x2a8280(0x1ae)](handb,null,0x4),_0x42c226=>{if(_0x42c226)throw _0x42c226;});
        
        message.channel.send(`Roles added ${mroles.name}`)
        console.log(`[${message.guild.name}] added role ${mroles.name}`)
    }

    if (command === "setchannel") {
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You doesnt have permission!")
        let args = message.content.split(' ');
        if (!args[1]) return message.channel.send(`mention channels`)
        const _0x3385=['channels','stringify','writeFile','channel','mentions','./database.json','send'];const _0x17e6ec=_0x5821;let tch=message[_0x17e6ec(0x1f2)][_0x17e6ec(0x1ee)]['first']();if(!tch)return message[_0x17e6ec(0x1f1)][_0x17e6ec(0x1f4)]('mention\x20channels');function _0x5821(_0x3543e0,_0x33850a){_0x3543e0=_0x3543e0-0x1ee;let _0x5821f2=_0x3385[_0x3543e0];return _0x5821f2;}handb['settings']['chid']=tch['id'],fs[_0x17e6ec(0x1f0)](_0x17e6ec(0x1f3),JSON[_0x17e6ec(0x1ef)](handb,null,0x4),_0x5f09f1=>{if(_0x5f09f1)throw _0x5f09f1;});
        
        message.channel.send(`Channel added ${tch.name}`)
        console.log(`[${message.guild.name}] Channel added ${tch.name}`)
    
    }

    if (command === "settag") { 
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You doesnt have permission!")
        let args = message.content.split(' ');
        if (!args[1]) return message.channel.send(`\`Input first name example : [WARGA]\``)
        const _0x1835=['err','writeFile','split','settings','slice','stringify','tag'];const _0x285e4b=_0x4bfa;function _0x4bfa(_0x5be7e0,_0x183537){_0x5be7e0=_0x5be7e0-0xf0;let _0x4bfaf1=_0x1835[_0x5be7e0];return _0x4bfaf1;}let nnama=message['content'][_0x285e4b(0xf2)]('\x20')[_0x285e4b(0xf4)](0x1)['join']('\x20');if(!nnama)return message['channel']['send'](_0x285e4b(0xf0));handb[_0x285e4b(0xf3)][_0x285e4b(0xf6)]=nnama,fs[_0x285e4b(0xf1)]('./database.json',JSON[_0x285e4b(0xf5)](handb,null,0x4),_0x3508cd=>{if(_0x3508cd)throw _0x3508cd;});

        message.channel.send(`Successfully add tag ${nnama}`)
        console.log(`[${message.guild.name}] added tag ${nnama}`)
    }

    if (command === "setremoveableroles") {
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You doesnt have permission!")
        let args = message.content.split(' ');
        if (!args[1]) return message.channel.send(`mention roles`)
        const _0x5ba3=['settings','remroleid','writeFile','err','channel','mentions'];const _0x495ad7=_0x5d99;let mroles=message[_0x495ad7(0xe9)]['roles']['first']();function _0x5d99(_0x57df02,_0x5ba38e){_0x57df02=_0x57df02-0xe4;let _0x5d9989=_0x5ba3[_0x57df02];return _0x5d9989;}if(!mroles)return message[_0x495ad7(0xe8)]['send'](_0x495ad7(0xe7));handb[_0x495ad7(0xe4)][_0x495ad7(0xe5)]=mroles['id'],fs[_0x495ad7(0xe6)]('./database.json',JSON['stringify'](handb,null,0x4),_0x37203e=>{if(_0x37203e)throw _0x37203e;});
        
        message.channel.send(`Roles added removeable roles ${mroles.name}`)
        console.log(`[${message.guild.name}] added removeable roles ${mroles.name}`)
    }
   
    if (command === "register") {
        let args = message.content.split(' ');
        const _0x44d8=['includes','register\x20Nick_Name','settings','remroleid','channel','guild','length','setroles','tag','member','author','members','add','i\x20cant\x20find\x20roles\x20contact\x20admin\x20to\x20use\x20','send','cache','get','Invalid\x20Nickname','roleid','roles','Please\x20type\x20'];const _0x5153f4=_0x2b02;function _0x2b02(_0xff7b62,_0x44d874){_0xff7b62=_0xff7b62-0x173;let _0x2b0243=_0x44d8[_0xff7b62];return _0x2b0243;}let reqmember=message[_0x5153f4(0x178)][_0x5153f4(0x17e)]['cache'][_0x5153f4(0x183)](message[_0x5153f4(0x17d)]['id']),guildMember=message[_0x5153f4(0x17c)]||message[_0x5153f4(0x17d)],dbrole=handb[_0x5153f4(0x175)][_0x5153f4(0x185)],dbrrole=handb[_0x5153f4(0x175)][_0x5153f4(0x176)],dbtag=handb['settings'][_0x5153f4(0x17b)],dbch=handb['settings']['chid'],role=message[_0x5153f4(0x178)][_0x5153f4(0x186)][_0x5153f4(0x182)]['get'](dbrole),rrole=message['guild'][_0x5153f4(0x186)][_0x5153f4(0x182)][_0x5153f4(0x183)](dbrrole),tag=''+dbtag||'\x20';if(message[_0x5153f4(0x177)]['id']!=dbch)return;if(!args[0x1])return message[_0x5153f4(0x177)]['send'](_0x5153f4(0x187)+PREFIX+_0x5153f4(0x174));if(args[0x1][_0x5153f4(0x179)]<0x5||args[0x1][_0x5153f4(0x179)]>0x23||!args[0x1][_0x5153f4(0x173)]('_'))return message['channel'][_0x5153f4(0x181)](_0x5153f4(0x184));if(role)guildMember[_0x5153f4(0x186)][_0x5153f4(0x17f)](role);else return message[_0x5153f4(0x177)][_0x5153f4(0x181)](_0x5153f4(0x180)+PREFIX+_0x5153f4(0x17a));
        
        await reqmember.setNickname(`${tag} ${args[1]}`)
        console.log(`${message.author.username} Registered as ${args[1]}`)
        message.channel.send(`Registered as ${args[1]}`)
        
        var _0x5be8=['remove'];var _0x59f8cb=_0x561e;function _0x561e(_0x3ace68,_0x5be844){_0x3ace68=_0x3ace68-0x130;var _0x561e49=_0x5be8[_0x3ace68];return _0x561e49;}if(rrole)guildMember['roles'][_0x59f8cb(0x130)](rrole);else return;
    }

    if (command === "ping"){
        message.channel.send(`\`\`\`\nThe Ping Of Bot Is ${bot.ws.ping}ms.\nBot Latency ${Date.now() - message.createdTimestamp}ms \`\`\``)
    }
});
//keepAlive()
bot.login(process.env.BOT_TOKEN);