<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Daniel Rams PHP</title>
</head>
<body>
  <h1>Daniel Rams</h1>
  <?php
    $hashery = hash('sha256', 'Daniel Rams');
    print "The hash value of Daniel Rams is $hashery";
  ?>
  <p><pre>ASCII ART:

    *********
    **       *
    **       *
    **       *
    **       *
    **       *
    *********

  </pre></p>
<a href="check.php">Click here to check the error setting</a>
<p></p>
<a href="fail.php">Click here to cause a traceback</a>
</body>
</html>
