<?php
error_reporting(0);
$host =  "localhost";
$user = "root";
$pass = "";
$db = "bikeservice";


$koneksi = mysqli_connect($host, $user, $pass, $db);

$op = $_GET['op'];
switch($op){
    case '':normal();break;
    default:normal();break;
    case 'create':create();break;
    case 'detail':detail();break;
    case 'update':update();break;
    case 'delete':delete();break;
    case 'createCost':createCost();break;
    case 'detailCost':detailCost();break;
    case 'updateCost':updateCost();break;
    case 'deleteCost':deleteCost();break;
    case 'readCost':readCost();break;
}

function normal(){
    global $koneksi;
    $sql1 = "SELECT * FROM user ORDER BY id DESC";

    $q1 = mysqli_query($koneksi, $sql1);
    while($r1 = mysqli_fetch_array($q1)){
        $hasil[] = array(
            'id' => $r1['id'],
            'nama' => $r1['nama'],
            'merek' => $r1['merek'],
            'mesin' => $r1['mesin'],
            'tanggal' => $r1['tanggal'],
            'rerata' => $r1['rerata']
        );
    }
    $data['data']['result'] = $hasil;
    echo json_encode($data);
}
function readCost(){
    global $koneksi;
    $sql1 = "SELECT * FROM cost ORDER BY id DESC";

    $q1 = mysqli_query($koneksi, $sql1);
    while($r1 = mysqli_fetch_array($q1)){
        $hasil[] = array(
            'id' => $r1['id'],
            'idUser' => $r1['idUser'],
            'nama' => $r1['nama'],
            'harga' => $r1['harga'],
        );
    }
    $data['data']['result'] = $hasil;
    echo json_encode($data);
}
function create(){
    global $koneksi;
    $nama = $_POST['nama'];
    $merek = $_POST['merek'];
    $mesin = $_POST['mesin'];
    $tanggal = $_POST['tanggal'];
    $rerata = $_POST['rerata'];
    $hasil = "gagal masukkan data";
    if($nama and $merek ){
        $sql1 = "INSERT INTO user(nama, merek, mesin, tanggal, rerata) VALUES ('$nama', '$merek', '$mesin', '$tanggal', '$rerata')";
        $q1 = mysqli_query($koneksi, $sql1);
        if($q1){
            $hasil = 'Berhasil Menambahkan Data';
        }
    }
    $data['data']['result']= $hasil;
    echo json_encode($data);
}

function detail(){
    global $koneksi;
    $id = $_GET['id'];
    $sql1 = "SELECT * FROM user WHERE id = '$id'";
    $q1 = mysqli_query($koneksi, $sql1);
    while($r1 = mysqli_fetch_array($q1)){
        $hasil[] = array(
            'id' => $r1['id'],
            'nama' => $r1['nama'],
            'merek' => $r1['merek'],
            'mesin' => $r1['mesin'],
            'tanggal' => $r1['tanggal'],
            'rerata' => $r1['rerata']
        );
    }
    $data['data']['result'] = $hasil;
    echo json_encode($data);

}
function update(){
    global $koneksi;
    $id = $_GET['id'];
    $nama = $_POST['nama'];
    $merek = $_POST['merek'];
    $mesin = $_POST['mesin'];
    $tanggal = $_POST['tanggal'];
    $rerata = $_POST['rerata'];
    if($nama){
        $set[] = "nama='$nama'";
    }
    if($merek){
        $set[] = "merek='$merek'";

    }
    if($mesin){
        $set[] = "mesin='$mesin'";

    }
    if($tanggal){
        $set[] = "tanggal='$tanggal'";

    }if($rerata){
        $set[] = "rerata='$rerata'";

    }
    $hasil = "Gagal Update Data";
    if($nama or $merek or $mesin or $tanggal or $rerata ){
        $sql1 = "UPDATE user SET ".implode(",", $set)."WHERE id = '$id'";
        $q1 = mysqli_query($koneksi, $sql1);
        if($q1){
            $hasil = "Data Berhasil diUpdate";

        }
    }
    $data['data']['result']= $hasil;
    echo json_encode($data);
}

function delete(){
    global $koneksi;
    $id = $_GET['id'];
    $sql1 = "DELETE FROM user WHERE id = '$id'";
    $q1 = mysqli_query($koneksi, $sql1);
    if($q1){
        $hasil = "Berhasil Hapus Data";
    }else{
        $hasil = "Gagal Hapus Data";
    }
    $data['data']['result']= $hasil;
    echo json_encode($data);
}

function createCost(){
    global $koneksi;
    $id = $_GET['id'];
    $nama = $_POST['nama'];
    $harga = $_POST['harga'];
    $hasil = "gagal masukkan data";
    if($nama){
        $sql1 = "INSERT INTO cost(idUser, nama, harga) VALUES ('$id','$nama', '$harga')";
        $q1 = mysqli_query($koneksi, $sql1);
        if($q1){
            $hasil = 'Berhasil Menambahkan Data';
        }
    }
    $data['data']['result']= $hasil;
    echo json_encode($data);
}

function detailCost(){
    global $koneksi;
    $id = $_GET['id'];
    $sql1 = "SELECT * FROM cost WHERE id = '$id'";
    $q1 = mysqli_query($koneksi, $sql1);
    while($r1 = mysqli_fetch_array($q1)){
        $hasil[] = array(
            'id' => $r1['id'],
            'nama' => $r1['nama'],
            'harga' => $r1['harga'],
        );
    }
    $data['data']['result'] = $hasil;
    echo json_encode($data);

}
function updateCost(){
    global $koneksi;
    $id = $_GET['id'];
    $nama = $_POST['nama'];
    $harga = $_POST['harga'];
    if($nama){
        $set[] = "nama='$nama'";
    }
    if($harga){
        $set[] = "harga='$harga'";

    }
    
    $hasil = "Gagal Update Data";
    if($nama or $harga ){
        $sql1 = "UPDATE cost SET ".implode(",", $set)."WHERE id = '$id'";
        $q1 = mysqli_query($koneksi, $sql1);
        if($q1){
            $hasil = "Data Berhasil diUpdate";

        }
    }
    $data['data']['result']= $hasil;
    echo json_encode($data);
}

function deleteCost(){
    global $koneksi;
    $id = $_GET['id'];
    $sql1 = "DELETE FROM cost WHERE id = '$id'";
    $q1 = mysqli_query($koneksi, $sql1);
    if($q1){
        $hasil = "Berhasil Hapus Data";
    }else{
        $hasil = "Gagal Hapus Data";
    }
    $data['data']['result']= $hasil;
    echo json_encode($data);
}
?>