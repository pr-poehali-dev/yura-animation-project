import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const slides = [
  {
    id: 1,
    title: 'Вектор Успеха',
    subtitle: 'Приветствие команды',
    content: 'Мы - советники по воспитанию города Сибай! Мы работаем на передовой! Мы - буфер между детским энтузиазмом и взрослой реальностью.',
    image: 'https://cdn.poehali.dev/projects/aa88002e-1b34-4795-ba32-e870eade3c04/files/a2c10bfe-c3bf-40ca-a03f-0405a589d23d.jpg',
    bgColor: 'bg-gradient-to-br from-primary/10 to-secondary/10',
    emoji: '🚀'
  },
  {
    id: 2,
    title: 'Наша Работа',
    subtitle: 'Буфер между энтузиазмом и реальностью',
    content: 'Мы те, кто должен успеть на линейку, на встречу с волонтерами, с ребятами на парад, провести праздник из ничего и вдохновить из воздуха!',
    bgColor: 'bg-gradient-to-br from-accent/10 to-primary/10',
    emoji: '⚡',
    bullets: [
      'Успеть на линейку',
      'Встретиться с волонтерами',
      'Провести праздник из ничего',
      'Вдохновить из воздуха'
    ]
  },
  {
    id: 3,
    title: 'Живые Эмоции',
    subtitle: 'Не просто фотографии',
    content: 'Снимать нужно не просто фотографии, а живые эмоции детей! Ходить в библиотеку, на выставку в музей, объяснять ребятам из медиацентра.',
    bgColor: 'bg-gradient-to-br from-secondary/10 to-accent/10',
    emoji: '📸'
  },
  {
    id: 4,
    title: 'Идеологи с Юмором',
    subtitle: 'Мы не просто идеологи',
    content: 'Сегодня мы покажем, что мы не просто «Идеологи», а люди с отличным чувством юмора! Если мы не будем смеяться над нашей работой, мы начнем плакать над нашими планами и отчетами!',
    bgColor: 'bg-gradient-to-br from-primary/10 to-accent/10',
    emoji: '😄'
  },
  {
    id: 5,
    title: 'Региональный Компонент',
    subtitle: 'С учетом наших традиций',
    content: 'Стоп, стоп, а причем тут КВН и Хумай? Да у нас же в плане прописан региональный компонент! А, ну тогда понятно!',
    bgColor: 'bg-gradient-to-br from-accent/10 to-secondary/10',
    emoji: '🎭'
  },
  {
    id: 6,
    title: 'Общественные Организации',
    subtitle: 'Как Wi-Fi',
    content: 'Давайте поговорим о том, что объединяет нас всех - общественные организации! Они как Wi-Fi: иногда работают, иногда нет, но мы все равно от них зависим!',
    image: 'https://cdn.poehali.dev/projects/aa88002e-1b34-4795-ba32-e870eade3c04/files/b7d45f2c-a173-4835-9501-afad3cc665c7.jpg',
    bgColor: 'bg-gradient-to-br from-secondary/10 to-primary/10',
    emoji: '📡'
  },
  {
    id: 7,
    title: 'Прекрасное Далёко',
    subtitle: 'Наша миссия',
    content: 'Мы верим в прекрасное далёкое каждого ребенка. Мы смотрим в прекрасное далёкое и видим там не просто выпускников, а будущих врачей, инженеров, архитекторов!',
    bgColor: 'bg-gradient-to-br from-primary/10 to-secondary/10',
    emoji: '🔭'
  },
  {
    id: 8,
    title: 'Башня Успеха',
    subtitle: 'Наша структура',
    content: 'Наша команда - это не просто набор людей, это башня Успеха!',
    image: 'https://cdn.poehali.dev/projects/aa88002e-1b34-4795-ba32-e870eade3c04/files/9157aa02-504b-44e4-b6a4-27b1fabb4fbe.jpg',
    bgColor: 'bg-gradient-to-br from-accent/10 to-primary/10',
    emoji: '🏗️',
    structure: [
      { title: 'Шпиль Вдохновения', desc: 'Чтобы каждый знал: наше будущее ярко!' },
      { title: 'Перекрытия Системного Мышления', desc: 'Устойчивая работа' },
      { title: 'Стены Коммуникации', desc: 'Чтобы нас поняли' },
      { title: 'Фундамент Эмпатии', desc: 'Чтобы нас услышали' }
    ]
  },
  {
    id: 9,
    title: 'Финал',
    subtitle: 'Вектор Успеха',
    content: 'С вами была команда: Вектор Успеха! Мы команда, которая всегда на связи! Спасибо за внимание!',
    bgColor: 'bg-gradient-to-br from-primary/20 to-secondary/20',
    emoji: '🎉'
  }
];

