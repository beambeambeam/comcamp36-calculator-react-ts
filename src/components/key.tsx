interface KeyProp {
  label: string;
  keyClass: string;
  onButtonClick: (label: string) => void;
}

const Key = ({ label, keyClass, onButtonClick }: KeyProp) => {
  const equalClass =
    "col-[span_2] bg-[#4ccdc6] text-[#1a261a] font-semibold hover:bg-[#4CCDC6] text-red-500";

  const baseClass =
    "bg-[#141414] flex cursor-pointer items-center justify-center p-4 rounded-[5px] hover:bg-[#4ccdc742]";

  const combinedClass = `${baseClass} ${keyClass ? equalClass : ""}`;

  return (
    <div className={combinedClass} onClick={() => onButtonClick(label)}>
      {label}
    </div>
  );
};

export default Key;
