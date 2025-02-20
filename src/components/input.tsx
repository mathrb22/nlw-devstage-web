interface InputRootProps extends React.ComponentProps<'div'> {
  error?: boolean;
}

export function InputRoot({ error = false, ...props }: InputRootProps) {
  return (
    <div
      {...props}
      data-error={error}
      className="group px-4 h-12 flex items-center gap-2 border bg-gray-800 border-gray-600 rounded-xl not-read-only:focus-within:outline-none not-read-only:focus-within:border-1 focus-within:border-gray-100 data-[error=true]:border-danger text-gray-100"
    />
  );
}

interface InputIconProps extends React.ComponentProps<'span'> {}

export function InputIcon(props: InputIconProps) {
  return (
    <span
      {...props}
      className="text-gray-400 group-focus-within:text-gray-100 group-[&:not(:has(input:placeholder-shown))]:text-gray-100 group-data-[error=true]:text-danger"
    />
  );
}

interface InputFieldProps extends React.ComponentProps<'input'> {}

export function InputField(props: InputFieldProps) {
  return <input className="flex-1 outline-0" {...props} />;
}
