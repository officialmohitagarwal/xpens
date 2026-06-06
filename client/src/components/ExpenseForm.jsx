import { useForm } from "react-hook-form";

function ExpenseForm({
  onSubmit,
  defaultValues = {},
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4"
    >
      {/* TITLE + AMOUNT */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block mb-1.5 text-sm font-medium">
            Expense Title
          </label>

          <input
            type="text"
            placeholder="Expense title"
            className="
              w-full
              bg-white/5
              border border-white/10
              rounded-xl
              px-3 py-2.5
              text-sm text-white
              outline-none
              focus:border-emerald-500
            "
            {...register("title", {
              required:
                "Title is required",
            })}
          />

          {errors.title && (
            <p className="text-red-400 text-xs mt-1">
              {errors.title.message}
            </p>
          )}
        </div>

        <div>
          <label className="block mb-1.5 text-sm font-medium">
            Amount
          </label>

          <input
            type="number"
            placeholder="Amount"
            className="
              w-full
              bg-white/5
              border border-white/10
              rounded-xl
              px-3 py-2.5
              text-sm text-white
              outline-none
              focus:border-emerald-500
            "
            {...register("amount", {
              required:
                "Amount is required",
              min: {
                value: 1,
                message:
                  "Amount must be greater than 0",
              },
            })}
          />

          {errors.amount && (
            <p className="text-red-400 text-xs mt-1">
              {errors.amount.message}
            </p>
          )}
        </div>
      </div>

      
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block mb-1.5 text-sm font-medium">
            Category
          </label>

          <select
            className="
              w-full
              bg-white/5
              border border-white/10
              rounded-xl
              px-3 py-2.5
              text-sm text-white
              outline-none
              focus:border-emerald-500
            "
            {...register("category", {
              required:
                "Category is required",
            })}
          >
            <option value="">
              Select Category
            </option>

            <option value="Food">
              Food
            </option>

            <option value="Travel">
              Travel
            </option>

            <option value="Bills">
              Bills
            </option>

            <option value="Entertainment">
              Entertainment
            </option>

            <option value="Shopping">
              Shopping
            </option>
          </select>

          {errors.category && (
            <p className="text-red-400 text-xs mt-1">
              {errors.category.message}
            </p>
          )}
        </div>

        <div>
          <label className="block mb-1.5 text-sm font-medium">
            Payment Mode
          </label>

          <select
            className="
              w-full
              bg-white/5
              border border-white/10
              rounded-xl
              px-3 py-2.5
              text-sm text-white
              outline-none
              focus:border-emerald-500
            "
            {...register(
              "paymentMode",
              {
                required:
                  "Payment mode is required",
              }
            )}
          >
            <option value="">
              Select Payment Mode
            </option>

            <option value="Cash">
              Cash
            </option>

            <option value="UPI">
              UPI
            </option>

            <option value="Debit Card">
              Debit Card
            </option>

            <option value="Credit Card">
              Credit Card
            </option>

            <option value="Net Banking">
              Net Banking
            </option>

            <option value="Wallet">
              Wallet
            </option>
          </select>

          {errors.paymentMode && (
            <p className="text-red-400 text-xs mt-1">
              {
                errors.paymentMode
                  .message
              }
            </p>
          )}
        </div>
      </div>

      
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block mb-1.5 text-sm font-medium">
            Split Expense
          </label>

          <select
            className="
              w-full
              bg-white/5
              border border-white/10
              rounded-xl
              px-3 py-2.5
              text-sm text-white
              outline-none
              focus:border-emerald-500
            "
            {...register("splitType")}
          >
            <option value="Self">
              Self (100%)
            </option>

            <option value="Split Equally">
              Split Equally
            </option>

            <option value="Partially Paid">
              Partially Paid
            </option>

            <option value="Borrowed">
              Borrowed
            </option>

            <option value="Lent">
              Lent
            </option>
          </select>
        </div>

        <div>
          <label className="block mb-1.5 text-sm font-medium">
            Date
          </label>

          <input
            type="date"
            className="
              w-full
              bg-white/5
              border border-white/10
              rounded-xl
              px-3 py-2.5
              text-sm text-white
              outline-none
              focus:border-emerald-500
            "
            {...register("date", {
              required:
                "Date is required",
            })}
          />

          {errors.date && (
            <p className="text-red-400 text-xs mt-1">
              {errors.date.message}
            </p>
          )}
        </div>
      </div>

      {/* DESCRIPTION */}
      <div>
        <label className="block mb-1.5 text-sm font-medium">
          Description
        </label>

        <textarea
          rows="2"
          placeholder="Optional notes..."
          className="
            w-full
            bg-white/5
            border border-white/10
            rounded-xl
            px-3 py-2.5
            text-sm text-white
            outline-none
            resize-none
            focus:border-emerald-500
          "
          {...register(
            "description"
          )}
        />
      </div>

      {/* SUBMIT */}
      <button
        type="submit"
        className="
          w-full
          bg-emerald-500
          hover:bg-emerald-400
          text-black
          font-medium
          text-sm
          py-2.5
          rounded-xl
          transition
        "
      >
        Save Expense
      </button>
    </form>
  );
}

export default ExpenseForm;
