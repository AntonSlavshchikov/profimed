export const MySelect = (props) => {
  return (
    <select className="my__select" {...props}>
      <option value="" className="my-select__options">
        Выберете...
      </option>
      {props.children}
    </select>
  );
};
