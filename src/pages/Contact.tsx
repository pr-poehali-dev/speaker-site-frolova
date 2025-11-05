import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import Navigation from "@/components/Navigation";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 flex items-center justify-center px-4 pt-24 pb-20">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-5xl font-bold mb-8 text-center">Контакты</h1>
          <p className="text-xl mb-16 text-muted-foreground text-center">
            Свяжитесь со мной для консультации или сотрудничества
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="p-10">
              <div className="flex flex-col items-center gap-4">
                <div className="bg-accent/10 p-5 rounded-full">
                  <Icon name="Send" size={40} className="text-accent" />
                </div>
                <div className="text-center">
                  <div className="font-semibold text-xl mb-3">Telegram</div>
                  <a href="https://t.me/zhannafrolovabooks" className="text-accent hover:underline text-lg">
                    @zhannafrolovabooks
                  </a>
                </div>
              </div>
            </Card>
            
            <Card className="p-10">
              <div className="flex flex-col items-center gap-4">
                <div className="bg-accent/10 p-5 rounded-full">
                  <Icon name="Phone" size={40} className="text-accent" />
                </div>
                <div className="text-center">
                  <div className="font-semibold text-xl mb-3">Телефон</div>
                  <a href="tel:+79951180102" className="text-accent hover:underline text-lg">
                    +7 995 118 01 02
                  </a>
                </div>
              </div>
            </Card>
          </div>

          <div className="flex items-center justify-center gap-3 text-muted-foreground mb-12 text-lg">
            <Icon name="MapPin" size={24} />
            <span>г. Москва</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="text-lg px-10 py-6"
              onClick={() => window.location.href = 'https://t.me/zhannafrolovabooks'}
            >
              <Icon name="Send" size={20} className="mr-2" />
              Написать в Telegram
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-10 py-6"
              onClick={() => window.location.href = 'tel:+79951180102'}
            >
              <Icon name="Phone" size={20} className="mr-2" />
              Позвонить
            </Button>
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

export default Contact;
