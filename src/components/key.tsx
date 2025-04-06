interface KeyProp {
  label: string;
  keyClass: string;
  onButtonClick: (label: string) => void;
}

const Key = ({ label, keyClass, onButtonClick }: KeyProp) => {
  const equalClass = "col-[span_2]";

  const baseClass = "flex cursor-pointer items-center justify-center";

  const combinedClass = `${baseClass} ${keyClass ? equalClass : ""}`;

  return (
    <div
      className={combinedClass}
      onClick={() => onButtonClick("TODO: click what?")}
    >
      X{/* TODO: Fix this! */}
    </div>
  );
};

export default Key;
