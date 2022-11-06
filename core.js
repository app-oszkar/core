/* KiwiChat
 * https://kiwichat.ml
 * Embed helper script
 */

'use strict';

function build_embed_src() {
    // Variables
        const base_url = 'https://webchat.romaniachat.eu';
	const port = '8443';
	const nick = 'User??';
	const theme = 'osprey';
	const chan = 'Romania';
    // Get page URL information
    let url = new URL(window.location);
    // Construct the iframe src URL
    let src = base_url;
	if (port) {
        src += ':' + port + '/';
    }
	if (nick) {
        src += '?' + '&' + 'nick' + '=' + nick;
    }
	if (theme) {
        src += '&' + 'theme=' + theme;
    } 
	 if (chan) {
        src += '#' + chan;
    }
	
    return src;
}
function change_embed_dimensions() {
    let embed = document.getElementById('chat-iframe');
    embed.setAttribute('height', window.innerHeight);
    embed.setAttribute('width', window.innerWidth);
}
