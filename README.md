# REST API
The REST API project you described is built using Node.js and the Express.js framework. It has two main components: the ability to create data files and the ability to create users.

The data files have several properties or arguments, including:

created_by_id: the ID of the user who created the file
name: the name of the file
description: a brief description of the file
file_csv: the CSV file that is associated with the data file
provider: the provider of the data in the file
confirmed: a boolean value indicating whether the data in the file has been confirmed or not
The user information includes:

password: the password for the user account
user_name: the unique username for the user
first_name: the user's first name
last_name: the user's last name
email: the user's email address
is_staff: a boolean value indicating whether the user is a staff member or not
is_active: a boolean value indicating whether the user's account is active or not.
The API likely has endpoints for creating data files and creating users, as well as endpoints for retrieving and updating existing data files and users. The API may also include authentication and authorization to ensure that only authorized users are able to access certain functionality.

## Postman tests:

## Запуск сервера
![start server](./img/console_res.png)
## Cтворення файлу з даними
### Запит
![create file send](./img/create_data_file_send.png)
### Результат
![create file succsess](./img/create_data_files_succsess.png)
## Вивід всих файлів з даними
### Запит
![get files send](./img/get_data_file_send.png)
### Результат
![get_files succsess](./img/get_data_files_succsess.png)
## Вивід конкретного файлу з даними (по id)
### Запит
![get file send](./img/get_data_file_by_id_send.png)
### Результат
![get file succsess](./img/get_data_file_by_id_succsess.png)
## Оновлення файлу з даними (по id)
### До відновлення
![update file before](./img/update_data_file_by_id_before.png)
### Запит
![update file send](./img/update_data_file_by_id_send.png)
### Відповідь
![update file succsess](./img/update_data_file_by_id_succsess.png)
### Результат
![update file res](./img/update_data_file_by_id_result.png)
## Видалення файлу з даними (по id)
### Запит
![delete file send](./img/delete_data_file_by_id_send.png)
### Відповідь
![delete file succsess](./img/delete_data_file_by_id_succsess.png)
### Результат
![delete file res](./img/delete_data_file_by_id_result.png)
