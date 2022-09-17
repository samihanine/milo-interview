interface ButtonInterface {
  children: JSX.Element | string;
  variant?: string;
  [key: string]: any;
}

export default function Button(props: ButtonInterface) {
  const color = props.variant === 'secondary' ? 'bg-secondary' : 'bg-primary';

  return (
    <button
      {...props}
      className={`${color} w-fit inline-flex items-center justify-center px-4 py-2 font-semibold text-white rounded-full shadow-sm ${props.className}`}
    >
      {props.children}
    </button>
  );
}
