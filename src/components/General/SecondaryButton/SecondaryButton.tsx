import { Button, ButtonProps } from 'antd';

export type ISecondaryButton = {
  className?: string;
  children: React.ReactNode;
} & ButtonProps;

export default function SecondaryButton({
  className,
  children,
  ...rest
}: ISecondaryButton) {
  return (
    <Button
      type="primary"
      size="large"
      className={cls(
        'bg-colorFillTertiary !hover:bg-colorFillSecondary',
        className,
      )}
      {...rest}
    >
      {children}
    </Button>
  );
}
