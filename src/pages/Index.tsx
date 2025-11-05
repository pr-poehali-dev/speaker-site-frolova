import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black">
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-md border-b border-accent/20 z-50">
        <div className="container mx-auto px-6 py-5 flex justify-between items-center">
          <div className="text-2xl font-bold text-accent">ЖФ</div>
          <div className="hidden md:flex gap-10">
            <button onClick={() => scrollToSection('hero')} className="text-white hover:text-accent transition-colors font-medium">Главная</button>
            <button onClick={() => scrollToSection('about')} className="text-white hover:text-accent transition-colors font-medium">Обо мне</button>
            <button onClick={() => scrollToSection('services')} className="text-white hover:text-accent transition-colors font-medium">Услуги</button>
            <button onClick={() => scrollToSection('contact')} className="text-white hover:text-accent transition-colors font-medium">Контакты</button>
          </div>
        </div>
      </nav>

      <section id="hero" className="min-h-screen flex items-center px-6 pt-20 bg-gradient-to-br from-black via-black to-accent/5">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block bg-accent/10 border border-accent/30 px-4 py-2 rounded-full mb-8">
                <span className="text-accent font-semibold">Издатель · Продюсер · Эксперт</span>
              </div>
              <h1 className="text-7xl lg:text-8xl font-bold mb-6 leading-tight">
                <span className="text-white">Жанна</span>
                <br />
                <span className="text-accent">Фролова</span>
              </h1>
              <div className="space-y-2 text-xl text-gray-400 mb-10">
                <p className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  Издатель
                </p>
                <p className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  Предприниматель
                </p>
                <p className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  Книжный продюсер
                </p>
                <p className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  Преподаватель
                </p>
                <p className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  Трекер
                </p>
              </div>
              <Button 
                size="lg" 
                onClick={() => scrollToSection('contact')} 
                className="bg-accent text-black hover:bg-accent/90 text-lg px-12 py-7 font-semibold"
              >
                Связаться со мной
              </Button>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-accent/20 rounded-2xl blur-3xl"></div>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border-4 border-accent shadow-2xl shadow-accent/20">
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

      <section id="about" className="py-32 px-6 bg-black border-t border-accent/20">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-bold mb-6">
              <span className="text-white">Обо </span>
              <span className="text-accent">мне</span>
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            <Card className="bg-white/5 border-accent/20 p-8 hover:bg-white/10 transition-all hover:border-accent/40">
              <div className="bg-accent/10 p-4 rounded-xl w-fit mb-6">
                <Icon name="Clock" size={40} className="text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">27 лет</h3>
              <p className="text-gray-400">в книжном бизнесе, из них 25 лет на руководящих должностях</p>
            </Card>

            <Card className="bg-white/5 border-accent/20 p-8 hover:bg-white/10 transition-all hover:border-accent/40">
              <div className="bg-accent/10 p-4 rounded-xl w-fit mb-6">
                <Icon name="BookOpen" size={40} className="text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">8000+ проектов</h3>
              <p className="text-gray-400">Многие из которых стали бестселлерами</p>
            </Card>

            <Card className="bg-white/5 border-accent/20 p-8 hover:bg-white/10 transition-all hover:border-accent/40">
              <div className="bg-accent/10 p-4 rounded-xl w-fit mb-6">
                <Icon name="Briefcase" size={40} className="text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">20+ лет</h3>
              <p className="text-gray-400">Владелец компаний «1000 бестселлеров» и «Книжкин дом»</p>
            </Card>

            <Card className="bg-white/5 border-accent/20 p-8 hover:bg-white/10 transition-all hover:border-accent/40">
              <div className="bg-accent/10 p-4 rounded-xl w-fit mb-6">
                <Icon name="PenTool" size={40} className="text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Автор 30 книг</h3>
              <p className="text-gray-400">Тираж 5 000 000 экз. (под псевдонимом Евгения Шацкая)</p>
            </Card>

            <Card className="bg-white/5 border-accent/20 p-8 hover:bg-white/10 transition-all hover:border-accent/40">
              <div className="bg-accent/10 p-4 rounded-xl w-fit mb-6">
                <Icon name="Building2" size={40} className="text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">АСТ-Эксмо</h3>
              <p className="text-gray-400">Заведующая редакцией прикладной литературы</p>
            </Card>

            <Card className="bg-white/5 border-accent/20 p-8 hover:bg-white/10 transition-all hover:border-accent/40">
              <div className="bg-accent/10 p-4 rounded-xl w-fit mb-6">
                <Icon name="GraduationCap" size={40} className="text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">РАНХиГС</h3>
              <p className="text-gray-400">Преподаватель копирайтинга</p>
            </Card>
          </div>

          <div className="bg-accent/5 border border-accent/30 rounded-2xl p-12">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">Карьерный путь</h3>
            <div className="space-y-6 max-w-4xl mx-auto">
              <div className="flex gap-6 items-start">
                <div className="text-accent font-bold text-lg flex-shrink-0 w-32">1998</div>
                <div className="text-gray-300 text-lg">Окончание РГУ (ЮФУ) — история, политология</div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="text-accent font-bold text-lg flex-shrink-0 w-32">1998-2003</div>
                <div className="text-gray-300 text-lg">Издательство "Феникс", заведующая редакцией</div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="text-accent font-bold text-lg flex-shrink-0 w-32">2003-2013</div>
                <div className="text-gray-300 text-lg">Владелец литературного агентства "Книжкин дом"</div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="text-accent font-bold text-lg flex-shrink-0 w-32">2013-2017</div>
                <div className="text-gray-300 text-lg">Холдинг "АСТ-Эксмо", заведующая редакцией</div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="text-accent font-bold text-lg flex-shrink-0 w-32">2016-2025</div>
                <div className="text-gray-300 text-lg">Директор издательства "1000 бестселлеров"</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-32 px-6 bg-gradient-to-br from-black via-accent/5 to-black border-t border-accent/20">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-bold mb-6">
              <span className="text-white">Мои </span>
              <span className="text-accent">услуги</span>
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Помогаю авторам и компаниям реализовать книжные проекты от идеи до бестселлера
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-20">
            <Card className="bg-white/5 border-accent/20 p-8 hover:bg-accent/5 transition-all group">
              <Icon name="BookMarked" size={32} className="text-accent mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">Трекинг в написании книги</h3>
              <p className="text-gray-400">Профессиональное сопровождение на всех этапах создания книги</p>
            </Card>

            <Card className="bg-white/5 border-accent/20 p-8 hover:bg-accent/5 transition-all group">
              <Icon name="Lightbulb" size={32} className="text-accent mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">Консультации</h3>
              <p className="text-gray-400">Выбор темы, позиционирование, авторское право, издательская стратегия</p>
            </Card>

            <Card className="bg-white/5 border-accent/20 p-8 hover:bg-accent/5 transition-all group">
              <Icon name="Package" size={32} className="text-accent mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">Издание книги под ключ</h3>
              <p className="text-gray-400">Полный цикл издательского процесса от идеи до готовой книги</p>
            </Card>

            <Card className="bg-white/5 border-accent/20 p-8 hover:bg-accent/5 transition-all group">
              <Icon name="TrendingUp" size={32} className="text-accent mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">Продажа и продвижение</h3>
              <p className="text-gray-400">Эффективные стратегии выхода на рынок и увеличения продаж</p>
            </Card>

            <Card className="bg-white/5 border-accent/20 p-8 hover:bg-accent/5 transition-all group">
              <Icon name="PenTool" size={32} className="text-accent mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">Обучение писательству</h3>
              <p className="text-gray-400">Развитие навыков создания качественного контента</p>
            </Card>

            <Card className="bg-white/5 border-accent/20 p-8 hover:bg-accent/5 transition-all group">
              <Icon name="Star" size={32} className="text-accent mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">Развитие личного бренда</h3>
              <p className="text-gray-400">Издание книги как инструмент построения экспертности</p>
            </Card>
          </div>

          <div className="bg-accent text-black rounded-2xl p-12 text-center">
            <h3 className="text-3xl font-bold mb-6">Работала с ведущими компаниями и авторами</h3>
            <div className="space-y-4 text-lg">
              <p className="font-semibold">Издательства: АСТ, Эксмо, Рипол, Феникс</p>
              <p className="font-semibold">Компании: EKF, Legrand, National Geographic, Посольство Удмуртии в Москве, Ассоциация бизнес-тренеров России</p>
              <p className="font-semibold">Авторы бестселлеров: А. Парабеллум, А. Левитас, В. Якуба, И. Валинуров, Р. Гандапас, М. Поташов, Ч. Дзотти, Д. Атерлей, М. Гузманов</p>
              <p className="mt-6">30+ онлайн марафонов · Выступала со сцены на аудиторию более 300 человек</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-32 px-6 bg-black border-t border-accent/20">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-6xl font-bold mb-6">
              <span className="text-white">Свяжитесь </span>
              <span className="text-accent">со мной</span>
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-xl text-gray-400">Готова обсудить ваш книжный проект</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="bg-white/5 border-accent/20 p-10 hover:bg-accent/5 transition-all text-center">
              <div className="bg-accent/10 p-5 rounded-full w-fit mx-auto mb-6">
                <Icon name="Send" size={40} className="text-accent" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Telegram</h3>
              <a href="https://t.me/zhannafrolovabooks" className="text-accent hover:text-accent/80 text-lg font-medium">
                @zhannafrolovabooks
              </a>
            </Card>

            <Card className="bg-white/5 border-accent/20 p-10 hover:bg-accent/5 transition-all text-center">
              <div className="bg-accent/10 p-5 rounded-full w-fit mx-auto mb-6">
                <Icon name="Phone" size={40} className="text-accent" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Телефон</h3>
              <a href="tel:+79951180102" className="text-accent hover:text-accent/80 text-lg font-medium">
                +7 995 118 01 02
              </a>
            </Card>
          </div>

          <div className="flex items-center justify-center gap-3 text-gray-400 mb-12">
            <Icon name="MapPin" size={24} className="text-accent" />
            <span className="text-lg">г. Москва</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-accent text-black hover:bg-accent/90 text-lg px-12 py-7 font-semibold"
              onClick={() => window.location.href = 'https://t.me/zhannafrolovabooks'}
            >
              <Icon name="Send" size={20} className="mr-2" />
              Написать в Telegram
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-black text-lg px-12 py-7 font-semibold"
              onClick={() => window.location.href = 'tel:+79951180102'}
            >
              <Icon name="Phone" size={20} className="mr-2" />
              Позвонить
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-accent/20 bg-black">
        <div className="container mx-auto text-center text-gray-500">
          <p>&copy; 2024 Жанна Фролова. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;