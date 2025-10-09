
import Sidebar from "../sidebar";

export default function LayoutDashboard({children}) {
    return(
        <div className="flex gap-5">
            <Sidebar />
            <div className="flex">{children}</div>
        </div>
    )
}