# Proyecto Registrar Consumos
## Como visualizar el proyecto localmente. 


Escriba en el buscador de Windows, símbolo de sistema.
Una vez que tenga abierto la consola de comandos o símbolo de sistema,
pegué la siguiente línea. 
```sh
git clone https://github.com/miguelpl32/Consumos.git
```
y pulse enter.
Se descargará una carpeta. Y dentro de ella tendrá dos carpetas, una llamada front y otra llamada back.
Cada una de ellas debe abrirlas individualmente con su editor de código, como Visual Studio Code.  
Una vez que están abiertas en Visual Studio pulse Crtl + ñ para que se abra la terminal integrada del editor,
debemos situarnos dentro de la carpeta backend como se muestra a continuación.
```sh 
PS C:\Users\Miguel\Desktop\Wellness\Consumos\backend> npm install
```
Y ejecutamos `npm install` para que se descarguen todas las dependencias del proyecto.  
Cuando termine de descargar las dependencias ejecutamos el siguiente comando
Y para iniciar la aplicación del back debe ejecutar `npm run start`. 
```sh
PS C:\Users\Miguel\Desktop\Wellness\Consumos\backend> npm run start
```
Con esto ya tenemos ejecutándose la parte del back-end y nos mostrará un mensaje 
```sh
El servidor esta corriendo
BD Conectada
```

Para ejecutar la parte del front, debemos realizar lo siguiente.
En el Visual Studio pulsamos Crtl + ñ para que se nos abra la terminal integrada del editor.
No situamos dentro de la carpeta front.
Ejecutamos `npm install`
```sh 
C:\Users\Miguel\Desktop\Wellness\Consumos\front> npm install
```
Después ejecutamos `ng serve -o`
```sh
C:\Users\Miguel\Desktop\Wellness\Consumos\front> ng serve -o
```

Cuando termine de compilar se nos abrirá automáticamente una pestaña de nuestro navegador con el proyecto ejecutándose.

### Proyecto Realizado siguiendo el stack MEAN.
Tecnologias utilizadas.
- [node.js](https://nodejs.org/en/)
- [angular](https://angular.io/)
- [mongodb](https://www.mongodb.com/)
- [express](expressjs.com)
- [bootstrap](getbootstrap.com)
- [toastr](npmjs.com/package/toastr)
- [typescript](https://www.typescriptlang.org/)
- [javascript](https://developer.mozilla.org/es/docs/Web/JavaScript)
