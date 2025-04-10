interface ButtonTypes {
  lableText: string;
  onClick: (e: React.MouseEvent) => void;
  isDisabled: boolean;
}

const Button = ({ lableText, onClick, isDisabled }: ButtonTypes) => {
  return (
    <>
      <label htmlFor="button">{lableText}</label>
      <button id="button" disabled={isDisabled} onClick={onClick}>
        Hello
      </button>
    </>
  );
};

export default Button;
