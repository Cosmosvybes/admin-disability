import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
export default function useCreateController() {
  const navigate = useNavigate();
  const [image, setImage] = useState("");
  const [imageFile_s, setImageFile] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [hyperLink, setHyperlink] = useState("");
  const [loading, setLoading] = useState(false);
  const [toggle, setToggle] = useState(false);
  //
  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleFileUpload = async (e: any) => {
    const imageFile = e.target.files[0];
    const imageUrl = URL.createObjectURL(imageFile);
    setImage(imageUrl);
    setImageFile(imageFile);
    return URL.revokeObjectURL(imageFile);
  };

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("postImage", imageFile_s);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("hyperLink", hyperLink);
    setLoading(true);
    const token = localStorage.getItem("token");
    const fetchResult = await fetch(
      "https://disability-and-motherhood-server.onrender.com/api/field-research-updates/new/post",
      {
        method: "POST",
        body: formData,
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    if (fetchResult.status === 401 || fetchResult.status === 403) {
      location.replace("/");
      toast.error("session expired", { theme: "dark" });
    }
    const response = await fetchResult.json();
    setLoading(false);
    setToggle(false);
    toast.success(response.response, { theme: "colored" });
  };

  const handleSignout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return {
    handleFileUpload,
    handleFormSubmit,
    image,
    setTitle,
    description,
    hyperLink,
    title,
    setHyperlink,
    setDescription,
    loading,
    toggle,
    handleToggle,
    handleSignout,
  };
}
