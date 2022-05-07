export const MyButton = ({children, ...props}) => {
    return(
        <button {...props} className="my__btn">{children}</button>
    );
}