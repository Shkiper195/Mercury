async function postRequest() {
    let user = {
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    };
    
    let response = await fetch('https://us-central1-mercdev-academy.cloudfunctions.net/login', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(user)
    });
      
    let result = await response.json();

    if(response.status != 200) {
        document.getElementById('eror').style.display = 'inline';
        document.getElementById('email').style.border = '2px solid #ed4159';
        document.getElementById('email').style.color = '#ed4159';

        if(document.getElementById('password').value != '') {
            document.getElementById('password').style.border = '2px solid #ed4159';
            document.getElementById('password').style.color = '#ed4159';
        }
    } else {
        document.getElementById('header').style.display = 'none';
        document.getElementById('email').style.display = 'none';
        document.getElementById('password').style.display = 'none';
        document.getElementById('img').src = result.photoUrl;
        document.getElementById('img').style.display = 'inline';
        document.getElementById('name').textContent = result.name;
        document.getElementById('name').style.display = 'inline';
        document.getElementById('eror').style.display = 'none';
    }
}