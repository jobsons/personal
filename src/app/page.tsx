import Link from "next/link";
import Image from "next/image";
import PhoneImage from "../components/PhoneImage";

export default function Home() {
  return (
    <>
    <section className="min-h-screen bg-rose-50/60 dark:bg-neutral-950">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        {/* Texto principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div className="md:pr-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 animate-fade-in-up">
              O corpo que você quer começa com o tempo que você tem.
            </h1>
            <p className="mt-4 text-lg text-neutral-700 dark:text-neutral-300 animate-fade-in-up" style={{animationDelay: "80ms"}}>
              Treine com acompanhamento diário e viva uma experiência completa no app exclusivo — com treinos personalizados, correções e suporte no WhatsApp.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{animationDelay: "160ms"}}>
              <Link
                href="#começar"
                className="inline-flex h-12 items-center justify-center rounded-full bg-rose-500 px-6 text-white shadow-sm hover:bg-rose-600 transition-colors btn-glow"
              >
                🩷 Quero começar meu protocolo agora
              </Link>
            </div>
            <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400 animate-fade-in-up" style={{animationDelay: "200ms"}}>
              Treinos 100% personalizados • Acompanhamento humano real • Resultados que duram
            </p>
          </div>

          {/* Vídeo + texto lateral */}
          <div className="md:pl-6">
            <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white shadow-sm overflow-hidden animate-fade-in-up">
              <div className="aspect-video w-full">
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube.com/embed/f02mOEtSCgI"
                  title="App explicativo - Protocolo Mulher em Movimento"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>

            {/* CTA fixo abaixo do vídeo (mobile) */}
            <div className="md:hidden">
              <Link
                href="#começar"
                className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 inline-flex h-12 items-center justify-center rounded-full bg-rose-500 px-6 text-white shadow-md hover:bg-rose-600 transition-colors btn-glow"
              >
                🩷 Quero começar meu protocolo agora
              </Link>
            </div>

            {/* Texto lateral com bullets */}
            <div className="mt-6 md:mt-8 rounded-2xl bg-white/70 dark:bg-neutral-900/60 p-6 border border-neutral-200 dark:border-neutral-800 shadow-sm animate-fade-in-up" style={{animationDelay: "240ms"}}>
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                💡 Como funciona o acompanhamento no app:
              </h3>
              <ul className="mt-3 space-y-2 text-neutral-700 dark:text-neutral-300">
                <li>Você recebe seu treino personalizado direto no aplicativo.</li>
                <li>Cada exercício vem com vídeo explicativo.</li>
                <li>Envie seus vídeos e receba correções reais do personal.</li>
                <li>Converse comigo todos os dias pelo WhatsApp.</li>
              </ul>
              <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400">
                📱 Tudo o que você precisa pra evoluir — na palma da sua mão.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Seção 2 — O que é o Protocolo Mulher em Movimento */}
    <section className="bg-brand-soft dark:bg-neutral-950">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100 animate-fade-in-up">Mais do que treinar: é sobre voltar a se sentir bem no seu corpo.</h2>
          <p className="mt-4 text-lg text-neutral-700 dark:text-neutral-300 animate-fade-in-up" style={{animationDelay: "80ms"}}>
            O Protocolo Mulher em Movimento foi criado especialmente para mulheres e mães que querem cuidar do corpo sem abrir mão da rotina.
          </p>
          <p className="mt-2 text-neutral-700 dark:text-neutral-300 animate-fade-in-up" style={{animationDelay: "120ms"}}>
            Treinos inteligentes, acompanhamento humano e resultados que se encaixam na sua vida — não o contrário.
          </p>
          
        </div>

        {/* Cards de diferenciais */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 shadow-sm animate-fade-in-up" style={{animationDelay: "160ms"}}>
            <div className="text-2xl">🧘‍♀️</div>
            <h3 className="mt-3 font-semibold text-neutral-900 dark:text-neutral-100">Treinos personalizados</h3>
            <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">
              Receba treinos adaptados ao seu nível, tempo disponível e espaço — seja em casa ou na academia.
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 shadow-sm animate-fade-in-up" style={{animationDelay: "200ms"}}>
            <div className="text-2xl">💬</div>
            <h3 className="mt-3 font-semibold text-neutral-900 dark:text-neutral-100">Acompanhamento diário real</h3>
            <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">
              Converse comigo todos os dias pelo WhatsApp e receba feedbacks e correções personalizadas.
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 shadow-sm animate-fade-in-up" style={{animationDelay: "240ms"}}>
            <div className="text-2xl">💖</div>
            <h3 className="mt-3 font-semibold text-neutral-900 dark:text-neutral-100">Feito para mulheres reais</h3>
            <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">
              Entendo sua rotina, seus desafios e seu ritmo. O protocolo respeita o seu tempo e seu corpo.
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 shadow-sm animate-fade-in-up" style={{animationDelay: "280ms"}}>
            <div className="text-2xl">📱</div>
            <h3 className="mt-3 font-semibold text-neutral-900 dark:text-neutral-100">App exclusivo</h3>
            <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">
              Acesse seus treinos, vídeos e evolução direto no app — simples, bonito e fácil de usar.
            </p>
          </div>
        </div>

        {/* Bloco imagem + texto em caixa suspensa (acompanhamento por personal) */}
        <div className="mt-14 max-w-3xl mx-auto">
          <figure className="animate-fade-in-up mx-auto w-full max-w-md rounded-3xl bg-brand-soft p-4 ring-1 ring-brand/20 shadow-sm" style={{animationDelay: "320ms"}}>
            <Image
              src="/imagens/confusa.png"
              alt="Mulher confusa, sem entender o treino"
              width={600}
              height={600}
              className="w-full h-auto rounded-2xl object-cover shadow-md"
              sizes="(max-width: 768px) 100vw, 600px"
              priority
            />
          </figure>

          <div className="mt-6 md:grid md:grid-cols-2 md:gap-6 items-center">
            <div className="rounded-2xl bg-white/90 dark:bg-neutral-900/85 backdrop-blur-sm border border-neutral-200 dark:border-neutral-800 shadow-lg p-6 animate-fade-in-up animate-float-card" style={{animationDelay: "360ms"}}>
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
                Por que o acompanhamento com uma <span className="text-brand">personal</span> faz toda a diferença
              </h3>
              <ul className="mt-4 space-y-3 text-neutral-700 dark:text-neutral-300">
                <li className="flex gap-2"><span className="text-brand">✓</span> Correção de técnica em tempo real, evitando dores e lesões.</li>
                <li className="flex gap-2"><span className="text-brand">✓</span> Ajustes do treino ao seu tempo, energia e rotina de mãe.</li>
                <li className="flex gap-2"><span className="text-brand">✓</span> Progressão inteligente e resultados que duram.</li>
                <li className="flex gap-2"><span className="text-brand">✓</span> Motivação diária e accountability no WhatsApp.</li>
                <li className="flex gap-2"><span className="text-brand">✓</span> Plano personalizado que respeita seu corpo e seu ritmo.</li>
              </ul>
              <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400">
                Com acompanhamento humano real, você treina com confiança e constância — e o resultado vem.
              </p>
            </div>

            <div className="mt-6 md:mt-0 flex justify-center md:justify-end animate-fade-in-up" style={{animationDelay: "380ms"}}>
              <div className="relative w-full">
                <PhoneImage
                  src="/imagens/celular.png"
                  alt="Mockup de celular mostrando o app"
                  width={240}
                  height={480}
                  className="w-full h-auto drop-shadow-xl"
                  priority
                />
                {/* Overlay da tela para inserir imagem posteriormente */}
                <div className="absolute top-[8%] left-[9%] w-[82%] h-[78%] rounded-[24px] overflow-hidden pointer-events-none">
                  {/* Quando quiser, insira sua imagem aqui com next/image */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Comparativo Sem orientação x Com personal */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 shadow-sm animate-fade-in-up" style={{animationDelay: "380ms"}}>
            <div className="text-sm font-semibold text-neutral-500">Sem orientação</div>
            <ul className="mt-3 space-y-3 text-neutral-700 dark:text-neutral-300">
              <li className="flex gap-2"><span className="text-red-600">❌</span> Dúvidas sobre técnica e execução.</li>
              <li className="flex gap-2"><span className="text-red-600">❌</span> Falta de progressão e constância.</li>
              <li className="flex gap-2"><span className="text-red-600">❌</span> Desmotivação e risco de lesões.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 shadow-sm animate-fade-in-up" style={{animationDelay: "420ms"}}>
            <div className="text-sm font-semibold text-brand">Com personal</div>
            <ul className="mt-3 space-y-3 text-neutral-700 dark:text-neutral-300">
              <li className="flex gap-2"><span className="text-brand">✅</span> Correções e ajustes personalizados.</li>
              <li className="flex gap-2"><span className="text-brand">✅</span> Rotina possível com apoio diário.</li>
              <li className="flex gap-2"><span className="text-brand">✅</span> Resultados sustentáveis com segurança.</li>
            </ul>
            <div className="mt-6">
              <Link href="#começar" className="inline-flex h-11 items-center justify-center rounded-full bg-brand px-5 text-white shadow-sm hover:brightness-95 transition-colors btn-glow">
                🩷 Quero começar meu protocolo agora
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}