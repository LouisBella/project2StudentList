type FormCardProps = {
  label: string;
  error?: string;
  hint?: string;
  children: React.ReactNode;
};

const FormCard = ({ label, error, hint, children }: FormCardProps) => {
  return (
    <div className="flex flex-col gap-2 mb-2">
      <label className="text-medium text-gray-900 font-semibold">{label}</label>
      {children}
      {hint && !error && <p className="text-xs text-slate-300">{hint}</p>}
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
};

export default FormCard;