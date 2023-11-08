import { useState, useCallback } from 'react';

//хук управления формой и валидации формы
function useForm() {

  const [inputValues, setInputValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState({});

  function handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setInputValues({ ...inputValues, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsFormValid(target.closest('form').checkValidity());
  }

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setInputValues(newValues);
      setErrors(newErrors);
      setIsFormValid(newIsValid);
    },
    [setInputValues, setErrors, setIsFormValid]
  );

  return { inputValues, handleChange, errors, isFormValid, resetForm };
}
export default useForm;