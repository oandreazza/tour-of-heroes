FROM mauricioweb/laravel-env

ENV HOME /var/www/api/

WORKDIR $HOME

RUN  git clone https://github.com/oandreazza/tour-of-heroes-api.git .

RUN composer install

ADD .env $HOME

EXPOSE 80

CMD php -S 0.0.0.0:80 -t public
