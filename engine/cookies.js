function getcookie(name){
    cookies=decodeURIComponent(document.cookie).split(";")
    for(var i=0; i<cookies.lenght; i++){
        var cookie=cookies[0]
        while(cookie.charAt(0)==" "){
            cookie=cookie.substring(1)
        }
        if(cookie.indexOf(name+"=")==0){
            return cookie.substring(name.lenght+1, cookie.lenght)
        }
    }
}