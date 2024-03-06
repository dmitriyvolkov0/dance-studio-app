# dance-studio36.ru - веб-приложение для студии танцев в Воронеже.

Это веб-приложение разработано для решения проблем, с которыми сталкиваются танцевальные студии при организации записи на занятия и учете платежей. Приложение предоставляет удобный и эффективный способ управления занятиями как для организаторов студии, так и для студентов.

## Предпосылки
У студии танцев была проблема - неудобная запись на занятия. У организатора была группа в мессенджере, куда выкладывались новые записи на занятия. Люди записывались посредством личных сообщений, в следствии чего получалась каша. Много людей записывалось на занятия, потом их отменяло. Всё это было тяжело учесть. Также бывало такое, что люди просто не приходили на занятия и организатор не просто оставался без денег, а еще и был должен за аренду зала. Было принято решение создать что-то, что поможет всё это систиматизировать.

## Функциональность
- Регистрация пользователей: Пользователи могут зарегистрироваться, используя свою электронную почту или аккаунт Google.
- Профиль пользователя: После входа в систему пользователи могут получить доступ к своему профилю, где они могут узнать свой текущий баланс, просмотреть посещенные занятия и связаться с технической поддержкой.
- Список занятий: Пользователи могут просматривать доступные и отмененные занятия. Они могут увидеть дату, время, количество доступных мест и другие детали для каждого занятия.
- Запись на занятия: Пользователи могут записаться на любое доступное занятие, если у них достаточный баланс. Приложение отслеживает количество участников для каждого занятия.
- Политика возврата средств: Если занятие отменяется более чем за 24 часа до начала, приложение автоматически возвращает средства пользователю на баланс. В противном случае, средства остаются у организатора.
- Поддержка: В приложении реализованы функции связи с технической поддержкой.
- Уведомления: Реализована система уведомлений пользователей.
## Админ-панель
Для того, чтобы администратор мог управлять работой данного приложения было разработано еще одно веб-приложение (своего рода CMS), в котором администратор мог делать следующее:
- управлять пользователями;
- создавать, читать, изменять, отменять занятия (в случае отмены занятия администратором все средства автоматически вернуться пользователям на баланс);
- получать отчеты по финансам;
- вести диалог с пользователем от имени тех.поддержки;
- оповещать пользователей об изменениях посредством уведомлений
  
Админ-панель была размещена в отдельном [репозитории](https://github.com/dmitriyvolkov0/dance-studio-app-admin)

## Скриншоты
<img width="200px" src="/screenshots/1.jpg" alt="Скриншот" caption="Скриншот">
<img width="200px" src="/screenshots/2.jpg" alt="Скриншот" caption="Скриншот">
<img width="200px" src="/screenshots/3.jpg" alt="Скриншот" caption="Скриншот">
<img width="200px" src="/screenshots/4.jpg" alt="Скриншот" caption="Скриншот">
<img width="200px" src="/screenshots/5.jpg" alt="Скриншот" caption="Скриншот">
<img width="200px" src="/screenshots/6.jpg" alt="Скриншот" caption="Скриншот">
