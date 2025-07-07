import React, { useCallback } from "react";
import { X } from "lucide-react";
import { toast } from "react-toastify";
import type { IStaffForm } from "../pages/staff/types";
import { initialValues } from "../pages/staff/constants";
import { normalizeDate } from "../pages/staff/utils";

interface StaffProps {
  isModalOpen: boolean;
  formValues: IStaffForm;
  setFormValues: (values: IStaffForm) => void;
  setIsModalOpen: (value: boolean) => void;
  setRefresh: (value: boolean) => void;
}

export const AddStaffModal = ({
  formValues,
  setFormValues,
  isModalOpen,
  setIsModalOpen,
  setRefresh,
}: StaffProps) => {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setRefresh(true);
      const res = await fetch(
        `https://educationproject-production-1a26.up.railway.app/api/Staff/${
          formValues?.id ? `update/${formValues?.id}` : "create"
        }`,
        {
          method: formValues?.id ? "PUT" : "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formValues,
            birthDate: new Date(formValues?.birthDate).toISOString(),
            userId: 1,
          }),
        }
      );
      if (res) {
        toast.success(
          formValues?.id
            ? "Muvaffaqiyatli o'zgartirildi"
            : "Muvaffaqiyatli qo'shildi"
        );
        setFormValues(initialValues);
        setIsModalOpen(false);
        console.log(formValues);
      } else {
        toast.error("Xatolik yuz berdi");
      }
      setRefresh(false);
    } catch (err) {
      toast.error("Xatolik yuz berdi");
      console.log(err);
    }
  };

  const handleChangeElement = useCallback(
    (
      e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
      name: keyof typeof formValues
    ) => {
      setFormValues({
        ...formValues,
        [name]:
          name === "gender" || name === "salary"
            ? +e.target.value
            : e.target.value,
      });
    },
    [formValues, setFormValues]
  );

  return (
    <>
      {isModalOpen && (
        <div
          onClick={() => setIsModalOpen(false)}
          className="fixed inset-0 bg-[#1118] flex items-center justify-end z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white p-6 w-full max-w-md h-full overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">
                {formValues?.id ? "Edit New Staff" : "Add New Staff"}
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1 hover:bg-gray-100 rounded-full"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Full name
                </label>
                <input
                  value={formValues.fullName}
                  onChange={(e) => handleChangeElement(e, "fullName")}
                  type="text"
                  placeholder="Elbek Toshmatov"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Role</label>
                <select
                  value={formValues.position}
                  onChange={(e) => handleChangeElement(e, "position")}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="servant">Farrosh</option>
                  <option value="teacher">O'qituvchi</option>
                  <option value="admin">Admin</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Phone</label>
                <input
                  onChange={(e) => handleChangeElement(e, "phoneNumber")}
                  value={formValues.phoneNumber}
                  type="tel"
                  placeholder="+998 94 332 00 16"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Address
                </label>
                <input
                  onChange={(e) => handleChangeElement(e, "address")}
                  value={formValues.address}
                  type="text"
                  placeholder="123 Main St"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Date of birth
                </label>
                <input
                  onChange={(e) => handleChangeElement(e, "birthDate")}
                  value={normalizeDate(formValues?.birthDate)}
                  type="date"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Gender</label>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input
                      onChange={(e) => handleChangeElement(e, "gender")}
                      type="radio"
                      name="gender"
                      value={0}
                      className="mr-2"
                      checked={formValues.gender === 0}
                    />
                    Male
                  </label>
                  <label className="flex items-center">
                    <input
                      onChange={(e) => handleChangeElement(e, "gender")}
                      type="radio"
                      name="gender"
                      value={1}
                      className="mr-2"
                      checked={formValues.gender !== 0}
                    />
                    Female
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Salary</label>
                <input
                  onChange={(e) => handleChangeElement(e, "salary")}
                  value={formValues.salary || ""}
                  type="number"
                  placeholder="50000"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="flex justify-end gap-3 mt-6">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
