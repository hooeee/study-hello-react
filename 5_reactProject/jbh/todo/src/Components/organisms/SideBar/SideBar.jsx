import "./SideBar.css";

export default function SideBar({ open }) {
    return (
        <div>
            <div className={`sidebar ${open ? `collapse` : ""}`}>
                <ul>
                    <li>Home</li>
                    <li>Home</li>
                    <li>Home</li>
                    <li>Home</li>
                </ul>
            </div>
        </div>
    );
}
