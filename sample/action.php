<?php
    echo "Parameters:<br/>";
    foreach (array_keys($_POST) as $key)
    { 
        print "<b>$key</b> -> " . htmlentities($_POST[$key]) . "<br/>";
    }
    
    foreach (array_keys($_GET) as $key)
    {
        print "<b>$key</b> -> " . htmlentities($_GET[$key]) . "<br/>";
    }
?>