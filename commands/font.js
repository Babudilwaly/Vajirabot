const { tlang, ringtone, cmd,fetchJson, sleep, botpic,ffmpeg, getBuffer, pinterest, prefix, Config } = require('../lib')
const fs = require('fs-extra')
  
  //---------------------------------------------------------------------------
cmd({

            pattern: "font",           
            desc: "(menu cmdlist).",
            category: "textpro",
            react: "📍",
            filename: __filename,
            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {
        let buttons = [{

                    buttonId: `${prefix}system`,
                    buttonText: {
                    displayText: "System",
                    },

                    type: 1,
                },
                  {
                    buttonId: `${prefix}ping`,
                    buttonText: {
                    displayText: "Ping",

                    },
                    type: 1,
                },
            ];
            let buttonMessage = {
                image: {
                    url: 'https://telegra.ph/file/e2c140df787d603632e7f.jpg',
                },

                caption: `
*⦁──👑𝙆𝙄𝙉𝙂-𝙑𝘼𝙅𝙄𝙍𝘼-𝙈𝘿👑──⦁*

💓𝗵𝗲𝗹𝗹𝗼𝘄 ${citel.pushName}💓

⚙️Fᴀɴᴄʏ ᴛᴇxᴛ ɢᴇɴᴇʀᴀᴛᴏʀ⚙️

👉Exᴀᴍᴘʟᴇ: .ꜰᴀɴᴄʏ 46 Vᴀᴊɪʀᴀ

1 VAJIRA ʙOT
2 ⊥Oᙠ ∀ᴚIſ∀Λ
3 V⃣   A⃣   J⃣   I⃣   R⃣   A⃣    B⃣   O⃣   T⃣
4 V⃞    A⃞    J⃞    I⃞    R⃞    A⃞     B⃞    O⃞    T⃞
5 TOᙠ AЯIႱAV
6 V̸̮͚͔̦̱̂͆̀͐̀̎͜A̵̧͕̦̋̌̏́͒̈́̅̈́͠ͅJ̸̮͍̥͋̏I̸̧̧̖͔͚̤̞͇̊̀̿̿̒͋͆͜ͅṚ̸̟̖͖̺̏̆̊̀ͅͅA̴͙̟͆ ̴̥̹̞͓͍͛̋͛̄̉͝B̷͈̤͑̈́̒̈́̋͒̆͊̕͘Ṏ̸̦͓́̈́̉̚T̸̡̘̙͚̦̞̳̟̽͝
7 ⓋⒶⒿⒾⓇⒶ ⒷⓄⓉ
8 V̶A̶J̶I̶R̶A̶ ̶B̶O̶T̶
9 V̴A̴J̴I̴R̴A̴ ̴B̴O̴T̴
10 V̷A̷J̷I̷R̷A̷ ̷B̷O̷T̷
11 V̲A̲J̲I̲R̲A̲ ̲B̲O̲T̲
12 V̳A̳J̳I̳R̳A̳ ̳B̳O̳T̳
13 V♥A♥J♥I♥R♥A♥ ♥B♥O♥T
14 V͎A͎J͎I͎R͎A͎ ͎B͎O͎T͎
15 V͓̽A͓̽J͓̽I͓̽R͓̽A͓̽ ͓̽B͓̽O͓̽T͓̽
16 ✞︎✌︎☺︎✋︎☼︎✌︎ 👌︎⚐︎❄︎
17 VAJＩＲA　BＯＴ
18 ∇ΔJIRΔ βΩT
19 ᐯ卂ﾌ|尺卂 乃ㄖㄒ
20 ꒦ꍏ꒻ꀤꋪꍏ ꌃꂦ꓄
21 ሀልጋጎዪል ጌዐፕ
22 𝐕𝐀𝐉𝐈𝐑𝐀 𝐁𝐎𝐓
23 𝑽𝑨𝑱𝑰𝑹𝑨 𝑩𝑶𝑻
24 𝑉𝐴𝐽𝐼𝑅𝐴 𝐵𝑂𝑇
25 ꪜꪖ𝓳𝓲𝘳ꪖ ᥇ꪮ𝓽
26 𝚅𝙰𝙹𝙸𝚁𝙰 𝙱𝙾𝚃
27 งควirค ๖໐t
28 ۷ąʝıཞą ცơɬ
29 √ﾑﾌﾉ尺ﾑ 乃のｲ
30 ᐯ卂ﾌ丨尺卂 乃ㄖㄒ
31 🅅🄰🄹🄸🅁🄰 🄱🄾🅃
32 ᏉᏗᏠᎥᏒᏗ ᏰᎧᏖ
33 ᐯᗩᒍIᖇᗩ ᗷOT
34 ʋǟʝɨʀǟ ɮօȶ
35 𝚅𝙰𝙹𝙸𝚁𝙰 𝙱𝙾𝚃
36 𝙑𝘼𝙅𝙄𝙍𝘼 𝘽𝙊𝙏
37 𝗩𝗔𝗝𝗜𝗥𝗔 𝗕𝗢𝗧
38 𝐕𝐀𝐉𝐈𝐑𝐀 𝐁𝐎𝐓
39 𝘝𝘈𝘑𝘐𝘙𝘈 𝘉𝘖𝘛
40 VAJIRA BOT
41 V₳JłⱤ₳ ฿Ø₮
42 VÄJÌRÄ ßÖ†
43 ναנιяα вσт
44 VΛJIЯΛ BӨƬ
45 ỼȺلįའȺ βටͲ
46 ᵥₐⱼᵢᵣₐ Bₒₜ
47 ⱽᴬᴶᴵᴿᴬ ᴮᴼᵀ
48 שคןเгค ๒๏Շ
49 𝕍𝔸𝕁𝕀ℝ𝔸 𝔹𝕆𝕋
50 𝖁𝕬𝕵𝕴𝕽𝕬 𝕭𝕺𝕿
51 🆅🅰🅹🅸🆁🅰 🅱🅾🆃
52 𝓥𝓐𝓙𝓘𝓡𝓐 𝓑𝓞𝓣
53 𝔙𝔄𝔍ℑℜ𝔄 𝔅�𝔗
54 ＶＡＪＩＲＡ ＢＯＴ
55 𝑽𝑨𝑱𝑰𝑹𝑨 𝑩𝑶𝑻
56 𝛻𝛥𝐽𝛪𝑅𝛥 𝐵𝛩𝑇
57 𝝯𝞓𝙅𝞘𝞒𝞓 𝞑𝞗𝙏
58 𝛁𝚫𝐉𝚰𝚪𝚫 𝚩𝚯𝚻
59 ᐯᗩᒍᏆᖇᗩ ᗷᝪᎢ

*ᴋɪɴɢ ᴠᴀᴊɪʀᴀ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ*
*ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴡᴍʀ ᴠᴀᴊɪʀᴀ*
`,

                footer: tlang().footer,
                headerType: 4,
            };
            return Void.sendMessage(citel.chat, buttonMessage, {
                quoted: citel,
            });
        }
    )
