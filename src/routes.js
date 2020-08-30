import Home from "@/components/Home";
import MyProjects from "@/components/MyProjects";
import Contacts from "@/components/Contacts";



export const routes = [
    {
      path: '', component: Home, name: 'Home'
    },
    {
        path: '/MyProjects', component: MyProjects, name: 'MyProjects'
      },
      {
        path: '/Contacts', component: Contacts, name: 'Contacts'
      }
        
  ]