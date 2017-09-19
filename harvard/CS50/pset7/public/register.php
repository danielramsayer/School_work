<?php

    //configuration 
    require("../includes/config.php");
    
    //else if user reached page via POST (as by submitting a form via POST)
    if ($_SERVER["REQUEST_METHOD"] == "POST")
    {
        if (empty($_POST["username"]))
        {
            apologize("Please input a USERNAME to continue.");
        }
        else if (empty($_POST["password"])) 
        {
            apologize("Please input a PASSWORD to continue.");
        }
        else if ($_POST["password"] != $_POST["confirmation"])
        {
            apologize("These two passwords do not match! Please recheck.");
        }
        
        // query database for user
        $rows = CS50::query("SELECT * FROM users WHERE username = ?", $_POST["username"]);
        
        // if we found user, there is an issue (ie, red flag)
        if (count($rows) == 1)
        {
            apologize("This account is already registered, please log in.");
        }
        else
        {
            //Register the new user:
            CS50::query("INSERT IGNORE INTO users (username, hash, cash) VALUES(?, ?, 10000.0000)", $_POST["username"], password_hash($_POST["password"], PASSWORD_DEFAULT));
            
            if ($query === false)
            {
                apologize("Could not create user.");
            }
            else
            {
                $rows = CS50::query("SELECT LAST_INSERT_ID() AS id");
                $id = $rows[0]["id"];
                
                if (count($rows) == 1)
                {
                    // remember that user's now logged in by storing user's ID in session
                    $_SESSION["id"] = $row["id"];

                    // redirect to portfolio
                    redirect("/");
                }
            }
        }
    }
    else
    {
        //else render form
        render("register_form.php", ["title" => "Register"]);
    }

?>        