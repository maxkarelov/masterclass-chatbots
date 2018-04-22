Ссылки
======
* Google Cloud Functions проект [https://console.cloud.google.com/functions/list?project=masterclass-chatbots](https://console.cloud.google.com/functions/list?project=masterclass-chatbots)
* Dialog Flow Console [https://console.dialogflow.com/api-client](https://console.dialogflow.com/api-client)
* Презентация [https://docs.google.com/presentation/d/1aN87tZA0tOKu7tNcAqhaWFQIdvGY_s2Fvz_lUDNGWu0](https://docs.google.com/presentation/d/1aN87tZA0tOKu7tNcAqhaWFQIdvGY_s2Fvz_lUDNGWu0)
* Hangouts [Hangouts](https://hangouts.google.com/call/Y5nlCvXNt2fMI54f8mh5AAEI)

Service Account: masterclass-chatbots@appspot.gserviceaccount.com
Role: Dialogflow API Client

Содержание
=================
- [1 Создание группы](#1-Создание-группы)
	- [1.1 Нажать создать группу](#11-Нажать-создать-группу)
	- [1.2 Выбрать тип группы](#12-Выбрать-тип-группы)
	- [1.3 Добавить название](#13-Добавить-название)
- [2 Настройка группы](#2-Настройка-группы)
	- [2.1 Перейти в "Управление сообществом"](#21-Перейти-в-"Управление-сообществом")
	- [2.2 Перейти в "Работа с API"](#22-Перейти-в-Работа-с-API)
	- [2.3 Создать "Ключ доступа"](#23-Создать-Ключ-доступа)
	- [2.4 Скопировать на будущее](#24-Скопировать-на-будущее)
	- [2.5 Перейти во вкладку "Callback API"](#25-Перейти-во-вкладку-Callback-API)
	- [2.6 Выбрать "Тип событий" - "Входящие сообщения"](#26-Выбрать-Тип-событий---Входящие-сообщения)
	- [2.7 Выбрать любой "Секретный ключ". Например "12345"](#27-Выбрать-любой-Секретный-ключ-Например-12345)
	- [2.8 Вставить адрес HTTP Webhook бота из шага 3.3](#28-Вставить-адрес-HTTP-Webhook-бота-из-шага-33)
	- [2.9 Включить "Сообщения" в группе](#29-Включить-Сообщения-в-группе)
- [3 Создание функции обработчика](#3-Создание-функции-обработчика)
	- [3.1 Нажать создать функцию](#31-Нажать-создать-функцию)
	- [3.2 Выбрать название](#32-Выбрать-название)
	- [3.3 Добавить содержимое файлов bot/botHandler.js и bot/package.json. Скопировать адрес HTTP функции](#33-Добавить-содержимое-файлов-botbotHandlerjs-и-botpackagejson-Скопировать-адрес-HTTP-функции)
- [4 Создание агента](#4-Создание-агента)
	- [4.1 Нажать создать агента](#41-Нажать-создать-агента)
	- [4.2 Выбрать название](#42-Выбрать-название)
	- [4.3 Выбрать язык](#43-Выбрать-язык)
	- [4.4 Нажать "создать"](#44-Нажать-создать)
- [5 Настройка доступа](#5-Настройка-доступа)
	- [5.1 Открыть гугл клауд проект агента (кликнув по его названию в dialogflow) и открыть IAM](#51-Открыть-гугл-клауд-проект-агента-кликнув-по-его-названию-в-dialogflow-и-открыть-IAM)
	- [5.2 Добавить наш сервис аккаунт masterclass-chatbots@appspot.gserviceaccount.com с ролью Dialogflow API Client в проект](#52-Добавить-наш-сервис-аккаунт-masterclass-chatbots@appspotgserviceaccountcom-с-ролью-Dialogflow-API-Client-в-проект)
- [6 Создание сущности](#6-Создание-сущности)
	- [6.1 Нажать создать сущность](#61-Нажать-создать-сущность)
	- [6.2 Указать название сущности](#62-Указать-название-сущности)
	- [6.3 Переключится в сырой режим](#63-Переключится-в-сырой-режим)
	- [6.4 Добавить CSV с возможными жанрами из datasets/genres.csv](#64-Добавить-CSV-с-возможными-жанрами-из-datasetsgenrescsv)
	- [6.5 Сохранить сущность](#65-Сохранить-сущность)
- [7 Создание интента](#7-Создание-интента)
	- [7.1 Нажать создать интент](#71-Нажать-создать-интент)
	- [7.2 Выбрать название](#72-Выбрать-название)
	- [7.3 Добавить параметры](#73-Добавить-параметры)
	- [7.4 Указать название action и добавить опциональный параметр - жанр](#74-Указать-название-action-и-добавить-опциональный-параметр---жанр)
	- [7.5 Добавить обязательный параметр - дата, используя системную сущность \@sys.date](#75-Добавить-обязательный-параметр---дата,-используя-системную-сущность-sysdate)
	- [7.6 Придумать и добавить размеченные фразы для обучения модели](#76-Придумать-и-добавить-размеченные-фразы-для-обучения-модели)
	- [7.7 Включить fulfillment](#77-Включить-fulfillment)
	- [7.8 Включить веб хук](#78-Включить-веб-хук)
	- [7.9 Сохранить интент](#79-Сохранить-интент)
- [8 Настройка веб хука](#8-Настройка-веб-хука)
	- [8.1 Создать новую функцию вебхук по аналогии функцией обработчиком](#81-Создать-новую-функцию-вебхук-по-аналогии-функцией-обработчиком)
	- [8.2 Скопировать содержимое webhook/webhook.js и webhook/package.json в редактор и подеплоить cloud function](#82-Скопировать-содержимое-webhookwebhookjs-и-webhookpackagejson-в-редактор-и-подеплоить-cloud-function)
	- [8.3 Открыть настройки fulfillment и включить webhook. Проставить в нем URL созданной функции-вебхука](#83-Открыть-настройки-fulfillment-и-включить-webhook-Проставить-в-нем-URL-созданной-функции-вебхука)
	- [8.4 Включить web demo интеграцию](#84-Включить-web-demo-интеграцию)
	- [8.5 Протестировать бота](#85-Протестировать-бота)
- [9 Интеграция vk и dialogflow](#9-Интеграция-vk-и-dialogflow)
	- [9.1 Скопировать project-id dialogflow агента](#91-Скопировать-project-id-dialogflow-агента)
	- [9.2 Отредактировать функцию botHandler](#92-Отредактировать-функцию-botHandler)
		- [9.2.1 Заменить echoMessage(user_id, message) на handleMessage(user_id, message)](#921-Заменить-echoMessageuser_id-message-на-handleMessageuser_id-message)
		- [9.2.2 Указать свой DF_PROJECT_ID в botHandler.js](#922-Указать-свой-DF_PROJECT_ID-в-botHandlerjs)

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


## 5 Настройка доступа
### 5.1 Открыть гугл клауд проект агента (кликнув по его названию в dialogflow) и открыть IAM
![](https://raw.githubusercontent.com/maxkarelov/masterclass-chatbots/master/docs/iam_1.png)

### 5.2 Добавить наш сервис аккаунт masterclass-chatbots@appspot.gserviceaccount.com с ролью Dialogflow API Client в проект
![](https://raw.githubusercontent.com/maxkarelov/masterclass-chatbots/master/docs/iam_2.png)

## 6 Создание сущности
### 6.1 Нажать создать сущность
![](https://raw.githubusercontent.com/maxkarelov/masterclass-chatbots/master/docs/create_entity_1.png)

### 6.2 Указать название сущности
![](https://raw.githubusercontent.com/maxkarelov/masterclass-chatbots/master/docs/create_entity_2.png)

### 6.3 Переключится в сырой режим
![](https://raw.githubusercontent.com/maxkarelov/masterclass-chatbots/master/docs/create_entity_3.png)

### 6.4 Добавить CSV с возможными жанрами из datasets/genres.csv
![](https://raw.githubusercontent.com/maxkarelov/masterclass-chatbots/master/docs/create_entity_4.png)

### 6.5 Сохранить сущность
![](https://raw.githubusercontent.com/maxkarelov/masterclass-chatbots/master/docs/create_entity_5.png)

## 7 Создание интента
### 7.1 Нажать создать интент
![](https://raw.githubusercontent.com/maxkarelov/masterclass-chatbots/master/docs/create_intent_1.png)

### 7.2 Выбрать название
![](https://raw.githubusercontent.com/maxkarelov/masterclass-chatbots/master/docs/create_intent_2.png)

### 7.3 Добавить параметры
![](https://raw.githubusercontent.com/maxkarelov/masterclass-chatbots/master/docs/create_intent_3.png)

### 7.4 Указать название action и добавить опциональный параметр - жанр
![](https://raw.githubusercontent.com/maxkarelov/masterclass-chatbots/master/docs/create_intent_4.png)

### 7.5 Добавить обязательный параметр - дата, используя системную сущность \@sys.date
![](https://raw.githubusercontent.com/maxkarelov/masterclass-chatbots/master/docs/create_intent_5.png)

### 7.6 Придумать и добавить размеченные фразы для обучения модели
![](https://raw.githubusercontent.com/maxkarelov/masterclass-chatbots/master/docs/create_intent_6.png)

### 7.7 Включить fulfillment
![](https://raw.githubusercontent.com/maxkarelov/masterclass-chatbots/master/docs/create_intent_7.png)

### 7.8 Включить веб хук
![](https://raw.githubusercontent.com/maxkarelov/masterclass-chatbots/master/docs/create_intent_8.png)

### 7.9 Сохранить интент
![](https://raw.githubusercontent.com/maxkarelov/masterclass-chatbots/master/docs/create_intent_9.png)

## 8 Настройка веб хука
### 8.1 Создать новую функцию вебхук по аналогии функцией обработчиком
### 8.2 Скопировать содержимое webhook/webhook.js и webhook/package.json в редактор и подеплоить cloud function
![](https://raw.githubusercontent.com/maxkarelov/masterclass-chatbots/master/docs/create_webhook_1.png)

### 8.3 Открыть настройки fulfillment и включить webhook. Проставить в нем URL созданной функции-вебхука
![](https://raw.githubusercontent.com/maxkarelov/masterclass-chatbots/master/docs/create_webhook_2.png)

### 8.4 Включить web demo интеграцию
![](https://raw.githubusercontent.com/maxkarelov/masterclass-chatbots/master/docs/create_webhook_3.png)

### 8.5 Протестировать бота
![](https://raw.githubusercontent.com/maxkarelov/masterclass-chatbots/master/docs/create_webhook_4.png)

## 9 Интеграция vk и dialogflow
### 9.1 Скопировать project-id dialogflow агента
![](https://raw.githubusercontent.com/maxkarelov/masterclass-chatbots/master/docs/integrate_1.png)

### 9.2 Отредактировать функцию botHandler
#### 9.2.1 Заменить echoMessage(user_id, message) на handleMessage(user_id, message)
#### 9.2.2 Указать свой DF_PROJECT_ID в botHandler.js
![](https://raw.githubusercontent.com/maxkarelov/masterclass-chatbots/master/docs/integrate_2.png)
