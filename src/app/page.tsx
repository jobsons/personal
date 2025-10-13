import Link from "next/link";

export default function Home() {
  return (
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
  );
}