import { useCallback, useEffect, useState } from "react";

function useForm({
  initialValues,
  onSubmit,
  validate,
}: {
  initialValues: any;
  onSubmit: (val: any) => void;
  validate: (val: any) => any;
}) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (event: React.SyntheticEvent) => {
    setIsLoading(true);
    event.preventDefault();
    setErrors(validate(values));
  };

  const reset = useCallback(() => setValues(initialValues), [initialValues]);

  useEffect(() => {
    if (isLoading) {
      if (Object.keys(errors).length === 0) {
        onSubmit(values);
      }
      setIsLoading(false);
    }
  }, [errors]);

  return {
    values,
    errors,
    isLoading,
    handleChange,
    handleSubmit,
    reset,
  };
}

export default useForm;
