var a=document.getElementById("kebap");  
    a.style.position="relative";  
    a.style.left="0px";  
    a.style.top="0px";  
    a.style.right="0px";  
    a.style.down="0px";  
    function fun(b)  
    {  
        if(b==="left")  
        {  
              
            a.style.left=(parseInt(a.style.left)-50)+"px";  
        }  
        if(b==="right")  
        {  
                a.style.left=(parseInt(a.style.left)+50)+"px";  
        }  
        if(b==="up")  
        {  
                a.style.top=(parseInt(a.style.top)-50)+"px";  
        }  
        if(b==="down")  
        {  
                a.style.top=(parseInt(a.style.top)+50)+"px";  
        }
    }  