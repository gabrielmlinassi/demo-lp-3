import { forwardRef } from "react";
import cn from "classnames";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { XCircleIcon } from "@heroicons/react/solid";

type TextFieldProps = {
  label: string;
  placeholder: string;
  multiline?: boolean;
  type?: "text" | "email";
  required?: boolean;
  error?: FieldError;
  register: UseFormRegisterReturn;
};

const TextField = forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => {
  const {
    label,
    placeholder,
    multiline = false,
    type = "text",
    required,
    error,
    register,
  } = props;

  const baseClasses =
    "w-full rounded-full border-none px-4 py-3 bg-white placeholder-[#768390]";

  return (
    <>
      <div className={cn(multiline && "self-start mt-4")}>
        <label htmlFor={label} className="font-semibold text-[#5E6284]">
          {`${label}${required ? "*" : ""}:`}
        </label>
      </div>
      <div className="col-span-2">
        {multiline ? (
          <textarea
            className={cn(baseClasses, "rounded-3xl")}
            id={label}
            rows={5}
            ref={ref}
            placeholder={placeholder}
            {...register}
          />
        ) : (
          <div className="relative">
            <input
              className={baseClasses}
              id={label}
              type={type}
              placeholder={placeholder}
              ref={ref}
              {...register}
            />
            {error && (
              <div className="absolute right-4 top-1/2 -translate-y-1/2">
                <XCircleIcon className="w-6 h-6 text-red-500 bg-white rounded-full" />
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
});

TextField.displayName = "TextField";
export default TextField;
