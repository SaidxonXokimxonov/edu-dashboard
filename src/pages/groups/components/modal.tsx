import { X } from "lucide-react";

interface GroupProps {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
}

export const GroupModal = ({ isModalOpen, setIsModalOpen }: GroupProps) => {
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
                Yangi guruh qo’shish
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1 hover:bg-gray-100 rounded-full"
              >
                <X size={20} />
              </button>
            </div>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Course Name
                </label>
                <input
                  //   value={formValues.fullName}
                  //   onChange={(e) => handleChangeElement(e, "fullName")}
                  type="text"
                  placeholder="Python"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Choose a teacher</label>
                <select
                  //   value={formValues.position}
                  //   onChange={(e) => handleChangeElement(e, "position")}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="servant">Python</option>
                  <option value="teacher">Frontend</option>
                  <option value="admin">Foundation</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Days</label>
                <select
                  //   value={formValues.position}
                  //   onChange={(e) => handleChangeElement(e, "position")}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="servant">juft va toq kunlar</option>
                  <option value="teacher">juft kunlar</option>
                  <option value="admin">toq kunlar</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Choose a room</label>
                <select
                  //   value={formValues.position}
                  //   onChange={(e) => handleChangeElement(e, "position")}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="servant">Python</option>
                  <option value="teacher">Yandex</option>
                  <option value="admin">Apple</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Class start time
                </label>
                <input
                  type="text"
                  placeholder="Python"
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
