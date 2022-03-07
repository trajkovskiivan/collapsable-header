import {useEffect, useState} from 'react';

const useForm = (form: object, validate: Function, callback: Function) => {
  const [values, setValues] = useState(form);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      console.log({values});
      callback();
    }
  }, [errors]);

  const handleChange = (value: any, key: string) => {
    console.log({value});
    console.log({key});
    setValues({...values, [key]: value});
  };

  const handleSubmit = () => {
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  const resetErrors = () => setErrors({});
  return {
    values,
    handleChange,
    handleSubmit,
    errors,
    setValues,
    resetErrors,
  };
};

export default useForm;
