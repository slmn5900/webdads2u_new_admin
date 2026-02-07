"use client";
import { useEffect } from "react";
import MainLayout from "../../../common/MainLayout";
import { useDispatch, useSelector } from "react-redux";
import { getAllProjectEnquiries } from "../../../store/slice/projectEnquirySlice";

const ProjectEnquirySection = () => {
  const dispatch = useDispatch();
  const { list, loading } = useSelector((state) => state.projectEnquiry);

  useEffect(() => {
    dispatch(getAllProjectEnquiries());
  }, [dispatch]);

  return (
    <MainLayout className="py-10 min-h-screen">
      <h2 className="text-2xl font-semibold mb-6">Project Enquiries</h2>
      <div className="bg-white rounded-md shadow overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-4">Name</th>
              <th className="p-4">Email</th>
              <th className="p-4">Phone</th>
              <th className="p-4">Project Description</th>
              <th className="p-4">Date</th>
            </tr>
          </thead>

          <tbody>
            {list?.map((item) => (
              <tr
                key={item._id}
                className="border-t border-gray-300 text-center"
              >
                <td className="p-3">{item.name}</td>
                <td className="p-3">{item.email}</td>
                <td className="p-3">{item.phone}</td>
                <td className="p-3">{item.projectDescription}</td>
                <td className="p-3">
                  {new Date(item.createdAt).toLocaleDateString("en-IN")}
                </td>
              </tr>
            ))}
            {!list?.length && !loading && (
              <tr>
                <td colSpan="6" className="py-10 text-center text-gray-400">
                  No enquiries found
                </td>
              </tr>
            )}
          </tbody>
        </table>
        {loading && (
          <div className="py-6 text-center text-gray-500">Loading...</div>
        )}
      </div>
    </MainLayout>
  );
};

export default ProjectEnquirySection;
