import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 flex items-center justify-center px-4 pt-24 pb-20">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <h1 className="text-6xl font-bold mb-8 leading-tight">Жанна Фролова</h1>
              <div className="space-y-3 text-2xl mb-10">
                <p>Издатель</p>
                <p>Предприниматель</p>
                <p>Книжный продюсер</p>
                <p>Преподаватель</p>
                <p>Трекер</p>
              </div>
              <div className="flex flex-col gap-4 mb-10 text-lg">
                <a href="https://t.me/zhannafrolovabooks" className="flex items-center gap-3 text-accent hover:underline">
                  <Icon name="Send" size={24} />
                  @zhannafrolovabooks
                </a>
                <a href="tel:+79951180102" className="flex items-center gap-3 text-accent hover:underline">
                  <Icon name="Phone" size={24} />
                  +7 995 118 01 02
                </a>
                <div className="flex items-center gap-3">
                  <Icon name="MapPin" size={24} />
                  г. Москва
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button size="lg" className="text-lg px-10 py-6 w-full sm:w-auto">
                    Связаться со мной
                  </Button>
                </Link>
                <Link to="/about">
                  <Button size="lg" variant="outline" className="text-lg px-10 py-6 w-full sm:w-auto">
                    Узнать больше
                  </Button>
                </Link>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="aspect-[3/4] rounded-lg overflow-hidden bg-secondary shadow-2xl">
                <img 
                  src="https://cdn.poehali.dev/files/ae2e5bcc-733f-4b8b-b19c-f022d9907644.jpg" 
                  alt="Жанна Фролова"
                  className="w-full h-full object-cover object-top"
                />
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

export default Index;
