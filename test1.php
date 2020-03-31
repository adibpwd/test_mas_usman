<?php
      $conn = mysqli_connect('localhost', 'root', 'sarirejo1', 'test_mas_usman');

      $absen = mysqli_query($conn, 'select tanggal, nama, pin from absen where mesin like "%in"');
      $mjIn = mysqli_query($conn, 'select mesin, jam from absen where mesin like "%in" ');
      $mjOut = mysqli_query($conn, 'select mesin, jam from absen where mesin like "%out" ');

      $in1 = [];
      $out1 = [];
 
      while($in = mysqli_fetch_array($mjIn)) {
        array_push($in1, $in);
      }

      while($out = mysqli_fetch_array($mjOut)) {
        array_push( $out1, $out);
      }
 
      
      
      ?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>test mas usman</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    </head>
    <body>
        <br><br>
    <div class="container">
    <table class="table">
    <thead class="thead-dark">
        <tr>
        <th scope="col">NO</th>
        <th scope="col">TANGGAL</th>
        <th scope="col">PIN</th>
        <th scope="col">NAMA</th>
        <th scope="col">JAM IN</th>
        <th scope="col">JAM OUT</th>
        <th scope="col">MESIN IN</th>
        <th scope="col">MESIN OUT</th>
        </tr>
    </thead>
    <tbody>
      <?php
      $n = 0;
      $no = 1;
      while($a = mysqli_fetch_array($absen)) { ?>
        <tr>
             <th scope="row"><?= $no++ ?></th>
             <td><?= $a['tanggal'] ?></td>
             <td><?= $a['pin'] ?></td>
             <td><?= $a['nama'] ?></td>
             <td><?= $in1[$n]['jam'] ?></td>
             <td><?= $out1[$n]['jam'] ?></td>
             <td><?= $in1[$n]['mesin'] ?></td>
             <td><?= $out1[$n]['mesin'] ?></td>
            </tr> <?php  $n++; 
      } ?>
    </tbody>
    </table>
</div>

  <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script> 
</body>
</html>        
