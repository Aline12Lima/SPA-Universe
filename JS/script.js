import{Router} from './router.js'

const router =new Router()

router.add("/home", "/pages/home.html", "img1");
router.add("/universe", "/pages/universe.html", "img2");
router.add("/explore", "/pages/explore.html", "img3");

router.handle();

window.onpopstate = () => router.handle();
window.route =() => router.route();


/*if pathname === /home
document.body.classList.add("img1")
if pathname === /sobre
document.body.classList.add("img2")
*/