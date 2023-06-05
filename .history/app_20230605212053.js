var getimgs = document.querySelectorAll(".imgbox");
var getimage = document.querySelectorAll(".image");

getimgs.forEach(function(getimg,idx){

    getimg.addEventListener("click",function(e){
        show(idx);
        
        e.preventDefault();
    })
})

function show(idx){
    getimage.forEach(function(curimg,curidx){
        if(idx === curidx){
           curimg.classList.add("show");

        var getsmallimgs = document.querySelectorAll(".dnone");
        var gettext = document.querySelectorAll('.text');


        getsmallimgs.forEach(function(cursm,cursmidx){
      
        if(curidx === cursmidx){
            cursm.classList.add("smallimg");
        }else{
            cursm.classList.remove("smallimg");
        }
        })  


        gettext.forEach(function(curtxt,curtxtidx){
            if(curidx === curtxtidx){
                cursm.classList.add('textblock')
            }else{
                cursm.classList.add('textblock')

            }
        })

         
        }else{
            curimg.classList.remove("show")
        }
    })
}
