import MenuList from './menu/MenuList';
import { SidebarLinks } from '@/constants/sidebar-links';

const SidebarMenu = () => {
    return SidebarLinks.map(link => (
        <MenuList key={link.id} title={link.title} links={link.links} />
    ))
}

export default SidebarMenu;