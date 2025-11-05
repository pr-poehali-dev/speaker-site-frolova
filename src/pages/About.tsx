import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import Navigation from "@/components/Navigation";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-5xl font-bold mb-16 text-center">Обо мне</h1>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
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

          <div className="bg-white border border-border p-10 rounded-lg mb-16">
            <h2 className="text-3xl font-semibold mb-8">Образование и карьера</h2>
            <div className="space-y-6">
              <div className="flex gap-6">
                <div className="text-accent font-semibold flex-shrink-0 w-28 text-lg">1998 г.</div>
                <div className="text-lg">Окончание РГУ (ЮФУ) по специальности история, политология</div>
              </div>
              <div className="flex gap-6">
                <div className="text-accent font-semibold flex-shrink-0 w-28 text-lg">1998-1999</div>
                <div className="text-lg">Работа в администрации Ростовской области на предвыборных кампаниях, преподавание в РГУ</div>
              </div>
              <div className="flex gap-6">
                <div className="text-accent font-semibold flex-shrink-0 w-28 text-lg">1998-2003</div>
                <div className="text-lg">Издательство "Феникс", заведующая редакцией</div>
              </div>
              <div className="flex gap-6">
                <div className="text-accent font-semibold flex-shrink-0 w-28 text-lg">2003-2013</div>
                <div className="text-lg">Владелец и руководитель литературного агентства "Книжкин дом"</div>
              </div>
              <div className="flex gap-6">
                <div className="text-accent font-semibold flex-shrink-0 w-28 text-lg">2013-2017</div>
                <div className="text-lg">Заведующая редакцией прикладной литературы в холдинге "АСТ-Эксмо"</div>
              </div>
              <div className="flex gap-6">
                <div className="text-accent font-semibold flex-shrink-0 w-28 text-lg">2016-2025</div>
                <div className="text-lg">Владелец и директор издательства "1000 бестселлеров"</div>
              </div>
            </div>
          </div>

          <div className="bg-secondary/30 p-10 rounded-lg mb-16">
            <h2 className="text-3xl font-semibold mb-8 text-center">Ко мне обращаются</h2>
            
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
          </div>

          <div className="bg-primary text-primary-foreground p-10 rounded-lg">
            <h2 className="text-3xl font-semibold mb-6 text-center">Опыт работы</h2>
            <p className="text-center mb-8 text-lg">Работала с авторами бестселлеров и компаниями</p>
            <div className="text-center space-y-4">
              <div>
                <p className="font-semibold text-lg mb-2">Издательства:</p>
                <p className="text-lg">АСТ, Эксмо, Рипол, Феникс</p>
              </div>
              <div className="mt-6">
                <p className="font-semibold text-lg mb-2">Компании и бренды:</p>
                <p className="text-lg">EKF, Legrand, National Geographic, Посольство Удмуртии в Москве</p>
              </div>
              <div className="mt-6">
                <p className="font-semibold text-lg mb-2">Известные авторы:</p>
                <p className="text-lg">А. Парабеллум, А. Левитас, В. Якуба, И. Валинуров, Р. Гандапас, М. Поташов, Ч. Дзотти, Д. Атерлей, М. Гузманов</p>
              </div>
              <div className="mt-8 space-y-2 opacity-90">
                <p>Проводила обучение авторов совместно с А. Парабеллумом, Е. Иноземцевой и Getpublished</p>
                <p>Более 30 проведенных онлайн марафонов</p>
                <p>Выступала со сцены на аудиторию 300 человек</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2024 Жанна Фролова. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default About;
