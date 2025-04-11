import { ComponentType } from "react";
type props = {
  text: string;
  iconComponent?: ComponentType<{ color: string; size: string }>;
  className?: string;
  type?: "button" | "submit" | "reset";
  href?: string;
  target?: "_blank" | "_self";
  loading?: boolean;
};

export const PrimaryButton = ({
  text,
  iconComponent: Icon,
  className = "",
  type = "button",
  href,
  target = "_self",
  loading = false,
}: props) => {
  const baseStyle = `cursor-pointer flex justify-center items-center gap-[10px]
      h-[45px] bg-[#001849] rounded-[22.5px] text-white text-sm font-semibold
      transition-transform duration-300 transform hover:scale-[1.05]
      shadow-[0px_0px_0px_0px_rgba(0,0,0,0.2)] ${className}`;

  const content = (
    <>
      <span>{text}</span>
      {Icon && <Icon color="#fff" size="20" />}
    </>
  );
  if (href) {
    return (
      <a href={href} target={target} className={baseStyle}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} disabled={loading} className={baseStyle}>
      {loading ? (
        <div className="flex items-center justify-center gap-2">
          <svg className="w-5 h-5 animate-spin text-white" viewBox="0 0 24 24">
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="transparent"
              strokeWidth="4"
              fill="none"
            />
            <path
              d="M4 12a8 8 0 018-8"
              stroke="#fff"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
          <span>送信中...</span>
        </div>
      ) : (
        content
      )}
    </button>
  );
};
