import { type ComponentProps, ReactNode } from 'react';

interface ButtonProps extends ComponentProps<'button'> {}

export function Button(props: ButtonProps) {
  return (
    <button
      className="flex justify-between items-center bg-gray-500 not-disabled:text-blue text-gray-300 px-5 h-12 rounded-xl font-semibold w-full cursor-pointer transition-all duration-200 not-disabled:hover:bg-blue not-disabled:hover:text-gray-900 active:brightness-110"
      {...props}
    />
  );
}
