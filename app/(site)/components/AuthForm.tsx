'use client';
import { useCallback, useState } from 'react';
import { FieldValue, useForm } from 'react-hook-form';

type Variant = 'LOGIN' | 'REGISTER';

export default function AuthForm() {
  const [variant, setVariant] = useState<Variant>('LOGIN');
  const [isLoading, setIsLoading] = useState(false);

  const toggleVariant = useCallback(() => {
    if (variant === 'LOGIN') {
      setVariant('REGISTER');
    } else {
      setVariant('LOGIN');
    }
  }, [variant]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValue>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  return <div></div>;
}
