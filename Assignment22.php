<?php
$ename=$_REQUEST['name'];
$eaddress=$_REQUEST['address'];
$emob=$_REQUEST['mobile_no'];

$conn=mysqli_connect('localhost','root','','emp');
if(!$conn)
{
    echo"Error";
}
else{
    echo "connection done";
    $sql="INSERT INTO emp_details(eid,ename,eaddress,emob)VALUES('','$ename','$eaddress','$emob')";
   $result=mysqli_query($conn,$sql);
   if(!$result)
   {
    echo"ERROE";
   }
   else{
    echo"data Inserted";
   }

}
?>

