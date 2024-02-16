import { Input } from "../../ui/input";
interface InputCompanyProps {
  placeholder: string;
  className: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export default function InputCompany({
  placeholder,
  className,
  type,
  value,
  onChange,
  ...field
}: InputCompanyProps) {
  return (
    <Input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`bg-transparent text-white rounded-2xl focus:outline-none 
      focus-visible:ring-0
      focus-visible:ring-offset-1
    placeholder:text-white py-6 ${className} `}
      {...field}
    />
  );
}
