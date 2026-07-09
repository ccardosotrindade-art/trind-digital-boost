import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Menu, X, ArrowRight, ArrowLeft, MessageCircle, Check, Minus,
  Globe, Wrench, Gauge, Smartphone, Search, ShieldCheck,
  Headphones, Zap, Sparkles, Clock, Mail, MapPin, Instagram,
  Star, Quote,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";
import client1 from "@/assets/client-1.jpg";
import client2 from "@/assets/client-2.jpg";
import client3 from "@/assets/client-3.jpg";
import trindcardLogo from "@/assets/Trindcard.png.asset.json";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TrindCard Web — Sites profissionais para negócios locais" },
      {
        name: "description",
        content:
          "Desenvolvimento e manutenção de sites para profissionais liberais e pequenas empresas. Sua marca com autoridade digital, sem preocupações técnicas.",
      },
      { property: "og:title", content: "TrindCard Web — Sua marca com autoridade digital" },
      {
        property: "og:description",
        content:
          "Sites funcionais, otimizados e com suporte técnico próximo. Falamos por WhatsApp: (47) 99650-8397.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const WHATSAPP =
  "https://wa.me/5547996508397?text=Ol%C3%A1!%20Quero%20falar%20com%20um%20especialista%20da%20TrindCard%20Web.";

function Logo({ className = "" }: { className?: string }) {
  return (
    <img
      src={trindcardLogo.url}
      alt="TrindCard Web"
      className={`h-9 w-auto ${className}`}
      width={240}
      height={80}
    />
  );
}


/* ---------------- Navbar ---------------- */
function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);
  const links = [
    { href: "#sobre", label: "Sobre" },
    { href: "#servicos", label: "Serviços" },
    { href: "#diferenciais", label: "Diferenciais" },
    { href: "#depoimentos", label: "Depoimentos" },
    { href: "#contato", label: "Contato" },
  ];
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled
          ? "bg-background/85 backdrop-blur border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between md:h-20">
        <a href="#top" className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3" aria-label="TrindCard Web - Início">
          <Logo className="h-10 shrink-0" />
          <div className="flex min-w-0 flex-col">
            <span className="text-sm font-bold tracking-tight text-foreground truncate">
              TRINDCARD WEB
            </span>
            <span className="truncate text-xs leading-tight text-primary/90">
              Sua vitrine digital sempre ON
            </span>
          </div>
        </a>
        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#sobre"
            className="text-sm font-semibold text-foreground/80 hover:text-primary"
          >
            Saiba Mais
          </a>
          <Button asChild variant="default" className="font-semibold">
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
              Falar com Especialista
            </a>
          </Button>
        </div>
        <button
          className="lg:hidden p-2 -mr-2"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <ul className="container-page py-4 space-y-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-base font-medium hover:text-primary"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <Button asChild className="w-full font-semibold">
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                  Falar com Especialista
                </a>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

/* ---------------- Hero Carousel ---------------- */
const HERO_SLIDES = [
  {
    img: hero1,
    eyebrow: "Agência TrindCard Web",
    title: "Sua marca com autoridade e visibilidade digital constante.",
    sub: "Sites profissionais para profissionais liberais e pequenas empresas que querem ganhar autoridade no mercado local — sem dor de cabeça técnica.",
  },
  {
    img: hero2,
    eyebrow: "Desenvolvimento sob medida",
    title: "Sites rápidos, otimizados e prontos para vender.",
    sub: "Cuidamos da parte técnica para você focar no que importa: atender bem seus clientes e crescer com previsibilidade.",
  },
  {
    img: hero3,
    eyebrow: "Suporte próximo e contínuo",
    title: "Atualizações sob demanda, sem custos ocultos.",
    sub: "Uma parceria estratégica para manter sua vitrine online sempre no ar, atualizada e performando.",
  },
];

