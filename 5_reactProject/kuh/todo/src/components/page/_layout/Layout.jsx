import { Link, Outlet } from 'react-router-dom';
import { Header, Menu } from 'components/organisms/_layout/'
import css from './Layout.module.css'

export function Layout() {
    return (
    <div>
        <div>
            <Header/>
        </div>

        <div className={css.contenxt}>
            <div className={css.left}>
                <Menu></Menu>
            </div>
            <div className={css.right}>
                <Outlet/>
            </div>
        </div>
    </div>);
}
  