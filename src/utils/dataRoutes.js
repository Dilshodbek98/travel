import AboutUs from "../pages/AboutUs";
import Cities from "../pages/Cities";
import Guide from "../pages/Guide";
import Home from "../pages/Home";

export const dataRoutes = [
  {id: 1, path: '/home', title: 'Home',title2: 'Asosiy', element: <Home/>},
  {id: 2, path: '/attractions', title: 'Attractions',title2: 'Diqqatga sazovor joylar', element: <Cities/>},
  {id: 3, path: '/guide', title: 'Guide',title2: 'Ko\'rsatmalar', element: <Guide/>},
  {id: 4, path: '/aboutus', title: 'About Us ', title2:'Biz haqimizda', element: <AboutUs/>},
]