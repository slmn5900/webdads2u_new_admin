"use client";
import { useEffect, useState } from "react";
import MainLayout from "../../../common/MainLayout";
import { Plus, Trash2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import ConfirmDeleteModal from "../../../common/ConfirmDeleteModal";
import {
  getAllSocialMedia,
  deleteSocialMedia,
  clearSocialMessage,
} from "../../../store/slice/socialMediaSlice";
import { successAlert } from "../../../utils/alertService";
import CreateSocialMedia from "./CreateSocialMedia";
import Image from "../../../common/Image";

export default function SocialMediaSection() {
  const dispatch = useDispatch();
  const { list, deletedMsg, loading } = useSelector((s) => s.socialMedia);
  console.log(list);

  const [showCreate, setShowCreate] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    dispatch(getAllSocialMedia());
  }, []);

  useEffect(() => {
    if (deletedMsg) {
      successAlert(deletedMsg);
      dispatch(clearSocialMessage());
      dispatch(getAllSocialMedia());
      setShowDelete(false);
    }
  }, [deletedMsg]);

  return showCreate ? (
    <CreateSocialMedia onClose={() => setShowCreate(false)} />
  ) : (
    <MainLayout className="py-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Social Updates</h2>
        <button
          onClick={() => setShowCreate(true)}
          className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-md"
        >
          <Plus size={16} />
          Add Social
        </button>
      </div>

      {list?.map((item) => (
        <div
          key={item._id}
          className="flex items-center justify-between p-4 border border-gray-300 rounded mt-4"
        >
          <div className="flex items-center gap-4">
            <Image
              src={item.image}
              alt={item.title}
              className="w-12 h-12 object-cover rounded"
            />
            <span className="font-medium">{item.title}</span>
          </div>
          <Trash2
            className="text-red-500 cursor-pointer"
            onClick={() => {
              setDeleteId(item._id);
              setShowDelete(true);
            }}
          />
        </div>
      ))}

      <ConfirmDeleteModal
        isOpen={showDelete}
        title="Delete this social media?"
        loading={loading}
        onCancel={() => setShowDelete(false)}
        onConfirm={() => dispatch(deleteSocialMedia({ id: deleteId }))}
      />
    </MainLayout>
  );
}
