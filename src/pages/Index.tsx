import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-semibold">Жанна Фролова</div>
          <div className="hidden md:flex gap-8">
            <button onClick={() => scrollToSection('hero')} className="text-sm hover:text-accent transition-colors">Главная</button>
            <button onClick={() => scrollToSection('about')} className="text-sm hover:text-accent transition-colors">Обо мне</button>
            <button onClick={() => scrollToSection('services')} className="text-sm hover:text-accent transition-colors">Услуги</button>
            <button onClick={() => scrollToSection('contact')} className="text-sm hover:text-accent transition-colors">Контакты</button>
          </div>
        </div>
      </nav>

      <section id="hero" className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6 leading-tight">Жанна Фролова</h1>
              <div className="space-y-2 text-xl mb-8">
                <p>Издатель</p>
                <p>Предприниматель</p>
                <p>Книжный продюсер</p>
                <p>Преподаватель</p>
                <p>Трекер</p>
              </div>
              <div className="flex flex-col gap-3 mb-8">
                <a href="https://t.me/zhannafrolovabooks" className="flex items-center gap-2 text-accent hover:underline">
                  <Icon name="Send" size={20} />
                  @zhannafrolovabooks
                </a>
                <a href="tel:+79951180102" className="flex items-center gap-2 text-accent hover:underline">
                  <Icon name="Phone" size={20} />
                  +7 995 118 01 02
                </a>
                <div className="flex items-center gap-2">
                  <Icon name="MapPin" size={20} />
                  г. Москва
                </div>
              </div>
              <Button size="lg" onClick={() => scrollToSection('contact')} className="text-lg px-8">
                Связаться со мной
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-lg overflow-hidden bg-secondary">
                <img 
                  src="https://cdn.poehali.dev/files/ae2e5bcc-733f-4b8b-b19c-f022d9907644.jpg" 
                  alt="Жанна Фролова"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Обо мне</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8">
              <div className="flex items-start gap-4">
                <div className="bg-accent/10 p-3 rounded-lg flex-shrink-0">
                  <Icon name="Clock" size={32} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">27 лет в книжном бизнесе</h3>
                  <p className="text-muted-foreground">Из них 25 лет на руководящих должностях</p>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <div className="flex items-start gap-4">
                <div className="bg-accent/10 p-3 rounded-lg flex-shrink-0">
                  <Icon name="BookOpen" size={32} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Более 8000 реализованных проектов</h3>
                  <p className="text-muted-foreground">Многие из которых стали бестселлерами</p>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <div className="flex items-start gap-4">
                <div className="bg-accent/10 p-3 rounded-lg flex-shrink-0">
                  <Icon name="Briefcase" size={32} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Предприниматель</h3>
                  <p className="text-muted-foreground">Более 20 лет. Владелец компаний «1000 бестселлеров» и «Книжкин дом»</p>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <div className="flex items-start gap-4">
                <div className="bg-accent/10 p-3 rounded-lg flex-shrink-0">
                  <Icon name="PenTool" size={32} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Автор 30 книг</h3>
                  <p className="text-muted-foreground">Суммарный тираж 5 000 000 экземпляров (под псевдонимом Евгения Шацкая)</p>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <div className="flex items-start gap-4">
                <div className="bg-accent/10 p-3 rounded-lg flex-shrink-0">
                  <Icon name="Building2" size={32} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Издательский холдинг АСТ-Эксмо</h3>
                  <p className="text-muted-foreground">Заведующая редакцией прикладной литературы</p>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <div className="flex items-start gap-4">
                <div className="bg-accent/10 p-3 rounded-lg flex-shrink-0">
                  <Icon name="GraduationCap" size={32} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Преподаватель</h3>
                  <p className="text-muted-foreground">Преподаватель копирайтинга в РАНХиГС</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="bg-white p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-6">Образование и карьера</h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="text-accent font-semibold flex-shrink-0 w-24">1998 г.</div>
                <div>Окончание РГУ (ЮФУ) по специальности история, политология</div>
              </div>
              <div className="flex gap-4">
                <div className="text-accent font-semibold flex-shrink-0 w-24">1998-1999</div>
                <div>Работа в администрации Ростовской области на предвыборных кампаниях, преподавание в РГУ</div>
              </div>
              <div className="flex gap-4">
                <div className="text-accent font-semibold flex-shrink-0 w-24">1998-2003</div>
                <div>Издательство "Феникс", заведующая редакцией</div>
              </div>
              <div className="flex gap-4">
                <div className="text-accent font-semibold flex-shrink-0 w-24">2003-2013</div>
                <div>Владелец и руководитель литературного агентства "Книжкин дом"</div>
              </div>
              <div className="flex gap-4">
                <div className="text-accent font-semibold flex-shrink-0 w-24">2013-2017</div>
                <div>Заведующая редакцией прикладной литературы в холдинге "АСТ-Эксмо"</div>
              </div>
              <div className="flex gap-4">
                <div className="text-accent font-semibold flex-shrink-0 w-24">2016-2025</div>
                <div>Владелец и директор издательства "1000 бестселлеров"</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Ко мне обращаются</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <Icon name="BookMarked" size={24} className="text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Трекинг в написании книги</h3>
                  <p className="text-muted-foreground text-sm">Профессиональное сопровождение на всех этапах создания книги</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <Icon name="Lightbulb" size={24} className="text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Консультации</h3>
                  <p className="text-muted-foreground text-sm">Выбор темы, позиционирование, авторское право, издательская стратегия</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <Icon name="Package" size={24} className="text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Издание книги под ключ</h3>
                  <p className="text-muted-foreground text-sm">Полный цикл издательского процесса от идеи до готовой книги</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <Icon name="TrendingUp" size={24} className="text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Продажа и продвижение книги</h3>
                  <p className="text-muted-foreground text-sm">Эффективные стратегии выхода на рынок и увеличения продаж</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <Icon name="PenTool" size={24} className="text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Обучение писательскому мастерству</h3>
                  <p className="text-muted-foreground text-sm">Развитие навыков создания качественного контента</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <Icon name="Star" size={24} className="text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Развитие личного бренда</h3>
                  <p className="text-muted-foreground text-sm">Издание книги как инструмент построения экспертности</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <Icon name="DollarSign" size={24} className="text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Получение дохода от издания</h3>
                  <p className="text-muted-foreground text-sm">Монетизация книжных проектов</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <Icon name="BarChart" size={24} className="text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Обзор книжного рынка</h3>
                  <p className="text-muted-foreground text-sm">Тренды, выбор издательства, просчет финансовой модели проекта</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="mt-16 bg-primary text-primary-foreground p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-6 text-center">Опыт работы</h3>
            <p className="text-center mb-6 text-lg">Работала с авторами бестселлеров и компаниями</p>
            <div className="text-center space-y-2">
              <p className="font-semibold">Издательства:</p>
              <p>АСТ, Эксмо, Рипол, Феникс</p>
              <p className="font-semibold mt-4">Компании и бренды:</p>
              <p>EKF, Legrand, National Geographic, Посольство Удмуртии в Москве</p>
              <p className="font-semibold mt-4">Известные авторы:</p>
              <p>А. Парабеллум, А. Левитас, В. Якуба, И. Валинуров, Р. Гандапас, М. Поташов, Ч. Дзотти, Д. Атерлей, М. Гузманов</p>
              <p className="mt-6 text-sm opacity-90">Проводила обучение авторов совместно с А. Парабеллумом, Е. Иноземцевой и Getpublished</p>
              <p className="text-sm opacity-90">Более 30 проведенных онлайн марафонов</p>
              <p className="text-sm opacity-90">Выступала со сцены на аудиторию 300 человек</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Контакты</h2>
          <p className="text-xl mb-12 text-muted-foreground">
            Свяжитесь со мной для консультации или сотрудничества
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8">
              <div className="flex flex-col items-center gap-3">
                <div className="bg-accent/10 p-4 rounded-full">
                  <Icon name="Send" size={32} className="text-accent" />
                </div>
                <div>
                  <div className="font-semibold mb-2">Telegram</div>
                  <a href="https://t.me/zhannafrolovabooks" className="text-accent hover:underline">
                    @zhannafrolovabooks
                  </a>
                </div>
              </div>
            </Card>
            
            <Card className="p-8">
              <div className="flex flex-col items-center gap-3">
                <div className="bg-accent/10 p-4 rounded-full">
                  <Icon name="Phone" size={32} className="text-accent" />
                </div>
                <div>
                  <div className="font-semibold mb-2">Телефон</div>
                  <a href="tel:+79951180102" className="text-accent hover:underline">
                    +7 995 118 01 02
                  </a>
                </div>
              </div>
            </Card>
          </div>

          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8">
            <Icon name="MapPin" size={20} />
            <span>г. Москва</span>
          </div>

          <div className="flex gap-4 justify-center">
            <Button 
              size="lg" 
              className="text-lg px-8"
              onClick={() => window.location.href = 'https://t.me/zhannafrolovabooks'}
            >
              Написать в Telegram
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8"
              onClick={() => window.location.href = 'tel:+79951180102'}
            >
              Позвонить
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2024 Жанна Фролова. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;