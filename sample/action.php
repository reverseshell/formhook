<?php
    echo "Parameters:<br/>";
    foreach (array_keys($_POST) as $key)
    { 
        print "<b>$key</b> -> " . htmlentities($_POST[$key], ENT_QUOTES) . "<br/>";
    }
    
    foreach (array_keys($_GET) as $key)
    {
        print "<b>$key</b> -> " . htmlentities($_GET[$key], ENT_QUOTES) . "<br/>";
    }
?>
