<?php

$data = [
    [1, 3, 5],
    [2, 1, 6],
    [4, 0, 7],
    [0, 3, 6],
    [0, 3, 4],
    [1, 5, 3]
];

$result = [];

echo 'before sort <br> <br>';

$num = 0;
while( $num < count($data) ) {
    print_r(implode('.',$data[$num]));
    echo '<br>';
    $num++;
}


$no = 0;
while( $no < count($data) ) {
    $minData = min($data);
    array_push($result, $minData);
    $indexData = array_search($minData, $data);
    array_splice($data, $indexData, 1);
}

echo '<br> after sort <br> <br>';

$num = 0;
while( $num < count($result) ) {
    print_r(implode('.',$result[$num]));
    echo '<br>';
    $num++;
}

?>



