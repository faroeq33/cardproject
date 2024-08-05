type Props = {
  name: string;
};

function CategoryText({ name }: Props) {
  return (
    <p
      className="m-0 text-xs tracking-widest text-left uppercase text-neutral-dark-grayish-blue"
      style={{
        fontWeight: "500",
        fontSizeAdjust: "12px",
        letterSpacing: "5px",
      }}
    >
      {name}
    </p>
  );
}

export default CategoryText;
