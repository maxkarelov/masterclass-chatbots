Ссылки
======
* Google Cloud Functions проект [https://console.cloud.google.com/functions/list?project=masterclass-chatbots](https://console.cloud.google.com/functions/list?project=masterclass-chatbots)
* Dialog Flow Console [https://console.dialogflow.com/api-client](https://console.dialogflow.com/api-client)
* Презентация [https://docs.google.com/presentation/d/1aN87tZA0tOKu7tNcAqhaWFQIdvGY_s2Fvz_lUDNGWu0](https://docs.google.com/presentation/d/1aN87tZA0tOKu7tNcAqhaWFQIdvGY_s2Fvz_lUDNGWu0)


Содержание
=================

1. [Создание группы](#1-Cоздание-группы)
   * [Нажать создать группу](#11-Нажать-создать-группу)
   * [Выбрать тип группы](#12-Выбрать-тип-группы)
   * [Добавить название](#13-Добавить-название)
2. [Настройка группы](#2-Настройка-группы)
   * [Перейти в управление сообществом](#21-Перейти-в-Управление-сообществом)
   * [Перейти в "Работа с API"](#22-Перейти-в-Работа-с-api)
   * [Создать "Ключ доступа"](#23-Создать-Ключ-достапа)
   * [Скопировать](#24-Скопировать-на-будущее)
   * [Перейти во вкладку "Callback API"](#25-Перейти-во-вкладку-callback-api)
   * [Выбрать "Тип событий" - "Входящие сообщения"](#26-Выбрать-тип-событий---Входящие-сообщения)
   * [Выбрать любой "Секретный ключ"](#27-Выбрать-любой-Секретный-ключ-Например-12345)
   * [Вставить адрес HTTP Webhook бота из шага 3.3](#28-Вставить-адрес-http-webhook-бота-из-шага-33)
   * [Включить "Сообщения" в группе](#29-Включить-Сообщения-в-группе)
3. [Создание функции обработчика](#3-Cоздание-функции-обработчика)
   * [Нажать создать функцию](#31-Нажать-создать-функцию)
   * [Выбрать название](#32-Выбрать-название)
   * [Добавить содержимое файлов bot/botHandler.js и bot/package.json]()
4. [Создание агента](#4-Создание-агента)
   * [Нажать создать агента](#41-Нажать-создать-агента)
   * [Выбрать название](#42-Выбрать-название)
   * [Выбрать язык](#43-Выбрать-язык)
   * [Нажать "Создать"](#44-Нажать-Создать)
5. [Создание сущностей](#5-Создание-сущностей)   
   * [Нажать создать сущность](#51-Нажать-создать-сущность)
   * [Указать название](#52-Указать-название)
   * [Переключиться в raw режим](#53-Переключиться-в-сырой-режим)
   * [Добавить CSV с жанрами из datasets/genres.csv]()
   * [Сохранить сущность](#55-Сохранить-сущность)
6. [Создание интента](#6-Создание-интента)   
   * [Нажать создать интент](#61-Нажать-создать-интент)
   * [Выбрать название](#62-Выбрать-название)
   * [Добавить параметры](#63-Добавить-параметры)
   * [Указать название action и добавить опциональный параметр - жанр](#64-Указать-название)
   * [Добавить обязательный параметр - дата, используя ситемную сущность \@sys.date]()
   * [Придумать и добавить размеченные фразы для обучения модели](#66-Придумать-и-добавить-размеченные-фразы-для-обучения-модели)
   * [Включить fulfillment](#67-Включить-fulfillment)
   * [Включить веб хук](#68-Включить-веб-хук)
   * [Сохранить интент](#69-Сохранить-интент)
7. [Настройка веб-хука](#7-настройка-веб-хука)
   * [Открыть настройки Fulfillment](#71-Открыть-настройки-Fulfillment)
   * [Включить встроенный редактор](#72-Включить-встроенный-редактор)
   * [Скопировать содержимое webhook/webhook.js и webhook/package.json в редактор и подеплоить cloud function]()
   * [Включить web demo интеграцию и протестировать бота](#73-Включить-web-demo-интеграцию-и-протестировать-бота)
8. [Потестировать бота!]()


## 1 Создание группы
### 1.1 Нажать создать группу
![](https://raw.githubusercontent.com/maxkarelov/masterclass-chatbots/master/docs/create_group_1.png)

### 1.2 Выбрать тип группы
![](https://raw.githubusercontent.com/maxkarelov/masterclass-chatbots/master/docs/create_group_2.png)

### 1.3 Добавить название
![](https://raw.githubusercontent.com/maxkarelov/masterclass-chatbots/master/docs/create_group_3.png)

## 2 Настройка группы
### 2.1 Перейти в "Управление сообществом"
![](https://raw.githubusercontent.com/maxkarelov/masterclass-chatbots/master/docs/setup_group_1.png)

### 2.2 Перейти в "Работа с API"
![](https://raw.githubusercontent.com/maxkarelov/masterclass-chatbots/master/docs/setup_group_2.png)

### 2.3 Создать "Ключ доступа"
![](https://raw.githubusercontent.com/maxkarelov/masterclass-chatbots/master/docs/setup_group_3.png)

### 2.4 Скопировать на будущее
![](https://raw.githubusercontent.com/maxkarelov/masterclass-chatbots/master/docs/setup_group_4.png)

### 2.5 Перейти во вкладку "Callback API"
![](https://raw.githubusercontent.com/maxkarelov/masterclass-chatbots/master/docs/enable_api_1.png)

### 2.6 Выбрать "Тип событий" - "Входящие сообщения"
![](https://raw.githubusercontent.com/maxkarelov/masterclass-chatbots/master/docs/enable_api_2.png)

### 2.7 Выбрать любой "Секретный ключ". Например "12345"
![](https://raw.githubusercontent.com/maxkarelov/masterclass-chatbots/master/docs/enable_api_3.png)

### 2.8 Вставить адрес HTTP Webhook бота из шага 3.3
![](https://raw.githubusercontent.com/maxkarelov/masterclass-chatbots/master/docs/enable_api_4.png)

### 2.9 Включить "Сообщения" в группе
![](https://raw.githubusercontent.com/maxkarelov/masterclass-chatbots/master/docs/enable_messages_1.png)

## 3 Создание функции обработчика
### 3.1 Нажать создать функцию
![](https://raw.githubusercontent.com/maxkarelov/masterclass-chatbots/master/docs/create_function_1.png)

### 3.2 Выбрать название
![](https://raw.githubusercontent.com/maxkarelov/masterclass-chatbots/master/docs/create_function_2.png)

### 3.3 Добавить содержимое файлов bot/botHandler.js и bot/package.json. Скопировать адрес HTTP функции
![](https://raw.githubusercontent.com/maxkarelov/masterclass-chatbots/master/docs/create_function_3.png)

## 4 Создание агента
### 4.1 Нажать создать агента
![](https://raw.githubusercontent.com/maxkarelov/masterclass-chatbots/master/docs/create_agent_1.png)

### 4.2 Выбрать название
![](https://raw.githubusercontent.com/maxkarelov/masterclass-chatbots/master/docs/create_agent_2.png)

### 4.3 Выбрать язык
![](https://raw.githubusercontent.com/maxkarelov/masterclass-chatbots/master/docs/create_agent_3.png)

### 4.4 Нажать "создать"
![](https://raw.githubusercontent.com/maxkarelov/masterclass-chatbots/master/docs/create_agent_4.png)

## 5 Создание сущности
### 5.1 Нажать создать сущность
![](https://raw.githubusercontent.com/maxkarelov/masterclass-chatbots/master/docs/create_entity_1.png)

### 5.2 Указать название сущности
![](https://raw.githubusercontent.com/maxkarelov/masterclass-chatbots/master/docs/create_entity_2.png)

### 5.3 Переключится в сырой режим
![](https://raw.githubusercontent.com/maxkarelov/masterclass-chatbots/master/docs/create_entity_3.png)

### 5.4 Добавить CSV с возможными жанрами из datasets/genres.csv
![](https://raw.githubusercontent.com/maxkarelov/masterclass-chatbots/master/docs/create_entity_4.png)

### 5.5 Сохранить сущность
![](https://raw.githubusercontent.com/maxkarelov/masterclass-chatbots/master/docs/create_entity_5.png)

## 6 Создание интента
### 6.1 Нажать создать интент
![](https://raw.githubusercontent.com/maxkarelov/masterclass-chatbots/master/docs/create_intent_1.png)

### 6.2 Выбрать название
![](https://raw.githubusercontent.com/maxkarelov/masterclass-chatbots/master/docs/create_intent_2.png)

### 6.3 Добавить параметры
![](https://raw.githubusercontent.com/maxkarelov/masterclass-chatbots/master/docs/create_intent_3.png)

### 6.4 Указать название action и добавить опциональный параметр - жанр
![](https://raw.githubusercontent.com/maxkarelov/masterclass-chatbots/master/docs/create_intent_4.png)

### 6.5 Добавить обязательный параметр - дата, используя системную сущность \@sys.date
![](https://raw.githubusercontent.com/maxkarelov/masterclass-chatbots/master/docs/create_intent_5.png)

### 6.6 Придумать и добавить размеченные фразы для обучения модели
![](https://raw.githubusercontent.com/maxkarelov/masterclass-chatbots/master/docs/create_intent_6.png)

### 6.7 Включить fulfillment
![](https://raw.githubusercontent.com/maxkarelov/masterclass-chatbots/master/docs/create_intent_7.png)

### 6.8 Включить веб хук
![](https://raw.githubusercontent.com/maxkarelov/masterclass-chatbots/master/docs/create_intent_8.png)

### 6.9 Сохранить интент
![](https://raw.githubusercontent.com/maxkarelov/masterclass-chatbots/master/docs/create_intent_9.png)

## 7 Настройка веб хука
### 7.1 Открыть настройки fulfillment
![](https://raw.githubusercontent.com/maxkarelov/masterclass-chatbots/master/docs/create_webhook_1.png)

### 7.2 Включить встроенный редактор
![](https://raw.githubusercontent.com/maxkarelov/masterclass-chatbots/master/docs/create_webhook_2.png)

### 7.3 Скопировать содержимое webhook/webhook.js и webhook/package.json в редактор и подеплоить cloud function
![](https://raw.githubusercontent.com/maxkarelov/masterclass-chatbots/master/docs/create_webhook_3.png)

### 7.4 Включить web demo интеграцию и протестировать бота
![](https://raw.githubusercontent.com/maxkarelov/masterclass-chatbots/master/docs/create_webhook_4.png)
