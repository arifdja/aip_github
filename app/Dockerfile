FROM php:7.2-apache

RUN apt-get update && apt-get install -y \
    libicu-dev \
    zlib1g-dev \
    libpng-dev \
    libwebp-dev \
    libjpeg62-turbo-dev \
    libxpm-dev \
    libfreetype6-dev

RUN docker-php-ext-configure gd \
    --with-gd \
    --with-jpeg-dir \
    --with-png-dir \
    --with-zlib-dir \
    --with-xpm-dir \
    --with-freetype-dir \
    --with-webp-dir 

RUN docker-php-ext-install gd intl mysqli 

# Copy SSL certificate and key
COPY ./cert/localhost.crt /etc/ssl/certs/localhost.crt
COPY ./cert/localhost.key /etc/ssl/private/localhost.key

# Copy the custom Apache virtual host config
COPY ./cert/my-httpd-vhosts.conf /etc/apache2/sites-available/my-ssl.conf

# Enable SSL module, configure Apache for PHP support, and enable our SSL site configuration
RUN a2enmod ssl && \
    a2enmod rewrite && \
    a2dissite 000-default default-ssl && \
    a2ensite my-ssl
