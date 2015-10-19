<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="ru" lang="ru">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=windows-1251" />
<style>
table.t1 {
    margin: 1em auto;
    border-collapse: collapse;
    font-family: Arial, Helvetica, sans-serif;
  }
  .t1 th, .t1 td {
    padding: 4px 8px;
  }
  .t1 thead th {
    background: #4f81bd;
    text-transform: lowercase;
    text-align: left;
    font-size: 15px;
    color: #fff;
  }
  .t1 tr {
    border-right: 1px solid #95b3d7;
  }
  .t1 tbody tr {
    border-bottom: 1px solid #95b3d7;
  }
  .t1 tbody tr:nth-child(odd) {
    background: #dbe5f0;
  }
  .t1 tbody th, .t1 tbody tr:nth-child(even) td {
    border-right: 1px solid #95b3d7;
  }
  .t1 tfoot th {
    background: #4f81bd;
    text-align: left;
    font-weight: normal;
    font-size: 10px;
    color: #fff;
  }
  .t1 tr *:nth-child(3), .t1 tr *:nth-child(4) {
    text-align: right;
  }
</style>
</head>
<body>

<table class="t1">
<tr><th>Введите ip</th><th>Введите cookie</th><th>Введите hash</th></tr>
 <tr>
 <td>
 <form action="table_search.php" method="post">
 <p>Enter ip: <input type="text" name="ip" /></p>
 <p><input type="submit" /></p>
</form>
 </td>
  <td>
 <form action="table_search.php" method="post">
 <p>Enter cookie: <input type="text" name="cookie" /></p>
 <p><input type="submit" /></p>
</form>
 </td>
  <td>
 <form action="table_search.php" method="post">
 <p>Enter hash: <input type="text" name="hash" /></p>
 <p><input type="submit" /></p>
</form>
 </td>
</tr>
</table>

 <?php
 $db = sqlite_open("fingerprints.db"); 
	
	// количество записей, выводимых на странице
$per_page=50;
// получаем номер страницы
if (isset($_GET['page'])) $page=($_GET['page']-1); else $page=0;
// вычисляем первый оператор для LIMIT
$start=abs($page*$per_page);
// составляем запрос и выводим записи
// переменную $start используем, как нумератор записей.
	

    // выбираем все значения из таблицы
    $qr_result = sqlite_query($db, "SELECT * FROM big_base ORDER BY id DESC LIMIT $start,$per_page");

    // выводим на страницу сайта заголовки HTML-таблицы
    echo '<table class="t1">';
	echo '<thead>';
	echo '<tr>';
	echo '<th>Id</th>';
	echo '<th>Дата-время</th>';
	echo '<th>Ip</th>';
	echo '<th>Cookie</th>';
	echo '<th>Плагины</th>';
	echo '<th>Useragent</th>';
	echo '<th>Экран</th>';
	echo '<th>Часовой пояс</th>';
	echo '<th>Шрифты</th>';
	echo '<th>Отпечаток в бинарном виде</th>';
    echo '<th>Отпечаток в конечном виде</th>';
	echo '</tr>';
	echo '</thead>';
	echo '<tbody>';
	
   // выводим в HTML-таблицу все данные клиентов из таблицы sqlite 
	while($data = sqlite_fetch_array($qr_result)){ 
		echo '<tr>';
		echo '<td>' . $data['id'] . '</td>';
		echo '<td>' . $data['date'] . '</td>';
		echo '<td>' . $data['ip'] . '</td>';
		echo '<td>' . $data['cookie'] . '</td>';
		echo '<td>' . $data['plugins'] . '</td>';
		echo '<td>' . $data['useragent'] . '</td>';
		echo '<td>' . $data['screen'] . '</td>';
		echo '<td>' . $data['timezone'] . '</td>';
		echo '<td>' . $data['fonts'] . '</td>';
		echo '<td>' . $data['summ_hash'] . '</td>';
		echo '<td>' . $data['hex'] . '</td>';
		echo '</tr>';
	}
	
    echo '</tbody>';
	echo '</table>';

	
$res=sqlite_query($db, "SELECT count(*) FROM big_base");
$row=sqlite_fetch_array($res);
$total_rows=$row[0];

$num_pages=ceil($total_rows/$per_page);

for($i=1;$i<=$num_pages;$i++) {
  if ($i-1 == $page) {
    echo $i." ";
  } else {
    echo '<a href="'.$_SERVER['PHP_SELF'].'?page='.$i.'">'.$i."</a> ";
  }
}
	
	?>
 
</body>
</html>