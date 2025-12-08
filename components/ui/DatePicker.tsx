import { useEffect, useState } from "react";
import { CalendarIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface DatePickerProps {
  value?: string;
  onChange?: (date: string) => void;
  placeholder?: string;
  id?: string;
  "aria-invalid"?: boolean;
}

const formatDate = (date?: Date) => {
  if (!date) return "";
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "2-digit",
    year: "numeric",
  });
};

const isValidDate = (date: Date) => {
  return date instanceof Date && !isNaN(date.getTime());
};

export function DatePicker({
  value = "",
  onChange,
  placeholder = "Select date",
  id,
  "aria-invalid": ariaInvalid,
}: DatePickerProps) {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<Date | undefined>(
    value ? new Date(value) : undefined
  );
  const [month, setMonth] = useState<Date | undefined>(date);
  const [inputValue, setInputValue] = useState(formatDate(date));
  const futureDate = new Date();
  futureDate.setFullYear(futureDate.getFullYear() + 1);

  useEffect(() => {
    const newDate = value ? new Date(value) : undefined;
    setDate(newDate);
    setMonth(newDate);
    setInputValue(formatDate(newDate));
  }, [value]);

  return (
    <div className="relative">
      <Input
        id={id}
        value={inputValue}
        placeholder={placeholder}
        className="pr-10"
        aria-invalid={ariaInvalid}
        onChange={(e) => {
          const newDate = new Date(e.target.value);
          setInputValue(e.target.value);
          if (isValidDate(newDate)) {
            setDate(newDate);
            setMonth(newDate);
            onChange?.(e.target.value);
          }
        }}
        onKeyDown={(e) => {
          if (e.key === "ArrowDown") {
            e.preventDefault();
            setOpen(true);
          }
        }}
      />
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            type="button"
            variant="ghost"
            className="absolute top-1/2 right-2 size-6 -translate-y-1/2"
          >
            <CalendarIcon className="size-3.5" />
            <span className="sr-only">Select date</span>
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="w-auto overflow-hidden p-0"
          align="end"
          alignOffset={-8}
          sideOffset={10}
        >
          <Calendar
            mode="single"
            selected={date}
            captionLayout="dropdown"
            month={month}
            disabled={{ before: new Date() }}
            endMonth={futureDate}
            onMonthChange={setMonth}
            onSelect={(selectedDate) => {
              setDate(selectedDate);
              const formatted = formatDate(selectedDate);
              setInputValue(formatted);
              onChange?.(formatted);
              setOpen(false);
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
