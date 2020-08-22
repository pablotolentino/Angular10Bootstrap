# Proyecto en Angular 10.0.7 y Ng Bootstrap 7.0.0
Proyecto Frontend con angular 10.0.7 y ng bootstrap version 7.0.0
## Software requerido previamente instalado
- nodejs
- visual code
- npm
- typescript
## Crear proyecto
- crear carpeta Angular10Bootstrap
- ingresar a la nueva carpeta
- abrir la consola de comandos desde la carpeta
- ejecutar el siguiente comando, el siguiente comando instala localmente la versión 10.0.7 de angular-cli

`npm install @angular/cli@10.0.7`

## Instalar bootstrap
- ejecutar el siguiente comando para instalar ng bootstrap

`ng add @ng-bootstrap/ng-bootstrap@7.0.0`
- documentación de ng bootstrap

https://ng-bootstrap.github.io/#/home

## Configurar variables de ambiente
https://codinglatte.com/posts/angular/environment-variables-angular/

## publicar en IIS
https://indepth.dev/deploy-an-angular-application-to-iis/

## Métodos para configurar refresh de rutas
  RouterModule.forRoot(routes, { useHash: true })
  
  o

  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],

  https://medium.com/wineofbits/angular-2-routing-404-page-not-found-on-refresh-a9a0f5786268
