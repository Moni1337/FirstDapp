console.log('Hello World');

window.onload = function() {
    if(!window.location.hash) {
        window.location = window.location + '#loaded';
        window.location.reload();
    }
}

Moralis.initialize("4wJdPBQECgvFpJPRAXagDgaQRTY6QDDHPrwSAgLj");
Moralis.serverURL = "https://ilzyoyhgikbf.usemoralis.com:2053/server";

login = async () => {
    await Moralis.Web3.authenticate().then(async function (user) {
        console.log('Logged In');
        user.set("name", document.getElementById('user-username').value);
        user.set("email", document.getElementById('user-email').value);
        await user.save();
        window.location.href = "dashboard.html";
        
    })
}

document.getElementById('btn-login').onclick = login;
