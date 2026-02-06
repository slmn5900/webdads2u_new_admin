"use client";
import { useEffect, useState } from "react";
import MainLayout from "../../../common/MainLayout";
import { Pencil, Trash2, Plus } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import ConfirmDeleteModal from "../../../common/ConfirmDeleteModal";
import {
  getAllPositions,
  deletePosition,
  clearError,
  clearMessage,
} from "../../../store/slice/positionSlice";
import { successAlert, errorAlert } from "../../../utils/alertService";
import CreatePostions from "./CreatePostions";

export default function OpenPostionSection() {
  const dispatch = useDispatch();
  const { positions, loading, deletedMsg, deletedError } = useSelector(
    (state) => state.position,
  );

  const [showCreate, setShowCreate] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    dispatch(getAllPositions());
  }, []);

  useEffect(() => {
    if (deletedMsg) {
      successAlert(deletedMsg);
      dispatch(clearMessage());
      dispatch(getAllPositions());
      setShowDelete(false);
    }
    if (deletedError) {
      errorAlert(deletedError);
      dispatch(clearError());
    }
  }, [deletedMsg, deletedError]);

  const handleConfirmDelete = () => {
    dispatch(deletePosition({ id: deleteId }));
  };

  const handleCancelDelete = () => {
    setShowDelete(false);
    setDeleteId(null);
  };

  return (
    <>
      {showCreate ? (
        <CreatePostions onClose={() => setShowCreate(false)} />
      ) : (
        <MainLayout className="py-10 min-h-screen">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">Open Positions</h2>
            <button
              onClick={() => setShowCreate(true)}
              className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded"
            >
              <Plus size={16} />
              Add Position
            </button>
          </div>
          <div className="bg-white rounded-md shadow overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="p-4 text-left">Position</th>
                  <th className="p-4 text-left">jobDescription</th>
                  <th className="p-4">Type</th>
                  <th className="p-4">Mode</th>
                  <th className="p-4">Location</th>
                  <th className="p-4">Actions</th>
                </tr>
              </thead>

              <tbody>
                {positions?.map((job) => (
                  <tr key={job._id} className="border-t border-gray-300">
                    <td className="p-4">{job.position}</td>
                    <td className="p-4 line-clamp-1">{job.jobDescription}</td>
                    <td className="p-4 text-center">{job.jobType}</td>
                    <td className="p-4 text-center">{job.mode}</td>
                    <td className="p-4 text-center">{job.location}</td>
                    <td className="p-4 flex justify-center gap-4">
                      <Trash2
                        size={16}
                        className="cursor-pointer text-red-500"
                        onClick={() => {
                          setDeleteId(job._id);
                          setShowDelete(true);
                        }}
                      />
                    </td>
                  </tr>
                ))}

                {!positions?.length && (
                  <tr>
                    <td colSpan="5" className="text-center py-10 text-gray-400">
                      No positions found
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
        title="Delete this position?"
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
        loading={loading}
      />
    </>
  );
}
