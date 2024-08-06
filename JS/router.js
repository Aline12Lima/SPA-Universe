export class Router{
    routes ={};
    bg={}

    add(routeName, page, backgroundClassName){
        this.routes[routeName] = page;
        this.bg[routeName]= backgroundClassName;
    }

    route(event){
        event= event|| window.event;
        event.preventDefault();
        window.history.pushState({},"",event.target.href);
        this.handle();
    }
    handle(){
        const {pathname} =window.location;
        const route = this.routes[pathname] || this.routes["/home"];
        const bg = this.bg[pathname] || this.bg["/home"];

        fetch(route).then((data) => data.text()).then((html)=>{

            document.querySelector("#app").innerHTML= html;
            document.body.className="";
            document.body.classList.add(bg);


            
        })

    }

}