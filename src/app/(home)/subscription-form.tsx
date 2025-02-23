'use client';

import { Button } from '@/components/button';
import { InputField, InputIcon, InputRoot } from '@/components/input';
import { subscribeToEvent } from '@/http/api';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowRight, LoaderCircle, Mail, User } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { z } from 'zod';

const subscriptionSchema = z.object({
  name: z.string().min(2, 'Digite seu nome completo'),
  email: z.string().email('Digite um e-mail válido'),
});

type SubscriptionSchema = z.infer<typeof subscriptionSchema>;

export function SubscriptionForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SubscriptionSchema>({
    resolver: zodResolver(subscriptionSchema),
  });

  async function onSubscribe({ name, email }: SubscriptionSchema) {
    const referrer = searchParams.get('referrer');

    setIsSubmitting(true);

    const { subscriberId } = await subscribeToEvent({
      name,
      email,
      referrer,
    });

    setTimeout(() => {
      setIsSubmitting(false);
      toast.success('Inscrição realizada com sucesso!', {
        position: 'top-center',
        duration: 3000,
        style: {
          background: 'var(--color-gray-800)',
          color: 'var(--color-gray-200)',
        },
      });
      reset();
      router.push(`/invite/${subscriberId}`);
    }, 1000);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubscribe)}
      className="w-full bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6 md:max-w-[440px]"
    >
      <h2 className="font-heading font-semibold text-gray-200 text-xl">
        Inscrição
      </h2>

      <div className="space-y-3">
        <div className="space-y-2">
          <InputRoot error={!!errors?.name}>
            <InputIcon>
              <User className="size-6" />
            </InputIcon>
            <InputField
              type="text"
              placeholder="Nome completo"
              {...register('name')}
            />
          </InputRoot>

          {errors?.name && (
            <p className="text-danger font-semibold text-xs">
              {errors.name.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <InputRoot error={!!errors?.email}>
            <InputIcon>
              <Mail className="size-6" />
            </InputIcon>
            <InputField
              type="text"
              placeholder="E-mail"
              {...register('email')}
            />
          </InputRoot>

          {errors?.email && (
            <p className="text-danger font-semibold text-xs">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? (
          <span className="flex items-center gap-4 w-full justify-center">
            <LoaderCircle className="animate-spin size-6" />
            Confirmando inscrição...
          </span>
        ) : (
          <>
            Confirmar
            <ArrowRight className="size-6" />
          </>
        )}
      </Button>
    </form>
  );
}
