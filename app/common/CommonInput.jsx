const InputField = ({
  type = "text",
  name,
  placeholder,
  value,
  onChange,
  required = false,
  showLabel = true,
}) => {
  return (
    <div className="relative">
      {showLabel && name && (
        <label className="block mb-1 text-white/80 font-light capitalize">
          {name.replace(/([A-Z])/g, " $1")}
        </label>
      )}

      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="
          w-full bg-transparent
          border-b border-white/40
          py-1 text-white
          placeholder:text-white/60
          outline-none
          focus:border-white
          transition
        "
      />
    </div>
  );
};

export default InputField;
