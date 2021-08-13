<?php

$con=mysqli_connect("projects.lithan.net","IN0719A12I","7NrT74MGe","in0719a12i");
if (!$con)
  {
  die('Could not connect: ' . mysqli_error());
  }
  if(isset($_POST['firstname']))$fname = $_POST['firstname'];
$lname= $_POST['lastname']; 
$address= $_POST['address']; 
$email=$_POST['email'];
$password= sha1($_POST['password']); 

$email = filter_var($email, FILTER_SANITIZE_EMAIL); 
$result = mysqli_query($con,"INSERT INTO registeration(FirstName, LastName, Email, Address, Password) values ('$fname', '$lname', '$email', '$address', '$password')");

if($result){

  
}
echo '<div>Thank you .....'.$fname . '</div>';
mysqli_close ($con);
?>