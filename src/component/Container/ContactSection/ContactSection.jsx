"use client";
import { useEffect } from "react";
import MainLayout from "../../../common/MainLayout";
import { useDispatch, useSelector } from "react-redux";
import { getAllContacts } from "../../../store/slice/contactSlice";

const ContactSection = () => {
  const dispatch = useDispatch();
  const { list, loading } = useSelector((state) => state.contact);

  useEffect(() => {
    dispatch(getAllContacts());
  }, [dispatch]);

  return (
    <MainLayout className="py-10 min-h-screen">
      <h2 className="text-2xl font-semibold mb-6">Contact Messages</h2>
      <div className="bg-white rounded-md shadow overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-4">Name</th>
              <th className="p-4">Email</th>
              <th className="p-4">Phone</th>
              <th className="p-4">Services</th>
              <th className="p-4">Message</th>
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

                <td className="p-3">
                  {item.services?.length ? item.services.join(", ") : "-"}
                </td>
                <td className="p-3 ">{item.message}</td>
                <td className="p-3">
                  {new Date(item.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))}
            {!list?.length && !loading && (
              <tr>
                <td colSpan="6" className="py-10 text-center text-gray-400">
                  No contacts found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </MainLayout>
  );
};

export default ContactSection;
