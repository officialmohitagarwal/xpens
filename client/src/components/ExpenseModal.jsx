import { X } from "lucide-react";

function ExpenseModal({
  isOpen,
  onClose,
  title,
  children,
}) {
  if (!isOpen) return null;

  return (
    <div
      className="
        fixed
        inset-0
        z-50
        bg-black/60
        backdrop-blur-sm
        flex
        items-center
        justify-center
        p-4
      "
    >
      <div
        className="
          bg-[#010824]
          border
          border-white/10
          rounded-3xl
          w-full
          max-w-lg
          max-h-[90vh]
          overflow-y-auto
        "
      >
        <div className="flex justify-between items-center p-6 border-b border-white/10">
          <h2 className="text-xl font-bold">
            {title}
          </h2>

          <button
            onClick={onClose}
            className="hover:bg-white/10 p-2 rounded-xl"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
}

export default ExpenseModal;