import { Link, Outlet } from 'react-router-dom';
import { Header, Menu } from 'components/organisms/_layout/'

export function Layout() {
    return (
    <div>
        <div>
            <Header/>
        </div>

        <div>
            <div>
                
            </div>
            <div>
                
            </div>

        </div>
        <div></div>
        <div><Outlet/></div>
    </div>);
}
  