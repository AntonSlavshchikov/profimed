export const AdminButton = ({children, ...props}) => {
    return(
        <button {...props} className="admin__button">{children}</button>
    );
}