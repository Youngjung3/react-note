import { useState } from "react";

export function useInput(initVal, submitAcition) {
  const [value, setValue] = useState(initVal);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = () =>{
      setValue('');
      submitAcition(value);
}
  return [value,handleChange,handleSubmit]
}
