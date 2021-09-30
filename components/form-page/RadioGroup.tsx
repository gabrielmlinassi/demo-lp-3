import { FC } from "react";
import { RadioGroup as $RadioGroup } from "@headlessui/react";

type RadioGroupProps = {
  value: string;
  onChange: (e: any) => void;
};

export const RadioGroup: FC<RadioGroupProps> = ({
  value,
  onChange,
  children,
}) => {
  return (
    <$RadioGroup value={value} onChange={onChange}>
      <$RadioGroup.Label className="sr-only">
        Talent Solutions form
      </$RadioGroup.Label>
      <div className="space-y-4">{children}</div>
    </$RadioGroup>
  );
};
