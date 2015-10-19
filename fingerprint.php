<?php

    $_POST['Plugins'] = stripslashes($_POST['Plugins']);
    $plugins = json_decode($_POST['Plugins'], 1);

    $_POST['time'] = stripslashes($_POST['time']);
    $time = json_decode($_POST['time'], 1);

    $_POST['useragent'] = stripslashes($_POST['useragent']);
    $useragent = json_decode($_POST['useragent'], 1);

    $_POST['font'] = stripslashes($_POST['font']);
    $font = json_decode($_POST['font'], 1);

    $_POST['yourscreen'] = stripslashes($_POST['yourscreen']);
    $screen = json_decode($_POST['yourscreen'], 1);
	
	
	$db = sqlite_open("fingerprints.db"); 
    //if (!$db) exit("Не удалось создать базу данных!");
  
    //$query_table = sqlite_query($db, "CREATE TABLE big_base (
	  //id INTEGER PRIMARY KEY,
	 // date TEXT,
	 // ip TEXT,
	 // cookie TEXT,
	 // plugins TEXT,
	 // useragent TEXT,
	 // screen TEXT,
	 // timezone TEXT,
	 // fonts TEXT,
	 // summ_hash TEXT,
	 // hex TEXT);");
	 // if (!$query_table) exit("Невозможно создать таблицу в базе данных!"); 

    //конвертирует из одной системы счисления в другую
    function convBase($numberInput, $fromBaseInput, $toBaseInput) {
        if ($fromBaseInput == $toBaseInput)
            return $numberInput;
        $fromBase = str_split($fromBaseInput, 1);
        $toBase = str_split($toBaseInput, 1);
        $number = str_split($numberInput, 1);
        $fromLen = strlen($fromBaseInput);
        $toLen = strlen($toBaseInput);
        $numberLen = strlen($numberInput);
        $retval = '';
        if ($toBaseInput == '0123456789') {
            $retval = 0;
            for ($i = 1; $i <= $numberLen; $i++)
                $retval = bcadd($retval, bcmul(array_search($number[$i - 1], $fromBase), bcpow($fromLen, $numberLen - $i)));
            return $retval;
        }
        if ($fromBaseInput != '0123456789')
            $base10 = convBase($numberInput, $fromBaseInput, '0123456789');
        else
            $base10 = $numberInput;
        if ($base10 < strlen($toBaseInput))
            return $toBase[$base10];
        while ($base10 != '0') {
            $retval = $toBase[bcmod($base10, $toLen)] . $retval;
            $base10 = bcdiv($base10, $toLen, 0);
        }
        return $retval;
    }

    //создает хэш плагинов $fingeplugin и там же заносит новые в базу
    //  $query_table = sqlite_query($db, "CREATE TABLE all_plugins (
	 // id INTEGER PRIMARY KEY,
	//  name TEXT,
	//  number INTEGER
	//);");
   //if (!$query_table) exit("Невозможно создать таблицу в базе данных!"); 	


   foreach ($plugins as $plugin) {
       $result = sqlite_query($db, "SELECT * FROM all_plugins WHERE name='{$plugin}'");
        if (sqlite_num_rows($result) == 0) {
            //записываем в таблицу
            sqlite_query($db, "INSERT INTO all_plugins(name) VALUES('{$plugin}');");
        }
    }

    $fingeplugin = array();
    $qr_result = sqlite_query($db, "select * from all_plugins");
   while ($data = sqlite_fetch_array($qr_result)) {
        $position = (int) $data['id'];
        $plugin_name = $data['name'];
        if (in_array($data['name'], $plugins)) {
           $fingeplugin[$position - 1] = '1';
        } else {
            $fingeplugin[$position - 1] = '0';
        }
    }
    $fingeplugin = implode('', $fingeplugin);


    //определяем ip
    $ip = $_SERVER['REMOTE_ADDR'];
	
	$date = date('Y-m-d H:i:s');


    //считаем хэш в бинарном
    $binhash = '1' . $time . $screen . $useragent . $font . $fingeplugin;
    //считаем в хексе
    $hexhash = convBase($binhash, '01', '0123456789ABCDEF');
    //заносим все в основную базу big_base
    sqlite_query($db, "INSERT INTO big_base(date, plugins, fonts, useragent, ip, screen, timezone, summ_hash, hex, cookie) VALUES('{$date}', '{$fingeplugin}', '{$font}', '{$useragent}', '{$ip}', '{$screen}', '{$time}', '{$binhash}', '{$hexhash}', '{$_COOKIE['lolipop']}');");

    echo "Ваш цифровой отпечаток: " . $hexhash;
    echo "<br> Ваш ip: " . $ip;
?>