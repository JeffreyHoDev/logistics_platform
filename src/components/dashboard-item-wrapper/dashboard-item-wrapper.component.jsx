import "./dashboard-item-wrapper.styles.css"

export const DashboardItemWrapper = ({ children }) => {
    return (
        <div className="dashboard-item-wrapper">
            { children }
        </div>
    )
}