export interface DateInputsProps {
  id: string;
  caption?: string;
  hasError?: boolean;
  value?: { day: number; month: number; year: number };
  onChange: (v: { day: number; month: number; year: number }) => void;
}
