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
    await Moralis.Web3.authenticate().then(function (user) {
        console.log('Logged In');
        console.log(Moralis.User.current());
    })
}

document.getElementById('btn-login').onclick = login;
