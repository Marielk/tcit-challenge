# TCIT – React Native Challenge

## Acerca de este proyecto 🚀

Aplicación móvil desarrollada en **React Native** utilizando **Expo**, que permite crear, listar, filtrar y eliminar posts.  

---

## Funcionalidades implementadas

- ✅ **Listar posts** (datos iniciales simulados)
- ✅ **Filtrar posts por nombre**
- ✅ **Crear nuevos posts**
- ✅ **Eliminar posts existentes**

---

## 🔧 Requisitos del entorno

- **Node.js v20.19.4**
- npm
- Expo Go instalado en dispositivo físico o emulador Android

Documentación oficial:
[Expo](https://docs.expo.dev/)
[React Native](https://reactnative.dev/docs/getting-started)

---

## 🚀 Instalación y ejecución del proyecto

```bash
git clone <url-del-repositorio>
cd tcit-challenge
npm install
npx expo start --go --android
```

Una vez iniciado el servidor de desarrollo, la aplicación puede ejecutarse en un emulador Android o en un dispositivo físico utilizando Expo Go.

---

## Estructura de la aplicación

La aplicación se organiza en tres bloques principales, tal como se solicita en el enunciado:

1. **Filtro**
   - Input de texto
   - Botón de búsqueda
2. **Lista de posts**
   - Visualización en formato de tabla
   - Acción para eliminar posts
3. **Formulario**
   - Inputs para nombre y descripción
   - Botón para crear nuevos posts

---

## Arquitectura y decisiones técnicas

- **React Native + Expo** como stack principal
- **Redux Toolkit** para el manejo de estado global
- Arquitectura **feature-based**, separando responsabilidades por dominio
- Componentes reutilizables centralizados en `shared/components`
- Estilos desacoplados mediante **design tokens** y estilos compartidos
- Servicio local que emula la obtención de datos con latencia simulada
- No se utiliza backend ni API externa, conforme a lo solicitado

---

## Codeado por ✒️

- **Mariel Quezada** - _Developer_ - [Marielk](https://github.com/Marielk)
:woman: :computer:.
