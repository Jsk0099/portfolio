if (document.URL[document.URL.indexOf('?') + 1] === 'v') {
    alert('Thanks For Contacting Me');
    // http://127.0.0.1:5500/Assignment%202/portfolio.html?v
    // console.log(document.URL[document.URL.indexOf('?') - 1]);
    // document.URL.split('?')[0];
    document.location.href = document.URL.split('?')[0];
    
    // (document.getElementById('msg').innerHTML = 'Thanks For Contacting Me')
} else { 
    // (document.getElementById('msg').innerHTML = '') 
}
// document.URL[document.URL.indexOf('?') + 1] === 'v' ? alert('Thanks For Contacting Me') : '';