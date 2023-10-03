import Dashboard from "../pages/Dashboard";
import Resgate from "../pages/Resgate";
import Denuncia from "../pages/Denuncia";
import Eventos from "../pages/Eventos";
import Noticias from "../pages/Noticias";
import TempHouse from "../pages/TempHouse";
import Adocao from "../pages/Adocao";
import dashIcon from "../assets/imgs/icons/dashboard.png";
import rescueIcon from "../assets/imgs/icons/resgate.png";
import newsIcon from "../assets/imgs/icons/noticias.png";
import reportIcon from "../assets/imgs/icons/denuncias.png";
import eventIcon from "../assets/imgs/icons/evento.png";
import adocaoIcon from "../assets/imgs/icons/adocao.png";
import timingHouse from "../assets/imgs/icons/lar-temporario.png";
import Login from "../pages/Login";
import subAdocao from "../pages/subPages/subAdocao";
import subDenuncia from "../pages/subPages/subDenuncia";
import subNoticias from "../pages/subPages/subNoticias";
import subResgate from "../pages/subPages/subResgate";

export const pages = [
  {
    path: "/",
    component: Dashboard,
    title: "Dashboard",
    img: dashIcon,
  },
  {
    path: "/Login",
    component: Login,
    title: "Login",
  },
  {
    path: "/Denuncia",
    component: Denuncia,
    title: "Denuncias",
    nav: "Denuncia",
    sub: subDenuncia,
    img: reportIcon,
  },
  {
    path: "/Resgate",
    component: Resgate,
    title: "Resgate",
    nav: "Resgate",
    sub: subResgate,
    img: rescueIcon,
  },
  {
    path: "/Eventos",
    component: Eventos,
    title: "Eventos",
    nav: "Eventos",
    img: eventIcon,
  },
  {
    path: "/Noticias",
    component: Noticias,
    title: "Noticias",
    nav: "Noticias",
    sub: subNoticias,
    img: newsIcon,
  },
  {
    path: "/TempHouse",
    component: TempHouse,
    title: "Lar Temporário",
    nav: "Lar Temporário",
    img: timingHouse,
  },
  {
    path: "/Adocao",
    component: Adocao,
    title: "Adoção",
    nav: "Adoção",
    sub: subAdocao,
    img: adocaoIcon,
  },
];
