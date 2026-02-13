"use client";

import { useEffect, useState } from "react";
import MainLayout from "../../../common/MainLayout";
import { Trash2, Plus } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import ConfirmDeleteModal from "../../../common/ConfirmDeleteModal";
import {
  getAllOurWork,
  deleteOurWork,
  clearError,
  clearMessage,
} from "../../../store/slice/ourWorkSlice";
import { successAlert, errorAlert } from "../../../utils/alertService";
import CreateOurWork from "./CreateOurWork";
import Image from "../../../common/Image";

export default function OurWorkSection() {
  const dispatch = useDispatch();
  const { works, loading, deletedMsg, deletedError } = useSelector(
    (state) => state.ourWork,
  );

  const [showCreate, setShowCreate] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    dispatch(getAllOurWork());
  }, []);

  useEffect(() => {
    if (deletedMsg) {
      successAlert(deletedMsg);
      dispatch(clearMessage());
      dispatch(getAllOurWork());
      setShowDelete(false);
    }

    if (deletedError) {
      errorAlert(deletedError);
      dispatch(clearError());
    }
  }, [deletedMsg, deletedError]);

  const handleConfirmDelete = () => {
    dispatch(deleteOurWork({ id: deleteId }));
  };

  return (
    <>
      {showCreate ? (
        <CreateOurWork onClose={() => setShowCreate(false)} />
      ) : (
        <MainLayout className="py-10 min-h-screen">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">Our Work</h2>
            <button
              onClick={() => setShowCreate(true)}
              className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded"
            >
              <Plus size={16} />
              Add Work
            </button>
          </div>
          <div className="bg-white rounded-md shadow overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="p-4 text-left">Title</th>
                  <th className="p-4 text-left">Category</th>
                  <th className="p-4 text-left">Services</th>
                  <th className="p-4 text-left">Image</th>
                  <th className="p-4 text-center">Created</th>
                  <th className="p-4 text-center">Actions</th>
                </tr>
              </thead>

              <tbody>
                {works?.map((item) => (
                  <tr key={item._id} className="border-t border-gray-300">
                    <td className="p-4">{item.title}</td>

                    <td className="p-4">{item.category}</td>

                    <td className="p-4">
                      {item.services
                        ?.join(", ")
                        ?.replace("[", "")
                        ?.replace("]", "")}
                    </td>
                    <td className="p-4">
                      <Image
                        src={item.ourWorkImage}
                        className="h-10 w-10 object-cover rounded"
                      />
                    </td>
                    <td className="p-4 text-center">
                      {new Date(item.createdAt).toLocaleDateString()}
                    </td>
                    <td className="p-4 flex justify-center">
                      <Trash2
                        size={16}
                        className="cursor-pointer text-red-500"
                        onClick={() => {
                          setDeleteId(item._id);
                          setShowDelete(true);
                        }}
                      />
                    </td>
                  </tr>
                ))}
                {!works?.length && (
                  <tr>
                    <td colSpan="6" className="text-center py-10 text-gray-400">
                      No work found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </MainLayout>
      )}

      <ConfirmDeleteModal
        isOpen={showDelete}
        title="Delete this work?"
        onConfirm={handleConfirmDelete}
        onCancel={() => setShowDelete(false)}
        loading={loading}
      />
    </>
  );
}
