"use client";
import MainLayout from "../../../common/MainLayout";
import { useDispatch, useSelector } from "react-redux";
import { getAllCareers } from "../../../store/slice/positionSlice";
import { useEffect } from "react";

const CareerApplySection = () => {
  const dispatch = useDispatch();
  const { careers, loading } = useSelector((state) => state.position);

  useEffect(() => {
    dispatch(getAllCareers());
  }, [dispatch]);

  return (
    <MainLayout className="py-10 min-h-screen">
      <h2 className="text-2xl font-semibold mb-6">Career Applications</h2>

      <div className="bg-white rounded-md shadow overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-4">Name</th>
              <th className="p-4">Email</th>
              <th className="p-4">Phone</th>
              <th className="p-4">Job Title</th>
              <th className="p-4">Gender</th>
              <th className="p-4">City</th>
              <th className="p-4">DOB</th>
              <th className="p-4">Address</th>
              <th className="p-4">Resume</th>
            </tr>
          </thead>

          <tbody>
            {careers?.map((item) => (
              <tr
                key={item._id}
                className="border-t border-gray-300 text-center"
              >
                <td className="p-3">{item.name}</td>
                <td className="p-3">{item.email}</td>
                <td className="p-3">{item.phone}</td>
                <td className="p-3">{item.jobTitle}</td>
                <td className="p-3">{item.gender}</td>
                <td className="p-3">{item.city}</td>
                <td className="p-3">
                  {new Date(item.dob).toLocaleDateString()}
                </td>
                <td className="p-3">{item.address}</td>
                <td className="p-3">
                  <a
                    href={`${import.meta.env.VITE_BASE_IMAGE_URL}${item.image}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    View
                  </a>
                </td>
              </tr>
            ))}

            {!careers?.length && !loading && (
              <tr>
                <td colSpan="9" className="py-10 text-center text-gray-400">
                  No applications found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </MainLayout>
  );
};

export default CareerApplySection;
