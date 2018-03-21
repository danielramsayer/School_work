<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
<title>Daniel Rams MD5 PIN Maker</title></head>
<body>
<h1>MD5 PIN Maker</h1>
<p>This application translates a 4 pin code into an MD5 hash.</p>
<pre>
<?php
  $goodtext = "Not found";
  $md5 = "Not found";
  if ( isset($_GET['md5']) ) {
    $md5 = $_GET['md5'];
    if (strlen($md5) == 4 && is_numeric($md5)) {
      $goodtext = hash('md5', $md5);
    } else {
      $goodtext = "Please enter a 4 digit integer";
    }
  }

?>
</pre>
<!-- Use the very short syntax and call htmlentities() -->
<p>Pin: <?= htmlentities($md5." MD5: ".$goodtext);?></p>
<form>
<input type="text" name="md5" size="60" />
<input type="submit" value="Crack MD5"/>
</form>
<ul>
<li><a href="md5.php">Reset</a></li>
<li><a href="index.php">Back to Cracking</a></li>
<li><a
href="https://github.com/csev/wa4e/tree/master/code/crack"
target="_blank">Source code for this application</a></li>
</ul>
</body>
</html>
