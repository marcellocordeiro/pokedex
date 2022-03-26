export type TextProps = {
  children?: React.ReactNode;
};

export const Text = ({ children }: TextProps) => (
  <div className="text-gray-900">{children}</div>
);
