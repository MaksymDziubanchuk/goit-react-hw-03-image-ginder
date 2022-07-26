import css from 'components/Button/Button.module.css';
export const Button = ({ onClick }) => {
  return (
    <button className={css.Button} onClick={onClick}>
      <span className={css.Title}>Load more</span>
    </button>
  );
};
