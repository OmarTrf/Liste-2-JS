var buttons = document.getElementsByTagName('button');

for(var i=0;i<buttons.length;i++){

    buttons[i].addEventListener('click',function(){
        
        this.classList.toggle('active');
        var desc  = this.nextElementSibling;
        if(desc.style.maxHeight)
            desc.style.maxHeight = null;
        else
            desc.style.maxHeight = desc.scrollHeight+'px';
    });
}