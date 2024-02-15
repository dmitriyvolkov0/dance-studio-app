<?php
    $secret_key = 'hNy5GWIQRN373nQcFR3E5q84';
    $sha1 = sha1( $_POST['notification_type'] . '&'. $_POST['operation_id']. '&' . $_POST['amount'] . '&643&' . $_POST['datetime'] . '&'. $_POST['sender'] . '&' . $_POST['codepro'] . '&' . $secret_key. '&' . $_POST['label'] );
    if ($sha1 != $_POST['sha1_hash'] ) {
        exit(); //Верификация не пройдена
    }

    require __DIR__.'/vendor/autoload.php';
    use Kreait\Firebase\Factory;

    $factory = (new Factory)
        ->withServiceAccount('serviceAccountKey.json')
        ->withDatabaseUri('https://dance-studio-a8e8b-default-rtdb.firebaseio.com');
    $database = $factory->createDatabase();

    if($_POST['label']){
        $userUid = $_POST['label'];
        $amount = $_POST['amount'];
        $userBalance = $database->getReference('users/'.$userUid.'/balance')->getValue(); //Получаем баланс пользователя
        $setBalance = $database->getReference('users/'.$userUid.'/balance')->set($userBalance + $amount); //Записываем новый баланс в бд
        $notificationObj = [
            'amount' => $amount,
            'notificationCreated' => date('D M d Y H:i:s \G\M\TO (T)'),
            'title' => 'Пополнение баланса',
            'type' => 'money',
        ];
        $pushRef = $database->getReference('users/'.$userUid.'/notifications')->push(); //Создаем новое уведомление о пополнении
        $notificationObj['uid'] = $pushRef->getKey(); //получаем uid текущей записи
        $pushRef->set($notificationObj); //Добавляем в данную запись её uid
    }
?>