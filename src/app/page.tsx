import { Button } from '@/components/button';
import { InputField, InputIcon, InputRoot } from '@/components/input';
import { ArrowRight, Mail, Radio, User } from 'lucide-react';
import Image from 'next/image';
import logo from '../assets/logo.svg';

export default function Home() {
  return (
    <main className="max-w-[1240px] mx-auto px-5 py-8 md:py-0">
      <div className="min-h-dvh flex justify-center gap-16 flex-col">
        <div className="flex flex-col gap-8 items-center md:items-start">
          <Image src={logo} alt="devstage" width={108.5} height={30} />

          <h1 className="text-4xl md:text-7xl text-center md:text-left leading-none font-heading font-medium flex flex-col items-center md:items-start gap-2">
            <span>CodeCraft</span>
            Summit 2025
          </h1>
        </div>
        <div className="flex gap-5 items-stretch flex-col min-[769px]:flex-row">
          <div className="w-full md: bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="font-heading font-semibold text-gray-200 text-xl">
                Sobre o evento
              </h2>
              <p className="text-purple font-semibold text-xs flex items-center gap-2">
                <Radio className="size-5" />
                AO VIVO
              </p>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              Um evento feito por e para pessoas desenvolvedoras apaixonadas por
              criar soluções inovadoras e compartilhar conhecimento. Vamos
              mergulhar nas tendências mais recentes em desenvolvimento de
              software, arquitetura de sistemas e tecnologias emergentes, com
              palestras, workshops e hackathons.
              <br />
              <br />
              Dias 15 a 17 de março | Das 18h às 21h | Online & Gratuito
            </p>
          </div>
          <form className="bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6 w-full lg:max-w-[440px]">
            <h2 className="font-heading font-semibold text-gray-200 text-xl">
              Inscrição
            </h2>

            <div className="space-y-3">
              <InputRoot>
                <InputIcon>
                  <User />
                </InputIcon>
                <InputField type="text" placeholder="Nome completo" />
              </InputRoot>
              <InputRoot>
                <InputIcon>
                  <Mail />
                </InputIcon>
                <InputField type="email" placeholder="E-mail" />
              </InputRoot>

              <Button type="submit">
                Confirmar
                <ArrowRight />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
