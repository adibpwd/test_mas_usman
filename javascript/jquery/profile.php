<?php 

require '../app/conn.php';

$desa = mysqli_query($conn, 'select * from dusun');

foreach($desa as $ds) {
    echo '<br>name : ' . $ds['nama'];
}