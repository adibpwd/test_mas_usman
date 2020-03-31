<?php

$curl = curl_init();
curl_setopt($curl, CURLOPT_URL, 'https://api.kawalcorona.com/indonesia/');
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
$result = curl_exec($curl); 
curl_close();
$result = json_decode($result, true);

$curl1 = curl_init();
curl_setopt($curl1, CURLOPT_URL, 'https://api.kawalcorona.com/indonesia/provinsi/');
curl_setopt($curl1, CURLOPT_RETURNTRANSFER, true);
$result1 = curl_exec($curl1); 
curl_close();
$result1 = json_decode($result1, true);

// var_dump($result1); die;

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="assets/style.css">
    <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet"> 
    <title>corona</title>
    <link rel="stylesheet" href="https://unpkg.com/@coreui/coreui@3.0.0-rc.0/dist/css/coreui.min.css">
</head>
<body>



    <div class="container mt-5">
    
    <div class="row">

  <div class="col-sm-6 col-lg-4">
    <div class="card" style="max-width: 18rem;">
      <div class="card-header bg-danger content-center">
      <i class="text-white"><b id="status">Meninggal<i class="fas fa-dizzy ml-4" style="color: yellow; font-size: 30px;"></i></b></i>
      </div>
      <div class="card-body row text-center">
        <div class="col">
          <div class="text-value-xl"><?= $result[0]['meninggal'] ?></div>
        </div>
      </div>
    </div>
  </div>

  <div class="col-sm-6 col-lg-4">
    <div class="card" style="max-width: 18rem;">
      <div class="card-header bg-warning content-center">
      <i class="text-white"><b id="status">Positif<i class="fas fa-sad-tear ml-4" style="color: yellow; font-size: 30px;"></i></b></i>
      </div>
      <div class="card-body row text-center">
        <div class="col">
          <div class="text-value-xl"><?= $result[0]['positif'] ?></div>
        </div>
      </div>
    </div>
  </div>


  <div class="col-sm-6 col-lg-4">
    <div class="card" style="max-width: 18rem;">
      <div class="card-header bg-success content-center">
      <i class="text-white"><b id="status">Sembuh<i class="fas fa-smile-wink ml-4" style="color: yellow; font-size: 30px;"></i></b></i>
      </div>
      <div class="card-body row text-center">
        <div class="col">
          <div class="text-value-xl"><?= $result[0]['sembuh'] ?></div>
        </div>
      </div>
    </div>
  </div>
  </div>

    </div>

  <div class="container mt-5">
    <div class="scroll">
      <table class="table table-hover">
        <thead>
          <tr style=" position: sticky; top: 0;">
            <th scope="col" class="bg-info">#</th>
            <th scope="col" class="bg-primary">Provinsi</th>
            <th scope="col" class="bg-danger">Meninggal</th>
            <th scope="col" class="bg-warning">Positif</th>
            <th scope="col" class="bg-success">Sembuh</th>
          </tr>
        </thead>
        <tbody>
        <?php 
        $no = 1;
        $virus = [];
        foreach($result1 as $data) { 
          $virus = $data['attributes'];  ?>
          <tr>
            <th scope="row"><?= $no++ ?></th>
            <td><?= $virus['Provinsi'] ?></td>
            <td><?= $virus['Kasus_Meni'] ?></td>
            <td><?= $virus['Kasus_Posi'] ?></td>
            <td><?= $virus['Kasus_Semb'] ?></td>
          </tr>
        <?php } ?>
        </tbody>
      </table>
    </div>
  </div>  

    <script src="https://kit.fontawesome.com/bd2a7f64b3.js" crossorigin="anonymous"></script>
    <script src="https://unpkg.com/@coreui/coreui@3.0.0-rc.0/dist/js/coreui.min.js"></script>
</body>
</html>