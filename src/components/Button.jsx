function Button({ label, iconURL, backgroundColor, borderColor, textColor, fullWidth }) {
  return (
    // complex interpolation -> nested templating
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full 
      ${backgroundColor ? '${backgroundColor} ${borderColor} ${textColor}' :
      'bg-coral-red text-white border-coral-red'} ${fullWidth && 'w-full'}`}
    >
      {label}
      {iconURL && (
        <img
          className="ml-2 rounded-full w-5 h-5"
          src={iconURL}
          alt="arrow right icon"
        />
      )}
    </button>
  );
}
export default Button;