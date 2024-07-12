import css from './SearchBox.module.css';

function SearchBox({ value, onFilter }) {
  return (
    <div className={css.container}>
      <p>Find contacts by name</p>
      <input
        type="text"
        value={value}
        onChange={event => onFilter(event.target.value)}
      />
    </div>
  );
}
export default SearchBox;