function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % HERO_SLIDES.length), 6500);
    return () => clearInterval(t);
  }, []);
  const slide = HERO_SLIDES[i];
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden pt-16 md:pt-20">
      {/* Background image stack */}
      {HERO_SLIDES.map((s, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            idx === i ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={idx !== i}
        >
          <img
            src={s.img}
            alt=""
            className="h-full w-full object-cover"
            width={1600}
            height={1000}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>
      ))}

      <div className="container-page relative grid min-h-[calc(100svh-5rem)] grid-cols-1 items-center gap-10 py-16 lg:grid-cols-12">
        <div key={i} className="animate-fade-up lg:col-span-7 max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
            <Sparkles className="h-3.5 w-3.5" /> {slide.eyebrow}
          </span>
          <h1 className="mt-5 text-4xl font-black leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl">
            {slide.title.split(" ").slice(0, -3).join(" ")}{" "}
            <span className="text-gradient-primary">
              {slide.title.split(" ").slice(-3).join(" ")}
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
            {slide.sub}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button asChild size="lg" className="h-12 px-7 font-semibold shadow-[var(--shadow-glow)]">
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                Falar com Especialista <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-12 px-7 font-semibold border-white/20 bg-white/5 hover:bg-white/10 hover:text-foreground">
              <a href="#servicos">Saiba Mais</a>
            </Button>
          </div>
          <div className="mt-10 flex items-center gap-6 text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-primary" /> Suporte próximo
            </div>
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-primary" /> Entrega ágil
            </div>
            <div className="flex items-center gap-2">
              <Gauge className="h-4 w-4 text-primary" /> Performance otimizada
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="container-page absolute inset-x-0 bottom-6 flex items-center justify-between">
        <div className="flex gap-2">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              aria-label={`Ir para slide ${idx + 1}`}
              onClick={() => setI(idx)}
              className={`h-1.5 rounded-full transition-all ${
                idx === i ? "w-10 bg-primary" : "w-5 bg-white/30 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setI((p) => (p - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)}
            aria-label="Slide anterior"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/5 backdrop-blur hover:border-primary hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button
            onClick={() => setI((p) => (p + 1) % HERO_SLIDES.length)}
            aria-label="Próximo slide"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/5 backdrop-blur hover:border-primary hover:text-primary"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Sobre ---------------- */
const TEAM = [
  { img: team1, name: "Claudio Cardoso", role: "Fundador & Desenvolvedor Web" },
  { img: team2, name: "Marina Reis", role: "Gestão de Conteúdo & Suporte" },
  { img: team3, name: "Lucas Hoffmann", role: "UI/UX & Performance" },
];
const STATS = [
  { v: "+8", l: "Anos de experiência" },
  { v: "+120", l: "Sites entregues" },
  { v: "98%", l: "Clientes satisfeitos" },
  { v: "24h", l: "Tempo médio de suporte" },
];

function Sobre() {
  return (
    <section id="sobre" className="py-24 md:py-32 bg-[var(--surface)]">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Sobre a TrindCard Web
          </span>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl md:text-5xl">
            Parceira estratégica para a sua presença digital
          </h2>
          <p className="mt-5 text-muted-foreground sm:text-lg">
            Nascemos para resolver um problema real: profissionais e pequenos negócios
            perdendo clientes por não terem uma vitrine online à altura do que entregam.
            Unimos desenvolvimento web, performance e suporte humano para mudar isso.
          </p>
          <p className="mt-4 text-muted-foreground">
            Nossa missão é{" "}
            <span className="text-foreground font-semibold">
              transformar a presença digital de negócios locais
            </span>{" "}
            com soluções funcionais que aproximam marcas e consumidores — e nosso
            diferencial é o suporte técnico integral: você foca no seu negócio,
            a gente cuida do resto.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {STATS.map((s) => (
            <div
              key={s.l}
              className="rounded-2xl border border-border bg-card p-6 text-center shadow-[var(--shadow-card)]"
            >
              <div className="text-3xl font-black text-primary sm:text-4xl">{s.v}</div>
              <div className="mt-1 text-xs text-muted-foreground sm:text-sm">{s.l}</div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-center text-xl font-bold sm:text-2xl">Conheça quem está por trás</h3>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM.map((t) => (
              <Card key={t.name} className="overflow-hidden border-border bg-card transition-transform hover:-translate-y-1">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={t.img}
                    alt={`Foto de ${t.name}`}
                    loading="lazy"
                    width={800}
                    height={800}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="text-lg font-bold">{t.name}</div>
                  <div className="text-sm text-primary">{t.role}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Serviços (Tabs) ---------------- */
const SERVICES = [
  {
    id: "sites",
    icon: Globe,
    title: "Sites institucionais",
    short: "Vitrine online profissional",
    desc:
      "Sites institucionais sob medida para profissionais liberais e pequenas empresas. Estrutura clara, copy que vende e identidade visual alinhada à sua marca.",
    bullets: [
      "Design responsivo (mobile, tablet e desktop)",
      "Integração com WhatsApp e formulários",
      "SEO básico configurado na entrega",
    ],
  },
  {
    id: "landing",
    icon: Zap,
    title: "Landing pages de conversão",
    short: "Página focada em capturar clientes",
    desc:
      "Páginas únicas, rápidas e otimizadas para campanhas e captação direta. Ideais para serviços específicos, lançamentos e tráfego pago.",
    bullets: [
      "Carregamento em segundos",
      "Estrutura validada por conversão",
      "Pronta para Google Ads e Meta Ads",
    ],
  },
  {
    id: "manutencao",
    icon: Wrench,
    title: "Manutenção & atualizações",
    short: "Seu site sempre no ar",
    desc:
      "Gestão completa de conteúdo, correções e melhorias sob demanda. Sem complicação, sem precisar aprender ferramentas.",
    bullets: [
      "Atualizações sob demanda",
      "Backup e segurança monitorados",
      "Suporte direto por WhatsApp",
    ],
  },
  {
    id: "performance",
    icon: Gauge,
    title: "Performance & SEO",
    short: "Mais velocidade, mais visibilidade",
    desc:
      "Otimizamos seu site para carregar rápido e aparecer melhor no Google — essencial para o consumidor mobile de hoje.",
    bullets: [
      "Auditoria técnica completa",
      "Otimização de imagens e código",
      "Configuração de SEO on-page",
    ],
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Experiência mobile-first",
    short: "Pensado para o cliente conectado",
    desc:
      "Mais de 70% dos seus visitantes usam celular. Construímos cada projeto começando pelo mobile, garantindo navegação fluida em qualquer tela.",
    bullets: [
      "Layouts adaptativos reais",
      "Botões e textos pensados para o dedo",
      "Tap-to-call e tap-to-WhatsApp nativos",
    ],
  },
  {
    id: "consultoria",
    icon: Search,
    title: "Consultoria estratégica",
    short: "Direção clara para o digital",
    desc:
      "Avaliamos sua presença online atual e mostramos exatamente o que melhorar para gerar mais autoridade e contatos qualificados.",
    bullets: [
      "Diagnóstico personalizado",
      "Plano de ação por prioridade",
      "Acompanhamento dos resultados",
    ],
  },
];

function Servicos() {
  return (
    <section id="servicos" className="py-24 md:py-32">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Serviços & Soluções
          </span>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl md:text-5xl">
            Tudo para sua marca brilhar online
          </h2>
          <p className="mt-5 text-muted-foreground sm:text-lg">
            Desenvolvimento, manutenção e suporte — uma vitrine online sempre
            atualizada, sem que você precise se preocupar com a parte técnica.
          </p>
        </div>

        <Tabs defaultValue={SERVICES[0].id} className="mt-12">
          <TabsList className="mx-auto flex h-auto w-full max-w-4xl flex-wrap justify-center gap-2 bg-transparent p-0">
            {SERVICES.map((s) => (
              <TabsTrigger
                key={s.id}
                value={s.id}
                className="rounded-full border border-border bg-card px-4 py-2.5 text-sm font-semibold data-[state=active]:border-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <s.icon className="mr-2 h-4 w-4" /> {s.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {SERVICES.map((s) => (
            <TabsContent key={s.id} value={s.id} className="mt-10">
              <Card className="overflow-hidden border-border bg-card">
                <CardContent className="grid gap-8 p-6 sm:p-10 lg:grid-cols-2">
                  <div>
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                      <s.icon className="h-7 w-7" />
                    </div>
                    <h3 className="mt-5 text-2xl font-black sm:text-3xl">{s.title}</h3>
                    <p className="mt-2 font-medium text-primary">{s.short}</p>
                    <p className="mt-4 text-muted-foreground">{s.desc}</p>
                    <Button
                      asChild
                      variant="secondary"
                      className="mt-7 bg-white text-background hover:bg-white/90 font-semibold"
                    >
                      <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                        Solicitar Orçamento <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                  <ul className="space-y-3 self-center rounded-2xl bg-[var(--surface-elevated)] p-6">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                          <Check className="h-3.5 w-3.5" />
                        </span>
                        <span className="text-sm sm:text-base">{b}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}

/* ---------------- Diferenciais (Comparativo) ---------------- */
const COMPARE = [
  { feat: "Suporte técnico humano e próximo (via WhatsApp)", us: true, them: false },
  { feat: "Atualizações de conteúdo sob demanda incluídas", us: true, them: false },
  { feat: "Site otimizado para mobile e performance real", us: true, them: false },
  { feat: "Sem custos ocultos de manutenção", us: true, them: false },
  { feat: "Entrega ágil com acompanhamento direto", us: true, them: false },
  { feat: "Consultoria estratégica antes do desenvolvimento", us: true, them: false },
];

function Diferenciais() {
  return (
    <section id="diferenciais" className="py-24 md:py-32 bg-[var(--surface)]">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Por que TrindCard Web
          </span>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl md:text-5xl">
            A diferença está no cuidado com cada cliente
          </h2>
          <p className="mt-5 text-muted-foreground sm:text-lg">
            Compare o que oferecemos com a média do mercado e veja por que somos
            a parceria de longo prazo certa para o seu negócio.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-card)]">
          <div className="grid grid-cols-[1fr_auto_auto] gap-4 border-b border-border bg-[var(--surface-elevated)] px-4 py-5 text-xs font-bold uppercase tracking-wider sm:grid-cols-[2fr_1fr_1fr] sm:px-8 sm:text-sm">
            <div>Característica</div>
            <div className="text-center text-primary">TrindCard Web</div>
            <div className="text-center text-muted-foreground">Concorrência</div>
          </div>
          {COMPARE.map((row, i) => (
            <div
              key={row.feat}
              className={`grid grid-cols-[1fr_auto_auto] items-center gap-4 px-4 py-5 sm:grid-cols-[2fr_1fr_1fr] sm:px-8 ${
                i % 2 === 1 ? "bg-white/[0.02]" : ""
              }`}
            >
              <div className="text-sm sm:text-base">{row.feat}</div>
              <div className="flex justify-center">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground">
                  {row.us ? <Check className="h-5 w-5" /> : <Minus className="h-5 w-5" />}
                </span>
              </div>
              <div className="flex justify-center">
                <span className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted-foreground">
                  {row.them ? <Check className="h-5 w-5" /> : <Minus className="h-5 w-5" />}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            { icon: Headphones, t: "Suporte próximo", d: "Atendimento direto, sem filas." },
            { icon: Clock, t: "Agilidade real", d: "Atualizações em até 24h úteis." },
            { icon: ShieldCheck, t: "Sem surpresas", d: "Sem custos ocultos no caminho." },
          ].map((b) => (
            <Card key={b.t} className="border-border bg-card">
              <CardContent className="flex items-start gap-4 p-6">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary">
                  <b.icon className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-bold">{b.t}</div>
                  <div className="text-sm text-muted-foreground">{b.d}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Depoimentos ---------------- */
const TESTIMONIALS = [
  {
    img: client1,
    name: "Juliana Martins",
    role: "Esteticista — Studio JM",
    text:
      "Eu nunca tinha tido um site profissional. Em pouco tempo a TrindCard entregou tudo pronto e ainda cuida das atualizações. Hoje meu Instagram leva direto para o site e os clientes elogiam.",
  },
  {
    img: client2,
    name: "Rafael Souza",
    role: "Arquiteto autônomo",
    text:
      "Sempre tive medo de me enrolar com a parte técnica. Eles resolveram tudo, do domínio à manutenção. O suporte por WhatsApp é o que faz a diferença — me sinto realmente acompanhado.",
  },
  {
    img: client3,
    name: "Dra. Patricia Lemos",
    role: "Advogada — Lemos Advocacia",
    text:
      "Depois do site novo, comecei a aparecer no Google e a receber contatos pelo WhatsApp todas as semanas. Investimento que se pagou rápido e que me deu mais autoridade.",
  },
];

function Depoimentos() {
  return (
    <section id="depoimentos" className="py-24 md:py-32">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Prova social
          </span>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl md:text-5xl">
            Quem confiou, hoje colhe resultados
          </h2>
          <p className="mt-5 text-muted-foreground sm:text-lg">
            Profissionais e pequenas empresas que profissionalizaram a sua vitrine
            online com a nossa consultoria.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-3xl space-y-6">
          {TESTIMONIALS.map((t) => (
            <Card
              key={t.name}
              className="relative border-border bg-card transition-transform hover:-translate-y-1"
            >
              <CardContent className="grid gap-6 p-6 sm:grid-cols-[auto_1fr] sm:p-8">
                <img
                  src={t.img}
                  alt={`Foto de ${t.name}`}
                  loading="lazy"
                  width={512}
                  height={512}
                  className="h-20 w-20 shrink-0 rounded-full object-cover ring-2 ring-primary/40"
                />
                <div>
                  <Quote className="h-6 w-6 text-primary" />
                  <p className="mt-2 text-base text-foreground/90 sm:text-lg">
                    “{t.text}”
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    <div>
                      <div className="font-bold">{t.name}</div>
                      <div className="text-sm text-muted-foreground">{t.role}</div>
                    </div>
                    <div className="ml-auto flex gap-0.5 text-primary">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CTA Final ---------------- */
function CTAFinal() {
  return (
    <section className="px-4 py-20 md:py-28">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-16 text-center text-primary-foreground sm:px-12 md:py-24">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-black/10 blur-3xl" />
          <div className="relative mx-auto max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-background/10 px-3 py-1 text-xs font-bold uppercase tracking-widest">
              <Sparkles className="h-3.5 w-3.5" /> Vamos começar
            </span>
            <h2 className="mt-5 text-3xl font-black leading-tight sm:text-5xl md:text-6xl">
              Sua marca com autoridade e visibilidade digital constante — sem
              preocupações técnicas.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base text-primary-foreground/80 sm:text-lg">
              Sem custos ocultos. Sem complicação. Falamos a sua língua, do
              briefing à manutenção. Bora colocar sua marca um nível acima da
              concorrência?
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="h-12 bg-background px-7 font-semibold text-foreground hover:bg-background/90"
              >
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                  Falar com Especialista <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 border-background/40 bg-transparent px-7 font-semibold text-primary-foreground hover:bg-background/10 hover:text-primary-foreground"
              >
                <a href="https://wa.me/5547996508397" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp (47) 99650-8397
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  return (
    <footer id="contato" className="border-t border-border bg-[var(--surface)] py-14">
      <div className="container-page grid gap-10 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-foreground">
              TRINDCARD WEB
            </span>
            <p className="mt-2 text-sm font-medium text-primary/90">
              Sua vitrine digital sempre ON
            </p>
          </div>
          <p className="mt-4 max-w-md text-sm text-muted-foreground">
            Agência de desenvolvimento web focada em profissionalizar a presença
            digital de marcas locais. Suporte próximo, clareza técnica e
            compromisso com resultado.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-primary">Navegação</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><a href="#sobre" className="hover:text-primary">Sobre</a></li>
            <li><a href="#servicos" className="hover:text-primary">Serviços</a></li>
            <li><a href="#diferenciais" className="hover:text-primary">Diferenciais</a></li>
            <li><a href="#depoimentos" className="hover:text-primary">Depoimentos</a></li>
            <li><a href="#sobre" className="hover:text-primary">Saiba Mais</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-primary">Contato</h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <MessageCircle className="mt-0.5 h-4 w-4 text-primary shrink-0" />
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                (47) 99650-8397
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 text-primary shrink-0" />
              <a href="mailto:claudio.cardoso84@hotmail.com" className="hover:text-primary break-all">
                claudio.cardoso84@hotmail.com
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Instagram className="mt-0.5 h-4 w-4 text-primary shrink-0" />
              <a href="https://instagram.com/claudio.cardoso84" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                @claudio.cardoso84
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 text-primary shrink-0" />
              Corupá — Santa Catarina
            </li>
            <li className="flex items-start gap-2">
              <Clock className="mt-0.5 h-4 w-4 text-primary shrink-0" />
              Seg a Sex, 8h às 18h
            </li>
          </ul>
        </div>
      </div>
      <div className="container-page mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} TrindCard Web. Todos os direitos reservados.
      </div>
    </footer>
  );
}

/* ---------------- Floating WhatsApp ---------------- */
function FloatingWhats() {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[var(--shadow-glow)] transition-transform hover:scale-110"
    >
      <MessageCircle className="h-7 w-7" />
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-30" />
    </a>
  );
}

/* ---------------- Page ---------------- */
function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Sobre />
      <Servicos />
      <Diferenciais />
      <Depoimentos />
      <CTAFinal />
      <Footer />
      <FloatingWhats />
    </main>
  );
}
