 document.addEventListener('DOMContentLoaded', function() {
     var carousel = document.querySelectorAll('.carousel');
      var instances = M.Carousel.init(carousel, {
        
      });
     var instance = M.Carousel.init(carousel, {
        //  fullWidth: true,
        //  indicators: true,
         autoplay: true,
         numVisible: 3
     });   
        var elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems, {
        edge: 'right',
        inDuration: 750,
        outDuration: 500
    });

    var slider = document.querySelectorAll('.slider');
    var instances = M.Slider.init(slider, {
        indicators: false,
        transition: 500,
        interval:   4000
    });

    var elems1 = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(elems1, {});

    var elems5 = document.querySelectorAll('.scrollspy');
    var instances = M.ScrollSpy.init(elems5, {});

    var parallax = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(parallax, {});

    var elems6 = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems6, {
        constrainWidth: false,
        coverTrigger: false,
        hover: true,
        inDuration: 600
    });

    var tabs = document.querySelectorAll('.tabs');
    var instances = M.Tabs.init(tabs, {});

    counting('count-one', 1, 367, 8000);    
    counting('count-two', 1, 8, 3000);  
    counting('count-three', 1, 7638, 9000);  
    counting('count-four', 1, 100, 900);
 });       



const counting = (id, start, end, duration)=> {
    let obj = document.getElementById(id);
    let current = start;
    let range = end - start;
    let increment = end > start ? 1 : -1
    let step = Math.abs(Math.floor(duration/range));
    let timer = setInterval(()=>{
        current += increment;
        // obj.textContent = current;
        if(current == end){
            clearInterval(timer)
        }
    }, step)
}

// const 