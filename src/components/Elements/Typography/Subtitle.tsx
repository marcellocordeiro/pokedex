export type SubtitleProps = {
  children?: React.ReactNode;
};

export const Subtitle = ({ children }: SubtitleProps) => (
  <div className="text-gray-900">{children}</div>
);