export default function Index() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const slide = slides[currentSlide];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="mb-8 flex items-center justify-between">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-2">
              Презентация КВН
            </h1>
            <p className="text-muted-foreground text-lg">
              Команда: Вектор Успеха
            </p>
          </div>
          <Button
            onClick={togglePlay}
            variant={isPlaying ? 'destructive' : 'default'}
            size="lg"
            className="animate-scale-in"
          >
            <Icon name={isPlaying ? 'Pause' : 'Play'} className="mr-2" />
            {isPlaying ? 'Стоп' : 'Старт'}
          </Button>
        </div>

        <Card className={`${slide.bgColor} p-8 md:p-12 min-h-[600px] shadow-2xl animate-fade-in`}>
          <div className="flex flex-col h-full">
            <div className="mb-6">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-6xl animate-bounce-in">{slide.emoji}</span>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                    {slide.title}
                  </h2>
                  <p className="text-xl text-muted-foreground">{slide.subtitle}</p>
                </div>
              </div>
            </div>

            <div className="flex-1 flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1 space-y-6">
                <p className="text-lg md:text-xl leading-relaxed text-foreground/90">
                  {slide.content}
                </p>

                {slide.bullets && (
                  <ul className="space-y-3">
                    {slide.bullets.map((bullet, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-lg animate-slide-in"
                        style={{ animationDelay: `${idx * 0.1}s` }}
                      >
                        <Icon name="CheckCircle" className="text-primary mt-1 flex-shrink-0" size={20} />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {slide.structure && (
                  <div className="space-y-4">
                    {slide.structure.map((level, idx) => (
                      <Card
                        key={idx}
                        className="p-4 bg-background/50 backdrop-blur-sm animate-scale-in"
                        style={{ animationDelay: `${idx * 0.1}s` }}
                      >
                        <h3 className="font-bold text-lg text-primary mb-1">
                          {level.title}
                        </h3>
                        <p className="text-muted-foreground">{level.desc}</p>
                      </Card>
                    ))}
                  </div>
                )}
              </div>

              {slide.image && (
                <div className="flex-1 max-w-md">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-auto rounded-xl shadow-xl animate-scale-in"
                  />
                </div>
              )}
            </div>
          </div>
        </Card>

        <div className="mt-8 flex items-center justify-between gap-4">
          <Button
            onClick={prevSlide}
            variant="outline"
            size="lg"
            disabled={currentSlide === 0}
            className="hover-scale"
          >
            <Icon name="ChevronLeft" className="mr-2" />
            Назад
          </Button>

          <div className="flex gap-2 flex-wrap justify-center">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  idx === currentSlide
                    ? 'bg-primary w-8'
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/60'
                }`}
                aria-label={`Слайд ${idx + 1}`}
              />
            ))}
          </div>

          <Button
            onClick={nextSlide}
            variant="outline"
            size="lg"
            disabled={currentSlide === slides.length - 1}
            className="hover-scale"
          >
            Вперёд
            <Icon name="ChevronRight" className="ml-2" />
          </Button>
        </div>

        <div className="mt-6 text-center text-muted-foreground">
          <p className="text-sm">
            Слайд {currentSlide + 1} из {slides.length}
          </p>
        </div>
      </div>
    </div>
  );
}
