<?
if(
(isset($_POST['name'])
&&$_POST['name']!="")
&&(isset($_POST['email'])
&&$_POST['email']!="")
&&(isset($_POST['phone'])   
&&$_POST['phone']!="")
){ //Проверка отправилось ли наше поля name и не пустые ли они
        $to = 'finance@novess.uk'; //Почта получателя, через запятую можно указать сколько угодно адресов
        $subject = 'Letter from the form on the site - novess.uk'; //Заголовок сообщения
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>      
                        <p>Name: <b>'.$_POST['name'].'</b></p>
                        <p>Email: '.$_POST['email'].'</p>
                        <p>Phone: '.$_POST['phone'].'</p>                                           
                    </body>
                </html>'; //Текст нащего сообщения можно использовать HTML теги
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
        $headers .= "Letter from the form on the site - novess.uk"; //Наименование и почта отправителя
        mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
        echo "da";
    }
    else {
        echo 'no';
    }
?>