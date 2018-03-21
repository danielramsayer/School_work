<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
<title>Daniel Rams MD5 Cracker</title></head>
<body>
<h1>MD5 cracker</h1>
<p>This application takes an MD5 hash of a four digit pin and check all 10,000 possible four digit PINs to determine the PIN.</p>
<pre>
Debug Output:
<?php
$goodtext = "Not found";
// If there is no parameter, this code is all skipped
if ( isset($_GET['md5']) ) {
    $time_pre = microtime(true);
    $md5 = $_GET['md5'];
    $total_checks = 0;
    $num_to_check = "0000";
    $pin = 1;
    while ($pin == 1 && $total_checks < 10000) {
      $check = hash('md5', $num_to_check);
      $total_checks += 1;
      if ($check == $md5) {
        //Awesome!
        $goodtext = $num_to_check;
        $pin += 1;
      } else {
        if (strlen($total_checks) < 2) {
          $num_to_check = "000".$total_checks;
          //print $num_to_check." \n";
        } elseif (strlen($total_checks) < 3) {
          $num_to_check = "00".$total_checks;
          //print $num_to_check." \n";
        } elseif (strlen($total_checks) < 4) {
          $num_to_check = "0".$total_checks;
          //print "Hit's this \n";
        } elseif (strlen($total_checks) <= 4){
          $num_to_check = $total_checks;
          //print "hits this \n";
        }
        //print "Triggers \n".$num_to_check;
      }
    }
    print $md5." ".$goodtext."\n";
    // Compute elapsed time
    $time_pre = 0;
    $time_post = microtime(true);
    print "Elapsed time: ";
    print $time_post-$time_pre." microseconds";
    print "\n";
  }
?>
</pre>
<!-- Use the very short syntax and call htmlentities() -->
<p>Pin: <?= htmlentities($goodtext); ?></p>
<form>
<input type="text" name="md5" size="60" />
<input type="submit" value="Crack MD5"/>
</form>
<ul>
<li><a href="index.php">Reset</a></li>
<li><a href="md5.php">MD5 Encoder</a></li>
<li><a href="makecode.php">MD5 Code Maker</a></li>
<li><a
href="https://www.wa4e.com/assn/crack/"
target="_blank">Specification for this assignment</a></li>
</ul>
<li><a
href="https://github.com/csev/wa4e/tree/master/code/crack"
target="_blank">Source code for this application</a></li>
</ul>
</body>
</html>
