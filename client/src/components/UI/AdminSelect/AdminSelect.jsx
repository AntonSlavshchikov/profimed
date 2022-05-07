export const AdminSelect = (props) => {
    return (
        <select className="admin__select" {...props}>
            <option value="" className="admin__option">Выберете...</option>
            {props.children}
        </select>
    );
}