console.log('Hello World');

window.onload = function() {
    if(!window.location.hash) {
        window.location = window.location + '#loaded';
        window.location.reload();
    }
}

Moralis.initialize("4wJdPBQECgvFpJPRAXagDgaQRTY6QDDHPrwSAgLj");
Moralis.serverURL = "https://ilzyoyhgikbf.usemoralis.com:2053/server";


let homepage = "http://127.0.0.1:5500/dashboard.html";
if( Moralis.User.current() == null && window.location.href == homepage){
    document.getElementsByTagName("BODY")[0].style.display = "none";
    window.location.href = "index.html";
}


login = async () => {
    await Moralis.Web3.authenticate().then(async function (user) {
            user.set("name", document.getElementById('user-username').value);
            user.set("email", document.getElementById('user-email').value);
            await user.save();
            console.log('Logged In');
            window.location.href = "dashboard.html";
    })
}

logout = async () => {
    await Moralis.User.logOut();
    window.location.href = "index.html";
}


 if(document.getElementById('btn-login') != null){
     document.getElementById('btn-login').onclick = login;
    }

 if(document.getElementById('btn-logout') != null){
     document.getElementById('btn-logout').onclick = logout;
 }

