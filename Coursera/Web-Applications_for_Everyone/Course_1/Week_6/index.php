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
    $md5_to_check = $md5;
    $num_to_check = '0000';
    $pin = false;
    while ($pin) {
      $iterable = int($num_to_check);
      $check = hash('md5', $num_to_check);
      if ($check === $md5_to_check) {
        //Awesome
        global (string)$num_to_check = (int)$num_to_check++;
        global $goodtext = $num_to_check;
        global $pin = true;
        break;
      } else {

      }



/*
        $ch1 = $txt[$i];   // The first of two characters
        // Our inner loop Not the use of new variables
        // $j and $ch2
        for($j=0; $j<strlen($txt); $j++ ) {
            $ch2 = $txt[$j];  // Our second character
            // Concatenate the two characters together to
            // form the "possible" pre-hash text
            $try = $ch1.$ch2;
            // Run the hash and then check to see if we match
            $check = hash('md5', $try);
            if ( $check == $md5 ) {
                $goodtext = $try;
                break;   // Exit the inner loop
            }
            // Debug output until $show hits 0
            if ( $show > 0 ) {
                print "$check $try\n";
                $show = $show - 1;
            }
        }
    }*/
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
<p>Original Text: <?= htmlentities($goodtext); ?></p>
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
