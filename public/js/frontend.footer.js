function spamprotector( dom )
{
    let attag = "@";
    dom.dataset.postfix = reverseString( dom.dataset.postfix );
    let hrefAttribute = dom.dataset.prefix+attag+dom.dataset.postfix;

    if( dom.tagName === "A" )
    {
        dom.setAttribute("href", "m"+"a"+"i"+"l"+"t"+"o"+":"+hrefAttribute );
    }

    if(dom.dataset.displaynameprefix){
        dom.dataset.displaynamepostfix = reverseString( dom.dataset.displaynamepostfix );
        dom.innerHTML = dom.dataset.displaynameprefix + attag + dom.dataset.displaynamepostfix;
    }else if(dom.innerHTML === ''){
        dom.innerHTML = hrefAttribute;
    }
}
var spamprotecteddoms = document.getElementsByClassName("spamprotected");
if( spamprotecteddoms.length>0 )
{
    for( var i=0; i<spamprotecteddoms.length; i++ )
    {
        spamprotector( spamprotecteddoms[i] );
    }
}

// reverse string for Javascript, mainly used for spamprotector
// source: https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/
function reverseString(str) {
    return str.split("").reverse().join("");
}
