let handler = async (m, { conn, args, command }) => {
	let group = m.chat
        await m.reply('Baa Bye  , , ! 👋😃', m.chat,fkontak) 
        await  conn.groupLeave(group)
        }
handler.help = ['leavegc', 'out']
handler.tags = ['owner']
handler.command = /^(out|leave|leavegc)$/i

handler.rowner = true

export default handler
