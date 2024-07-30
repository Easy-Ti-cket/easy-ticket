import { useState } from "react";

export const useForm = () => {
  //사용자가 입력한 답
  const [answer, setAnswer] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAnswer((prev) => ({
      ...prev,
      [name]: value
    }));
  };
  return { handleChange, answer };
};
